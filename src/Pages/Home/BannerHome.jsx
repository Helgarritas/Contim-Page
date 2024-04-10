import React from 'react';
import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

//* Image
import backgroundBannerH from "/src/assets/background/Banner-Inicio-Movil.png" ;
//* Components
import ButtonStrong from '../../Components/ButtonStrong/ButtonStrong';

function BannerHome(props) {

  return (
    <>
      <section className='bannerHome'>
        <article className='bannerHome__container'>
          <div className='bannerHome__content'>
            <h1>trabajo con <br /> grandes resultados</h1>
            <p className='bannerHome__text'>Somos una empresa minera con mas de 25 años de experiencia especializada en el sector minero.</p>    
          </div>
          <ButtonStrong link={'about'} content={'Revisar'}></ButtonStrong>
        </article>
        <picture>
          <source 
            className='bannerhome__background'
            src={backgroundBannerH}
            media="(max-width: 768px)"
          />
          <img className='bannerhome__background' src="/src/assets/background/Banner-Inicio.jpg"/>
        </picture>
      </section>
    </>
  )
}

BannerHome.propTypes = {}

export default BannerHome
