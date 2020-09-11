import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 49px 0;
`;

export const Title = styled.p`
  font-size: 50px;
  font-weight: 900;
  color: #fff;
  margin-top: 122px;
`;

export const TitleUnderline = styled.div`
  width: 78px;
  height: 8px;
  background-color: #fff;
  margin-bottom: 104px;
`;

export const WrapperBoxes = styled.div`
  margin-bottom: 144px;
  width: 90%;
  max-width: 1369px;
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  max-width: 394px;
  background-color: #fff;
  overflow: hidden;
  border-radius: 20px;
  border: 2px solid #fff;
`;

export const BoxImage = styled.img`
  width: 100%;
  height: 181px;
  object-fit: cover;
`;

export const WrapperText = styled.div`
  padding: 17px 41px;
`;

export const Text = styled.div`
  font-size: ${props => props.size || 22}px;
  font-weight: ${props => props.weight || 500};
  color: #6d6d6d;
  margin-bottom: ${props => props.margin}px;
  text-align: left;
  text-transform: ${props => props.upper || 'uppercase'};
`;
