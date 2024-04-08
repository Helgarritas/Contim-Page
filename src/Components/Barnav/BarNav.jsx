import React, { useRef, useEffect, useState, useCallback } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import logo from '/src/assets/Logo/Logo-Conmin.png';

function BarNav({ changeLoading }) {
  const buttonListRef = useRef(null);
  const barraNav = useRef(null);
  const prevScrollPos = useRef(0);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(true);

  const handleScroll = useCallback(() => {
    if (buttonListRef.current.classList.contains('moveBtnlist') || barraNav.current.classList.contains('transform__barraNav')) {
      buttonListRef.current.classList.remove('moveBtnlist');
      barraNav.current.classList.remove('transform__barraNav');
    }
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

  const removeXNav = () => {
    if (buttonListRef.current.classList.contains('moveBtnlist') || barraNav.current.classList.contains('transform__barraNav')) {
      buttonListRef.current.classList.remove('moveBtnlist');
      barraNav.current.classList.remove('transform__barraNav');
    }
  };

  const actionButton = () => {
    buttonListRef.current.classList.toggle('moveBtnlist');
    barraNav.current.classList.toggle('transform__barraNav');
  };

  //* Function for time change route
  let navigate = useNavigate();
  const tiempoRestante = 1000; 

  const delayLink = (e, path) => {
    e.preventDefault();
    changeLoading(true)
    setTimeout(() => {
      navigate(path)
    }, tiempoRestante);
  };
  
  return (
    <nav className={`nav ${visible ? 'navBackground' : ''}`}>
      <article className='nav__container'>
        <NavLink className="nav__logo" to="/" onClick={(e) => { delayLink(e, "/"); changeLoading(); }}>
          <img
            className='transition-[.3s]'
            onClick={changeLoading}
            style={{ opacity: visible2 ? '1' : '0', transitionDelay: visible2 ? '.15s' : '0s' }}
            src={logo} alt="" />
        </NavLink>
        <article 
          className="nav__buttonContain" 
          onClick={actionButton} 
          style={{ opacity: visible2 ? '1' : '0', transitionDelay: visible2 ? '.15s' : '0s' }}
        >
          <div className="nav__button" ref={buttonListRef}>
            <span className="l1 sp"></span>
            <span className="l2 sp"></span>
            <span className="l3 sp"></span>
          </div>
        </article>
        <div className="nav__links" ref={barraNav} style={{ opacity: visible2 ? '1' : '0', transitionDelay: visible2 ? '.15s' : '0s' }}>
          <NavLink className={'nav__link'} to="/" onClick={(e) => { delayLink(e, "/")}}>Portada</NavLink>
          <NavLink className={'nav__link'} to="/about" onClick={(e) => { delayLink(e, "/about")}}>Nosotros</NavLink>
          <NavLink className={'nav__link'} to="/solution" onClick={(e) => { delayLink(e, "/solution")}}>Soluciones</NavLink>
          <NavLink className={'nav__link'} to="/project" onClick={(e) => { delayLink(e, "/project")}}>Proyectos</NavLink>
          <NavLink className={'nav__link'} to="/blog/1" onClick={(e) => { delayLink(e, "/blog/1")}}>Blog</NavLink>
        </div>
      </article>
    </nav>
  );
}

export default BarNav;
