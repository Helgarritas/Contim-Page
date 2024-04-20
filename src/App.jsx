import React, {useCallback,useEffect,useState} from 'react';
import './App.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';

import BarNav from './Components/Barnav/BarNav';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Proyect from './Pages/Proyects/Proyect';
import Solutions from './Pages/Solutions/Solutions';
import Footer from './Components/Footer/Footer';
import Blog from './Pages/Blog/Blog';
import ScrollTo from './Components/ScrollTo/ScrollTo';
import Loader from './Components/Loader/Loader';

import BooleanLoading from './Pages/BooleanLoading';

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Funcion para cambiar el estado del loading inicial.
  useEffect(()=>{
    setTimeout(()=>{
      if(loading) return setLoading(false);
    },1900)
  },[loading])

  // Funcion para cambiar el estado del loading.
  const changeLoading = useCallback(() => {
    setLoading(true);
    setTimeout(() => {setLoading(false);}, 1900); 
  },[])

  return (
    <>
      <BooleanLoading.Provider value={changeLoading}>
        <Loader loading={loading} />
        <BarNav changeLoading={changeLoading}/>
        <ScrollTo/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/project' element={<Proyect />} />
          <Route path='/solution' element={<Solutions />} />
          <Route path='/blog/:articleId' element={<Blog />} />
        </Routes>
        <Footer changeLoading={changeLoading}/>
      </BooleanLoading.Provider>
    </>
  );
}

export default App;
