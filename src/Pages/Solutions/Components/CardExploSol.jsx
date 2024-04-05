import React from 'react'
import PropTypes from 'prop-types'

function CardExploSol({icon,title,text}) {
  return (
    <>
      <div className='exploSolutions__card' >
        <div className='soutionsHome__content'>
          <p>{icon}</p>
          <p>{title}</p>
        </div>
        <div className='flex flex-col items-center gap-[10px]'>
          <p className='exploSolutions__textOpacity'>{text}</p>
          <p className='exploSolutions__more'>+</p>
        </div>
      </div>
    </>
  )
}

CardExploSol.propTypes = {}

export default CardExploSol
