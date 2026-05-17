import React from 'react'
import { collections } from '../DummyData/collections'
const Collection = () => {

 
  return (
    <section>
      <section className="mx-auto mt-24 max-w-7xl rounded-[50px] border border-cyan-400/10 bg-[#07111f] px-10 py-20 shadow-2xl">
  <div className="mb-10 text-center">
    <p className="mb-3 text-4xl uppercase tracking-[4px] text-cyan-400">
      SherCart Collection
    </p>

    <h2 className="text-2xl font-black">
      Featured Fits
    </h2>

    <p className="mt-3 text-slate-400">
      Premium clothing selected for maximum style and minimum logic.
    </p>
  </div>

  <div className="grid grid-cols-5 gap-5">


    {
      collections.slice(0,5).map((item,idx)=>(
            <div className="rounded-3xl border border-cyan-400/10 bg-[#0f172a]/80 p-4 shadow-xl backdrop-blur-xl">
      <img
        src={item.image}
        alt="collection"
        className="h-[260px] w-full rounded-2xl object-cover"
      />

      <h3 className="mt-4 text-lg font-bold">
       {item.name}
      </h3>

      <p className="text-sm text-slate-400">
        {item.price}
      </p>
    </div>
      ))
    }
  </div>

  <div className="mt-10 flex justify-center">
    <button className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-8 py-4 font-bold text-cyan-300 shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-black">
      Explore More
    </button>
  </div>
</section>
    </section>
  )
}

export default Collection
