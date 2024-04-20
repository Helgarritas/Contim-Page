import React,{useEffect} from 'react'

import ProyectBanner from './ProyectBanner';
import ProyectHeight from './ProyectHeight';
import ProyectAmbient from './ProyectAmbient';

function Proyect(props) {

  const handleScroll = () => {
    const cards = document.querySelectorAll('.solutionHome__animation--card');
    const windowHeight = window.innerHeight * 0.7;
    
    cards.forEach((element,index)=>{
      const cardsTop = element.getBoundingClientRect().top; 
      if (cardsTop <= windowHeight && !element.classList.contains('solutionsHome__animation')) {
        element.classList.add('solutionsHome__animation');
      }   
    });
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll();
    };

    window.addEventListener('scroll', handleScrollEvent);
    handleScrollEvent();
  
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <>
      <ProyectBanner handleScroll={handleScroll}></ProyectBanner>
      <ProyectHeight handleScroll={handleScroll}></ProyectHeight>
      <ProyectAmbient handleScroll={handleScroll}></ProyectAmbient>
    </>
  )
}

export default Proyect
