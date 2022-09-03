import React from 'react';
import Lottie from './common/Lottie';
import envelope from './assets/lotties/envelope.json';
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
            RSVP
            <Lottie id={'mail'} icon={envelope} sizeInPx={60} /> 
          </h2>
          <p>
            Svar innen 1. mai 2023 om du/dere kommer via svarskjema.
          </p>
        </div>
        <div>
          <h2>
            Kleskode
            <Lottie id={'kimono'} icon={kimono} sizeInPx={60} />
          </h2>
          <p>
            Været er variende i Nord-Norge, men vi håper selvfølgelig på sol og 20 grader, gjerne døgnet rundt. Kom sommerlig pent.
          </p>
        </div>
        <div>
          <h2>
            Gaver
            <Lottie id={'gift'} icon={gift} sizeInPx={60} />
          </h2>
          <p>
            Vi forventer ingen bryllupsgave. Det viktigste for oss er at du vil være med å feire dagen.
          </p>
          <p>
            Dersom du ikke er enig i det og allikevel ønsker å gi oss noe hadde vi blitt veldig glad for penger til bryllupsreise.
          </p>
        </div>
        <div>
          <h2>
            Pakkeliste
            <Lottie id={'suitcase'} icon={suitcase} sizeInPx={60} />
          </h2>
          <p>
            Været nord for polarsirkelen kan være så mangt - Ta med joggesko/tursko og allværsjakke, så kommer du langt!
          </p>
          <p>
            Sjekk {' '}
            <a
              href="https://www.yr.no/nb/v%C3%A6rvarsel/daglig-tabell/11-48728/Norge/Nordland/Steigen/Helnessund"
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
