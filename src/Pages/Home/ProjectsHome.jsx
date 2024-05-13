import { useContext,useEffect,useState } from "react"
import { NavLink,useNavigate } from "react-router-dom";

// Components
import DataProjecetHome from "./Components/DataProjectHome";
import BooleanLoading from "../BooleanLoading";

export default function ProjectsHome() {
  let mycontext = useContext(BooleanLoading)

  // Funcion background black de las cartas

  const cards = document.querySelectorAll('.projects__card');
  const images = document.querySelectorAll('.projects__image');
  
  function CardBackground(indice){
    for(let i=0 ; i<cards.length ; i++){
      if(indice !== i){
        cards[i].classList.add('projects__card--background','projects__card--opacity');
        images[i].classList.add('projects__card--opacity')
      }
    }
  }
  function NoCardBackground(indice){
    const cards = document.querySelectorAll('.projects__card');

    for(let i=0 ; i<cards.length ; i++){
      if(indice !== i){
        cards[i].classList.remove('projects__card--background','projects__card--opacity');
        images[i].classList.remove('projects__card--opacity')
      }
    }
  }


  // Function for Change Loader
  const navigate = useNavigate();
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
    <header className="projects relative">
      <h2 className="projects__title">NUESTROS PROYECTOS</h2>
      <article className="projects__grid">
        {DataProjecetHome.map((obj,index)=>(
          <div className="projects__card" onMouseOut={()=>NoCardBackground(index)} onMouseOver={()=>CardBackground(index)} key={obj.id}>
            <img className="projects__image" src={obj.image} alt="" />
            <p className="projects__card--title projects__paragraph">{obj.title}</p>
            <div className="projects__card--content projects__paragraph">
              <p>{obj.description[1]}</p>
              <p>{obj.description[0]}</p>
            </div>
          </div>
        ))}
      </article>
    </header>
    </>
  )
}

