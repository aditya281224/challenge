import React from 'react'

const About = () => {
  return (
      <section className="min-h-screen bg-black px-10 py-20 pt-24 text-white">
      <div className="mx-auto max-w-7xl rounded-[50px] border border-cyan-400/10 bg-[#07111f] px-12 py-16 shadow-2xl">
        <p className="mb-3 text-center text-sm uppercase tracking-[5px] text-cyan-400">
          About SherCart
        </p>

        <h1 className="text-center text-5xl font-black">
          Fashion With A Cursed Twist
        </h1>

        <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-8 text-slate-400">
          SherCart is a futuristic fashion e-commerce platform where premium
          streetwear meets intentionally confusing user experience. Users must
          answer questions, unlock sections, and survive the interface before
          shopping properly.
        </p>

        <div className="mt-14 grid grid-cols-3 gap-8">
          <div className="rounded-3xl border border-cyan-400/10 bg-[#0f172a]/80 p-8">
            <h2 className="text-2xl font-bold text-cyan-400">Our Vision</h2>
            <p className="mt-4 text-slate-400">
              To create a shopping experience that looks premium but feels
              hilariously chaotic.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/10 bg-[#0f172a]/80 p-8">
            <h2 className="text-2xl font-bold text-cyan-400">Our Style</h2>
            <p className="mt-4 text-slate-400">
              Cyber streetwear, oversized fits, clean colors, and bold modern
              fashion.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/10 bg-[#0f172a]/80 p-8">
            <h2 className="text-2xl font-bold text-cyan-400">Our Crime</h2>
            <p className="mt-4 text-slate-400">
              Making users answer questions before they can even enjoy the UI.
            </p>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default About

