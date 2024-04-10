import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function SolutionsHome(props) {

  let dataSolutionsHome = [
    {id:1,
      icon: <span className="material-symbols-outlined">browse</span>,
      title: `Mineria Subterranea`,
      text: `Usamos la mineria para ganar territorio en el sector desde hace muschos años de la mineria`
    },
    {id:2,
      icon: <span className="material-symbols-outlined">hub</span>,
      title: `Mineria Open Pit`,
      text: `Usamos la mineria para ganar territorio en el sector desde hace muschos años de la mineria`
    },
    {id:3,
      icon: <span className="material-symbols-outlined">manufacturing</span>,
      title: `Planificación y Desarrollo`,
      text: `Usamos la mineria para ganar territorio en el sector desde hace muschos años de la mineria`
    },
    {id:4,
      icon: <span className="material-symbols-outlined">hive</span>,
      title: `Alquiler de Maquinaria`,
      text: `Usamos la mineria para ganar territorio en el sector desde hace muschos años de la mineria`
    },
  ]
  return (
    <>
      <section className='solutionsHome'>
        <article className='solutionsHome__container'>
          {/* Título de la sección */}
          <div className='solutionsHome__description'>
            <h2 className=''>Nuestras Especializaciones</h2>
          </div>
          {/* Cards para soluciones */}
          <div className='solutionsHome__cards'>
            {dataSolutionsHome.map((obj) => (
              <div className='solutionsHome__card' key={obj.id}>
                <div className='soutionsHome__content'>
                  <p>{obj.icon}</p>
                  <p>{obj.title}</p>
                </div>
                <div className='flex flex-col items-center gap-[10px]'>
                  <p className='solutionsHome__textOpacity'>{obj.text}</p>
                  <p className='solutionsHome__more'>+</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  )
}


export default SolutionsHome;
