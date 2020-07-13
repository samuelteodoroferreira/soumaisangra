import styled from 'styled-components';

export const Container = styled.div`
  max-height: 866px;
  overflow: hidden;
  width: 100%;

  @media (max-width: 1280px) {
    padding-top: 76px;
  }
`;

export const Image = styled.img`
  /* object-fit: cover; */
  max-width: 100%;
  height: auto;
`;
