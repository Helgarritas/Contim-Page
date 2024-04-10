import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
function NoticeHome({changeLoading}) {
  console.log(`esto en mi nuevo ser: ${changeLoading}`);
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

  let navigate = useNavigate();
  const tiempoRestante = 1000; 

  const delayLink = (e, path) => {
    e.preventDefault();
    changeLoading(true)
    setTimeout(() => {
      navigate(path)
    }, tiempoRestante);
  };


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
                  <NavLink to={`/blog/${obj.id}`} onClick={(e)=>delayLink(e,`/blog/${obj.id}`)} className='noticeHome__now'>Conocer</NavLink>
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
