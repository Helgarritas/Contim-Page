import { React,useEffect,useContext } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';

//Components
import dataSolutionsHome from './Components/DataSolutionsHome';
import BooleanLoading from '../../Pages/BooleanLoading';
//image 

// import image from '/src/assets/background/111111.png';
function SolutionsHome() {
  let myContext = useContext(BooleanLoading);

  let navigate = useNavigate();
  const tiempoRestante = 1000; 

  const delayLink = (e, path) => {
    e.preventDefault();
    myContext(true)
    setTimeout(() => {
      navigate(path)
    }, tiempoRestante);
  };
  return (
    <>
      <section className='solutionsHome'>
        <article className='solutionsHome__container'>
          {/* Título de la sección */}
          <h2 className='solutionsHome__title'>ESPECIALIZACIONES</h2>
          {/* Cards para soluciones */}
          <div className='solutionsHome__cards'>
            {dataSolutionsHome.map((obj) => (
              <div className='solutionsHome__card solutionHome__animation--card' key={obj.id}>
                <img className='solutionsHome__image' src={obj.image} alt="" />
                <div className='solutionsHome__content'>
                  <p>{obj.title}</p>
                  <p>{obj.text}</p>
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
