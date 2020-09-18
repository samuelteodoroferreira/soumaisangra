import React from 'react';
import { Grid } from '@material-ui/core';
import { shape, instanceOf } from 'prop-types';

import Images from '~/assets/img';
import FilePDF from '~/assets/kit_folder.pdf';

import {
  Container,
  Subtitle,
  Title,
  Body,
  WrapperImages,
  Image,
  Wrapper,
  WrapperButton,
  Button,
  WrapperEncontre,
  BoxApp,
  AndroidImage,
  AppleImage,
} from './styles';

function CampaignSession({ forwardRef }) {
  return (
    <Container ref={forwardRef}>
      <Subtitle>CAMPANHA</Subtitle>
      <Title>PARTICIPE, ESTAMOS COM VOCÊ NESSA CAMPANHA!</Title>
      <Body>
        O seu investimento será doar amor, ao confirmar sua adesão, você
        receberá um “kit” com peças de divulgação do movimento Todos Por Angra e
        poderá usar em suas redes sociais, comunicados internos e mídias. Vamos
        envolver todos ao nosso redor. Juntos, vamos movimentar toda a nossa
        cadeia de valor - fornecedores, prestadores de serviços, distribuidores,
        revendedores, parceiros, investidores, colaboradores, amigos, todos!
      </Body>
      <WrapperImages>
        <Grid container spacing={2} align="center" justify="center">
          <Grid item lg={4} md={6} xs={12}>
            <Image src={Images.Campaign1} />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <Image src={Images.Campaign2} />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <Image src={Images.Campaign3} />
          </Grid>
        </Grid>
        <Wrapper>
          <WrapperButton onClick={() => window.open(FilePDF, '_blank')}>
            <Button>FAÇA O DOWNLOAD DO KIT PARA PARTICIPAR!</Button>
          </WrapperButton>
        </Wrapper>
      </WrapperImages>
      <WrapperEncontre>
        <BoxApp>
          <AndroidImage
            src={Images.AndroidEncontre}
            onClick={() =>
              window.open(
                'https://play.google.com/store/apps/details?id=br.com.aplicativoencontre',
                '_blank'
              )
            }
          />
          <AppleImage
            src={Images.AppleEncontre}
            onClick={() =>
              window.open(
                'https://apps.apple.com/br/app/encontre/id1505592518',
                '_blank'
              )
            }
          />
        </BoxApp>
      </WrapperEncontre>
    </Container>
  );
}

export default CampaignSession;

CampaignSession.propTypes = {
  forwardRef: shape({ current: instanceOf(Element) }).isRequired,
};
