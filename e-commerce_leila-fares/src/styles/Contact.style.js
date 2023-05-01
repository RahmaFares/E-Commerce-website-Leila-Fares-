import styled from 'styled-components';
import bgphoto from '../assets/images/bgphoto.jpg'

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image:  url(${bgphoto});
`;

export const GetInTouch = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  & > p {
    margin-bottom: 0.5rem;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #fff;
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #fff;
  resize: none;
  height: 10rem;
`;