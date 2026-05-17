import React from 'react'
const Question = (props) => {
  const question=props.data;
  const correct = props.correctAnswer;
  const wrong = props.wrongAnswer;


  function AnswerCheckHandler(idx){
    if(question.options[idx]===question.answer){
      correct()
    }
    else{
      wrong()
    }
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='w-[500px] rounded-2xl border  border-cyan-400/20 bg-[#0f172a]/70 p-8 text-white shadow-2xl backdrop-blur-xl'>
        <h1 className='mb-3 text-center text-3xl font-bold text-orange-400'>SherCart Challenge</h1>


        <p className='mb-8 text-center text-gray-400'>Want to see UI...Then use your unused brain</p>

        <div className='mb-8 rounded-xl bg-black/30 p-5'>

          <h2 className='text-xl font-semibold leading-8'>{question.question}</h2>

        </div>

        <div className='grid grid-cols-2 gap-4'>
          {
            question.options.map((elem,idx)=>
              
              (
                <button key={idx}
                  className='rounded-xl border border-gray-600 bg-[#111827] px-4 py-3 transition-all duration-300 hover:scale-105 hover:border-orange-400 hover:bg-orange-500'

                  onClick={()=>AnswerCheckHandler(idx)}
                >
                  {elem}
                </button>
              )
            )
          }
        </div>
      </div>

    </div>
  )
}

export default Question
