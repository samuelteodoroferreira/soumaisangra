import styled from 'styled-components';

export const Container = styled.div`
  background-color: #eff1f0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 50px;
  font-weight: 900;
  color: #6d6d6d;
  text-align: center;
  margin-top: 154px;
`;

export const TitleUnderline = styled.div`
  width: 78px;
  height: 8px;
  background-color: #6d6d6d;
  margin-bottom: 127px;
`;

export const GridWrapper = styled.div`
  margin-bottom: 152px;
  width: 90%;
  max-width: 1392px;
`;

export const Cell = styled.div`
  height: 296px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
