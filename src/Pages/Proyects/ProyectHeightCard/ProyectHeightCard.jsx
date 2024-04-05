import React from 'react'
import { useEffect,useState } from 'react'
function ProyectHeightCard({dataProyectHeight,rowReverce,justifyC,paddingL}) {
  const [widthInicio, setwidthInicio] = useState()
  useEffect(()=>{
    setwidthInicio(window.innerWidth)
  },[widthInicio])
  console.log(`DAWDAWD ${widthInicio}`)
  return (
    <>
      {
        dataProyectHeight.map((obj)=>(
          <div className='heightProyect__height' style={{flexDirection: widthInicio<768?'column':rowReverce}} key={obj.id}>
            {/* Content */}
            <div className='heightProyect__card'>
              <div className='heightProyect__img--container'>
                <img className='heightProyect__card--img' src={obj.image} alt=""/>
              </div>
              <div className='heightProyect__card--content'>
                  <p>{obj.title}</p>
                  <p>{obj.description}</p>
                  <p>{obj.text}</p>
              </div>
            </div>
            <div className='heightProyect__msnm' style={{justifyContent: justifyC, paddingLeft:widthInicio<768?'0':paddingL}}>
              <div className='heightProyect__msnm--p'><p>{obj.msnm}</p><p>msnm</p></div>
            </div>
          </div>
        ))
      }

    </>
  )
}

export default ProyectHeightCard
