import React from 'react'
import Navs from './Components/Navbar/Navs'
import Main from './Main'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Contactus from './Components/HomePage/Contactus'
import Experience from './Components/HomePage/Experience'
import Skills from './Components/HomePage/Skills'
import Blogs from './Components/HomePage/Blogs'

function App() {
  return (
    <div>
      <Navs/>
<Routes>
  <Route path="/" element={<Main />} />
  <Route path="/Contact" element={<Contactus />} />
  <Route path="/Experience" element={<Experience />} />
  <Route path="/Skills" element={<Skills />} />
  <Route path="/Blogs" element={<Blogs />} />
</Routes>

    </div>
  )
}

export default App
