import React from 'react'

const card = (props) => {
  
  return (
    <div className="group overflow-hidden rounded-[35px] border border-cyan-400/10 bg-[#0f172a]/80 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400/30">
    
        
          <div className="overflow-hidden">
            <img
              src={props.image}
              alt={props.name}
              className="h-[320px] w-full object-cover transition-all duration-500 group-hover:scale-110"

            />

          </div>

          <div className="p-6">
            <p className="mb-2 text-xs uppercase tracking-[3px] text-cyan-400">{props.highlight}</p>
            <h1 className="text-2xl font-bold text-white">{props.name}</h1>
            <p className="mt-3 text-sm leading-7 text-slate-400">{props.detail}</p>

            <div className="mt-5 flex flex-wrap gap-3">
              {
                props.size.map((item,idx)=>(
                  <span  key={idx}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
                   
                    {item}
                  </span>
                ))
              }
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-2xl font-black text-white">₹{props.price}</p>
              <button className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-black">Add</button>
            </div>
          </div>
       
    </div>
  )
}

export default card
