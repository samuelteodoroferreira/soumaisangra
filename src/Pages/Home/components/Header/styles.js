import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 195px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;

  @media (max-width: 1280px) {
    /* display: none; */
    position: fixed;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;

    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  height: 75%;
  object-fit: contain;
  margin-right: 37px;

  @media (max-width: 1280px) {
    margin-left: 37px;
  }
`;

export const LinkText = styled.a`
  font-size: 18px;
  font-weight: 700;
  color: #6d6d6d;
  margin: 0 17px;
  cursor: pointer;
`;

export const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;
  @media (max-width: 1280px) {
    display: flex;
  }
`;

export const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1280px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: space-around;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 76px;
    right: ${props => (props.open ? '-100%' : '0')};
    border-top: 2px solid #1c8e85;
  }
`;

export const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? 'rotate(-45deg)' : 'inherit')};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: '';
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
      props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
    top: -10px;
  }
  ::after {
    opacity: ${props => (props.open ? '0' : '1')};
    transform: ${props => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
`;
