import React from 'react'
import PropTypes from 'prop-types'

import ProyectHeightCard from './ProyectHeightCard/ProyectHeightCard'
// Props

function ProyectHeight(props) {

  let dataProyectHeight = [
    {id:1,
      country: 'Perú',
      // image: '/src/assets/backgrounds/aboutBAnner.jpg',
      title: 'UM Piedra Iman',
      description: 'La Paz Bolivia',
      text: 'My first iOS app is available on the AppStore. I literally didn’t know anything about SwiftUI (still not much) and in probably 4 weeks was able to recreate my android app for iOS. Highly recommend MengTo videos!',
      msnm: 1000},
    {id:2,
      country: 'Perú',
      // image: '/src/assets/backgrounds/aboutBAnner.jpg',
      title: 'UM Piedra Iman',
      description: 'La Paz Bolivia',
      text: 'My first iOS app is available on the AppStore. I literally didn’t know anything about SwiftUI (still not much) and in probably 4 weeks was able to recreate my android app for iOS. Highly recommend MengTo videos!',
      msnm: 2000},
    {id:3,
      country: 'Perú',
      // image: '/src/assets/backgrounds/aboutBAnner.jpg',
      title: 'UM Piedra Iman',
      description: 'La Paz Bolivia',
      text: 'My first iOS app is available on the AppStore. I literally didn’t know anything about SwiftUI (still not much) and in probably 4 weeks was able to recreate my android app for iOS. Highly recommend MengTo videos!',
      msnm: 3000},
    {id:4,
      country: 'Perú',
      // image: '/src/assets/backgrounds/aboutBAnner.jpg',
      title: 'UM Piedra Iman',
      description: 'La Paz Bolivia',
      text: 'My first iOS app is available on the AppStore. I literally didn’t know anything about SwiftUI (still not much) and in probably 4 weeks was able to recreate my android app for iOS. Highly recommend MengTo videos!',
      msnm: 4000},
  ]

  return (
    <>
      <article className='heightProyect'>
        <section className='heightProyect__contain'>
          <h1 className='heightProyect__subtitle'>Perú</h1>
            <div className='heightProyect__heights' style={{borderRight:'.5px solid rgba(0,0,0,.2)'}}>
              <ProyectHeightCard dataProyectHeight={dataProyectHeight}></ProyectHeightCard>
            </div>
          <h1 className='heightProyect__subtitle mt-[100px]'>Bolivia</h1>
            <div className='heightProyect__heights' style={{borderLeft:'.5px solid rgba(0,0,0,.2)'}}>
              <ProyectHeightCard dataProyectHeight={dataProyectHeight} rowReverce={'row-reverse'} justifyC={'start'} paddingL={'5rem'}></ProyectHeightCard>
            </div>
        </section>
      </article>
    </>
  )
}

ProyectHeight.propTypes = {}

export default ProyectHeight
