import { useState } from 'react'
import {data} from "../src/DummyData/data"
import './App.css'
import Navbar from './components/Navbar'
import Question from './components/Question'
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import Contact from "../src/pages/Contact"
import CollectionPage from "../src/pages/CollectionPage"
import toast from "react-hot-toast"
import { Routes, Route } from "react-router-dom";


function App() {
  const [step, setStep] = useState(0)
  const [modify,setModify] = useState(false)

  function correctAnswer(){
    toast.success("Correct Answer")
    setStep((prevStep)=>prevStep+1)
  }

  function wrongAnswer(){
    setStep(0)
    setModify(false)
    toast.error("Wrong answer. Start Again")
  }

  function modifyHandler(){
    setModify(true)
    toast.success("Now you can visit other pages")
  }
  return (
    <div className="min-h-screen bg-[#050816] pt-24 text-white">
      {step>=1 && <Navbar modify={modify}/>}
      {!modify && <Home step={step}/>}

       {modify && (
        <Routes>
          <Route path="/" element={<Home step={step} />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}

      {step < data.length && (
        <Question
          data={data[step]}
          correctAnswer={correctAnswer}
          wrongAnswer={wrongAnswer}
        />
      )}
      {step>=5 && !modify && (
        <button
          onClick={modifyHandler}
          className="fixed bottom-8 right-8 z-40 rounded-full border border-cyan-400/30 bg-cyan-400 px-8 py-4 font-bold text-black shadow-lg shadow-cyan-500/30"
        
        >
          Modify Working
        </button>
      )}


    </div>
  )
}

export default App
