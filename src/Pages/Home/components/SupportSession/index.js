import React from 'react';
import { Grid } from '@material-ui/core';
import { shape, instanceOf } from 'prop-types';

import Images from '~/assets/img';

import { Container, Title, TitleUnderline, GridWrapper, Image } from './styles';

function Support({ forwardRef }) {
  return (
    <Container ref={forwardRef}>
      <Title>APOIO</Title>
      <TitleUnderline />
      <GridWrapper>
        <Grid container spacing={8} alignItems="center">
          <Grid item md={4} xs={6}>
            <Image src={Images.LogoBrasfels} />
          </Grid>
          <Grid item md={4} xs={6}>
            <Image src={Images.LogoKeppel} />
          </Grid>
          <Grid item md={4} xs={6}>
            <Image src={Images.LogoNet} />
          </Grid>
          <Grid item md={4} xs={6}>
            <Image src={Images.LogoOkay} />
          </Grid>
          <Grid item md={4} xs={6}>
            <Image src={Images.LogoPetrobras} />
          </Grid>
          <Grid item md={4} xs={6}>
            <Image src={Images.LogoSplenda} />
          </Grid>
          {/* <Grid item md={3} xs={6}>
            <Image />
          </Grid>
          <Grid item md={3} xs={6}>
            <Image />
          </Grid> */}
        </Grid>
      </GridWrapper>
    </Container>
  );
}

export default Support;

Support.propTypes = {
  forwardRef: shape({ current: instanceOf(Element) }).isRequired,
};
