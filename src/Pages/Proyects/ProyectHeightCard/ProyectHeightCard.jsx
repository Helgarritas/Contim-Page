import React, { useEffect, useState, useRef } from 'react';

function ProyectHeightCard({ filterDateHeight1 }) {
  return (
    <>
      {filterDateHeight1.map((obj) => (
        <div className='heightProyect__height solutionHome__animation--card' key={obj.id}>
          <div className='heightProyect__card'>
            <div className='heightProyect__img--container'>
              <img className='heightProyect__card--img' src={obj.image} alt='' />
            </div>
            <div className='heightProyect__card--content '>
              <p>{obj.title}</p>
              <p>{obj.description}</p>
              <p>{obj.text}</p>
            </div>
          </div>
          <div className='heightProyect__msnm'>
            <div className='heightProyect__msnm--p'>
              <p>{obj.msnm}</p>
              <p>msnm</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProyectHeightCard;
