import React from 'react'
import PropTypes from 'prop-types'

import iso from '/src/assets/background/iso.png';

function IsoAbout(props) {
  let dataIsoAbout = [
    {
      id: 1,
      image: iso,
      title: 'ISO  2141',
      text: 'Sistema de Gestión Ambiental'
    },
    {
      id: 2,
      image: iso,
      title: 'ISO  2141',
      text: 'Sistema de Gestión Ambiental'
    },
    {
      id: 3,
      image: iso,
      title: 'ISO  2141',
      text: 'Sistema de Gestión Ambiental'
    },
  ]

  return (
    <>
      <section className='isoAbout'>
        <article className='isoAbout__container'>
          <div className='isoAbout__content'>
            <h2>Nuestra Certificación </h2>
            <p>Contamos con un sistema  integrado de gestión, certificado por SGS para garantizar la calidad en nuestros procesos, así como la seguridad, medio ambiente y salud ocupacional de nuestros colaboradores en cada uno de nuestros proyectos</p>
          </div>
          <div className='isoAbout__cards'>
            {
              dataIsoAbout.map((obj) => (
                <div className='isoAbout__card' key={obj.id}>
                  <img src={obj.image} alt="" />
                  <p>{obj.title}</p>
                  <p>{obj.text}</p>
                </div>
              ))
            }
          </div>
        </article>  
      </section>
    </>
  )
}
export default IsoAbout
