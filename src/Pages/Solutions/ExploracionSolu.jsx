import React from 'react'
import PropTypes from 'prop-types'

//* Components
import CardExploSol from './Components/CardExploSol'

function ExploracionSolu(props) {

  let dataSolutionsSol = [
    {id:1,
      icon:   
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
      <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334"/>
      </svg>,
      title: `Cateo`,
      text: `Usamos la mineria para ganar territorio en el sector desde hace muschos años de la mineria`
    },
    {id:2,
      icon: 
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-hdd-network" viewBox="0 0 16 16">
      <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8.5v3a1.5 1.5 0 0 1 1.5 1.5h5.5a.5.5 0 0 1 0 1H10A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5H.5a.5.5 0 0 1 0-1H6A1.5 1.5 0 0 1 7.5 10V7H2a2 2 0 0 1-2-2zm1 0v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m6 7.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5"/>
      </svg>,
      title: `Prospección`,
      text: `Usamos la mineria para ganar territorio en el sector desde hace muschos años de la mineria`
    },
    {id:3,
      icon: 
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-front" viewBox="0 0 16 16">
      <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2z"/>
      </svg>,
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
            <CardExploSol icon={dataSolutionsSol[0].icon} title={dataSolutionsSol[0].title} text={dataSolutionsSol[0].text}></CardExploSol>
            <div className='exploSolution__circle'>
              <p></p>
              <p></p>
              <p></p>
            </div>
            <CardExploSol icon={dataSolutionsSol[1].icon} title={dataSolutionsSol[1].title} text={dataSolutionsSol[1].text}></CardExploSol>
            <div className='exploSolution__circle'>
              <p></p>
              <p></p>
              <p></p>
            </div>
            <CardExploSol icon={dataSolutionsSol[2].icon} title={dataSolutionsSol[2].title} text={dataSolutionsSol[2].text}></CardExploSol>
          </div>
        </article>
      </section>
    </>
  )
}

ExploracionSolu.propTypes = {}

export default ExploracionSolu;