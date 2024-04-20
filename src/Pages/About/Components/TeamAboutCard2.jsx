import React from 'react';
import { NavLink } from 'react-router-dom';

function TeamAboutCard2({DataTeamAbout,iconsFilter}) {
  return (
    <>
      <div className='teamAbout__gerencia mt-3'>
        <h2 className='teamAbout__subtitle'>Administración</h2>
        <div>
          <div className="teamoAbout__cards">
            {DataTeamAbout.map((obj, index) => (
              <div className='teamoAbout__card' key={index}>
                <img className='teamAbout__card--img' src={obj.image} alt="" />
                <div className='teamAbout__card--user'>
                  <p>{obj.name}</p>
                  <p>{obj.title}</p>
                </div>
                <div className='teamoAbout__card--media'>
                  {iconsFilter.map((obj,index)=>(
                    <NavLink key={index}>{obj.icon}</NavLink>
                  ))}             
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamAboutCard2
