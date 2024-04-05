import React from 'react'
import { NavLink } from 'react-router-dom'

//* Components
import footerIcons from './FooterIcons';
import IconsMedia from '../IconsMedia/IconsMedia';

function Footer(props) {
  return (
    <>
      <footer className='footer'>
        <article className='footer__container'>
          <div className='footer__title'>
            <h2>Sigamos <br /> Creciendo</h2>
              <NavLink  to={`tel:01-7356273`} className='footer__title--button'>
                <p>Contactanos</p>
                <svg className='hover: text-black>' xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none">
                  <path d="M1.66666 9.99984C1.66666 5.39984 3.53333 1.6665 5.83333 1.6665H8.33333V6.6665H5.83333V13.3332H8.33333V18.3332H5.83333C3.53333 18.3332 1.66666 14.5998 1.66666 9.99984Z" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </NavLink>
          </div>
          <div className='footer__links'>
            <div className='footer__medias'>
              {footerIcons.map((obj)=>(
                <div className='footer__media' key={obj.id}>
                  {obj.icon}
                  <NavLink to={obj.link} target='_black' key={obj.id}>{obj.text}</NavLink>
                </div>   
              ))}
            </div>
            <div className='footer__description'>
              <NavLink to={`/about`}>Nosotros</NavLink>
              <NavLink to={`/project`}>Proyectos</NavLink>
              <NavLink to={`/solution`}>Soluciones</NavLink>
              {/* <NavLink to={`/`}>Noticias</NavLink> */}
            </div>
            <div className='footer__social'>
              {IconsMedia.map((obj,index)=>(
                <NavLink to={obj.link} target='_black' key={index}>
                  {obj.icon}
                </NavLink>                
              ))}
            </div>
          </div>
        </article>
      </footer>
    </>
  )
}

Footer.propTypes = {}

export default Footer
