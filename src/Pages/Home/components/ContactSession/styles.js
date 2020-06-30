import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const WrapperContent = styled.div`
  margin: 122px 20px;
  width: 90%;
  max-width: 965px;
`;

export const Subtitle = styled.p`
  font-size: 23px;
  font-weight: 800;
  color: #6d6d6d;
  text-align: center;
`;

export const Title = styled.p`
  font-size: 50px;
  font-weight: 900;
  color: #6d6d6d;
  text-align: center;
  margin-bottom: 96px;
`;

export const WrapperInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input.attrs({ type: 'text' })`
  width: 100%;
  height: ${props => (props.message ? '268px' : '67px')};
  border: 2px solid #249c81;
  padding: 20px;
  font-size: 24px;
  font-weight: 900;
  color: #249c81;

  ::placeholder {
    font-size: 24px;
    font-weight: 600;
    color: #249c81;
  }
`;

export const MessageInput = styled.textarea.attrs({ type: 'text' })`
  width: 100%;
  height: 268px;
  border: 2px solid #249c81;
  padding: 20px;
  font-size: 24px;
  font-weight: 900;
  color: #249c81;
  font-family: 'Open Sans';
  resize: vertical;

  ::placeholder {
    font-size: 24px;
    font-weight: 700;
    color: #249c81;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: 67px;
  margin-top: 50px;
  background-color: #ff2f67;
  font-size: 24px;
  font-weight: 600;
  color: #f6f8f7;
  cursor: pointer;
`;

export const FooterImage = styled.img`
  width: 100%;
  object-fit: contain;
`;