import React from 'react';
import gudrunogsimon2 from './assets/images/gudrunogsimon2.jpg';
import gudrunogsimon3 from './assets/images/gudrunogsimon3.jpg';


const Travel = () => {
  return (
    <div id="Travel">
      <h1>
        Reise og overnatting
      </h1>
      <div className="travel">
        <span className="description">
          <h2>Til Fjellværøya</h2>
          <p>
            Første steg er å komme seg til Trondheim. Fra Trondheim kommer du deg til Fjellværøya på tre måter: Rutebåt + buss, direktebuss eller med bil.
          </p>
          <h3>
            Rutebåt + buss
          </h3>
          <p>
            Det går hurtigbåt fra Trondheim Hurtigbåtterminal til Sandstad på Hitra. Videre går det korresponderende buss (422 Dyrøy) til Fillan Busstasjon. Se AtB.no for rutetider, og turen tar mellom 2 og 2,5 timer avhengig av rute. Om du skal lenger enn Fillan kan det være det går rutebuss vidre, men det lureste er å høre med noen med bil som kan plukke deg opp.
          </p>
          <h3>
            Direktebuss
          </h3>
          <p>
            Ta buss 420 mot Frøya via Orkanger og Hitra fra Trondheim Sentralstasjon. Turen tar drøye 2,5 timer. Du finner reiseplanlegger på Atb.no, ev. rutetider 
            <a
              href="https://www.atb.no/getfile.php/1396300-1653459129/Rutetabeller/22_region_sommer/AtB_Linje420.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
            her
            </a>
            .  
          </p>
  
          <h3>
            Bil
          </h3>
          <p> Kommer informasjon her</p>
        </span>
        <img
          className="gudrunogsimon2"
          src={gudrunogsimon2}
          alt="Gudrun og Simon"
        />
      </div>
      <div className="accommodation">
        <img
          className="gudrunogsimon3"
          src={gudrunogsimon3}
          alt="Gudrun og Simon"
        />
        <span className="description">
          <h2>Overnatting</h2>
          <p> Kommer informasjon her </p>
        </span>
      </div>
    </div>
  );
};

export default Travel;
