import React from 'react'

//* Components
// import bgBannerSol from '/src/assets/background/Banner-Solutions.jpg';
import bgBannerSol from '/src/assets/background/dwaaaaaaaaaa.png';

function BannerSolutions(props) {
  return (
    <>
      <section className='bannerSolutions'>
        <img className='bannerSolutions__background' src={bgBannerSol} alt="" />
        <article className='bannerSolutions__container solutionHome__animation--card' style={{transitionDelay:'1.2s'}}>
            <h1>Impulsando <br /> Soluciones</h1>
            <p>Usamos nuestra experiencia para promover un trabajo innovador en cada desafío.</p>
        </article>
      </section>
    </>
  ) 
}

export default BannerSolutions
