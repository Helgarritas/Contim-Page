import React from 'react'
import PropTypes from 'prop-types'

import ProyectBanner from './ProyectBanner';
import ProyectHeight from './ProyectHeight';
import ProyectAmbient from './ProyectAmbient';

function Proyect(props) {
  return (
    <>
      <ProyectBanner></ProyectBanner>
      <ProyectHeight></ProyectHeight>
      <ProyectAmbient></ProyectAmbient>
    </>
  )
}

export default Proyect
