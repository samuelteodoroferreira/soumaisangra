import React from 'react';
import { Grid } from '@material-ui/core';
import { shape, instanceOf } from 'prop-types';

import Images from '~/assets/img';

import {
  Container,
  BackgroundImage,
  WrapperContent,
  Title,
  TitleUnderline,
  WrapperBoxes,
  Box,
  BoxImage,
  WrapperText,
  Text,
} from './styles';

function JoinSession({ forwardRef }) {
  return (
    <Container ref={forwardRef}>
      <BackgroundImage src={Images.MediaBackground} />
      <WrapperContent>
        <Title>MÍDIA</Title>
        <TitleUnderline />
        <WrapperBoxes>
          <Grid container spacing={2} align="center">
            <Grid item lg={4} md={6} xs={12}>
              <Box>
                <BoxImage src={Images.Media1} />
                <WrapperText>
                  <Text size={18} margin={8}>
                    DESTAQUE
                  </Text>
                  <Text weight={800} margin={10}>
                    Se você ama Angra, venha fazer parte desta campanha
                  </Text>
                  {/* <Text margin={10}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed
                  </Text>
                  <Text size={18} weight={800}>
                    Ler mais
                  </Text> */}
                </WrapperText>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box>
                <BoxImage src={Images.Media2} />
                <WrapperText>
                  <Text size={18} margin={8}>
                    DESTAQUE
                  </Text>
                  <Text weight={800} margin={10}>
                    Doe seu amor a Angra dos Reis, participe.
                  </Text>
                  {/* <Text margin={10}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed
                  </Text>
                  <Text size={18} weight={800}>
                    Ler mais
                  </Text> */}
                </WrapperText>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box>
                <BoxImage src={Images.Media3} />
                <WrapperText>
                  <Text size={18} margin={8}>
                    DESTAQUE
                  </Text>
                  <Text weight={800} margin={10}>
                    Faça o seu cadastro, receba o kit e saiba as vantagens de
                    participar dessa campanha.
                  </Text>
                  {/* <Text margin={10}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed
                  </Text>
                  <Text size={18} weight={800}>
                    Ler mais
                  </Text> */}
                </WrapperText>
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
