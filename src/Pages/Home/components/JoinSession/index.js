import React, { useState } from 'react';
import YouTube from 'react-youtube';

import Images from '~/assets/img';
import { Row } from '~/styles/components';

import {
  Container,
  BackgroundImage,
  WrapperContent,
  Subtitle,
  Title,
  CircleButton,
  Arrow,
  GreenCircle,
} from './styles';

function JoinSession() {
  const [youtubeLinks] = useState(['tsUl2InsCNM', 'glejM2r83Gc']);
  const [actualVideo, setActualVideo] = useState(0);

  return (
    <Container>
      <BackgroundImage src={Images.ImageJoin} />
      <WrapperContent>
        <Subtitle>PARTICIPE</Subtitle>
        <Title>JUNTE-SE A NÓS NESSA CAMPANHA</Title>
        <Row align="center">
          <CircleButton
            left
            disabled={actualVideo === 0}
            onClick={() => {
              if (actualVideo !== 0) setActualVideo(actualVideo - 1);
            }}
          >
            <Arrow left />
          </CircleButton>
          <YouTube
            videoId={youtubeLinks[actualVideo]}
            opts={{
              height: '388',
              width: '693',
            }}
            onReady={() => {}}
          />
          <CircleButton
            disabled={actualVideo === youtubeLinks.length - 1}
            onClick={() => {
              if (actualVideo !== youtubeLinks.length - 1)
                setActualVideo(actualVideo + 1);
            }}
          >
            <Arrow />
          </CircleButton>
        </Row>
      </WrapperContent>
      <GreenCircle />
    </Container>
  );
}

export default JoinSession;
