import React from 'react';

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

function JoinSession() {
  return (
    <Container>
      <BackgroundImage src={Images.TestimonyBackground} />
      <WrapperContent>
        <Title>DEPOIMENTOS</Title>
        <WrapperBoxes>
          <Box>
            <BoxText>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed
            </BoxText>
            <Row justify="space-between" align="center">
              <Name>Marcos Paulo</Name>
              <Avatar src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
            </Row>
          </Box>
          <Box>
            <BoxText>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed
            </BoxText>
            <Row justify="space-between" align="center">
              <Name>Joana Sousa</Name>
              <Avatar src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
            </Row>
          </Box>
          <Box>
            <BoxText>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed
            </BoxText>
            <Row justify="space-between" align="center">
              <Name>Leila Vargas</Name>
              <Avatar src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
            </Row>
          </Box>
        </WrapperBoxes>
      </WrapperContent>
    </Container>
  );
}

export default JoinSession;
