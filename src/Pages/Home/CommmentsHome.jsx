import React from 'react'
import { useState,useEffect,useRef } from 'react';

// Components
import DataCommentsHome from './Components/DataCommentHome';
import MouseCursor from '../../Components/MouseCursor/MouseCursor';

function CommmentsHome({animationMouse,setsliderWidth}) {
  const parent = useRef();

  useEffect(() => {
    const slider = document.querySelector('.commentsHome__slider--container');
    const sliderImage = document.querySelectorAll('.commentsHome__image');

    const gap = 140;
    const imageWidth = sliderImage[0].clientWidth;
    const sliderWidth = (imageWidth+gap)*4;
    setsliderWidth(sliderWidth)
    slider.style.setProperty('--gap-slider', `${gap}px`);
    slider.style.width = `${sliderWidth}px`;

    // funcion para background del body
    const parentRoll = parent.current;
    const windowHeight = window.innerHeight*0.2;

    window.addEventListener('scroll',function(){
      const parentTop = parentRoll.getBoundingClientRect().top; 
      const parentBottom = parentRoll.getBoundingClientRect().bottom; 
      
      parentTop <= windowHeight && (parentBottom >= 70 && parentBottom <= parentRoll.clientHeight+140)
        ?document.body.style.background = 'black'
        :document.body.style.background = 'white'
    })
    

    // fUNCION PwhiteRA ANIMAR MOUSE
    animationMouse()


  },[animationMouse,setsliderWidth,parent]);

  return (
    <>
      <section className='commentsHome' ref={parent}>
        <article className='commentsHome__container'>
          {/* Solutions */}
          <div className='commentsHome__slider'>
            <div className='commentsHome__slider--container mouse__animation--scope'>
              {DataCommentsHome.map((obj)=>(
                <div 
                  className='commentsHome__sliders' 
                  key={obj.id}
                >
                  <img className='commentsHome__image' src={obj.image} alt="Imagen del cliente" />
                  <div className='commentsHome__description'>
                    <p className='commentsHome__text'>{obj.comment}</p>
                    <div className='commentsHome__slider--user'>
                      <p>{obj.user}</p>
                      <p>{obj.work}</p>
                      <p>{obj.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <MouseCursor></MouseCursor>
          </div>
        </article>
      </section>
    </>
  )
}


export default CommmentsHome;
