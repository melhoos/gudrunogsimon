import React from 'react';
import Lottie from './common/Lottie';

import kimono from './assets/lotties/kimono.json';
import gift from './assets/lotties/gift.json';
import suitcase from './assets/lotties/suitcase.json';


const Information = () => {
  return (
    <div id="Information">
      <h1>
        Praktisk informasjon
      </h1>
      
        <a href="TBA.pdf" target="_blank">TEKST PÅ LINK</a>
      
      <div className="bullets">
        <div>
          <h2>
            <Lottie id={'kimono'} icon={kimono} sizeInPx={60} />
            Antrekk
          </h2>
          <p>
            Vi krysser fingrene for sommer og sol!
           </p>
          <p>
            Fredag - Casual pent
            <br/>
            Lørdag - Dress/sommerlig pent
          </p>
        </div>
        <div>
          <h2>
            <Lottie id={'gift'} icon={gift} sizeInPx={60} />
            Gaver
          </h2>
          <p>
            Vi setter stor pris på at dere vil bli med oss ut i havgapet for feiring. 
          </p>
          <p>
            Hvis dere i tillegg ønsker å gi oss en bryllupsgave kan dere se på bryllupslisten vår hos Tilbords {' '}
            <a
              href="https://www.tilbords.no/onskeliste/118485"
              target="_blank"
              rel="noopener noreferrer"
            >
                her
            </a>
            {' '} og en ønskeliste over ting som finnes andre steder {' '}
            <a
              href="https://docs.google.com/spreadsheets/d/1DXSJ2Eglk-CV56TlQ9_cgYeg9hXH27D7S7VipLsAEt0/edit#gid=0"
              target="_blank"
              rel="noopener noreferrer"
            >
                her
            </a>
            . Vi oppfordrer alle til å kjøpe brukt - like fint og bedre for store og små. 
          </p>
        </div>
        <div>
          <h2>
            <Lottie id={'suitcase'} icon={suitcase} sizeInPx={60} />
            Pakkeliste
          </h2>
          <p>
            Antrekk til fredag og lørdag
            <br/>
            Varme klær til å kunne være ute på kveldene
            <br/>
            Turklær til søndagsturen 
            <br/>
            Badetøy for de modige
            </p>
          <p>
            Sjekk {' '}
            <a
              href="https://www.yr.no/nb/v%C3%A6rvarsel/daglig-tabell/1-215074/Norge/Tr%C3%B8ndelag/Hitra/Fjellv%C3%A6rs%C3%B8ya"
              target="_blank"
              rel="noopener noreferrer"
            >
                værmeldingen
            </a>
            {' '} på forhånd. Forhåpentligvis trenger du også solkrem og solbriller!
        </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
