import React from 'react'
import { useState } from 'react'
import Step1SetUp from '../components/Step1SetUp'
import Step2Interview from '../components/Step2Interview'
import Step3Report from '../components/Step3Report'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaArrowLeft } from 'react-icons/fa';
import Logo from "../components/Logo";

function InterviewPage({ stepProp = 1 }) {
    const [step,setStep] = useState(stepProp)
    const { interviewData: reduxInterviewData } = useSelector(state => state.interview)
    const [localInterviewData, setLocalInterviewData] = useState(null)
    const interviewData = reduxInterviewData || localInterviewData
    const navigate = useNavigate()

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-[#090d16] flex flex-col transition-colors duration-200'>
        <header className='bg-white dark:bg-[#111827] border-b border-gray-200 dark:border-gray-800 px-5 md:px-8 py-3 flex items-center gap-4 shadow-sm transition-colors duration-200'>
            <button
                onClick={() => {
                    if (step === 2) {
                        if (window.confirm("Are you sure you want to leave the interview? Your progress will be lost.")) {
                            navigate("/");
                        }
                    } else if (step === 3) {
                        navigate("/history");
                    } else {
                        navigate("/");
                    }
                }}
                className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-600 dark:text-gray-300 flex items-center justify-center cursor-pointer'
                aria-label="Go back"
            >
                <FaArrowLeft className="text-base md:text-lg" />
            </button>
            <div 
                onClick={() => navigate("/")}
                className='flex items-center cursor-pointer hover:opacity-80 transition'
            >
                <Logo />
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
