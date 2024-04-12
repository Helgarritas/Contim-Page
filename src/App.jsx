import React, { useState } from 'react';
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

function App() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const changeLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1900); // Simulación de carga, reemplaza con tu lógica real de carga
  };

  return (
    <>
      <Loader loading={loading} /> {/* Pasar el estado de carga como una prop */}
      <BarNav changeLoading={changeLoading}/>
      <ScrollTo />
      <Routes>
        <Route path='/' element={<Home changeLoading={changeLoading}/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Proyect />} />
        <Route path='/solution' element={<Solutions />} />
        <Route path='/blog/:articleId' element={<Blog />} />
      </Routes>
      <Footer changeLoading={changeLoading}/>
    </>
  );
}

export default App;
