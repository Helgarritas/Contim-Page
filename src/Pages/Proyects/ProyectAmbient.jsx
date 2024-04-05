import React from 'react'
import PropTypes from 'prop-types'

function ProyectAmbient(props) {
  return (
    <>
      <article className='ambientProyect'>
        {/* <video className='ambientproject__video' autoPlay loop muted>
          <source src="/src/assets/background/sierra-dron3.mov" type="video/mp4"/> 
        </video> */}
        <img className='ambientProyect__background' src="/src/assets/background/bosque1.jpg" alt="" />
        <section className='ambientProyect__contains'>
          <h5>Responsabilidad Ambiental</h5>
          <p>Somos una entidad minera comprometida y respetuosa con el entorno natural.. Nuestra filosofía se refleja en un Plan de Biodiversidad meticulosamente diseñado, implementado internamente en todas nuestras operaciones.</p>
        </section>
      </article>
    </>
  )
}

export default ProyectAmbient
