import {Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar  from './Component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';
import { useState } from 'react';
function App() {
  const [sidebar, setSidebar] = useState(true)
  return (
    <>
    <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:category/:videoID' element={<Video/>}/>
      </Routes>
    </>
  )
}

export default App;
 