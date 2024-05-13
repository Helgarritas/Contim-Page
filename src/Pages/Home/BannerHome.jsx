import React from 'react';
import { useRef, useEffect } from 'react';

// Components
import ButtonStrong from '../../Components/ButtonStrong/ButtonStrong';
// image
import background from '/src/assets/background/Banner-Home-Background.png';

function BannerHome(props) {

  return (
    <>
      <section className='bannerHome'>
        <img className='bannerHome__background' src={background} alt="" />
        <article className='bannerHome__container'>
          <div className='bannerHome__content solutionHome__animation--card' style={{transitionDelay:'1.2s'}}>
            <h1>trabajo con <br /> grandes resultados</h1>
            <p className='bannerHome__text'>Somos una empresa minera con mas de 25 años de experiencia especializada en el sector minero.</p>    
          </div>
          <ButtonStrong link={'about'} content={'Revisar'}></ButtonStrong>
        </article>
        <picture>
          <source 
            className='bannerhome__background'
            // src={backgroundBannerH}
            media="(max-width: 768px)"
          />
          {/* <img className='bannerhome__background' src="/src/assets/background/Banner-Inicio.jpg"/> */}
        </picture>
      </section>
    </>
  )
}

BannerHome.propTypes = {}

export default BannerHome
