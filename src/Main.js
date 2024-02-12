import React from 'react'
import Banner from './Components/HomePage/Banner'
import About from './Components/HomePage/About'
import Skills from './Components/HomePage/Skills'
import Contactus from './Components/HomePage/Contactus'
import Experience from './Components/HomePage/Experience'
import Blogs from './Components/HomePage/Blogs'

const Main = () => {
  return (
    <div>
      
        <Banner/>
        <About/>
        <Experience/>
        <Skills/>
        <Contactus/>
    </div>
  )
}

export default Main