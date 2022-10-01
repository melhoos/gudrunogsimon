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
            Fredag
          </h2>
          <p>
            ca. 18 - Middag i Knarrlagsundet på Knarren Brygge
          <br/>
            ca. 20 - Vi trekker bort til Bjørg og Bikko for bingo og hygge
          </p>
        </div>
        <div>
          <h2>
            Lørdag
          </h2>
          <p>
            Formiddagen - Vielse i Norbotn Kirke på Fjellværøya
            <br/>
            Ettermiddagen - Bryllupsfest på Strandheim på Fjellværøya
          </p>
        </div>
        <div>
          <h2>
            Søndag
          </h2>
          <p>
            Formiddagen - Vi samles i Knarrlagsundet hos Bjørg og Bikko før vi går søndagstur langs Ulvøystien. Mer om turen {' '}
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