import { React,useEffect } from 'react';

//Components
import dataSolutionsHome from './Components/DataSolutionsHome';

function SolutionsHome() {

  return (
    <>
      <section className='solutionsHome'>
        <article className='solutionsHome__container'>
          {/* Título de la sección */}
          <h2 className='solutionsHome__title solutionHome__animation--card'>Nuestras Especializaciones</h2>
          {/* Cards para soluciones */}
          <div className='solutionsHome__cards'>
            {dataSolutionsHome.map((obj) => (
              <div className='solutionsHome__card solutionHome__animation--card' key={obj.id}>
                <div className='soutionsHome__content'>
                  <p>{obj.icon}</p>
                  <p>{obj.title}</p>
                  <p>{obj.text}</p>
                  <p className='solutionsHome__button'>Saber más</p>
                  <p className='<solutionsHome__more>'>+</p>
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
