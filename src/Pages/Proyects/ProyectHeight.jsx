import React from 'react';
import { useState,useEffect } from 'react';

//* Components
import dataProyectHeight  from './ProyectHeightCard/DataProjectHeight'
import ProyectHeightCard  from './ProyectHeightCard/ProyectHeightCard'// card
import ProyectHeightCard2 from './ProyectHeightCard/ProyecHeightCard2'// card

function ProyectHeight(props) {
  const [filterDateHeight1, setFilterDateHeight1] = useState([]);
  const [filterDateHeight2, setFilterDateHeight2] = useState([]);

  useEffect(() => {
    const filteredDataHeight1 = dataProyectHeight.filter(obj => obj.country === 'Perú');
    const filteredDataHeight2 = dataProyectHeight.filter(obj => obj.country === 'Bolivia');

    setFilterDateHeight1(filteredDataHeight1);
    setFilterDateHeight2(filteredDataHeight2);
  }, []);

  return (
    <>
      <article className='heightProyect'>
        <section className='heightProyect__contain'>
          <h1 className='heightProyect__subtitle'>Perú</h1>
            <div className='heightProyect__heights' style={{borderRight:'.5px solid rgba(0,0,0,.2)'}}>
              <ProyectHeightCard filterDateHeight1={filterDateHeight1}></ProyectHeightCard>
            </div>
          <h1 className='heightProyect__subtitle mt-[100px]'>Bolivia</h1>
            <div className='heightProyect__heights' style={{borderLeft:'.5px solid rgba(0,0,0,.2)'}}>
              <ProyectHeightCard2 filterDateHeight2={filterDateHeight2}></ProyectHeightCard2>
            </div>
        </section>
      </article>
    </>
  )
}

ProyectHeight.propTypes = {}

export default ProyectHeight
