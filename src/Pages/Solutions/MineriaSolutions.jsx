import React from 'react'
import PropTypes from 'prop-types'

//* Components
import subterranea  from '/src/assets/background/Subterranea-Background.png';
import cieloabierto from '/src/assets/background/Openpit-Background.png';

function MineriaSolutions(props) {
  const DataMineria = [
    {id: 1,
      image: subterranea,
      name: ['MINERIA','SUBTERRANEA']
    },
    {id: 2, 
      image:cieloabierto,
      name: ['MINERIA','CIELO ABIERTO']
    }
  ]

  return (
    <>  
      <section className='mineriaSolutions  relative'>
        <p></p>
        <p></p>
        <article className='mineriaSolutions__container'>
          {DataMineria.map((obj)=>(
            <div className='mineriaSolutions__background--container' key={obj.id}>
              <img 
                  className='mineriaSolutions__background--img'
                  src={obj.image}/>
              <p>{obj.name[0]} <br/> {obj.name[1]}</p>
            </div>
          ))}
          <div className='mineriaSolutions__content'>
              <h2>EXTRACCIÓN</h2>
              <p>Ofrecemos un enfoque holístico gracias a nuestros estudios de Ingeniería Avanzada, donde nuestro equipo de expertos trabaja para idear soluciones a medida, adaptadas a los desafíos únicos de cada proyecto.</p>
          </div>
        </article>s
      </section>
    </>
  )
}

export default MineriaSolutions
