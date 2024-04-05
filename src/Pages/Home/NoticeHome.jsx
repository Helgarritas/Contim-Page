import React from 'react'
import PropTypes from 'prop-types'

function NoticeHome(props) {
  const dataNotice = [
    {id: 1, 
      // image: `/src/assets/background/solution - subterraneo.png`,
      footnote: `Contmin inicia Proyectos en Bolivia`,
      date: `Perú - 20/02/2023`,
      text: `En esfuerzo por expandirnos decidimos tomar contratos en el extranjero`
    },
    {id: 2, 
      // image: `/src/assets/background/solution - subterraneo.png`,
      footnote: `Contmin inicia Proyectos en Bolivia`,
      date: `Perú - 20/02/2023`,
      text: `En esfuerzo por expandirnos decidimos tomar contratos en el extranjero`
    },
    {id: 3, 
      // image: `/src/assets/background/solution - subterraneo.png`,
      footnote: `Contmin inicia Proyectos en Bolivia`,
      date: `Perú - 20/02/2023`,
      text: `En esfuerzo por expandirnos decidimos tomar contratos en el extranjero`
    },
    {id: 4, 
      // image: `/src/assets/background/solution - subterraneo.png`,
      footnote: `Contmin inicia Proyectos en Bolivia`,
      date: `Perú - 20/02/2023`,
      text: `En esfuerzo por expandirnos decidimos tomar contratos en el extranjero`
    }
  ]

  return (
    <>
      <section className='noticeHome'>
        <article className='noticeHome__container'>
          <div className='noticeHome__title'>
            <h2>Conoce Nuestro Blog</h2>
          </div>
          <div className='noticeHome__cards'>
            {
              dataNotice.map((obj)=>(
                <div className='noticeHome__card' key={obj.id}>
                  <div className='noticeHome__card--content'>
                    <p>{obj.footnote}</p>
                    <p>{obj.date}</p>
                    <p>{obj.text}</p>
                  </div>
                  <a href="" className='noticeHome__now'>Conocer</a>
                </div>
              ))
            }
          </div>
        </article>
      </section>
    </>
  )
}

export default NoticeHome
