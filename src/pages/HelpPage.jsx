import React from 'react';
import { Title, ReactLogo, Navigation, Accordion, Footer } from 'components';

const HelpPage = () => (
  <div className="help-page">
    <Navigation />
    <Title>HelpPage</Title>
    <Accordion>
     <dt>Libero quis</dt>
     <dd>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure libero quis, tempora id, mollitia nam ex assumenda debitis laborum eum ducimus rerum adipisci earum fugiat placeat obcaecati dignissimos voluptatum harum!</p>
     </dd>
     <dt>Ducimus rerum</dt>
     <dd>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure libero quis, tempora id, mollitia nam ex assumenda debitis laborum eum ducimus rerum adipisci earum fugiat placeat obcaecati dignissimos voluptatum harum!</p>
     </dd>
     <dt>Libero quis</dt>
     <dd>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure libero quis, tempora id, mollitia nam ex assumenda debitis laborum eum ducimus rerum adipisci earum fugiat placeat obcaecati dignissimos voluptatum harum!</p>
     </dd>
    </Accordion>
    <Footer />
  </div>
);

export default HelpPage;
