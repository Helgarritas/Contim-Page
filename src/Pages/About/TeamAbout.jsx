import React from 'react';
import { useState,useEffect } from 'react';

// Components
import TeamAboutCard1 from './Components/TeamAboutCard1';
import TeamAboutCard2 from './Components/TeamAboutCard2';
import DataTeamAbout  from './Components/DataTeamAbout';
import IconsMedia     from '/src/Components/IconsMedia/IconsMedia';

function TeamAbout() {
  const [iconsFilter, setIconsFilter] = useState([]);

  useEffect(() => {
    setIconsFilter(IconsMedia.slice(0, 3)); 
  },[IconsMedia]);

  return (
    <>
      <section className='teamAbout'>
        <article className='teamAbout__container'>
          <h1 className="teamAbout__title">EQUIPO</h1>
          <TeamAboutCard1 DataTeamAbout={DataTeamAbout} iconsFilter={iconsFilter}></TeamAboutCard1>
          <TeamAboutCard2 DataTeamAbout={DataTeamAbout} iconsFilter={iconsFilter}></TeamAboutCard2>
        </article>
      </section>
    </>
  )
}

export default TeamAbout;