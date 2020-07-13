import React, { useState } from 'react';

import Images from '~/assets/img';

import { Container, Logo, LinkText, Toggle, Hamburger, Navbox } from './styles';

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Container>
      <Logo src={Images.Logo} />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <LinkText>HOME</LinkText>
          <LinkText>MANIFESTO</LinkText>
          <LinkText>VÍDEOS</LinkText>
          <LinkText>PARTICIPE</LinkText>
          <LinkText>DEPOIMENTOS</LinkText>
          <LinkText>APOIO</LinkText>
          <LinkText>MÍDIA</LinkText>
          <LinkText>CONTATOS</LinkText>
        </Navbox>
      ) : (
        <Navbox open>
          <LinkText>HOME</LinkText>
          <LinkText>MANIFESTO</LinkText>
          <LinkText>VÍDEOS</LinkText>
          <LinkText>PARTICIPE</LinkText>
          <LinkText>DEPOIMENTOS</LinkText>
          <LinkText>APOIO</LinkText>
          <LinkText>MÍDIA</LinkText>
          <LinkText>CONTATOS</LinkText>
        </Navbox>
      )}
    </Container>
  );
}

export default Header;
