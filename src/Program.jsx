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
              href="https://www.atb.no/reiseplanlegger/?direction=1&adv=1&GetTR0=1&GetTR4=1&tplang=no&from=Trondheim%20Hurtigb%C3%A5tterminal%20(Trondheim)&to=Sandstad%20vegstasjon%20(Hitra)&Time=14%3A40&Date=03.10.2022&changepause=0&changepenalty=1"
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
