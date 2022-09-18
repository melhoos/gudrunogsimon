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
            Kleskode
            <Lottie id={'kimono'} icon={kimono} sizeInPx={60} />
          </h2>
          <p>
            Vi krysser fingrene for sommer og sol - kom sommerlig og pent kledd!
          </p>
        </div>
        <div>
          <h2>
            Gaver
            <Lottie id={'gift'} icon={gift} sizeInPx={60} />
          </h2>
          <p>
            Det viktigste for oss er at du vil være med å feire dagen.
          </p>
          <p>
            Om du ønsker å gi oss en bryllupsgave finner dere gaveliste her og her. 
          </p>
        </div>
        <div>
          <h2>
            Pakkeliste
            <Lottie id={'suitcase'} icon={suitcase} sizeInPx={60} />
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
