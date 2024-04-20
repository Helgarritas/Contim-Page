import { NavLink } from 'react-router-dom'
import React,{useEffect,useState} from 'react';

//* Components
import DataImageMachine from './Components/DataImageMachine';
import ButtonStrong from '../../Components/ButtonStrong/ButtonStrong';

function MachinesSolutions(props) {
  const [Roll, setRoll] = useState(1);

  const changeProject = (index) => {
      setRoll(index)
  }
  return (
    <>
      <section className='machinesSolutions'>
        <article className='machinesSolutions__container'>
          <div className='machinesSolutions__title solutionHome__animation--card'>
            <h2>Alquiler de Maquinaria</h2>
            <p>Proporcionamos una amplia gama de maquinaria especializada de marcas líderes. Desde equipos de carga y transporte hasta herramientas de excavación y manipulación de materiales, nuestra flota está lista para enfrentar los desafíos más exigentes en cualquier proyecto minero.</p>
          </div>
          <div className="projectsHome__projets solutionHome__animation--card">
            {/* Etiqueta para Imagenes */}
            {DataImageMachine.map((obj)=>(
              <img 
                key={obj.id}
                className="projectsHome__background" 
                src={obj.image}
                style={{width:Roll=== obj.id?`100%`:`20px`,height:Roll===obj.id?`100%`:`20px`,borderRadius:Roll===obj.id?`0`:`50%`,bottom:Roll===obj.id?`0`:`95px`,left:Roll===obj.id?`0`:`33px` }}
              />
            ))}
            <div className="machinesSolutions__descriptions ml-[1rem] mb-[0.5rem]">
              {/* Etiqueta para el nombre del equipo */}
              <div className='relative h-[62px] w-[100%] overflow-hidden'>
                {DataImageMachine.map((obj)=>(
                  <p
                    key={obj.id} 
                    className='machinesSolutions__model'
                    style={{transform: Roll===obj.id?`translateY(0%)`:`translateY(110%)`}}
                  >
                    {obj.machine}
                  </p>
                ))}
              </div>
              {/* Etiqueta la descripcion del equipo */}
              <div className='relative h-[60px] w-[100%] sm:w-[50%] overflow-hidden mb-6'>
                {DataImageMachine.map((obj)=>(
                  <p
                    key={obj.id} 
                    className='machinesSolutions__model--description' 
                    style={{transform: Roll===obj.id?`translateY(0%)`:`translateY(110%)`}}
                  >
                    {obj.description}
                  </p>
                ))}
              </div>
              <ButtonStrong link={'tel:01-7356273'} content={'Consultar'} border={'.5px solid white'}></ButtonStrong>
            </div>
          </div>
          <div className="projectsHome__indexs">
            {DataImageMachine.map((obj)=>(
              <p key={obj.id} style={{background: Roll==obj.id?`#F5CB1F`:`transparent`}} className="projecytsHome__index" onClick={()=>changeProject(obj.id)}></p>
            ))}
          </div>
        </article>
      </section>
    </>
  )
}

export default MachinesSolutions
