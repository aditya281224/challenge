import { useState } from 'react'
import {data} from "./data"
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collection from './components/Collection'
import BestSeller from './components/BestSeller'
import Question from './components/Question'
import toast from "react-hot-toast"


function App() {
  const [step, setStep] = useState(0)

  function correctAnswer(){
    toast.success("Correct Answer")
    setStep((prevStep)=>prevStep+1)
  }

  function wrongAnswer(){
    setStep(0)
    toast.error("Wrong answer. Start Again")
  }
  return (
    <div className="min-h-screen bg-[#050816] pt-24 text-white">
      {step>=1 && <Navbar/>}
      {step>=2 && <Hero/>}
      {step>=3 && <Collection/>}
      {step>=4 && <BestSeller/>}

      {step < data.length && (
        <Question
          data={data[step]}
          correctAnswer={correctAnswer}
          wrongAnswer={wrongAnswer}
        />
      )}

    </div>
  )
}

export default App
