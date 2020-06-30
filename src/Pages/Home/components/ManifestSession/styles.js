import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  /* overflow-x: hidden; */
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
  background-color: #019b81;
  box-shadow: 0px 3px 6px #00000029;
  z-index: 1;
  border-radius: 500px;
`;

const InnerCircle = styled.div`
  background-color: #c8e900;
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
`;

export const Outter1 = styled(OutterCircle)`
  width: 390px;
  height: 390px;
`;

export const Inner1 = styled(InnerCircle)`
  width: 190px;
  height: 190px;
`;

export const WrapperCircles2 = styled(WrapperCircles)`
  width: 640px;
  height: 640px;
  bottom: 0;
  right: 0;
  transform: translate(527px, 200px);
`;

export const Outter2 = styled(OutterCircle)`
  width: 640px;
  height: 640px;
`;

export const Inner2 = styled(InnerCircle)`
  width: 467px;
  height: 467px;
`;
