import { useEffect,useState } from "react"
import { NavLink,useNavigate } from "react-router-dom";
import DataImageProjects from "./Components/DataImageProjects";

export default function ProjectsHome({changeLoading}) {
  const [Roll, setRoll] = useState(1)

  const changeProject = (index) => {
      setRoll(index)
  }

  //* Function for Change Loader
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
    <header className="projects relative ">
      <article className="projects__mastercontents">
        <h2 className="projects__title">NUESTROS PROYECTOS</h2>
        <div className="projectsHome__projets">
          <div className="projects__button--container">
            <NavLink 
              to={`/project`} 
              className="projects__button"
              onClick={(e) => { delayLink(e, '/solution')}}
            >
            Ir
            </NavLink>
          </div>
          {/* Etiqueta para Imagenes en el carrusel */}
          {DataImageProjects.map((obj)=>(
            <img 
                key={obj.id}
                src={obj.image}
                className="projectsHome__background" 
                style={{
                  width:Roll=== obj.id?`100%`:`20px`,
                  height:Roll===obj.id?`100%`:`20px`,
                  borderRadius:Roll===obj.id?`0`:`50%`,
                  bottom:Roll===obj.id?`0`:`95px`,
                  left:Roll===obj.id?`0`:`33px`,
                }}
            />
          ))}
          {/* Etiqueta para el contenido del carrusel */}
          <div className="projectHome__descriptions">
            {/* Etiqueta para el nombre del proyecto */}
            <div className="projectHome__project--name">
              {DataImageProjects.map((obj)=>(
                <h2 key={obj.id} style={{transform: Roll===obj.id?`translateY(0%)`:`translateY(110%)`}}>{obj.project}</h2>
              ))}
            </div>
            {/* Etiqueta para la funcion que realizo la empresa en el proyecto */}
            <div className="projectsHome__description">
              <p>
                {DataImageProjects.map((obj)=>(
                  <span key={obj.id} style={{transform: Roll===obj.id?`translate(-50%,0%)`:`translate(-50%,120%)`}}>{obj.colaboration[0]}</span>
                ))}
              </p>
              <p>
                {DataImageProjects.map((obj)=>(
                  <span key={obj.id} style={{transform: Roll===obj.id?`translate(-50%,0%)`:`translate(-50%,120%)`}}>{obj.colaboration[1]}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
        {/* Botones inferiores para el carrusel */}
        <div className="projectsHome__indexs">
          {DataImageProjects.map((obj)=>(
            <p 
              key={obj.id} 
              className="projecytsHome__index" 
              style={{background: Roll===obj.id?`#F5CB1F`:`transparent`}}
              onClick={()=>changeProject(obj.id)}>
            </p>
          ))}
        </div>
      </article>
    </header>
    </>
  )
}

