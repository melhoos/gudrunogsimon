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
            Det går hurtigbåt fra Trondheim Hurtigbåtterminal til Sandstad på Hitra. Videre går det korresponderende buss (422 Dyrøy) til Fillan Busstasjon. Turen tar 2 til 2,5 time, avhengig av rute. Det er mulig å komme seg videre til Fjellværøya/Ulvøya med buss, men det lureste er å høre med noen med bil som kan plukke deg opp. Se {' '}
            <a
              href="https://www.atb.no/reiseplanlegger/?direction=1&adv=1&GetTR0=1&GetTR4=1&tplang=no&from=Trondheim%20Hurtigb%C3%A5tterminal%20(Trondheim)&to=Sandstad%20vegstasjon%20(Hitra)&Time=14%3A40&Date=03.10.2022&changepause=0&changepenalty=1"
              target="_blank"
              rel="noopener noreferrer"
            >
            atb.no
            </a>
            {' '} for rutetider. 
          </p>
          <h3>
            Direktebuss
          </h3>
          <p>
            Ta buss 420 mot Frøya via Orkanger og Hitra fra Trondheim Sentralstasjon til Fillan Busstasjon. Turen tar drøye 2,5 time. Se {' '}
            <a
              href="https://www.atb.no/reiseplanlegger/?direction=1&adv=1&GetTR0=1&GetTR1=1&tplang=no&from=Trondheim%20Sentralstasjon%20(Trondheim)&to=Fillan%20busstasjon%20(Hitra)&Time=14%3A40&Date=03.10.2022&changepause=0&changepenalty=1"
              target="_blank"
              rel="noopener noreferrer"
            >
            atb.no
            </a>
            {' '} for rutetider.
          </p>
  
          <h3>
            Bil
          </h3>
          <p> Hitra, Frøya og Fjellværøya er tilknyttet fastlandet med broer og tunnel. Hitratunnelen var ved ferdigstilling i 1994 verdens dypeste undersjøiske tunnel (fakta). </p>
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
          <h1>Overnatting</h1>
          <p> 
          Vi har reservert rom ved følgende overnattingssteder i Øyriket: 
          <br/>
            - Hjorten Hotell - 20/15 min med bil til Fjellværøya/Knarrlagsund.
          <br/>
            - Knarren Brygge - 10 min med bil til Fjellværøya.
          <br/>
            - Fjellvær Gjestegård - 5/12 min med bil til kirken/Knarrlagsund.
           </p>
           <p>
              Gudrun og Simon bor på Hjorten Hotell. 
          </p>
          <h3>Hjorten Hotell i Fillan</h3>
          <p>
             <a
              href="https://www.hjortenhotell.no"
              target="_blank"
              rel="noopener noreferrer"
            >
            hjortenhotell.no
            </a>
            </p>
           <p>
            Enkelt- /dobbeltrom 1395/1595 kr per natt. <br/>
            For de som ønsker å booke hotellrom gjøres det ved å sende epost til post@hjortenhotell.no. Merk bestillingen med “Bryllup Gudrun og Simon Fjeldvær”. Det er mulig å sette inn en ekstraseng på alle rom. 
          </p>
           <h3>Knarren Brygge i Knarrlagsundet</h3>
          <p>
             knarren.no
           </p>
           <p>
            2-/3-/4-sengs rom:  790/890/1490 kr per natt <br/>
            Ta kontakt med Simon på simbrafje@gmail.com for informasjon hvis du ønsker å booke.
          </p>
          <h3>Fjellvær Gjestegård på Fjellværøya</h3>
          <p>
            fjellvar.no
          </p>
           <p>
            En hytte med 8 (12) sengeplasser  - 2800 kr per natt <br/>
            En hytte med 3 sengeplasser - 1000 kr per natt <br/>
            Tre hytter med 4 sengeplasser - 1500 kr per natt <br/>
            Mulighet for telt/bobil/campingvogn <br/>
            Ta kontakt med Simon på simbrafje@gmail.com for informasjon hvis du ønsker å booke.
          </p>
          <p>
            Det er mulig å leie sauna/badestamp ved havet utenfor hyttene.
          </p>
        </span>
      </div>
    </div>
  );
};

export default Travel;
