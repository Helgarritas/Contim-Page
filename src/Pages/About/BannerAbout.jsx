import React from 'react'
import PropTypes from 'prop-types'
import { useRef } from 'react';
import { useEffect } from 'react';

//* Images
import bgBanner from "/src/assets/background/Banner-About.jpg";

function BannerAbout(props) {
  const backgroundBanner = useRef();

  useEffect(()=>{
    const backgroundBannerRoll = backgroundBanner.current;
    const backgroundBannerHeight = backgroundBannerRoll.clientHeight*0.5;
    console.log(backgroundBannerHeight)
    window.addEventListener('scroll',()=>{
      let windowTop = window.scrollY;
      if(windowTop > backgroundBannerHeight){
        backgroundBannerRoll.classList.add('opacityBackgroundBanner');
      }else{
        backgroundBannerRoll.classList.remove('opacityBackgroundBanner');
      }
    })
  },[])
  return (
    <>
      <section className='bannerAbout'>
        <article className='bannerAbout__container'>
          <h1>MINERIA <br />CON VISIÓN</h1>
          <p>Contmin establecida en 1998 con capital íntegramente peruano , enfocada en  impulsar el crecimiento de la  industria. </p>
        </article>
        <img 
          src={bgBanner}
          className='bannerAbout__background'
          ref={backgroundBanner}
        />
      </section>
    </>
  )
}

BannerAbout.propTypes = {}

export default BannerAbout
