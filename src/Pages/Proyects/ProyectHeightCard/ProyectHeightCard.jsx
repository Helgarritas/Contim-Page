import React, { useEffect, useState, useRef } from 'react';

function ProyectHeightCard({ filterDateHeight1 }) {

  //* Funcion para animar las cards.
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.heightProyect__card');
  
      cards.forEach((card) => {
        const windowHeight = window.innerHeight * 0.7;
        const cardTop = card.getBoundingClientRect().top;
  
        if (cardTop <= windowHeight && !card.classList.contains('heightProyect__card--animation')) {
          card.classList.add('heightProyect__card--animation');
        }   
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {filterDateHeight1.map((obj, index) => (
        <div className='heightProyect__height' key={obj.id}>
          <div className='heightProyect__card'>
            <div className='heightProyect__img--container'>
              <img className='heightProyect__card--img' src={obj.image} alt='' />
            </div>
            <div className='heightProyect__card--content'>
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
