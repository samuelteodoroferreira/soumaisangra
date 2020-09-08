import React, { useState } from 'react';
import { func } from 'prop-types';

import Images from '~/assets/img';

import { Container, Logo, LinkText, Toggle, Hamburger, Navbox } from './styles';

function Header({
  clickManifestRef,
  clickCampaignRef,
  clickJoinRef,
  clickTestimonyRef,
  clickSupportRef,
  clickMediaRef,
  clickContactRef,
}) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  console.log(navbarOpen);

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
          <LinkText
            onClick={() => {
              setNavbarOpen(false);
              clickManifestRef();
            }}
          >
            MOVIMENTO
          </LinkText>
          <LinkText
            onClick={() => {
              setNavbarOpen(false);
              clickJoinRef();
            }}
          >
            VÍDEOS
          </LinkText>
          <LinkText
            onClick={() => {
              setNavbarOpen(false);
              clickCampaignRef();
            }}
          >
            PARTICIPE
          </LinkText>
          <LinkText
            onClick={() => {
              setNavbarOpen(false);
              clickTestimonyRef();
            }}
          >
            DEPOIMENTOS
          </LinkText>
          <LinkText
            onClick={() => {
              setNavbarOpen(false);
              clickSupportRef();
            }}
          >
            APOIO
          </LinkText>
          <LinkText
            onClick={() => {
              setNavbarOpen(false);
              clickMediaRef();
            }}
          >
            MÍDIA
          </LinkText>
          <LinkText
            onClick={() => {
              setNavbarOpen(false);
              clickContactRef();
            }}
          >
            CONTATOS
          </LinkText>
        </Navbox>
      ) : (
        <Navbox open>
          <LinkText>HOME</LinkText>
          <LinkText onClick={clickManifestRef}>MOVIMENTO</LinkText>
          <LinkText onClick={clickJoinRef}>VÍDEOS</LinkText>
          <LinkText onClick={clickCampaignRef}>PARTICIPE</LinkText>
          <LinkText onClick={clickTestimonyRef}>DEPOIMENTOS</LinkText>
          <LinkText onClick={clickSupportRef}>APOIO</LinkText>
          <LinkText onClick={clickMediaRef}>MÍDIA</LinkText>
          <LinkText onClick={clickContactRef}>CONTATOS</LinkText>
        </Navbox>
      )}
    </Container>
  );
}

export default Header;

Header.propTypes = {
  clickManifestRef: func.isRequired,
  clickCampaignRef: func.isRequired,
  clickJoinRef: func.isRequired,
  clickTestimonyRef: func.isRequired,
  clickSupportRef: func.isRequired,
  clickMediaRef: func.isRequired,
  clickContactRef: func.isRequired,
};
