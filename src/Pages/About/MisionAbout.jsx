import React from 'react'
import PropTypes from 'prop-types'

import clsx from "clsx"

import { MotionText } from './Components/MotionText';
import { ScrollReveal } from './Components/ScrollReaveal'
const text = "How you design and build matters."

function MisionAbout(props) {
  return (
    <>
      <section className='misionAbout'>
        <article className='misionAbout__container'>
          <h2 className='misionAbout__title'>¿Por qué elegirnos?</h2>
          <div className='misionAbout__contents'>
            <div className='misionAbout__content'>
              <h2>Misión</h2>
              <p>" Expandir nuestra presencia global y reconocidos como un empresa de elección, explorando y desarrollando yacimientos minerales de manera ética y rentable. "</p>
            </div>
            <div className='misionAbout__content'>
              <h2>Visión </h2>
              <p>"Ser pioneros en prácticas de minería seguras y responsables, estableciendo estándares de la industria para la gestión ambiental y la salud ocupacional."</p>
            </div>
             <div className='misionAbout__circle1 misionAbout__cirlcle'></div>
             <div className='misionAbout__circle1-1 misionAbout__cirlcle'></div>
            </div>
        </article>
      </section>
    </>
  )
}


export default MisionAbout

