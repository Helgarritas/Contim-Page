import React,{useEffect} from 'react'

// Components
import image from '/src/assets/background/bosque1.jpg';
// image
import mision from '/src/assets/background/Mision.jpg';
import vision from '/src/assets/background/Vision.jpg';

function MisionAbout(props) {
  
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
      <section className='misionAbout'>
        <article className='misionAbout__container'>
          <h2 className='misionAbout__title'>NUESTRO PROPÓSITO</h2>
          <div className='misionAbout__contents'>
            <div className='misionAbout__content'>
              <img src={mision} alt="" />
              <div className='solutionHome__animation--card'>
                <h2>Misión</h2>
                <p>" Expandir nuestra presencia global y reconocidos como un empresa de elección, explorando y desarrollando yacimientos minerales de manera ética y rentable. "</p>
              </div>
            </div>
            <div className='misionAbout__content'>
              <img src={vision} alt="" />
              <div className='solutionHome__animation--card'>
                <h2>Visión </h2>
                <p>"Ser pioneros en prácticas de minería seguras y responsables, estableciendo estándares de la industria para la gestión ambiental y la salud ocupacional."</p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

export default MisionAbout

