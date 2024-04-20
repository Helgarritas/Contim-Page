import React, { useEffect } from 'react';
import BannerSolutions from './BannerSolutions';
import ExploracionSolu from './ExploracionSolu';
import MineriaSolutions from './MineriaSolutions';
import MachinesSolutions from './MachinesSolutions';
import ObrasSolutions from './ObrasSolutions';

function Solutions(props) {
  
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
      <BannerSolutions  handleScroll={handleScroll}></BannerSolutions>
      <ExploracionSolu handleScroll={handleScroll}></ExploracionSolu>
      <MachinesSolutions handleScroll={handleScroll}></MachinesSolutions>
      <MineriaSolutions handleScroll={handleScroll}></MineriaSolutions>
      <ObrasSolutions handleScroll={handleScroll}></ObrasSolutions>
    </>
  );
}

export default Solutions;
