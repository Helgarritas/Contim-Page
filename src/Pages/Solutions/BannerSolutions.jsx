import React from 'react'

//* Components
import bgBannerSol from '/src/assets/background/Banner-Solutions.jpg';

function BannerSolutions(props) {
  return (
    <>
      <section className='bannerSolutions'>
        <img className='bannerSolutions__background' src={bgBannerSol} alt="" />
        <article className='bannerSolutions__container'>
            <h1>Impulsando <br /> Soluciones</h1>
            <p>Usamos nuestra experiencia para promover un trabajo innovador en cada desafío.</p>
        </article>
      </section>
    </>
  ) 
}

BannerSolutions.propTypes = {}

export default BannerSolutions
