import React from 'react'

//*Components
import bgBannerProyect from '/src/assets/background/pepita2.jpg';

function ProyectBanner(props) {
  return (
    <>
      <article className='bannerProyect'>
        <img className='bannerProyect__background' src={bgBannerProyect}/>
        <section className='bannerProyect__contents'>
          <div className='bannerProyect__content'>
            <h1>Exploramos <br/>Oportunidades</h1>
            <p>En nuestra trayectoria hemos logrado encontrar y expandir nuestras oportunidades de trabajo sobre territorio peruano y extranjero. </p>
          </div>
        </section>
      </article>
    </>
  )
}

export default ProyectBanner
