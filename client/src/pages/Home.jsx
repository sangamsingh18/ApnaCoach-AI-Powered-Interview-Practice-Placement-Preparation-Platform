import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { motion } from "motion/react";
import {
  BsRobot,
  BsMic,
  BsClock,
  BsBarChart,
  BsFileEarmarkText
} from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthModel from '../components/AuthModel';
import hrImg from "../assets/HR.png";
import techImg from "../assets/tech.png";
import confidenceImg from "../assets/confi.png";
import creditImg from "../assets/credit.png";
import evalImg from "../assets/ai-ans.png";
import resumeImg from "../assets/resume.png";
import pdfImg from "../assets/pdf.png";
import analyticsImg from "../assets/history.png";
import Footer from '../components/Footer';

function Home() {
  const { userData } = useSelector((state) => state.user)
  const [showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate()

  return (
    <div className='min-h-screen bg-[#f8fafc] dark:bg-[#090d16] flex flex-col font-sans relative overflow-x-hidden transition-colors duration-200'>
      <Navbar />

      <div className='flex-1 px-6 py-12 md:py-20 z-10 relative'>
        <div className='max-w-6xl mx-auto'>

          {/* Hero Welcome Section */}
          <div className='text-center mb-24 md:mb-32'>
            <div className='flex justify-center mb-6'>
              <div className='bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400 text-sm px-4 py-2 rounded-full border border-emerald-100 dark:border-emerald-900/30 flex items-center gap-2 font-medium transition-colors'>
                <HiSparkles size={16} className="text-emerald-500 animate-pulse" />
                {userData ? `Welcome Back, ${userData.name}!` : "AI Powered Smart Interview Platform"}
              </div>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl mx-auto text-gray-900 dark:text-white tracking-tight'>
              Ace Placements with
              <span className='relative inline-block ml-3'>
                <span className='bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400 px-6 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/30 font-semibold'>
                  AI-Powered Career Preparation
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className='text-gray-500 dark:text-gray-400 mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-normal'>
              Role-based mock interviews with smart follow-ups,
              adaptive difficulty and real-time performance evaluation.
            </motion.p>
          </div>

          {/* Three-step indicators grid */}
          <div className='flex flex-col md:flex-row justify-center items-center gap-10 mb-32'>
            {
              [
                {
                  icon: <BsRobot size={24} />,
                  step: "STEP 1",
                  title: "Role & Experience Selection",
                  desc: "AI adjusts difficulty based on selected job role."
                },
                {
                  icon: <BsMic size={24} />,
                  step: "STEP 2",
                  title: "Smart Voice Interview",
                  desc: "Dynamic follow-up questions based on your answers."
                },
                {
                  icon: <BsClock size={24} />,
                  step: "STEP 3",
                  title: "Timer Based Simulation",
                  desc: "Real interview pressure with time tracking."
                }
              ].map((item, index) => (
                <motion.div key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 + index * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    if (!userData) {
                      setShowAuth(true);
                      return;
                    }
                    navigate("/interview");
                  }}
                  className={`
                    relative bg-white dark:bg-[#111827]/50 rounded-3xl border border-gray-100 dark:border-gray-800
                    hover:border-emerald-400 dark:hover:border-emerald-500 p-10 w-80 max-w-[90%] 
                    shadow-[0_15px_30px_-10px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.01)]
                    hover:shadow-[0_30px_60px_-15px_rgba(16,185,129,0.18)]
                    transition-all duration-300 hover:-translate-y-2 cursor-pointer
                    ${index === 0 ? "rotate-[-1deg]" : ""}
                    ${index === 1 ? "rotate-[1deg] md:-mt-6 shadow-lg shadow-black/2" : ""}
                    ${index === 2 ? "rotate-[-0.5deg]" : ""}
                  `}
                >
                  <div className='absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-br from-emerald-500 to-green-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 border-2 border-white dark:border-slate-900'>
                    {item.icon}
                  </div>
                  <div className='pt-10 text-center'>
                    <div className='text-xs text-green-600 dark:text-green-400 font-semibold mb-2 tracking-wider'>{item.step}</div>
                    <h3 className='font-bold mb-3 text-lg text-gray-800 dark:text-gray-200'>{item.title}</h3>
                    <p className='text-sm text-gray-500 dark:text-gray-400 leading-relaxed'>{item.desc}</p>
                  </div>
                </motion.div>
              ))
            }
          </div>

          {/* AI Placement Drive Portal */}
          <div className='mb-32'>
            <div className='bg-gradient-to-br from-[#0c151b] via-[#091116] to-[#041a12] text-white rounded-[32px] p-8 md:p-12 relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.45),0_0_50px_0_rgba(16,185,129,0.12)] border border-white/5'>
              <div className='absolute right-0 top-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none'></div>
              <div className='absolute left-1/3 bottom-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none'></div>
              
              <div className='relative z-10 max-w-3xl'>
                <span className='bg-[#0f2c20] text-[#00e676] text-xs font-bold px-4 py-1.5 rounded-full border border-[#164330] tracking-wider uppercase'>
                  New Feature
                </span>
                <h2 className='text-3xl md:text-5xl font-black mt-6 mb-4 tracking-tight leading-tight'>
                  Comprehensive <span className='text-[#00e676]'>5-Stage AI Placement Drive</span>
                </h2>
                <p className='text-gray-400 text-base md:text-lg mb-8 leading-relaxed font-normal'>
                  Simulate standard hiring processes with a single comprehensive exam. Test your core technical logic, coding capabilities, numerical aptitude, behavioral soft skills, and complete a project walkthrough. Earn a unified performance card!
                </p>
                <div className='flex flex-wrap gap-4'>
                  <button 
                    onClick={() => {
                      if (!userData) {
                        setShowAuth(true);
                        return;
                      }
                      navigate("/placement-test");
                    }}
                    className='bg-[#00e676] hover:bg-[#00c853] text-[#050b0e] font-extrabold px-8 py-3.5 rounded-full transition shadow-lg shadow-[#00e676]/20 hover:shadow-[#00e676]/40 hover:-translate-y-0.5 duration-200 cursor-pointer text-sm tracking-wide'
                  >
                    Start Placement Drive
                  </button>
                  <button 
                    onClick={() => {
                      if (!userData) {
                        setShowAuth(true);
                        return;
                      }
                      navigate("/guidance");
                    }}
                    className='bg-transparent border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-full transition cursor-pointer hover:bg-white/5 text-sm'
                  >
                    Placement Guidance
                  </button>
                </div>
              </div>
              
              {/* Stages Grid Indicator */}
              <div className='grid grid-cols-2 md:grid-cols-5 gap-4 mt-14 pt-10 border-t border-white/5 text-center relative z-10'>
                {[
                  { stage: "Stage 1", name: "Technical MCQ" },
                  { stage: "Stage 2", name: "Coding Logic" },
                  { stage: "Stage 3", name: "Aptitude Test" },
                  { stage: "Stage 4", name: "Soft Skills" },
                  { stage: "Stage 5", name: "Project Walkthrough" }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => {
                      if (!userData) {
                        setShowAuth(true);
                        return;
                      }
                      navigate("/placement-test");
                    }}
                    className='bg-[#111c24]/50 border border-white/5 hover:border-[#00e676]/40 rounded-2xl p-5 backdrop-blur-sm transition-all duration-200 cursor-pointer hover:scale-[1.02] group'
                  >
                    <div className='text-[#00e676] text-xs font-bold mb-1.5 tracking-wider group-hover:scale-105 transition-transform'>{item.stage}</div>
                    <div className='text-sm text-gray-200 font-semibold group-hover:text-white transition-colors'>{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Preparation Tools */}
          <div className='mb-32'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='text-3xl md:text-4xl font-extrabold text-center mb-14 text-gray-900 dark:text-white tracking-tight'
            >
              Placement Prep <span className="text-[#00c853]">Toolkit</span>
            </motion.h2>

            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {[
                {
                  title: "Learning Roadmaps",
                  desc: "Structured paths across 14+ technical domains, languages, and frameworks.",
                  link: "/roadmap",
                  action: "Explore Roadmaps"
                },
                {
                  title: "Company Interview Prep",
                  desc: "Specific questions, patterns, and tips for TCS, Infosys, Google, Amazon, etc.",
                  link: "/company-prep",
                  action: "Prepare Company-wise"
                },
                {
                  title: "Resume & ATS Optimizer",
                  desc: "Upload resume, parse text, and scan matches against standard job descriptions.",
                  link: "/resume-tips",
                  action: "Check ATS Score"
                },
                {
                  title: "Placement Guidance",
                  desc: "Expert strategies, formatting suggestions, and mock exam checklists.",
                  link: "/guidance",
                  action: "View Tips & Guide"
                }
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  onClick={() => {
                    if (!userData) {
                      setShowAuth(true);
                      return;
                    }
                    navigate(tool.link);
                  }}
                  className="bg-white dark:bg-[#111827]/50 border border-gray-100 dark:border-gray-800 rounded-3xl p-7 shadow-[0_12px_24px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_48px_-15px_rgba(16,185,129,0.12)] hover:border-emerald-300/60 dark:hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between cursor-pointer min-h-[220px]"
                >
                  <div className='text-left'>
                    <h3 className="font-bold text-lg mb-2.5 text-gray-900 dark:text-white tracking-tight">{tool.title}</h3>
                    <p className="text-gray-400 dark:text-gray-400 text-sm mb-6 leading-relaxed font-normal">{tool.desc}</p>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!userData) {
                        setShowAuth(true);
                        return;
                      }
                      navigate(tool.link);
                    }}
                    className="w-full bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold py-3 px-4 rounded-xl transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
                  >
                    {tool.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Advanced AI Capabilities */}
          <div className='mb-32'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='text-3xl md:text-4xl font-extrabold text-center mb-16 text-gray-900 dark:text-white tracking-tight'>
              Advanced AI{" "}
              <span className="text-[#00c853]">Capabilities</span>
            </motion.h2>

            <div className='grid md:grid-cols-2 gap-8'>
              {
                [
                  {
                    image: evalImg,
                    icon: <BsBarChart size={20} />,
                    title: "AI Answer Evaluation",
                    desc: "Scores communication, technical accuracy and confidence.",
                    link: "/interview"
                  },
                  {
                    image: resumeImg,
                    icon: <BsFileEarmarkText size={20} />,
                    title: "Resume Based Interview",
                    desc: "Project-specific questions based on uploaded resume.",
                    link: "/interview"
                  },
                  {
                    image: pdfImg,
                    icon: <BsFileEarmarkText size={20} />,
                    title: "Downloadable PDF Report",
                    desc: "Detailed strengths, weaknesses and improvement insights.",
                    link: "/history"
                  },
                  {
                    image: analyticsImg,
                    icon: <BsBarChart size={20} />,
                    title: "History & Analytics",
                    desc: "Track progress with performance graphs and topic analysis.",
                    link: "/history"
                  }
                ].map((item, index) => (
                  <motion.div key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    onClick={() => {
                      if (!userData) {
                        setShowAuth(true);
                        return;
                      }
                      navigate(item.link);
                    }}
                    className='bg-white dark:bg-[#111827]/50 border border-gray-100 dark:border-gray-800 rounded-[32px] p-6 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] hover:border-emerald-300/40 dark:hover:border-emerald-500/40 transition-all duration-300 cursor-pointer'>
                    <div className='flex flex-col sm:flex-row items-center gap-6'>
                      <div className='w-full sm:w-2/5 flex justify-center'>
                        <img src={item.image} alt={item.title} className='w-full h-auto object-contain max-h-48' />
                      </div>
 
                      <div className='w-full sm:w-3/5 text-left'>
                        <div className='bg-[#e8f5e9] text-[#2e7d32] dark:bg-emerald-950/30 dark:text-emerald-400 w-11 h-11 rounded-xl flex items-center justify-center mb-5 shadow-sm'>
                          {item.icon}
                        </div>
                        <h3 className='font-bold mb-2 text-lg text-gray-900 dark:text-white tracking-tight'>{item.title}</h3>
                        <p className='text-gray-400 dark:text-gray-400 text-sm leading-relaxed'>{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))
              }
            </div>
          </div>

          {/* Multiple Interview Modes */}
          <div className='mb-32'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='text-3xl md:text-4xl font-extrabold text-center mb-16 text-gray-900 dark:text-white tracking-tight'>
              Multiple Interview{" "}
              <span className="text-[#00c853]">Modes</span>
            </motion.h2>

            <div className='grid md:grid-cols-2 gap-8'>
              {
                [
                  {
                    img: hrImg,
                    title: "HR Interview Mode",
                    desc: "Behavioral and communication based evaluation.",
                    link: "/interview"
                  },
                  {
                    img: techImg,
                    title: "Technical Mode",
                    desc: "Deep technical questioning based on selected role.",
                    link: "/interview"
                  },
                  {
                    img: confidenceImg,
                    title: "Confidence Detection",
                    desc: "Basic tone and voice analysis insights.",
                    link: "/interview"
                  },
                  {
                    img: creditImg,
                    title: "Credits System",
                    desc: "Unlock premium interview sessions easily.",
                    link: "/pricing"
                  }
                ].map((mode, index) => (
                  <motion.div key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    onClick={() => {
                      if (!userData) {
                        setShowAuth(true);
                        return;
                      }
                      navigate(mode.link);
                    }}
                    className="bg-white dark:bg-[#111827]/50 border border-gray-100 dark:border-gray-800 rounded-[32px] p-8 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] hover:border-emerald-300/40 dark:hover:border-emerald-500/40 transition-all duration-300 cursor-pointer">
                    <div className='flex items-center justify-between gap-6 text-left'>
                      <div className="w-3/5">
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white tracking-tight">
                          {mode.title}
                        </h3>
                        <p className="text-gray-400 dark:text-gray-400 text-sm leading-relaxed">
                          {mode.desc}
                        </p>
                      </div>

                      <div className="w-2/5 flex justify-end">
                        <img
                          src={mode.img}
                          alt={mode.title}
                          className="w-24 h-24 object-contain"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))
              }
            </div>
          </div>

        </div>
      </div>

      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}
      <Footer />
    </div>
  )
}

export default Home
