import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import BgVideo from './assets/state.mp4'
import About from './components/About/About'
import Creative from './components/Creative/Creative'
import Hero from './components/Hero/Hero'
import Project from './components/Project/Project'
import VeltTech from './components/VeltTech/VeltTech'
import Footer from './components/Footer/Footer'



function App() {
  return (
   <>
     <div className="">
      <div className="h-[700px] relative">
        <Navbar />
        <Hero />
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
      </div>
      <About/>
      <Creative/>
      <Project/>
     
    <VeltTech/>
    <Footer/>
 
    </div>


   </>
  )
}

export default App