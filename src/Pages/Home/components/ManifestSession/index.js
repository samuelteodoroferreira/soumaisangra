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
} from './styles';

function ManifestSession({ forwardRef }) {
  return (
    <Container ref={forwardRef}>
      <WrapperContent>
        <Subtitle>O MANIFESTO</Subtitle>
        <Title>O PRIMEIRO PASSO É COMPRAR ESSA IDEIA</Title>
        <Body>
          <p>
            Sou do Rio é um movimento de adesão espontânea para empresários, a
            Sociedade e todos que são apaixonados pelo Rio.
          </p>
          <p>
            De quem valoriza tudo de bom que é produzido aqui Vai de Bom Jesus
            do Itapaboana a Paraty, de Campos a Miracema. De produtos à
            criatividade. De estilo local ao alto-astral. Mas o movimento vai
            muito além disso. Ele começa nas linhas de produção, Passa pelas
            gôndolas, lojas, pontos de venda e entra na vida, no seu dia a dia.
          </p>
          <p>
            Participar é muito simples. Ao comprar uma manteiga, uma peça de
            roupa, ou peça para o seu carro, Similares em preço e qualidade,
            olhe no fundo da embalagem para conferir onde ele foi produzido.
          </p>
          <p>
            Se for no Rio, não pense duas vezes. Dê a sua preferência. Você
            ajuda a retomar o crescimento, e também faz com que cada cidadão
            acredite e confie que podemos recuperar a força do Rio e o
            principal, a autoestima.
          </p>
          <p>
            Dar preferência a produtos fabricados no Rio faz girar a economia
            local.
          </p>
          <p>
            Você compra do Rio e o benefício volta para o Rio. Volta para você.
          </p>
          <p>
            Compre essa ideia. Nós estamos fazendo a nossa parte. Vamos fazer
            juntos?
          </p>
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
