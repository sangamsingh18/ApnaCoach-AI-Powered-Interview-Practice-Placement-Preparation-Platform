import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from "motion/react"
import { BsCoin, BsSun, BsMoonStars } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUserAstronaut } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ServerUrl } from '../utils/serverUrl';
import { setUserData } from '../redux/userSlice';
import AuthModel from './AuthModel';
import Logo from './Logo';

function Navbar() {
    const {userData} = useSelector((state)=>state.user)
    const [showCreditPopup,setShowCreditPopup] = useState(false)
    const [showUserPopup,setShowUserPopup] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [showAuth, setShowAuth] = useState(false);
    
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || 
            (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    });

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const handleLogout = async () => {
        try {
            await axios.get(ServerUrl + "/api/auth/logout" , {withCredentials:true})
            dispatch(setUserData(null))
            setShowCreditPopup(false)
            setShowUserPopup(false)
            navigate("/")

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='bg-[#f3f3f3] dark:bg-[#090d16] flex justify-center px-4 pt-6 w-full relative z-50 transition-colors duration-200'>
        <motion.div 
        initial={{opacity:0 , y:-40}}
        animate={{opacity:1 , y:0}}
        transition={{duration: 0.3}}
        className='w-full max-w-[95%] bg-white/70 dark:bg-[#111827]/70 backdrop-blur-md rounded-[24px] shadow-[0_12px_40px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_-15px_rgba(0,0,0,0.5)] border border-white/40 dark:border-gray-800/40 px-8 py-4 flex justify-between items-center relative transition-all duration-300 hover:shadow-[0_20px_50px_-20px_rgba(16,185,129,0.18)] hover:border-emerald-300/40 dark:hover:border-emerald-500/30'>
            <div onClick={()=>navigate("/")} className='flex items-center cursor-pointer transition-transform duration-300 hover:scale-105'>
                <Logo />
            </div>

            {/* Desktop Navigation Links */}
            <div className='hidden lg:flex items-center gap-14 xl:gap-18 text-sm xl:text-base font-extrabold text-gray-600 dark:text-gray-300'>
                <button onClick={()=>{ if(!userData){ setShowAuth(true); return; } navigate("/placement-test"); }} className='hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-emerald-500 hover:after:w-full after:transition-all after:duration-300'>Placement Exam</button>
                <button onClick={()=>{ if(!userData){ setShowAuth(true); return; } navigate("/roadmap"); }} className='hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-emerald-500 hover:after:w-full after:transition-all after:duration-300'>Roadmaps</button>
                <button onClick={()=>{ if(!userData){ setShowAuth(true); return; } navigate("/company-prep"); }} className='hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-emerald-500 hover:after:w-full after:transition-all after:duration-300'>Company Preparation</button>
                <button onClick={()=>{ if(!userData){ setShowAuth(true); return; } navigate("/resume-tips"); }} className='hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-emerald-500 hover:after:w-full after:transition-all after:duration-300'>ATS Checker</button>
                <button onClick={()=>{ if(!userData){ setShowAuth(true); return; } navigate("/guidance"); }} className='hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-emerald-500 hover:after:w-full after:transition-all after:duration-300'>Guidance</button>
            </div>

            <div className='flex items-center gap-3 md:gap-4 relative flex-shrink-0'>
                <button
                    onClick={() => {
                        if (!userData) {
                            setShowAuth(true);
                            return;
                        }
                        navigate("/interview");
                    }}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-full text-xs md:text-sm shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                    Start Interview
                </button>

                {/* Dark/Light mode switcher */}
                <button
                    onClick={toggleTheme}
                    className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors duration-200 cursor-pointer flex items-center justify-center"
                    title="Toggle Theme"
                >
                    {theme === "dark" ? <BsSun size={18} /> : <BsMoonStars size={18} />}
                </button>

                <div className='relative'>
                    <button onClick={()=>{
                        if(!userData){
                            setShowAuth(true)
                            return;
                        }
                        setShowCreditPopup(!showCreditPopup);
                        setShowUserPopup(false)
                    }} className='flex items-center gap-2 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-md hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer'>
                        <BsCoin size={20} className="text-yellow-500"/>
                        {userData?.credits || 0}
                    </button>

                    {showCreditPopup && (
                        <div className='absolute right-[-50px] mt-3 w-64 bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-800 rounded-xl p-5 z-[100] text-gray-800 dark:text-gray-200'>
                            <p className='text-sm text-gray-600 dark:text-gray-400 mb-4'>Need more credits to continue interviews?</p>
                            <button onClick={()=>{ navigate("/pricing"); setShowCreditPopup(false); }} className='w-full bg-black dark:bg-emerald-600 text-white py-2 rounded-lg text-sm cursor-pointer hover:bg-emerald-600 dark:hover:bg-emerald-700 transition-colors'>Buy more credits</button>
                        </div>
                    )}
                </div>

                <div className='relative'>
                    <button
                        onClick={()=>{
                            if(!userData){
                                setShowAuth(true)
                                return;
                            }
                            setShowUserPopup(!showUserPopup);
                            setShowCreditPopup(false)
                        }} 
                        className='w-9 h-9 bg-black dark:bg-gray-800 text-white rounded-full flex items-center justify-center font-semibold cursor-pointer hover:bg-emerald-600 dark:hover:bg-emerald-600 transition-colors'
                    >
                        {userData ? (userData?.name ? userData.name.slice(0,1).toUpperCase() : 'U') : <FaUserAstronaut size={16}/>}
                    </button>

                    {showUserPopup && (
                        <div className='absolute right-0 mt-3 w-52 bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-800 rounded-xl p-4 z-[100] text-gray-800 dark:text-gray-200'>
                            <p className='text-md text-emerald-600 dark:text-emerald-400 font-semibold mb-2 border-b dark:border-gray-800 pb-1 truncate'>{userData?.name}</p>
                            <button onClick={()=>{ navigate("/history?tab=interviews"); setShowUserPopup(false); }} className='w-full text-left text-sm py-2 hover:text-black dark:hover:text-white text-gray-600 dark:text-gray-400 cursor-pointer transition-colors hover:font-semibold'>Interview History</button>
                            <button onClick={()=>{ navigate("/history?tab=placements"); setShowUserPopup(false); }} className='w-full text-left text-sm py-2 hover:text-black dark:hover:text-white text-gray-600 dark:text-gray-400 cursor-pointer transition-colors hover:font-semibold'>Placement History</button>
                            <button onClick={handleLogout} 
                            className='w-full text-left text-sm py-2 flex items-center gap-2 text-red-500 border-t dark:border-gray-800 mt-1 pt-2 cursor-pointer transition-colors hover:font-semibold'>
                                <HiOutlineLogout size={16}/>
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>

        {showAuth && <AuthModel onClose={()=>setShowAuth(false)}/>}
      
    </div>
  )
}

export default Navbar
