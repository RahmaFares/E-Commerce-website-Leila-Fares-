import React from 'react';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import video from '../assets/images/vid.mp4'
import slider1 from '../assets/images/grid.jpg'
import slider2 from '../assets/images/grid2.jpg'
import wedding from '../assets/images/wedding.jpg'
import soiree from '../assets/images/soiree.jpg'
import newcoll from '../assets/images/newcoll.jpg'
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const EmptySpace = styled.div`
  height: 150px;
`;

const ContainersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  margin: 10px;
  text-align: center;
`;

const ContainerLink = styled.a`
  text-decoration: none;
  color: #000;
`;

const ContainerImage = styled.img`
  max-width: 100%;
`;

const ContainerTitle = styled.h2`
  font-size: 20px;
  margin-top: 10px;
`;


const Home = () => {
    const slides = [
        {
            type: 'video',
            src: video,
        },
        {
            type: 'image',
            src: slider1,
            style: {
                objectFit: 'cover',
                height: '100%',
                width: '100%',
            },
        },
        {
            type: 'image',
            src: slider2,
            style: {
                objectFit: 'cover',
                height: '100%',
                width: '100%',
            },
        },
    ];

    return (
        <HomeContainer>
            <Carousel slides={slides} />

            <EmptySpace />

            <ContainersWrapper>
                <Container>
                    <ContainerLink href="/newCollection">
                        <ContainerImage src={newcoll} alt="New Collection" />
                        <ContainerTitle>New Collection</ContainerTitle>
                    </ContainerLink>
                </Container>

                <Container>
                    <ContainerLink href="/dresses">
                        <ContainerImage src={soiree} alt="Wedding Dresses" />
                        <ContainerTitle>Wedding Dresses</ContainerTitle>
                    </ContainerLink>
                </Container>

                <Container>
                    <ContainerLink href="/dresses">
                        <ContainerImage src={soiree} alt="Soiree Dresses" />
                        <ContainerTitle>Soiree Dresses</ContainerTitle>
                    </ContainerLink>
                </Container>
            </ContainersWrapper>
            <EmptySpace />

        </HomeContainer>
    );
};

export default Home;
