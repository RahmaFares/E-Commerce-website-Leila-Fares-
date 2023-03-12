import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 65px;
    background-color: black;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex; //horizontal
    justify-content: space-between; // to create spaces between left, center and right sides 
`
const Left = styled.div`
flex: 1; //to have common size for left, center and right
`
const Center = styled.div`flex: 1; //to have common size for left, center and right
`
const Right = styled.div`flex: 1; //to have common size for left, center and right
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>

                </Left>
            </Wrapper>
        </Container>
    )
}

export default Navbar
