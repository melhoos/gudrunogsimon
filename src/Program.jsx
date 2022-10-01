import React from 'react';

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
            ca. 18 - Middag på Knarren Brygge
          <br/>
            ca. 20 - Vi trekker bort til Bjørg og Bikko for bingo, lek og hygge
          </p>
        </div>
        <div>
          <h2>
            Lørdag - Fjellværøya
          </h2>
          <p>
            Formiddag - Vielse i Norbotn Kirke på Fjellværøya
            <br/>
            Ettermiddag - Bryllupsfest på Strandheim på Fjellværøya
          </p>
        </div>
        <div>
          <h2>
            Søndag - Knarrlagsundet
          </h2>
          <p>
            Formiddag - Vi samles hos Bjørg og Bikko før vi går søndagstur langs Ulvøystien. Mer om turen {' '}
            <a
              href="https://ut.no/turforslag/118119/ulvystien-rundt-pa-ulvyafjellvrsya-pa-hitra"
              target="_blank"
              rel="noopener noreferrer"
            >
            her
            </a>
            .
          </p>
          <p>
                Etter turen blir det kaffe og kaker hos Bjørg og Bikko.
                </p>
        </div>
      </div>
    </div>    
  );
};

export default Program;
