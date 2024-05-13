import React, { useCallback } from 'react';

const MouseTracker = ({ children,sliderWidth }) => {
  
  const animationMouse = useCallback(() => {
    let container = document.querySelector('.mouse__animation--scope');
    let mouse = document.querySelector('.mouseCursor');
 
    // Funcoin para evento de move

    const handleMouseMove = (event) => {
      const mouseX = event.clientX - 50;
      const mouseY = event.clientY + window.scrollY -50;

      mouse.style.translate = `${mouseX}px ${mouseY}px`
    };
    
    let a = 0;
    let b = 0;
    function translateSlider(){// function para move translate
        let x = event.clientX;
        if(x < a){
          b>=-sliderWidth+900 ? b-=36 : 0
        }else{
          b<=0 ? b+=36 : 0
        }
        a = x;
        container.style.translate = `${b}px`
    }
    // Funciones para evento de Cllick
    const handleMouseDown = (event) => {
      event.preventDefault();
      mouse.classList.add('mouse__click');
      // function para move translate
      container.addEventListener('mousemove', translateSlider)
    };
    
    const handleMouseUp = () => {
      mouse.classList.remove('mouse__click');
      container.removeEventListener('mousemove', translateSlider)
    };
    
    // Funciones para evento de hover
    const handleMouseOver = () => {
      mouse.classList.add('mouse__start');
    };

    const handleMouseOut = () => {
      mouse.classList.remove('mouse__start');
    };

      container.addEventListener('mouseover', handleMouseOver);
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseout', handleMouseOut);
      container.addEventListener('mousedown', handleMouseDown);
      container.addEventListener('mouseup', handleMouseUp);

    return () => {
      container.removeEventListener('mouseover', handleMouseOver);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseout', handleMouseOut);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseup', handleMouseUp);
    };
  }, [sliderWidth]);

  return <>{children(animationMouse)}</>;
};

export default MouseTracker;
