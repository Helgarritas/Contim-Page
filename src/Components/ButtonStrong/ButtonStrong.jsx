import React,{useContext} from 'react'
import { NavLink,useNavigate } from 'react-router-dom';

// Components
import BooleanLoading from '../../Pages/BooleanLoading';

function ButtonStrong({link,content}) {

  let myContext = useContext(BooleanLoading)

  let navigate = useNavigate();
  const tiempoRestante = 1000; 

  const delayLink = (e, path) => {
    e.preventDefault();
    myContext(true)
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
