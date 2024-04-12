import React, { useEffect, useState, useRef } from 'react';

function ProyectHeightCard({ filterDateHeight1 }) {
  const [date, setDate] = useState([]);
  const [updatedIndexes, setUpdatedIndexes] = useState([]);
  const [lastThousandMultiple, setLastThousandMultiple] = useState([]);
  const heightsRefs = useRef([]);

  useEffect(() => {
    setDate(filterDateHeight1);

    function heightScroll() {
      const heightRefsRoll = heightsRefs.current;

      heightRefsRoll.forEach((ref, index) => {
        const elementTop = ref.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight && !updatedIndexes.includes(index)) {
          setUpdatedIndexes(prevIndexes => [...prevIndexes, index]);
          let newData = [...date];
          const currentMultiple = lastThousandMultiple[index] || 0;
          const targetMultiple = Math.ceil(newData[index].msnm / 1000);

          if (targetMultiple > currentMultiple) {
            setLastThousandMultiple(prevMultiples => ({
              ...prevMultiples,
              [index]: targetMultiple,
            }));

            // Usamos la función de actualización del estado para garantizar que el estado se actualice de manera sincrónica
            setDate(prevDate => {
              const updatedData = [...prevDate];
              const interval = setInterval(() => {
                if (updatedData[index].msnm < targetMultiple * 1000) {
                  updatedData[index].msnm += 2;
                  setDate([...updatedData]);
                } else {
                  clearInterval(interval);
                }
              }, 1);
              return updatedData;
            });
          }
        }
      });
    }

    window.addEventListener('scroll', heightScroll);

    return () => {
      window.removeEventListener('scroll', heightScroll);
    };
  }, [date, filterDateHeight1, updatedIndexes, lastThousandMultiple]);

  return (
    <>
      {date.map((obj, index) => (
        <div className='heightProyect__height' key={obj.id}>
          <div className='heightProyect__card'>
            <div className='heightProyect__img--container'>
              <img className='heightProyect__card--img' src={obj.image} alt='' />
            </div>
            <div className='heightProyect__card--content'>
              <p>{obj.title}</p>
              <p>{obj.description}</p>
              <p>{obj.text}</p>
            </div>
          </div>
          <div className='heightProyect__msnm'>
            <div className='heightProyect__msnm--p' ref={ref => heightsRefs.current[index] = ref}>
              <p>{obj.msnm}</p>
              <p>msnm</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProyectHeightCard;
