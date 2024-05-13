import React,{useEffect} from 'react';

//* Image
import image1 from "/src/assets/background/sub.png";
import image2 from "/src/assets/background/sub.png";


function ObrasSolutions(props) {
  return (
    <>
      <section className='obrasSolution'>
        <article className='obrasSolution__container '>
            <div className='obrasSolution__content solutionHome__animation--card'>
              <h2>Obras Civiles</h2>
              <p>Ofrecemos un enfoque holístico gracias a nuestros estudios de Ingeniería Avanzada, donde nuestro equipo de expertos trabaja para idear soluciones a medida, adaptadas a los desafíos únicos de cada proyecto.</p>
            </div>
            <div className='obrasSolution__background--container'>
              <img 
                className='obrasSolution__background--img'
                src={image1} alt="" />
              <p>TUNÉL BOLIVIA</p>
            </div>
            <div className='obrasSolution__background--container'>
              <img 
                className='obrasSolution__background--img'
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
