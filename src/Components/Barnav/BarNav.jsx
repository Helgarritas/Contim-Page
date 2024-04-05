import React, { useRef, useEffect, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

//* Components
import logo from '/src/assets/Logo/Logo-Conmin.png';

function BarNav(props) {
  const navRef = useRef(null);
  const prevScrollPos = useRef(0);
  const [visible, setVisible] = useState(false); // Inicializa como false
  const [visible2, setVisible2] = useState(true); // Inicializa como false

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos.current > currentScrollPos || currentScrollPos < 100);
    setVisible2(prevScrollPos.current > currentScrollPos || currentScrollPos < 100);
    prevScrollPos.current = currentScrollPos;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav className={`nav ${visible ? 'navBackground' : ''}`} ref={navRef}>
      <article className='nav__container'>
        <NavLink to={`/`}>
        <img 
          className=' transition-[.3s]'
          style={{opacity:! visible2?'0':'1',transitionDelay:visible2?'.15s':'0s'}}
          src={logo} aslt="" />
        </NavLink>
        <div className={`nav__links`} style={{opacity:! visible2?'0':'1',transitionDelay:visible2?'.15s':'0s'}}>
          <NavLink to={`/about`} className='nav__link'>Nosotros</NavLink>
          <NavLink to={`/solution`} className='nav__link'>Soluciones</NavLink>
          <NavLink to={`/project`} className='nav__link'>Proyectos</NavLink>
          <NavLink to={`blog/1`} className='nav__link'>Blog</NavLink>
        </div>
      </article>
    </nav>
  );
}

BarNav.propTypes = {};

export default BarNav;
