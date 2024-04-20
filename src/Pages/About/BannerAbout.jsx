import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

//* Images
// import bgBanner from "/src/assets/background/Banner-About.jpg";
import bgBanner from "/src/assets/background/qqqwqwqwqw.png";

function BannerAbout(props) {
  return (
    <>
      <section className='bannerAbout'>
        <article className='bannerAbout__container  solutionHome__animation--card' style={{transitionDelay:'1.2s'}}>
          <h1>MINERIA <br />CON VISIÓN</h1>
          <p>Contmin establecida en 1998 con capital íntegramente peruano , enfocada en  impulsar el crecimiento de la  industria. </p>
        </article>
        <img 
          src={bgBanner}
          className='bannerAbout__background'
        />
      </section>
    </>
  )
}

BannerAbout.propTypes = {}

export default BannerAbout
