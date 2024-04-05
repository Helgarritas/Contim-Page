import React from 'react'
import { NavLink } from 'react-router-dom';

function ButtonStrong({link,content}) {
  return (
    <>
      <NavLink to={`/${link}`} className='buttonStrong'>{content}</NavLink>
    </>
  )
}

export default ButtonStrong
