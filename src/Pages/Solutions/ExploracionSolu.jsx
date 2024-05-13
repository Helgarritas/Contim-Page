import React,{useEffect, useRef} from 'react';

// Image
// import exploración1 from '/src/assets/Users/Exploracionn.png';
// import exploración2 from '/src/assets/Users/Exploración2.png';
// import exploración3 from '/src/assets/Users/Mask group.png';

import exploración1 from '/src/assets/Users/1a.png';
import exploración2 from '/src/assets/Users/2a.png';
import exploración3 from '/src/assets/Users/3a.png';


function ExploracionSolu(props) {

  let dataSolutionsSol = [
    {id:1,
      image: exploración1,   
      title: `Cateo`,
      text: `Usamos la mineria para ganar territorio en el sector desde hace muschos años de la mineria`
    },
    {id:2,
      image: exploración2, 
      title: `Prospección`,
      text: `Usamos la mineria para ganar territorio en el sector desde hace muschos años de la mineria`
    },
    {id:3,
      image: exploración3, 
      title: `Exploración`,
      text: `Usamos la mineria para ganar territorio en el sector desde hace muschos años de la mineria`
    },
  ]

  const p = useRef();
  useEffect(() => {
    console.log(p.current.scrollHeight);
    
    return () => {
      
    };
  }, []);

  return (
    <>
      <section className='exploSolutions'>
        <article className='exploSolutions__container'>
          {/* Título de la sección */}
          <div className='exploSolutions__description solutionHome__animation--card'>
            <h2>Exploración de Yacimientos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquam quisquam numquam optio, accusamus odio?</p>
          </div>
          {/* Cards para soluciones */}
          <div className='exploSolutions__cards'>
            {dataSolutionsSol.map((obj)=>(
              <div className='exploSolutions__card' key={obj.id}>
                <img className='exploSolutions__card--img' src={obj.image} alt="" />
                <div className='exploSolutions__content solutionHome__animation--card'>
                  <p>{obj.title}</p> 
                  <p className='exploSolutions__content--text' ref={p}>{obj.text}</p>
                  <p className='exploSolutions__more'>+</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  )
}

export default ExploracionSolu;
