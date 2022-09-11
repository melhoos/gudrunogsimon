import React from 'react';

const Program = () => {
  return (
    <div id="Information">
    <p>
      Velkommen til hjemmesiden for bryllupet vårt!
      <br>
      </br>
      Her finner du programmet og all informasjon om bryllupshelgen. 
      <br>
      </br>
      Svar utbes innen 01. mai 2023 via skjemaet dere finner under <i> Svar her</i>.
      </p>
      <p> 
      - Gudrun & Simon -
     </p>
    
    <h1>
      Program
    </h1>
      <div className="bullets">
        <div>
          <h2>
            Fredag
          </h2>
          <p>
            Fredagtekst 
          </p>
        </div>
        <div>
          <h2>
            Lørdag
          </h2>
          <p>
            lørdagstekst
          </p>
        </div>
        <div>
          <h2>
            SØndag
          </h2>
          <p>
            søndagstekst
          </p>
        </div>
      </div>
    </div>
  );
};

export default Program;
