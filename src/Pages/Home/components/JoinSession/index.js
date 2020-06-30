import React, { useState } from 'react';
import YouTube from 'react-youtube';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Images from '~/assets/img';
import { Row, Column } from '~/styles/components';

import {
  Container,
  BackgroundImage,
  WrapperContent,
  Subtitle,
  Title,
  CircleButton,
  Arrow,
  GreenCircle,
  WrapperYoutube,
} from './styles';

function JoinSession() {
  const [youtubeLinks] = useState(['tsUl2InsCNM', 'glejM2r83Gc']);
  const [actualVideo, setActualVideo] = useState(0);
  const small = useMediaQuery('(max-width:824px)');

  return (
    <Container>
      <BackgroundImage src={Images.ImageJoin} />
      <WrapperContent>
        <Subtitle>PARTICIPE</Subtitle>
        <Title>JUNTE-SE A NÓS NESSA CAMPANHA</Title>
        {small ? (
          <Column align="center" width="100%">
            <Row width="100%" justify="center">
              <WrapperYoutube>
                <YouTube
                  videoId={youtubeLinks[actualVideo]}
                  opts={{
                    width: '100%',
                  }}
                  onReady={() => {}}
                />
              </WrapperYoutube>
            </Row>
            <Row justify="space-evenly" width="100%" margin="20px 0 0 0">
              <CircleButton
                left
                noMargin
                disabled={actualVideo === 0}
                onClick={() => {
                  if (actualVideo !== 0) setActualVideo(actualVideo - 1);
                }}
              >
                <Arrow left />
              </CircleButton>
              <CircleButton
                noMargin
                disabled={actualVideo === youtubeLinks.length - 1}
                onClick={() => {
                  if (actualVideo !== youtubeLinks.length - 1)
                    setActualVideo(actualVideo + 1);
                }}
              >
                <Arrow />
              </CircleButton>
            </Row>
          </Column>
        ) : (
          <Row align="center" width="100%">
            <CircleButton
              left
              disabled={actualVideo === 0}
              onClick={() => {
                if (actualVideo !== 0) setActualVideo(actualVideo - 1);
              }}
            >
              <Arrow left />
            </CircleButton>
            <WrapperYoutube>
              <YouTube
                videoId={youtubeLinks[actualVideo]}
                opts={{
                  width: '100%',
                }}
                onReady={() => {}}
              />
            </WrapperYoutube>
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
        )}
      </WrapperContent>
      <GreenCircle />
    </Container>
  );
}

export default JoinSession;
