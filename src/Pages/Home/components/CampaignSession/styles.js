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
`;

export const Title = styled.p`
  font-size: 50px;
  font-weight: 900;
  color: #6d6d6d;
  text-align: center;
  margin: 0 30px 38px;
  max-width: 610px;
  line-height: 48px;
`;

export const Body = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: #6d6d6d;
  text-align: center;
  max-width: 860px;
  margin: 0 40px 55px;
`;

export const WrapperImages = styled.div`
  margin-bottom: 144px;
  width: 90%;
  text-align: center;
`;

export const Image = styled.img`
  display: inline-block;
  max-width: 378px;
  object-fit: contain;
  margin: 10px;
`;
