import React, { useEffect, useState, useRef } from 'react';

function ProyectHeightCard2({filterDateHeight2}){

  return (
    <>
      {filterDateHeight2.map(obj => (
        <div className='heightProyect2__height solutionHome__animation--card' key={obj.id}> 
          {/* Content */}
          <div className='heightProyect__card'>
            <div className='heightProyect2__img--container'>
              <img className='heightProyect2__card--img' src={obj.image} alt=''/>
            </div>
            <div className='heightProyect2__card--content'>
              <p>{obj.title}</p>
              <p>{obj.description}</p>
              <p>{obj.text}</p>
            </div>
          </div>
          <div className='heightProyect2__msnm'>
            <div className='heightProyect2__msnm--p'>
              <p>{obj.msnm}</p>
              <p>msnm</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProyectHeightCard2;
