import React from 'react';
import Lottie from './common/Lottie';
import clock from './assets/lotties/clock.json';
import location from './assets/lotties/location.json';
import document from './assets/lotties/document.json';
import email from './assets/lotties/email.json';
import envelope from './assets/lotties/envelope.json';


function Menu() {
  return (
    <div id="Menu">
      <Lottie
        id="clock"
        icon={clock}
        label={'Program'}
        linkTag={'Program'}
      />
      <Lottie
        id="document"
        icon={document}
        label={'Praktisk informasjon'}
        linkTag={'Information'}
      />
      <Lottie
        id="phone"
        icon={email}
        label={'Kontakt'}
        linkTag={'Contact'}
      />
      <Lottie
        id="location-pin"
        icon={location}
        label={'Reise og overnatting'}
        linkTag={'Travel'}
      />
      <Lottie
        id="svar"
        icon={envelope}
        label={'Svar her'}
        linkTag={'Reply'}
      />
      
    </div>
  );
}

export default Menu;
