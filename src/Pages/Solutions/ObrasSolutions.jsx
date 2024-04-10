import React from 'react'
import PropTypes from 'prop-types'

//* Image
import image1 from "/src/assets/background/sub.png";
import image2 from "/src/assets/background/sub.png";


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
                    src={image1} alt="" />
                <p>TUNÉL BOLIVIA</p>
            </div>
            <div className='mineriaSolutions__background--container'>
                <img 
                    className='mineriaSolutions__background--img'
                    src={image2} alt="" />
                <h3>CARRETERA CENTRAL</h3>
            </div>
        </article>
      </section>
    </>
  )
}

ObrasSolutions.propTypes = {}

export default ObrasSolutions
