import React from 'react'
import { NavbarContainer, Logo, Wrapper, NavExtendedContainer, NavInnerContainer, Left, Right, Img_Container, Img, NavbarLinkContainer, NavbarLink } from '../styles/Navbar.style'
import logo from '../assets/images/logo.jpg'
function Navbar() {
    return (
        <NavbarContainer>
            <NavInnerContainer>
                <Left>
                    <Logo src={logo}></Logo>
                </Left>
                <Right>
                    <NavbarLinkContainer>
                        <NavbarLink to="/"> HOME </NavbarLink>
                        <NavbarLink to="/dresses"> DRESSES </NavbarLink>
                        <NavbarLink to="/newCollection"> NEW COLLECTION </NavbarLink>
                        <NavbarLink to="/news"> NEWS </NavbarLink>
                        <NavbarLink to="/contact"> CONTACT US </NavbarLink>
                    </NavbarLinkContainer>
                </Right>
            </NavInnerContainer>
            <NavExtendedContainer></NavExtendedContainer>
        </NavbarContainer>
    )
}

export default Navbar
