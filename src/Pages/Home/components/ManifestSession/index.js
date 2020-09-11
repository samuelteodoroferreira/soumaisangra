import React from 'react';
import { shape, instanceOf } from 'prop-types';

import {
  Container,
  WrapperContent,
  Subtitle,
  Title,
  Body,
  WrapperCircles1,
  Outter1,
  Inner1,
  WrapperCircles2,
  Outter2,
  Inner2,
  WrapperButton,
  Button,
} from './styles';

function ManifestSession({ forwardRef, scrollTo, contactRef }) {
  return (
    <Container ref={forwardRef}>
      <WrapperContent>
        <Subtitle>NÓS AMAMOS ANGRA</Subtitle>
        <Title>
          Existem muitos lugares bonitos no mundo, mas nada se compara a Angra
          dos Reis
        </Title>
        <Body>
          <p>
            Todos por Angra é um movimento colaborativo de Amor a Angra dos
            Reis. Só a união do governo, empresas, organizações e sociedade; vão
            superar os desafios deixados pela pandemia e inaugurar um novo
            normal, que será o começo de uma Angra mais organizada, mais
            produtiva e feliz.
          </p>
          <p>
            Aqui é o espaço para você colaborar com soluções inovadoras e
            práticas empreendedoras para que juntos possamos retomar a economia
            de nossa cidade.
          </p>
          <p>O futuro de Angra depende de nós</p>
          <p>E e ele começa agora!</p>
          <WrapperButton>
            <Button onClick={() => scrollTo(contactRef)}>
              Eu amo Angra, quero fazer parte!
            </Button>
          </WrapperButton>
        </Body>
      </WrapperContent>
      <WrapperCircles1>
        <Outter1 />
        <Inner1 />
      </WrapperCircles1>
      <WrapperCircles2>
        <Outter2 />
        <Inner2 />
      </WrapperCircles2>
    </Container>
  );
}

export default ManifestSession;

ManifestSession.propTypes = {
  forwardRef: shape({ current: instanceOf(Element) }).isRequired,
};
