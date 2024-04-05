import React from 'react'
import PropTypes from 'prop-types'

import BannerAbout from './BannerAbout';
import MisionAbout from './MisionAbout';
import TeamAbout from './TeamAbout';
import IsoAbout from './IsoAbout';
import ClientsHome from '../Home/ClientsHome';

function About(props) {
  return (
    <>
      <BannerAbout></BannerAbout>
      <MisionAbout></MisionAbout>
      <TeamAbout></TeamAbout>
      <ClientsHome></ClientsHome>
      <IsoAbout></IsoAbout>
    </>
  )
}

About.propTypes = {}

export default About
