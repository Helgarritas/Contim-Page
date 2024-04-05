import React from 'react'
import PropTypes from 'prop-types'

import BannerSolutions from './BannerSolutions'
import ExploracionSolu from './ExploracionSolu'
import MineriaSolutions from './MineriaSolutions'
import MachinesSolutions from './MachinesSolutions'
import ObrasSolutions from './ObrasSolutions'
function Solutions(props) {
  return (
    <>
      <BannerSolutions></BannerSolutions>
      <ExploracionSolu></ExploracionSolu>
      <MachinesSolutions></MachinesSolutions>
      <MineriaSolutions></MineriaSolutions>
      <ObrasSolutions></ObrasSolutions>
    </>
  )
}

export default Solutions
