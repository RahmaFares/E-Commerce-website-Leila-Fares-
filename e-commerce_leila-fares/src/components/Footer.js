import React from "react";  
import styled from "styled-components";
import whiteLogo from '../assets/images/whiteLogo.png'

import {FooterContainer,LogoContainer,WhiteLogo, AboutUsContainer, ContactUsSocialIcons, AboutUsText , FooterLink, UsefulLinksContainer,UsefulLinksText, ContactUsContainer, ContactLink, ContactUsText, SocialIcon} from "../styles/Footer.style"
const Footer = () => {
    return (
    <FooterContainer> 
        <LogoContainer>
          <WhiteLogo src={whiteLogo} alt="Logo" />
        </LogoContainer>
        <AboutUsContainer>
        <AboutUsText>About Us</AboutUsText>
        <br />
          <p> Leila fares, a girl in her 20s who managed to be a very successful fashion designer in a short time and has 3 branches in Egypt is willing to share this website to help customers order their perfect dresses from their homes. </p>
        </AboutUsContainer>
        
        <UsefulLinksContainer>
          <UsefulLinksText>Useful Links</UsefulLinksText>

           <FooterLink to="/home"> HOME </FooterLink>
           <FooterLink to="/dresses"> DRESSES </FooterLink>
           <FooterLink to="/newCollection"> NEW COLLECTION </FooterLink>
           <FooterLink to="/news"> NEWS </FooterLink>
           <FooterLink to="/contact"> CONTACT US </FooterLink>
        </UsefulLinksContainer>
        <ContactUsContainer>
          <ContactUsText>Contact Us</ContactUsText>
          <br />
          <p>5th settlement, Cairo</p>
          <p>Tarh Al-Bahr street, PortSaid, Egypt</p>
          <p>Al-Rehab Mall 1st Floor, Cairo</p>
          <p>123-456-7890</p>
          <br/>
          <ContactUsSocialIcons>
            <a href="https://www.facebook.com/leilaafares">
                <SocialIcon src="facebook.png" alt="Facebook" />
            </a>
            
           </ContactUsSocialIcons>
        </ContactUsContainer>
    </FooterContainer>
    );
  };
  
  export default Footer;