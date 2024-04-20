import React,{useContext} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

// Components
import BooleanLoading from '../BooleanLoading';

function NoticeHome() {
  let mycontext = useContext(BooleanLoading);

  const dataNotice = [
    {id: 1, 
      footnote: `Contmin inicia Proyectos en Bolivia`,
      date: `Perú - 20/02/2023`,
      text: `En esfuerzo por expandirnos decidimos tomar contratos en el extranjero`
    },
    {id: 2, 
      footnote: `Contmin inicia Proyectos en Bolivia`,
      date: `Perú - 20/02/2023`,
      text: `En esfuerzo por expandirnos decidimos tomar contratos en el extranjero`
    },
    {id: 3, 
      footnote: `Contmin inicia Proyectos en Bolivia`,
      date: `Perú - 20/02/2023`,
      text: `En esfuerzo por expandirnos decidimos tomar contratos en el extranjero`
    },
    {id: 4, 
      footnote: `Contmin inicia Proyectos en Bolivia`,
      date: `Perú - 20/02/2023`,
      text: `En esfuerzo por expandirnos decidimos tomar contratos en el extranjero`
    }
  ]

  //* Function for a Boolean Loeader
  let navigate = useNavigate();
  const tiempoRestante = 1000; 

  const delayLink = (e, path) => {
    e.preventDefault();
    mycontext(true)
    setTimeout(() => {
      navigate(path)
    }, tiempoRestante);
  };

  return (
    <>
      <section className='noticeHome'>
        <article className='noticeHome__container'>
          <h2>Conoce Nuestro Blog</h2>
          <div className='noticeHome__cards'>
            {dataNotice.map((obj)=>(
              <div className='noticeHome__card' key={obj.id}>
                <div className='noticeHome__card--content'>
                  <p>{obj.footnote}</p>
                  <p>{obj.date}</p>
                  <p>{obj.text}</p>
                </div>
                <NavLink 
                  to={`/blog/${obj.id}`} 
                  className='noticeHome__link'
                  onClick={(e) => { delayLink(e, `/blog/${obj.id}`)}} 
                >
                Saber más
                </NavLink>
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  )
}

export default NoticeHome
