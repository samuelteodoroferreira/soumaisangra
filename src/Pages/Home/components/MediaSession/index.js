import React from 'react';
import { Grid } from '@material-ui/core';

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

function JoinSession() {
  return (
    <Container>
      <BackgroundImage src={Images.MediaBackground} />
      <WrapperContent>
        <Title>MÍDIA</Title>
        <TitleUnderline />
        <WrapperBoxes>
          <Grid container spacing={2}>
            <Grid item lg={4} md={6} xs={12}>
              <Box>
                <BoxImage src="https://abrilviagemeturismo.files.wordpress.com/2015/12/188153847.jpg?quality=70&strip=info&w=680&h=453&crop=1" />
                <WrapperText>
                  <Text size={18} margin={8}>
                    DESTAQUE
                  </Text>
                  <Text weight={800} margin={10}>
                    MÊS DOS NAMORADOS: HAJA CORAÇÃO
                  </Text>
                  <Text margin={10}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed
                  </Text>
                  <Text size={18} weight={800}>
                    Ler mais
                  </Text>
                </WrapperText>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box>
                <BoxImage src="https://i.ytimg.com/vi/eSXu5BZSBHo/maxresdefault.jpg" />
                <WrapperText>
                  <Text size={18} margin={8}>
                    DESTAQUE
                  </Text>
                  <Text weight={800} margin={10}>
                    MÊS DOS NAMORADOS: HAJA CORAÇÃO
                  </Text>
                  <Text margin={10}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed
                  </Text>
                  <Text size={18} weight={800}>
                    Ler mais
                  </Text>
                </WrapperText>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box>
                <BoxImage src="https://img.freepik.com/free-photo/two-beautiful-women-shopping-town_1303-16426.jpg?size=626&ext=jpg" />
                <WrapperText>
                  <Text size={18} margin={8}>
                    DESTAQUE
                  </Text>
                  <Text weight={800} margin={10}>
                    PROMOÇÃO HAJA CORAÇÃO: POSTE E CONCORRA
                  </Text>
                  <Text margin={10}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed
                  </Text>
                  <Text size={18} weight={800}>
                    Ler mais
                  </Text>
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
