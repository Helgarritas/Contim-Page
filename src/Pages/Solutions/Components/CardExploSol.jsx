import React from 'react'

function CardExploSol({image,title,text}) {
  return (
    <>
      <div className='exploSolutions__card' >
        <img className='exploSolutions__card--img' src={image} alt="" />
        <div className='exploSolutions__content'>
          <p>{title}</p>
          <p className='exploSolutions__content--text'>{text}</p>
          <p className='exploSolutions__more'>+</p>
        </div>
      </div>
    </>
  )
}

export default CardExploSol
