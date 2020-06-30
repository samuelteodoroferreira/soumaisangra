import React from 'react';
import { Grid } from '@material-ui/core';

import { Container, Title, TitleUnderline, GridWrapper, Cell } from './styles';

function Support() {
  return (
    <Container>
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
