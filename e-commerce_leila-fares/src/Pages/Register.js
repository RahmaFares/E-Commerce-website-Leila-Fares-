import React, { useState } from "react";
import { MainContainer, RegisterContainer, Form, Input, Wrapper, Title, Agreement, Button } from '../styles/Register.style';
import { LoginContainer, LoginWrapper, Link, LoginForm, LoginInput } from '../styles/Login.style'

const Register = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleToggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // TODO: handle form submit based on isLogin value
    };
    return (
        <div>
            <MainContainer>
                {isLogin ? (
                    <LoginContainer>
                        <LoginWrapper>
                            <Title>LOGIN</Title>
                            <LoginForm onSubmit={handleFormSubmit}>
                                <LoginInput placeholder="Username " />
                                <LoginInput placeholder="Password " />
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
                            <Form>
                                <Input placeholder="First Name" />
                                <Input placeholder="Last Name" />
                                <Input placeholder="Username" />
                                <Input placeholder="Email" />
                                <Input placeholder="Password" />
                                <Input placeholder="Confirm Password" />
                                <Agreement>
                                    By creating an account, I consent to the processing of my personal
                                    data in accordance with the <b>PRIVACY POLICY</b>
                                </Agreement>
                                <Button>CREATE</Button>
                            </Form>
                        </Wrapper>

                    </RegisterContainer>
                )}
            </MainContainer>
        </div>
    )
}

export default Register
