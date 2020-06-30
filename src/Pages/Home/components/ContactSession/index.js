import React from 'react';
import { Grid } from '@material-ui/core';

import Images from '~/assets/img';

import {
  Container,
  WrapperContent,
  Subtitle,
  Title,
  WrapperInputs,
  Input,
  MessageInput,
  Button,
  FooterImage,
} from './styles';

function ContactSession() {
  return (
    <Container>
      <WrapperContent>
        <Subtitle>CONTATO</Subtitle>
        <Title>FALE CONOSCO</Title>
        <WrapperInputs>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input placeholder="NOME*" />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Input placeholder="ASSUNTO*" />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Input placeholder="E-MAIL*" />
            </Grid>
            <Grid item xs={12}>
              <MessageInput placeholder="MENSAGEM*" />
            </Grid>
          </Grid>
          <Button>ENVIAR MENSAGEM</Button>
        </WrapperInputs>
      </WrapperContent>
      <FooterImage src={Images.ImageFooter} />
    </Container>
  );
}

export default ContactSession;
