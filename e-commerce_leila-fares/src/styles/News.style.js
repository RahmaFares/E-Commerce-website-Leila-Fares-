import styled from 'styled-components';
import bgphoto from '../assets/images/bgphoto.jpg'

export const NewsContainer = styled.div`
  background-image: url(${bgphoto});
  background-size: cover;
  background-position: center;
`;

export const Heading = styled.h1`
  color: white;
  text-align: center;
`;

export const VideoContainer = styled.div`
  background-color: none;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const VideoDescription = styled.p`
  font-size: 16px;
`;


