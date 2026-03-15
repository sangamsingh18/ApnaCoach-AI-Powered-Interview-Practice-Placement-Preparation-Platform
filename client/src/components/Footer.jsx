import React from 'react'
import { BsRobot, BsLinkedin, BsGithub, BsTwitterX, BsYoutube } from 'react-icons/bs'
import { motion } from "motion/react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#f3f3f3] px-4 pb-12 pt-6'>
      <div className='w-full max-w-6xl mx-auto bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-8 md:p-12'>
          
          {/* Column 1: Brand Info */}
          <div className='flex flex-col space-y-6'>
            <div className='flex items-center gap-3'>
              <div className='bg-black text-white p-2.5 rounded-xl shadow-lg'>
                <BsRobot size={22}/>
              </div>
              <h2 className='font-bold text-xl tracking-tight'>ApnaCoach</h2>
            </div>
            <p className='text-gray-500 text-sm leading-relaxed'>
              AI-powered interview preparation platform designed to improve 
              communication skills, technical depth, and professional confidence.
            </p>
            <div className='flex items-center gap-4'>
              {[
                { icon: <BsLinkedin size={18}/>, href: "#", label: "LinkedIn", hoverClass: "hover:text-[#0A66C2]" },
                { icon: <BsTwitterX size={18}/>, href: "#", label: "Twitter", hoverClass: "hover:text-black" },
                { icon: <BsGithub size={18}/>, href: "#", label: "GitHub", hoverClass: "hover:text-[#333]" },
                { icon: <BsYoutube size={18}/>, href: "#", label: "YouTube", hoverClass: "hover:text-[#FF0000]" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className={`text-gray-400 ${social.hoverClass} transition-colors`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className='font-bold text-gray-900 mb-6'>Quick Links</h3>
            <ul className='space-y-4'>
              {[
                { label: "Home", href: "/" },
                { label: "Practice Interview", href: "/interview" },
                { label: "Interview History", href: "/history" },
                { label: "About Us", href: "#" }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className='text-gray-500 hover:text-black text-sm transition-all hover:translate-x-1 inline-block'>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className='font-bold text-gray-900 mb-6'>Resources</h3>
            <ul className='space-y-4'>
              {[
                "How It Works",
                "AI Interview Guide",
                "Resume Tips",
                "Career Advice"
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className='text-gray-500 hover:text-black text-sm transition-all hover:translate-x-1 inline-block'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className='font-bold text-gray-900 mb-6'>Contact</h3>
            <ul className='space-y-4'>
              <li>
                <a href="mailto:support@apnacoach.com" className='text-gray-500 hover:text-green-600 text-sm font-medium transition-colors'>
                  support@apnacoach.com
                </a>
              </li>
              <li>
                <a href="#" className='text-gray-500 hover:text-black text-sm transition-all hover:translate-x-1 inline-block'>
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className='text-gray-500 hover:text-black text-sm transition-all hover:translate-x-1 inline-block'>
                  Report Issue
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-100 bg-gray-50/50 px-8 py-6 md:px-12'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400 text-xs font-medium'>
              © {currentYear} ApnaCoach. All rights reserved.
            </p>
            <div className='flex items-center gap-8'>
              <a href="#" className='text-gray-400 hover:text-black text-xs font-medium transition-colors'>Privacy Policy</a>
              <a href="#" className='text-gray-400 hover:text-black text-xs font-medium transition-colors'>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
