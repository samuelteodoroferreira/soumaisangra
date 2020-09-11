import styled from 'styled-components';

export const Container = styled.div`
  background-color: #edf3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Subtitle = styled.p`
  font-size: 23px;
  font-weight: 800;
  color: #6d6d6d;
  text-align: center;
  margin-top: 115px;
  margin-bottom: 5px;
  @media (max-width: 320px) {
    font-size: 18px;
  }
`;

export const Title = styled.p`
  font-size: 50px;
  font-weight: 900;
  color: #6d6d6d;
  text-align: center;
  margin: 0 30px 38px;
  max-width: 610px;
  line-height: 48px;
  @media (max-width: 320px) {
    font-size: 40px;
  }
`;

export const Body = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: #6d6d6d;
  text-align: center;
  max-width: 860px;
  margin: 0 40px 55px;
  @media (max-width: 320px) {
    font-size: 18px;
  }
`;

export const WrapperImages = styled.div`
  margin-bottom: 144px;
  max-width: 90%;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 378px;
  object-fit: contain;
`;

export const Banner = styled.img`
  width: 100%;
  max-width: 1920px;
  object-fit: contain;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const WrapperButton = styled.div`
  padding: 20px;
  margin-top: 20px;
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
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
