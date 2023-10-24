import React, { useState } from "react";
import { MainContainer, RegisterContainer, Form, Input, Wrapper, Title, Agreement, Button } from '../styles/Register.style';
import { LoginContainer, LoginWrapper, Link, LoginForm, LoginInput } from '../styles/Login.style';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { register, login } from "../redux/apiCalls";
import { toast } from 'react-toastify';

const Error = styled.span`
  color: red;
`;

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return passwordRegex.test(password);
};

const isValidUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    return usernameRegex.test(username);
};

const Register = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);  // New state for admin login

    const handleToggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!isValidUsername(username)) {
            toast.error("Invalid username!");
            return;
        }

        if (!isLogin && !isValidEmail(email)) {
            toast.error("Invalid email address!");
            return;
        }

        if (!isValidPassword(password)) {
            toast.error("Invalid password!");
            return;
        }

        if (isLogin) {
            dispatch(login({ username, password, isAdmin }));
        } else {
            dispatch(register({ username, email, password }));
        }
    };

    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    return (
        <div>
            <MainContainer>
                {isLogin ? (
                    <LoginContainer>
                        <LoginWrapper>
                            <Title>LOGIN</Title>
                            <LoginForm onSubmit={handleFormSubmit}>
                                <LoginInput placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)} />
                                <LoginInput placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <input type="checkbox" onChange={() => setIsAdmin(!isAdmin)} /> Login as Admin {/* Checkbox for admin login */}
                                <Button>LOGIN</Button>
                                <Link>Forgot Password</Link>
                                <Link onClick={handleToggleForm}>DO NOT HAVE AN ACCOUNT?</Link>
                            </LoginForm>
                        </LoginWrapper>
                    </LoginContainer>
                ) : (
                    <RegisterContainer>
                        <Wrapper>
                            <Title>CREATE AN ACCOUNT</Title>
                            <Form onSubmit={handleFormSubmit}>
                                <Input
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                                <Input
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                    placeholder="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Agreement>
                                    By creating an account, I consent to the processing of my personal
                                    data in accordance with the <b>PRIVACY POLICY</b>
                                </Agreement>
                                <Button type="submit" disabled={isFetching}>
                                    CREATE
                                </Button>
                            </Form>
                        </Wrapper>
                    </RegisterContainer>
                )}
            </MainContainer>
        </div>
    );
};

export default Register;
