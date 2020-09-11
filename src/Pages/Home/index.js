import React, { useRef } from 'react';

import Header from './components/Header';
import WomanSession from './components/WomanSession';
import ManifestSession from './components/ManifestSession';
import JoinSession from './components/JoinSession';
import CampaignSession from './components/CampaignSession';
import TestimonySession from './components/TestimonySession';
import SupportSession from './components/SupportSession';
import MediaSession from './components/MediaSession';
import ContactSession from './components/ContactSession';
import Footer from './components/Footer';

import { Container } from './styles';

function Home() {
  const manifestRef = useRef(null);
  const joinRef = useRef(null);
  const campaignRef = useRef(null);
  const testimonyRef = useRef(null);
  const supportRef = useRef(null);
  const mediaRef = useRef(null);
  const contactRef = useRef(null);

  function scrollToRef(ref) {
    window.scrollTo(0, ref.current.offsetTop);
  }

  return (
    <Container>
      <Header
        clickManifestRef={() => scrollToRef(manifestRef)}
        clickJoinRef={() => scrollToRef(joinRef)}
        clickCampaignRef={() => scrollToRef(campaignRef)}
        clickTestimonyRef={() => scrollToRef(testimonyRef)}
        clickSupportRef={() => scrollToRef(supportRef)}
        clickMediaRef={() => scrollToRef(mediaRef)}
        clickContactRef={() => scrollToRef(contactRef)}
      />
      <WomanSession />
      <ManifestSession
        forwardRef={manifestRef}
        scrollTo={scrollToRef}
        contactRef={contactRef}
      />
      <JoinSession forwardRef={joinRef} />
      <CampaignSession forwardRef={campaignRef} />
      <TestimonySession forwardRef={testimonyRef} />
      <SupportSession forwardRef={supportRef} />
      <MediaSession forwardRef={mediaRef} />
      <ContactSession forwardRef={contactRef} />
      <Footer />
    </Container>
  );
}

export default Home;
