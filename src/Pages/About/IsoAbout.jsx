import React,{ useEffect } from 'react';
import iso from '/src/assets/background/iso.png';

function IsoAbout(props) {
  let dataIsoAbout = [
    {
      id: 1,
      image: iso,
      title: 'ISO  2141',
      text: 'Sistema de Gestión Ambiental'
    },
    {
      id: 2,
      image: iso,
      title: 'ISO  2141',
      text: 'Sistema de Gestión Ambiental'
    },
    {
      id: 3,
      image: iso,
      title: 'ISO  2141',
      text: 'Sistema de Gestión Ambiental'
    },
  ]

  
  useEffect(() => {
    const cards = document.querySelectorAll('.solutionHome__animation--card');

    const handleScroll = () => {
      const windowHeight = window.innerHeight * 0.7;
      
      cards.forEach((element,index)=>{
        const cardsTop = element.getBoundingClientRect().top; 
        if (cardsTop <= windowHeight && !element.classList.contains('solutionsHome__animation')) {
          element.classList.add('solutionsHome__animation');
        }   
      })

    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className='isoAbout'>
        <article className='isoAbout__container'>
          <div className='isoAbout__content solutionHome__animation--card'>
            <h2>¿Por qué elegirnos?</h2>
            <p>Contamos con un sistema integrado de gestión, certificado por SGS para garantizar la calidad en nuestros procesos, así como la seguridad, medio ambiente y salud ocupacional de nuestros colaboradores en cada uno de nuestros proyectos</p>
          </div>
          <div className='isoAbout__cards'>
            {
              dataIsoAbout.map((obj) => (
                <div className='isoAbout__card solutionHome__animation--card' key={obj.id}>
                  <img src={obj.image} alt="" />
                  <p>{obj.title}</p>
                  <p>{obj.text}</p>
                </div>
              ))
            }
          </div>
        </article>  
      </section>
    </>
  )
}
export default IsoAbout
