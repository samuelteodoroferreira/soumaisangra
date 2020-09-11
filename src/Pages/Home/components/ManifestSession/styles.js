import styled from 'styled-components';
// import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-y: visible;
`;

export const WrapperContent = styled.div`
  margin: 122px 20px;
  width: 100%;
  max-width: 860px;
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
  margin-bottom: 86px;
`;

export const Body = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: #6d6d6d;
  text-align: center;
  padding: 0 20px;
  p {
    margin-bottom: 30px;
  }
`;

const WrapperCircles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  position: absolute;
`;

const OutterCircle = styled.div`
  background-color: #00a6a2;
  box-shadow: 0px 3px 6px #00000029;
  z-index: 1;
  border-radius: 500px;
`;

const InnerCircle = styled.div`
  background-color: #b8dcc4;
  box-shadow: 0px 3px 6px #00000029;
  z-index: 2;
  position: absolute;
  border-radius: 500px;
`;

export const WrapperCircles1 = styled(WrapperCircles)`
  width: 390px;
  height: 390px;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);

  @media (max-width: 1280px) {
    width: 290px;
    height: 290px;
  }

  @media (max-width: 960px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 600px) {
    width: 210px;
    height: 210px;
  }
`;

export const Outter1 = styled(OutterCircle)`
  width: 390px;
  height: 390px;

  @media (max-width: 1280px) {
    width: 290px;
    height: 290px;
  }

  @media (max-width: 960px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 600px) {
    width: 150px;
    height: 150px;
  }
`;

export const Inner1 = styled(InnerCircle)`
  width: 190px;
  height: 190px;

  @media (max-width: 1280px) {
    width: 90px;
    height: 90px;
  }

  @media (max-width: 960px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 600px) {
    width: 80px;
    height: 80px;
  }
`;

export const WrapperCircles2 = styled(WrapperCircles)`
  width: 640px;
  height: 640px;
  bottom: 0;
  right: 0;
  transform: translate(527px, 200px);

  @media (max-width: 1280px) {
    width: 565px;
    height: 565px;
  }

  @media (max-width: 960px) {
    width: 495px;
    height: 495px;
  }

  @media (max-width: 600px) {
    width: 435px;
    height: 435px;
  }
`;

export const Outter2 = styled(OutterCircle)`
  width: 640px;
  height: 640px;

  @media (max-width: 1280px) {
    width: 565px;
    height: 565px;
  }

  @media (max-width: 960px) {
    width: 495px;
    height: 495px;
  }

  @media (max-width: 600px) {
    width: 435px;
    height: 435px;
  }
`;

export const Inner2 = styled(InnerCircle)`
  width: 467px;
  height: 467px;

  @media (max-width: 1280px) {
    width: 395px;
    height: 395px;
  }

  @media (max-width: 960px) {
    width: 335px;
    height: 335px;
  }

  @media (max-width: 600px) {
    width: 285px;
    height: 285px;
  }
`;

export const WrapperButton = styled.div`
  background-color: #77afab;
  border-radius: 30px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: background 0.4s;

  &:hover {
    background: #b8dcc4;
  }
`;

export const Button = styled.span`
  color: #fff;
  font-weight: bold;
`;
