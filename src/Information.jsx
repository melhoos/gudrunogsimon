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
      <div className="bullets">
        <div>
          <h2>
            <Lottie id={'kimono'} icon={kimono} sizeInPx={60} />
            Antrekk
          </h2>
          <p>
            Vi krysser fingrene for sommer og sol!
            <br/>
            Fredag: Casual pent
            <br/>
            Lørdag: Dress/sommerlig pent
          </p>
        </div>
        <div>
          <h2>
            <Lottie id={'gift'} icon={gift} sizeInPx={60} />
            Gaver
          </h2>
          <p>
            Vi setter stor pris på at dere vil bli med oss ut i havgapet for feiring. Hvis dere i tillegg ønsker å gi oss en bryllupsgave kan dere se på ønskelisten vår her.
          </p>
        </div>
        <div>
          <h2>
            <Lottie id={'suitcase'} icon={suitcase} sizeInPx={60} />
            Pakkeliste
          </h2>
          <p>
            Ta med varme klær til kveldene, casual pent antrekk til fredag, antrekk til bryllup lørdag, turklær til søndagsturen og badetøy for de modige.
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
            {' '} på forhånd. Forhåpentligvis trenger du også solbriller!
        </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
