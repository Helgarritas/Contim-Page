import React from 'react'
import PropTypes from 'prop-types'

function ObrasSolutions(props) {
  return (
    <>
      <section className='mineriaSolutions'>
        <article className='mineriaSolutions__container '>
            <div className='mineriaSolutions__content'>
                <h2>OBRAS CIVILES</h2>
                <p>Ofrecemos un enfoque holístico gracias a nuestros estudios de Ingeniería Avanzada, donde nuestro equipo de expertos trabaja para idear soluciones a medida, adaptadas a los desafíos únicos de cada proyecto.</p>
            </div>
            <div className='mineriaSolutions__background--container'>
                <img 
                    className='mineriaSolutions__background--img'
                    src="/src/assets/background/sub.png" alt="" />
                <p>TUNÉL BOLIVIA</p>
            </div>
            <div className='mineriaSolutions__background--container'>
                <img 
                    className='mineriaSolutions__background--img'
                    src="/src/assets/background/sub.png" alt="" />
                <h3>CARRETERA CENTRAL</h3>
            </div>
        </article>
      </section>
    </>
  )
}

ObrasSolutions.propTypes = {}

export default ObrasSolutions
