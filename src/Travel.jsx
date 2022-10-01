import React from 'react';
//import gudrunogsimon2 from './assets/images/gudrunogsimon2.jpg';
//import gudrunogsimon3 from './assets/images/gudrunogsimon3.jpg';


const Travel = () => {
  return (
    <div id="Travel">
      <h1>
        Reise
      </h1>
      <div className="travel">
        <span className="description">
         
          <p>
            Man kommer seg til Hitra med bil, båt eller buss. Skal man bruke kollektivt er det praktisk å først komme seg til Trondheim.
          </p>
          <h3>
            Hurtigbåt
          </h3>
          <p>
            Det går hurtigbåt fra Trondheim Hurtigbåtterminal til Sandstad på Hitra. Videre går det korresponderende buss (422 Dyrøy) til Fillan Busstasjon (se atb.no for rutetider). Turen tar 2 til 2,5 time, avhengig av rute. Det er mulig å komme seg videre til Fjellværøya/Ulvøya med buss, men det lureste er å høre med noen med bil som kan plukke deg opp.
          </p>
          <h3>
            Direktebuss
          </h3>
          <p>
            Ta buss 420 mot Frøya via Orkanger og Hitra fra Trondheim Sentralstasjon. Turen tar drøye 2,5 time. Se {' '}
            <a
              href="https://www.atb.no/reiseplanlegger/?direction=1&adv=1&GetTR0=1&GetTR1=1&tplang=no&from=Trondheim%20Sentralstasjon%20(Trondheim)&to=Fillan%20busstasjon%20(Hitra)&Time=14%3A40&Date=03.10.2022&changepause=0&changepenalty=1"
              target="_blank"
              rel="noopener noreferrer"
            >
            atb.no
            </a>
            for rutetider.
          </p>
  
          <h3>
            Bil
          </h3>
          <p> Kommer informasjon her</p>
        </span>
        {/* <img
          className="gudrunogsimon2"
          src={gudrunogsimon2}
          alt="Gudrun og Simon"
        /> */}
      </div>
      <div className="accommodation">
        {/* <img
          className="gudrunogsimon3"
          src={gudrunogsimon3}
          alt="Gudrun og Simon"
        /> */}
        <span className="description">
          <h2>Overnatting</h2>
          <p> Kommer informasjon her </p>
        </span>
      </div>
    </div>
  );
};

export default Travel;
