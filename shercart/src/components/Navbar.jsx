import React from 'react'

const Navbar = (props) => {

  const navItems = ["Home","Collection","About","Contact"]

 
  return (
    <nav className='fixed left-0 top-0 z-40 w-full border-b border-cyan-500/10 bg-black/70 px-10 py-4 text-white backdrop-blur-xl'>

      <div className='mx-auto flex max-w-7xl items-center justify-between'>

        <div className='flex items-center gap-3'>

          <div className='flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-[#0f172a] text-2xl shadow-lg shadow-cyan-500/20'>
            🦁
          </div>
          <div>
            <h1 className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
              SherCart
            </h1>

            <p className="text-xs text-slate-500">
              Enjoy Shopping
            </p>
          </div>
        </div>

        <div className="flex items-center gap-10 text-sm font-semibold">
          {
            navItems.map((item) => (
              <button
                key={item}
                className='text-slate-300 transition-all duration-300 hover:scale-110 hover:text-cyan-400'
              >
                {item}
              </button>
            ))
          }
        </div>

        <button
         className="rounded-full border border-cyan-400/20 bg-[#0f172a] px-5 py-2 text-sm font-bold text-cyan-300 shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
        >
          Cart
        </button>

      </div>
      
    </nav>
  )
}

export default Navbar
