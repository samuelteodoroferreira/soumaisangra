import styled from 'styled-components';

export const Container = styled.div`
  max-height: 866px;
  overflow: hidden;
  width: 100%;
  /* padding-top: 76px; */

  @media (max-width: 1280px) {
    padding-top: 8vh;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  transform: translateY(-50px);
`;
