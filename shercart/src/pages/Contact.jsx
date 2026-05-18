import React from 'react'
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Contact = () => {
const navigate = useNavigate();
  function submitHandler(e){
    e.preventDefault()
    toast.error("Abe chall......")
     navigate("/")
  }

  return (
    <section className="min-h-screen bg-black px-10 py-20 text-white pt-24">
      <div className="mx-auto max-w-7xl rounded-[50px] border border-cyan-400/10 bg-[#07111f] px-12 py-16 shadow-2xl">
        <p className="mb-3 text-center text-sm uppercase tracking-[5px] text-cyan-400">
          Contact SherCart
        </p>

        <h1 className="text-center text-5xl font-black">
          Get In Touch
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-400">
          Have questions, complaints, or emotional damage from our UI?
          Contact us below.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-10">
          <div className="rounded-3xl border border-cyan-400/10 bg-[#0f172a]/80 p-8">
            <h2 className="text-2xl font-bold text-cyan-400">
              Contact Details
            </h2>

            <p className="mt-6 text-slate-400">
              Email: support@shercart.com
            </p>

            <p className="mt-3 text-slate-400">
              Phone: +91 99999 99999
            </p>

            <p className="mt-3 text-slate-400">
              Address: Somewhere inside UX chaos
            </p>
          </div>

          <form className="rounded-3xl border border-cyan-400/10 bg-[#0f172a]/80 p-8"
           onSubmit={(e)=>submitHandler(e)}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="mb-4 w-full rounded-xl border border-cyan-400/10 bg-black px-5 py-4 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="mb-4 w-full rounded-xl border border-cyan-400/10 bg-black px-5 py-4 outline-none"
            />

            <textarea
              placeholder="Your Message"
              className="mb-4 h-32 w-full rounded-xl border border-cyan-400/10 bg-black px-5 py-4 outline-none"
            ></textarea>

            <button className="rounded-full bg-cyan-400 px-8 py-3 font-bold text-black" s
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
