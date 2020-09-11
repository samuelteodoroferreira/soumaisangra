import React from 'react';
import { Grid } from '@material-ui/core';
import { shape, instanceOf } from 'prop-types';

import Images from '~/assets/img';
import { Row } from '~/styles/components';

import {
  Container,
  BackgroundImage,
  WrapperContent,
  Title,
  WrapperBoxes,
  Box,
  BoxText,
  Avatar,
  Name,
} from './styles';

function JoinSession({ forwardRef }) {
  return (
    <Container ref={forwardRef}>
      <BackgroundImage src={Images.TestimonyBackground} />
      <WrapperContent>
        <Title>DEPOIMENTOS</Title>
        <WrapperBoxes>
          <Grid container spacing={2} align="center" justify="center">
            <Grid item lg={4} md={6} xs={12}>
              <Box>
                <BoxText>
                  É muito fácil responsabilizar outros quando nada fazemos.
                  Aderir à Campanha “Todos por Angra” é fazer a nossa parte em
                  favor de toda Angra dos Reis!
                </BoxText>
                <Row justify="space-between" align="center">
                  <Name>Rosemberg Silas, empresário, Japuíba</Name>
                  {/* <Avatar src={Images.AvatarProfile} /> */}
                </Row>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box>
                <BoxText>
                  Eu sou “Todos por Angra” e isso significa colocar minha força
                  em prol desta cidade que tanto tem me dado. É nada mais que
                  ser grato a Angra dos Reis!
                </BoxText>
                <Row justify="space-between" align="center">
                  <Name>Hércules Lima, empresário, Frade</Name>
                  {/* <Avatar src={Images.AvatarProfile} /> */}
                </Row>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box>
                <BoxText>
                  Ter opções de compras através de uma plataforma confiável é
                  ótimo afinal, todo o isolamento pelo qual passamos nos ensinou
                  um jeito novo de comprar que não precisamos abandonar quando
                  tudo isso passar.
                </BoxText>
                <Row justify="space-between" align="center">
                  <Name>Marta Junqueira, dona de casa, Jacuecanga</Name>
                  {/* <Avatar src={Images.AvatarProfile} /> */}
                </Row>
              </Box>
            </Grid>
          </Grid>
        </WrapperBoxes>
      </WrapperContent>
    </Container>
  );
}

export default JoinSession;

JoinSession.propTypes = {
  forwardRef: shape({ current: instanceOf(Element) }).isRequired,
};
