import React from 'react'
import PropTypes from 'prop-types'

function ProyecHeightCard2({dataProyectHeight}) {
  return (
    <>
        <div className='heightProyect__height'>
            {dataProyectHeight.map((obj)=>(
              <div className='heightProyect__card' style={{ margin: '0 0 0 auto' }}>
                <img className='heightProyect__card--img' src={dataProyectHeight.image} alt="" />
                <div className='heightProyect__card--content'>
                    <p>{dataProyectHeight.id}</p>
                    <p>iOS Developer</p>
                    <p>My first iOS app is available on the AppStore. I literally didn’t know anything about SwiftUI (still not much) and in probably 4 weeks was able to recreate my android app for iOS. Highly recommend MengTo videos!</p>
                </div>
              </div>
              <div className='heightProyect__msnm2'>
                <p className='heightProyect__msnm--p'><span>1000</span><span>msnm</span></p>
              </div>
            ))
            }
        </div>
    </>
  )
}

export default ProyecHeightCard2
