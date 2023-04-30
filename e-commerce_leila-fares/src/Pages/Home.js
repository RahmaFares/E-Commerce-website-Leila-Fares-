import React from 'react';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import video from '../assets/images/vid.mp4'
import slider1 from '../assets/images/grid.jpg'
import slider2 from '../assets/images/grid2.jpg'

export const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
        </HomeContainer>
    );
};

export default Home;
