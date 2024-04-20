import React from 'react'

//*Components
// import bgBannerProyect from '/src/assets/background/pepita2.jpg';
import bgBannerProyect from '/src/assets/background/bbbbbbbbbbb.png';

function ProyectBanner(props) {
  return (
    <>
      <article className='bannerProyect'>
        <img className='bannerProyect__background' src={bgBannerProyect}/>
        <section className='bannerProyect__contents'>
          <div className='bannerProyect__content solutionHome__animation--card' style={{transitionDelay:'1.2s'}}>
            <h1>Exploramos <br/>Oportunidades</h1>
            <p>En nuestra trayectoria hemos logrado encontrar y expandir nuestras oportunidades de trabajo sobre territorio peruano y extranjero. </p>
          </div>
        </section>
      </article>
    </>
  )
}

export default ProyectBanner
