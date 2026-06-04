import { useState } from 'react'
import { Navbar } from '@/layout/Navbar'
import { Hero } from '@/sections/Hero'
import { Experience } from '@/sections/Experience'
import { Testimonials } from '@/sections/Testimonials'
import { Contact } from '@/sections/Contact'
import { About } from '@/sections/About'
import { Projects } from '@/sections/Projects'


function App() {

  return (
    // makes whatever is in the app div the size of the screem
    // ogerflow-x-hidden hides anything outside horizontally. (no horizontal scroll)
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}

export default App
