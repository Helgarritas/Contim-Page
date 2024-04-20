import React from 'react'
import { useState,useEffect,useRef } from 'react';

// Components
import DataCommentsHome from './Components/DataCommentHome';

function CommmentsHome(props) {

  const [multipleX, setMultipleX] = useState(0);
  const [translateInX, settranslateInX] = useState(0)

  const barraSlider = useRef();

  const translateSlider = (valor) => {
    setMultipleX(num => num + valor);
  };
  
  useEffect(() => {
    const barraSliderRoll  = barraSlider.current;
    const widthBarraSlider = barraSliderRoll.clientWidth + 150;
    settranslateInX(widthBarraSlider * multipleX);
  },[multipleX]);

  return (
    <>
      <section className='commentsHome'>
        <article className='commentsHome__container'>
          {/* Buttons */}
          <div className='commentsHome__descriptions'>
            <h2>¿ Que dicen nuestros <br />clientes ?</h2>
            <div className='commentsHome__buttons'>
              <button  onClick={() => translateSlider(+1)} disabled = {multipleX == 0}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12H21" stroke="black" strokeOpacity="1" strokeWidth=".6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 6L3 12L9 18" stroke="black" strokeOpacity="1" strokeWidth=".6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button  onClick={() => translateSlider(-1)} disabled = {multipleX == -3}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 12L3 12" stroke="black" strokeOpacity="1" strokeWidth=".6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 18L21 12L15 6" stroke="black" strokeOpacity="1" strokeWidth=".6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>  
          </div>
          {/* Solutions */}
          <div className='commentsHome__slider'>
            <div className='commentsHome__slider--container' style={{transform:`translateX(${translateInX}px)`}}>
              {DataCommentsHome.map((obj)=>(
                <div 
                  className='commentsHome__sliders' 
                  ref={barraSlider} 
                  key={obj.id}
                  style={{ 
                    color: obj.id*-1 == multipleX ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,.2)',
                    scale: obj.id*-1 == multipleX ? '1' : '.8'
                }}>
                  <p>{obj.comment}</p>
                  <div className='commentsHome__slider--user'>
                    <p>{obj.user}</p>
                    <p>{obj.work}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>
    </>
  )
}


export default CommmentsHome;
