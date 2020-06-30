import React from 'react';
import { Grid } from '@material-ui/core';

import Images from '~/assets/img';

import {
  Container,
  WrapperLogo,
  Logo,
  WrapperIcons,
  SocialIcon,
} from './styles';

function Footer() {
  return (
    <Container>
      <Grid container spacing={3} style={{ padding: '80px 0' }}>
        <Grid item sm={4} xs={12} />
        <Grid item sm={4} xs={12}>
          <WrapperLogo>
            <Logo src={Images.LogoWhite} />
          </WrapperLogo>
        </Grid>
        <Grid item sm={4} xs={12}>
          <WrapperIcons>
            <SocialIcon src={Images.IconFacebook} />
            <SocialIcon src={Images.IconInstagram} />
            <SocialIcon src={Images.IconTwitter} />
          </WrapperIcons>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
