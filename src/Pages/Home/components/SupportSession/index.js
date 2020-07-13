import React from 'react';
import { Grid } from '@material-ui/core';
import { shape, instanceOf } from 'prop-types';

import { Container, Title, TitleUnderline, GridWrapper, Cell } from './styles';

function Support({ forwardRef }) {
  return (
    <Container ref={forwardRef}>
      <Title>APOIO</Title>
      <TitleUnderline />
      <GridWrapper>
        <Grid container spacing={0} alignItems="center">
          <Grid item md={3} xs={6}>
            <Cell>asd</Cell>
          </Grid>
          <Grid item md={3} xs={6}>
            <Cell>asd</Cell>
          </Grid>
          <Grid item md={3} xs={6}>
            <Cell>asd</Cell>
          </Grid>
          <Grid item md={3} xs={6}>
            <Cell>asd</Cell>
          </Grid>
          <Grid item md={3} xs={6}>
            <Cell>asd</Cell>
          </Grid>
          <Grid item md={3} xs={6}>
            <Cell>asd</Cell>
          </Grid>
          <Grid item md={3} xs={6}>
            <Cell>asd</Cell>
          </Grid>
          <Grid item md={3} xs={6}>
            <Cell>asd</Cell>
          </Grid>
        </Grid>
      </GridWrapper>
    </Container>
  );
}

export default Support;

Support.propTypes = {
  forwardRef: shape({ current: instanceOf(Element) }).isRequired,
};
