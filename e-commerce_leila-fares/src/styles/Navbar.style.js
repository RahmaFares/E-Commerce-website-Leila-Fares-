import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 60px;
    background-color: black;
    display: flex;
    flex-direction: column;
`
export const Left = styled.div`
flex: 55%; //to have common size for left, center and right
display: flex;
float: left;
padding-left: 50px;
`

export const Right = styled.div`
flex: 45%; //to have common size for left, center and right
display: flex;
align-items: center;
padding-right: 5%;
`
export const NavInnerContainer = styled.div`
width: 100%; 
height: 60px;
display: flex;
`
export const NavExtendedContainer = styled.div`
display: flex;
`
export const NavbarLinkContainer = styled.div`
display: flex;
`
//links to navigate to in the navbar like home, news, etc... 
export const NavbarLink = styled(Link)` 
font-size: large; 
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
text-decoration: none;
margin: 11px;
color: #AD8047;
`

export const Logo = styled.img`
max-width: 180px;
height: auto;
`