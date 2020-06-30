import React from 'react';

import Images from '~/assets/img';

import {
  Container,
  Subtitle,
  Title,
  Body,
  WrapperImages,
  Image,
} from './styles';

function CampaignSession() {
  return (
    <Container>
      <Subtitle>CAMPANHA</Subtitle>
      <Title>JUNTE-SE A NÓS NESSA CAMPANHA</Title>
      <Body>
        Qualquer um pode participar do Movimento do Sou do Rio. No caso de
        empresas estabelecidas no estado do Rio, basta fazer o download e
        reproduzir o Material da campanha em seus produtos originais, lojas
        físicas, site e perfis nas redes sociais, além de disseminar o movimento
        entre seus colaboradores. Já a população participar ao dar preferência a
        produtos de origem fluminense e divulgando a campanha entre familiares e
        amigos. Baixe aqui gratuitamente.
      </Body>
      <WrapperImages>
        <Image src={Images.Campaign1} />
        <Image src={Images.Campaign2} />
        <Image src={Images.Campaign3} />
      </WrapperImages>
    </Container>
  );
}

export default CampaignSession;
