import React from 'react';
import gudrunogsimon from './assets/images/gudrunogsimon.jpg';

const HeadPicture = () => {
  return (
    <div id="HeadPicture">
      <img src={gudrunogsimon} alt="Gudrun og Simon" />
      <div className="name-n-date">
        <h1>Gudrun & Simon</h1>
        <h2>
            5. august 2023
        </h2>
        <h2>
            Norbotn Kirke på Fjellværøya
        </h2>
      </div>
    </div>
  );
};

export default HeadPicture;
