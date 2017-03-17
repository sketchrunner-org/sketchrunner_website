import React from 'react';
import { Title, ReactLogo, Navigation, Footer, GithubRelease } from 'components';

const ReleasesPage = () => (
  <div className="releases-page">
    <Navigation />
    <Title>ReleasesPage</Title>
    <GithubRelease />
    <Footer />
  </div>
);

export default ReleasesPage;
