import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function CommmentsHome(props) {
  let dataComments = [
    {id:0,
      comment: '" Contamos con Contmin como nuestro socio confiable para todas nuestras operaciones .Contamos con Contmin como nuestro socio confiable para todas nuestras operaciones "',
      user: 'Aaron Mendoza',
      work: 'Desingner'
    },
    {id:1,
      comment: '" Contamos con Contmin como nuestro socio confiable para todas nuestras operaciones .Contamos con Contmin como nuestro socio confiable para todas nuestras operaciones "',
      user: 'Diana Linarez',
      work: 'Desingner'
    },
    {id:2,
      comment: '" Contamos con Contmin como nuestro socio confiable para todas nuestras operaciones .Contamos con Contmin como nuestro socio confiable para todas nuestras operaciones "',
      user: 'Sara Sianquez',
      work: 'Desingner'
    },
    {id:3,
      comment: '" Contamos con Contmin como nuestro socio confiable para todas nuestras operaciones .Contamos con Contmin como nuestro socio confiable para todas nuestras operaciones "',
      user: 'Andre Benjamin',
      work: 'Desingner'
    },
  ]

  const [multipleX, setMultipleX] = useState(0);
  const [translateInX, settranslateInX] = useState(0)

  const barraSlider = useRef();

  const translateSlider = (valor) => {
    setMultipleX(prevMultipleX => prevMultipleX + valor);
  };
  
  useEffect(() => {
    const barraSliderRoll = barraSlider.current;
    const widthBarraSlider = barraSliderRoll.clientWidth + 150;
    settranslateInX(widthBarraSlider * multipleX);
  }, [multipleX]);

  return (
    <>
      <section className='commentsHome'>
        <article className='commentsHome__container'>
          <div className='commentsHome__circleS commentsHome__circle'></div>
          <div className='commentsHome__circleM commentsHome__circle'></div>
          <div className='commentsHome__circleX commentsHome__circle'></div>
          {/* Description */}
          <div className='commentsHome__descriptions'>
            <div className='commentsHome__description'>
              <h2 className=''>¿ Que dicen nuestros <br />clientes ?</h2>
            </div>
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
              {dataComments.map((obj)=>(
                  <div 
                    className='commentsHome__sliders' 
                    ref={barraSlider} 
                    key={obj.id}
                    style={{ 
                      color: obj.id*-1 == multipleX ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,.2)',
                      scale: obj.id*-1 == multipleX ? '1' : '.8'
                    }}
                    >
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


export default CommmentsHome
