import React from 'react'
import { useState } from 'react'
import Step1SetUp from '../components/Step1SetUp'
import Step2Interview from '../components/Step2Interview'
import Step3Report from '../components/Step3Report'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function InterviewPage({ stepProp = 1 }) {
    const [step,setStep] = useState(stepProp)
    const { interviewData: reduxInterviewData } = useSelector(state => state.interview)
    const [localInterviewData, setLocalInterviewData] = useState(null)
    const interviewData = reduxInterviewData || localInterviewData
    const navigate = useNavigate()

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
        <header className='bg-white border-b border-gray-200 px-5 md:px-8 py-3 flex items-center shadow-sm'>
            <div 
                onClick={() => navigate("/")}
                className='flex items-center gap-3 cursor-pointer hover:opacity-80 transition'
            >
                <img 
                    src="/favicon.png" 
                    alt="ApnaCoach Logo" 
                    className='h-10 md:h-12 w-auto'
                />
                <span className='font-bold text-xl text-gray-800 tracking-tight'>ApnaCoach</span>
            </div>
        </header>

        <div className='flex-1'>
        {step===1 && (
            <Step1SetUp onStart={(data)=>{
                setLocalInterviewData(data);
            setStep(2)}}/>
        )}

         {(step===2 && interviewData) ? (
            <Step2Interview interviewData={interviewData}
            onFinish={(report)=>{setLocalInterviewData(report);
                setStep(3)
            }}
            />
        ) : step === 2 ? (
            <div className="flex flex-col items-center justify-center h-full p-4">
                <p className="text-gray-500 mb-4">No interview session found. Please set up your interview first.</p>
                <button 
                    onClick={() => { setStep(1); navigate("/interview"); }}
                    className="bg-emerald-600 text-white px-6 py-2 rounded-xl"
                >
                    Go to Setup
                </button>
            </div>
        ) : null}

          {step===3 && (
            <Step3Report report={interviewData}/>
        )}

      
        </div>
    </div>
  )
}

export default InterviewPage
