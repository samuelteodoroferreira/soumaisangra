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
  text-align: center;
  margin: 148px 30px 87px;
`;

export const WrapperBoxes = styled.div`
  margin-bottom: 144px;
  width: 90%;
  text-align: center;
`;

export const Box = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 394px;
  margin: 10px;
  padding: 27px 29px;
  background-color: #fff;
  border-radius: 21px;
`;

export const BoxText = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: #6d6d6d;
  text-align: left;
  margin-bottom: 39px;
`;

export const Avatar = styled.img`
  width: 86px;
  height: 86px;
  border-radius: 50px;
  border: none;
  overflow: hidden;
`;

export const Name = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #6d6d6d;
  div {
    font-size: 60px;
  }
`;
