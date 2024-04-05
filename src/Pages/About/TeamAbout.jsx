import React from 'react';
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';

//* Components
import user1 from '/src/assets/Users/use1.png';
import user2 from '/src/assets/Users/user2.png';
import IconsMedia from '../../Components/IconsMedia/IconsMedia';

function TeamAbout(props) {
  const [iconsFilter, setIconsFilter] = useState([]);

  useEffect(() => {
    setIconsFilter(IconsMedia.slice(0, 3)); // Corregido a IconsMedia
  }, [IconsMedia]); // Corregido a IconsMedia


  const items = [
    {
      name: "Boris Lepikhin",
      title: "Product Designer",
      image: user2,
    },
    {
      name: "Aaron Francis",
      title: "Media Giant",
      image: user2,
    },
    {
      name: "Aaron Francis",
      title: "Media Giant",
      image: user2,
    },
    {
      name: "Aaron Francis",
      title: "Media Giant",
      image: user2,
    },
    {
      name: "Aaron Francis",
      title: "Media Giant",
      image: user2,
    },

  ]

  

  return (
    <>
      <section className='teamAbout'>
        <article className='teamAbout__container'>
          <h1 className="teamAbout__title">NUESTRO EQUIPO</h1>
            <div className='teamAbout__gerencia'>
              <h2 className='teamAbout__subtitle'>GERENCIA</h2>
              {/* <h3 className='teamAbout__subtitle'>GERENCIA</h3> */}
              <div>
                <div className="teamoAbout__cards">
                  {items.map((obj, index) => (
                    <div className='teamoAbout__card' key={index}>
                      <img className='teamAbout__card--img' src={obj.image} alt="" />
                      <div className='teamoAbout__card--content'>
                        <div className='teamAbout__card--user' >
                          <p>{obj.name}</p>
                          <p>{obj.title}</p>                          
                        </div>
                        <div className='teamoAbout__card--media'>
                          {iconsFilter.map((obj,index)=>(
                            <NavLink key={index}>
                              {obj.icon}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='teamAbout__gerencia mt-3'>
              <h2 className='teamAbout__subtitle'>
                ADMINISTRACIÓN
              </h2>
              <div>
                <div className="teamoAbout__cards">
                  {items.map((obj, index) => (
                    <div className='teamoAbout__card' key={index}>
                      <img className='teamAbout__card--img' src={obj.image} alt="" />
                      <div className='teamoAbout__card--content'>
                        <div className='teamAbout__card--user'>
                          <p>{obj.name}</p>
                          <p>{obj.title}</p>
                        </div>
                        <div className='teamoAbout__card--media'>
                          {iconsFilter.map((obj,index)=>(
                            <NavLink key={index}>
                              {obj.icon}
                            </NavLink>
                          ))}             
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </article>
      </section>
    </>
  )
}

export default TeamAbout;