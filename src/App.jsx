import React from 'react';
import './App.scss'
import { Routes,Route } from 'react-router-dom';

import BarNav from './Components/Barnav/BarNav';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Proyect from './Pages/Proyects/Proyect';
import Solutions from './Pages/Solutions/Solutions'; 
import Footer from './Components/Footer/Footer';
import Blog from './Pages/Blog/Blog';
import ScrollTo from './Components/ScrollTo/ScrollTo';

function App() {
  return (
    <>
      <BarNav></BarNav>
      <ScrollTo></ScrollTo>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/project' element={<Proyect/>}></Route>
        <Route path='/solution' element={<Solutions/>}></Route>
        <Route path='/blog/:articleId' element={<Blog />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
