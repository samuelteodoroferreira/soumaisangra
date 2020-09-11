/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const WrapperContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 49px 0;
  width: 90%;
  max-width: 1000px;
`;

export const Subtitle = styled.p`
  font-size: 23px;
  font-weight: 800;
  color: #fff;
  text-align: center;
`;

export const Title = styled.p`
  font-size: 50px;
  font-weight: 900;
  color: #fff;
  text-align: center;
  margin-bottom: 41px;
`;

export const CircleButton = styled.div`
  width: 86px;
  height: 86px;
  border: 2px solid #ffffff;
  border-radius: 50px;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${props =>
    props.noMargin ? 0 : props.left ? '0 62px 0 0' : '0 0 0 62px'};
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;

export const Arrow = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  border-top: none;
  border-left: none;
  transform: ${props => (props.left ? 'rotate(135deg)' : 'rotate(-45deg)')}
    translate(-3px, -3px);
`;

export const GreenCircle = styled.div`
  position: absolute;
  z-index: 4;
  width: 389px;
  height: 389px;
  background-color: #00a6a2;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 300px;
  bottom: 0;
  left: 0;
  transform: translate(-330px, 50%);
`;

export const WrapperYoutube = styled.div`
  flex: 1;
`;
