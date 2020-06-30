import styled from 'styled-components';

export const Container = styled.div`
  background-color: #006359;
  width: 100%;
`;

export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 90%;
  max-width: 370px;
  object-fit: contain;
`;

export const WrapperIcons = styled.div`
  height: calc(100% - 30px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media (max-width: 600px) {
    margin-top: 30px;
  }
`;

export const SocialIcon = styled.img`
  width: 76px;
  height: 76px;
  object-fit: contain;
  margin: 0 5px;
  cursor: pointer;
`;
