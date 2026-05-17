import React from 'react'
import { useState } from 'react';
import { heroSlides } from "../DummyData/heroSlides";

const Hero = () => {
  const [slide,setSlide] = useState(0)

  function slideChangeNext(){
    
      setSlide((prevSlide)=>prevSlide+1)
    
  }

  function slideChangePrev(){
    setSlide((prevSlide)=>prevSlide-1)
  }

  
  return (
<section className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center gap-12 overflow-hidden px-10 py-16 border border-cyan-400/10 bg-[#020817] px-10 py-16 shadow-2xl">


  <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

  <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"></div>


  <div className="relative z-10 flex h-[500px] w-1/2 flex-col justify-center rounded-[40px] border border-cyan-400/10 bg-[#0f172a]/80 p-14 shadow-2xl backdrop-blur-xl box-border">

    <p className="mb-4 text-sm uppercase tracking-[4px] text-cyan-400">
      SherCart Experience
    </p>

    <h1 className="mb-6 text-6xl font-black leading-tight text-white">
      {heroSlides[slide].title}

      <br />

      <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
        {heroSlides[slide].highlight}
      </span>
    </h1>

    <p className="mb-8 max-w-xl text-lg leading-8 text-slate-400">
      {heroSlides[slide].text}
    </p>

  
  </div>



  <div className="relative h-[500px] w-1/2">

    <div className="absolute -inset-4 rounded-[40px] bg-cyan-500/20 blur-3xl"></div>

    <img
      src={heroSlides[slide].image}
      alt={heroSlides[slide].title}
      className="relative h-full w-full rounded-[40px] object-cover shadow-2xl"
    />

    

    {
      slide < heroSlides.length - 1 && (
        <button
          onClick={slideChangeNext}
          className="absolute right-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-cyan-400 hover:text-black"
        >
          →
        </button>
      )
    }

   
    {
      slide > 0 && (
        <button
          onClick={slideChangePrev}
          className="absolute left-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-cyan-400 hover:text-black"
        >
          ←
        </button>
      )
    }

  </div>

</section>
  )
}

export default Hero
