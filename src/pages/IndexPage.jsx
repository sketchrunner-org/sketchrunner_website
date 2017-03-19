import React from 'react';
import { ReactLogo, Navigation, Hero, HomeSection, Carousel, Footer } from 'components';

const IndexPage = () => (
  <div className="index-page">
    <Navigation />
    <Hero />
    <HomeSection>
      <h2>headline h2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo plebiscito decreta a senatu est consuli quaestio Cn.</p>
      <img src="https://placehold.it/700x400/AAA/AAA" alt=""/>
    </HomeSection>
    <HomeSection>
      <h2>headline h2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo plebiscito decreta a senatu est consuli quaestio Cn.</p>
      <img src="https://placehold.it/700x400/AAA/AAA" alt=""/>
    </HomeSection>
    <HomeSection>
      <h2>headline h2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo plebiscito decreta a senatu est consuli quaestio Cn.</p>
      <img src="https://placehold.it/700x400/AAA/AAA" alt=""/>
    </HomeSection>
    <HomeSection>
      <h2>headline h2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo plebiscito decreta a senatu est consuli quaestio Cn.</p>
      <video src="https://player.vimeo.com/video/208463542" />
    </HomeSection>
    <HomeSection>
      <h2>headline h2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo plebiscito decreta a senatu est consuli quaestio Cn.</p>
      <video src="https://vimeo.com/38772314" />
    </HomeSection>
    <HomeSection>
      <h2>headline h2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo plebiscito decreta a senatu est consuli quaestio Cn.</p>
      <video src="https://www.youtube.com/watch?v=oHg5SJYRHA0" />
    </HomeSection>
    <Carousel className="slider" indicator={true} switcher={true}>
      <div>
        <h3>Headline 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div>
        <h3>Headline 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div>
        <h3>Headline 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </Carousel>
    <Footer />
  </div>
);

export default IndexPage;
