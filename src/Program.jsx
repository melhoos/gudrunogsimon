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
            20:00	Lek og hygge i Knarrlaget 
            <br/>
            00:00	Ro i Knarrlaget
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
            16:00	Bilder med brudeparet og familie
            <br/>
            16:30	Bilde med hele brudefølget
            <br/>
            17:00	Middag
            <br/>
            22:00	Musikk, dans og fest
            <br/>
            00:30	Nattmat
            <br/>
            02:00	Buss hjem
            <br/>
            03:00	Buss fra Strandheim
          </p>
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
