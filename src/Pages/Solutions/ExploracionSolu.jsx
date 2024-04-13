import React from 'react'
import PropTypes from 'prop-types'

// Components
import CardExploSol from './Components/CardExploSol'
// Image
import image from '/src/assets/background/Openpit-Background.png';


function ExploracionSolu(props) {

  let dataSolutionsSol = [
    {id:1,
      image: image,   
      title: `Cateo`,
      text: `Usamos la mineria para ganar territorio en el sector desde hace muschos años de la mineria`
    },
    {id:2,
      image: image, 
      title: `Prospección`,
      text: `Usamos la mineria para ganar territorio en el sector desde hace muschos años de la mineria`
    },
    {id:3,
      image: image, 
      title: `Exploración`,
      text: `Usamos la mineria para ganar territorio en el sector desde hace muschos años de la mineria`
    },
  ]
  return (
    <>
      <section className='exploSolutions'>
        <article className='exploSolutions__container'>
          {/* Título de la sección */}
          <div className='exploSolutions__description'>
            <h2>EXPLORACIÓN  DE YACIMIENTOS</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquam quisquam numquam optio, accusamus odio?</p>
          </div>
          {/* Cards para soluciones */}
          <div className='exploSolutions__cards'>
            <CardExploSol image={dataSolutionsSol[0].image} title={dataSolutionsSol[0].title} text={dataSolutionsSol[0].text}></CardExploSol>
            <div className='exploSolution__circle'>
              <p></p>
              <p></p>
              <p></p>
            </div>
            <CardExploSol image={dataSolutionsSol[1].image} title={dataSolutionsSol[1].title} text={dataSolutionsSol[1].text}></CardExploSol>
            <div className='exploSolution__circle'>
              <p></p>
              <p></p>
              <p></p>
            </div>
            <CardExploSol image={dataSolutionsSol[2].image} title={dataSolutionsSol[2].title} text={dataSolutionsSol[2].text}></CardExploSol>
          </div>
        </article>
      </section>
    </>
  )
}

ExploracionSolu.propTypes = {}

export default ExploracionSolu;