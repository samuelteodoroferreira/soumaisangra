import React from 'react';

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
  return (
    <Container>
      <Header />
      <WomanSession />
      <ManifestSession />
      <JoinSession />
      <CampaignSession />
      <TestimonySession />
      <SupportSession />
      <MediaSession />
      <ContactSession />
      <Footer />
    </Container>
  );
}

export default Home;
