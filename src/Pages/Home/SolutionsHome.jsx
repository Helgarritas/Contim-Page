import { React,useEffect } from 'react';

//Components
import dataSolutionsHome from './Components/DataSolutionsHome';

function SolutionsHome(props) {
  // Funcion para animar las cards.
  useEffect(() => {
    const cards = document.querySelectorAll('.solutionsHome__card');
    const title = document.querySelector('.solutionsHome__title');

    const handleScroll = () => {
      const windowHeight = window.innerHeight * 0.7;
      
      cards.forEach((element,index)=>{
        const cardsTop = element.getBoundingClientRect().top; 

        if (cardsTop <= windowHeight && !element.classList.contains('solutionsHome__animation')) {
          element.classList.add('solutionsHome__animation');
        }   
      })

      if(title.getBoundingClientRect().top <= windowHeight){
        title.classList.add('solutionsHome__title--animation');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className='solutionsHome'>
        <article className='solutionsHome__container'>
          {/* Título de la sección */}
          <div className='solutionsHome__title'>
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
