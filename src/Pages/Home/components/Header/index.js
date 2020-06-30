import React from 'react';

import Images from '~/assets/img';

import { Container, Logo, LinkText } from './styles';

function Header() {
  return (
    <Container>
      <Logo src={Images.Logo} />
      <LinkText>HOME</LinkText>
      <LinkText>MANIFESTO</LinkText>
      <LinkText>VÍDEOS</LinkText>
      <LinkText>PARTICIPE</LinkText>
      <LinkText>DEPOIMENTOS</LinkText>
      <LinkText>APOIO</LinkText>
      <LinkText>MÍDIA</LinkText>
      <LinkText>CONTATOS</LinkText>
    </Container>
  );
}

export default Header;
