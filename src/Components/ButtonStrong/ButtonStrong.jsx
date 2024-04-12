import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom';

function ButtonStrong({link,content,changeLoading}) {
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
    <>
      <NavLink 
        to={`/${link}`}
        onClick={(e) => { delayLink(e, link)}} 
        className='buttonStrong'
      >
      {content}
      </NavLink>
    </>
  )
}

export default ButtonStrong
