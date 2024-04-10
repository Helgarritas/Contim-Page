import React from 'react';

function Loader({ loading }) {
  return (
    <>
      <div className={`loader ${loading ? 'backgroundLoader' : ''}`} style={{
        transitionDelay:  '.01s',
        zIndex: loading ? '9999' : '-1'
      }}>
        
        <div className="banter-loader" style={{
          opacity: loading ? '9999' : '-1',

        }}>       
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
          <div className="banter-loader__box"></div>
        </div>
      </div>

    </>
  );
}

export default Loader;
