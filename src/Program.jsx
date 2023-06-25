import React from 'react';
import Map_Hitra from './assets/images/Map_Hitra.png';

const Program = () => {
  return (
    <div id="Program">
      <h1>
        Program
      </h1>
      <div className="bullets">
        <div>
          <h2>
            Fredag - Knarrlagsundet
          </h2>
          <p>
            18:00	Middag på Knarren
            <br/>
            20:00	Lek og hygge i Knarrlaget*
            <br/>
            00:00	Ro i Knarrlaget
          </p>
          <p>
            * Om du ønsker å drikke noe når vi trekker oss tilbake til Knarrlaget kl 20, ta turen innom Knarrlaget før middag og legg fra deg drikken der.
          </p>
        </div>
        <div>
          <h2>
            Lørdag - Fjellværøya
          </h2>
          <p>
            14:00	Vielse i Nordbotn Kirke
            <br/>
            15:15	Apertiff på Strandheim
            <br/>
            16:00	Bilder med familie
            <br/>
            16:30	Bilde med hele brudefølget
            <br/>
            17:00	Middag
            <br/>
            22:00	Musikk, dans og fest
            <br/>
            02:00	Buss hjem
            <br/>
            03:00	Buss hjem
          </p>
          <br/>
        </div>
        <div>
          <h2>
            Søndag - Knarrlagsundet
          </h2>
          <p>
            12:00	Kaffeslabberas i Knarrlaget
            <br/>
            13:30	Søndagstur til Krigshytta
          </p>
        </div>
      </div>
      <img
          className="map-hitra"
          src={Map_Hitra}
          alt="Map_Hitra"
        /> 
    </div>    
  );
};

export default Program;
