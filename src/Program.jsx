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
            Det blir middag på Knarren Brygge i 18-tiden. Etter middagen trekker vi bort til Knarrlaget for bingo, lek og hygge
          </p>
        </div>
        <div>
          <h2>
            Lørdag - Fjellværøya
          </h2>
          <p>
            Vielse i Nordbotn Kirke på formiddagen, og Bryllupsfest i Strandheim på ettermiddagen
          </p>
        </div>
        <div>
          <h2>
            Søndag - Knarrlagsundet
          </h2>
          <p>
            Vi samles i Knarrlaget på formiddagen før vi går søndagstur langs Ulvøystien. Mer om turen {' '}
            <a
              href="https://ut.no/turforslag/118119/ulvystien-rundt-pa-ulvyafjellvrsya-pa-hitra"
              target="_blank"
              rel="noopener noreferrer"
            >
            her
            </a>
          </p>
          <p>
                Etter turen blir det kaffe og kaker der vi startet
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
