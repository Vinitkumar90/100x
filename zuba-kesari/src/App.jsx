import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4C115] to-[#D71B1F]">
      <Navbar/>
      <Hero/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App