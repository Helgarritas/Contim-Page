import React,{useContext,useRef,useEffect} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

// Components
import BooleanLoading from '../BooleanLoading';
// Image2
import image1 from '/src/assets/background/Blog-background.png';
import image2 from '/src/assets/background/Blog-Background2.png';
import image3 from '/src/assets/background/Blog-background.png';
import image4 from '/src/assets/background/Blog-Background2.png';


function NoticeHome() {
  let mycontext = useContext(BooleanLoading);

  const dataNotice = [
    {id: 1, 
      title: `Contmin inicia Proyectos en Bolivia`,
      date: `Perú - 20/02/2023`,
      text: `En esfuerzo por expandirnos decidimos tomar contratos en el extranjero`,
      image: image1,
    },
    {id: 2, 
      title: `Contmin inicia Proyectos en Bolivia`,
      date: `Perú - 20/02/2023`,
      text: `En esfuerzo por expandirnos decidimos tomar contratos en el extranjero`,
      image: image2,
    },
    {id: 3, 
      title: `Contmin inicia Proyectos en Bolivia`,
      date: `Perú - 20/02/2023`,
      text: `En esfuerzo por expandirnos decidimos tomar contratos en el extranjero`,
      image: image3,
    },
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

  //* function for background body
  const parent = useRef();

  useEffect(() => {
    // funcion para background del body
    const parentRoll = parent.current;
    const windowHeight = window.innerHeight*0.2;

    // window.addEventListener('scroll',function(){
    //   const parentTop = parentRoll.getBoundingClientRect().top; 
    //   if(parentTop <= windowHeight) return document.body.removeAttribute('style');
    // })

  },[parent]);

  return (
    <>
      <section className='noticeHome' ref={parent}>
        <article className='noticeHome__container'>
          <h2>Conoce Nuestro Blog</h2>
          <div className='noticeHome__cards'>
            {dataNotice.map((obj)=>(
              <div className='noticeHome__card' key={obj.id}>
                <img className='noticeHome__image' src={obj.image} alt="Foto de portada" />
                <div className='noticeHome__card--content'>
                  <p>{obj.date}</p>
                  <p>{obj.title}</p>
                </div>
                <NavLink 
                  to={`/blog/${obj.id}`} 
                  className='noticeHome__link'
                  onClick={(e) => { delayLink(e, `/blog/${obj.id}`)}} 
                >
                REVISAR
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
