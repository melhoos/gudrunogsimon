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
            Man kommer seg til Hitra med bil, båt eller buss. Det enkleste er å kjøre bil (fyll gjerne opp bilen), men det er også mulig med kollektivtransport.
          </p>
          <h3>
            Hurtigbåt/Direktebuss
          </h3>
          <p>
            Hurtigbåt fra Trondheim Hurtigbåtterminal til Sandstad på Hitra. Videre går det korresponderende buss (422 Dyrøy) til Fillan Busstasjon.
          <p>
            Direktebuss 420 fra Trondheim Sentralstasjon mot Frøya til Fillan Busstasjon.
          </p>
          <p>
            Se {' '}
            <a
              href="https://www.atb.no/reiseplanlegger/?direction=1&adv=1&GetTR0=1&GetTR1=1&GetTR4=1&tplang=no&from=Trondheim%20hurtigb%C3%A5tterminal%20(Trondheim)&to=Fillan%20busstasjon%20(Hitra)&Time=10%3A00&Date=04.08.2023&changepause=0&changepenalty=1"
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
            FULLT: Fjellvær Gjestegård - 5/12 min med bil til kirken/Knarrlagsund.
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
             <a
              href="https://www.knarren.no"
              target="_blank"
              rel="noopener noreferrer"
            >
            knarren.no
            </a>
            </p>
           <p>
            2-/3-/4-sengs rom:  790/890/1490 kr per natt <br/>
            Ta kontakt med Simon på simbrafje@gmail.com for informasjon hvis du ønsker å booke.
          </p>
          <h3>FULLT - Fjellvær Gjestegård på Fjellværøya - FULLT</h3>
          <p>
             <a
              href="https://www.fjellvar.no"
              target="_blank"
              rel="noopener noreferrer"
            >
            fjellvar.no
            </a>
            </p>
           <p>
            En hytte med 8 (12) sengeplasser  - 2800 kr per natt <br/>
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
