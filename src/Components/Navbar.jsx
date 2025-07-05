import React, { useEffect, useRef, useState } from 'react'
import { UseTheme } from '../Context/ThemeContext'

function Navbar() {
    const {ToggleDarkMode,DarkMode}=UseTheme();
    const[ActiveSection,SetActiveSection]=useState('Main');
    const IsScrollingRef=useRef(false);
    const HandleNavClick=(e,sectionID)=>{
        e.preventDefault();
        SetActiveSection(sectionID)
        IsScrollingRef.current = true;
        const element = document.getElementById(sectionID);
        element?.scrollIntoView({behavior:'smooth'})
        setTimeout(()=>{
            IsScrollingRef.current=false;
        },1000)
    }
useEffect(() => {
  const handleScroll = () => {
    if (IsScrollingRef.current) return; // ignore scroll during smooth scroll

    const sections = ['Main', 'Services', 'Contacts'];
    for (let sectionID of sections) {
      const element = document.getElementById(sectionID);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        if (top <= 100 && bottom >= 100) {
          SetActiveSection(sectionID);
          break; // stop after first match
        }
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
  return (
    <div className='w-full md:h-12 sm:h-16 h-18 flex flex-col md:flex-row justify-center md:justify-between items-center xl:px-38 lg:px-24 md:px-12 sm:px-6 px-4 fixed top-0  z-50 bg-white dark:bg-gray-900 transition-colors duration-500'>
        <div className='flex justify-between sm:gap-x-4 gap-x-2'>
            <a href="#" className='md:text-2xl sm:text-xl text-lg  '>Anmol Singh</a>
            <i className={`${DarkMode?"ri-sun-fill":"ri-moon-fill"} md:text-3xl sm:text-2xl text-xl text-gray-600 dark:text-gray-200 sm:ml-4 ml-2  cursor-pointer`} onClick={ToggleDarkMode} ></i>
        </div>
        <div >
            <a href="#Main" className={`group lg:text-lg md:text-base  text-sm font-light  lg-mr-12 mr-8 tracking-wide relative ${ActiveSection==='Main'?'text-red-500 dark:text-yellow-500':'text-gray-600 dark:text-white'}`} onClick={(e) => HandleNavClick(e, 'Main')} >Home
                <span className={`absolute  -bottom-1 left-0 w-full h-[1px]  transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300 ${ActiveSection==='Main'?'bg-red-500 dark:bg-yellow-500 ':'bg-gray-600 dark:bg-white '} `}></span>
            </a>
            <a href="#Services" className={`group lg:text-lg md:text-base  text-sm font-light  lg-mr-12 mr-8 tracking-wide relative ${ActiveSection==='Services'?'text-red-500 dark:text-yellow-500':'text-gray-600 dark:text-white'}`} onClick={(e) => HandleNavClick(e, 'Services')}>Services
                <span className={`absolute  -bottom-1 left-0 w-full h-[1px]  transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300 ${ActiveSection==='Services'?'bg-red-500 dark:bg-yellow-500':'bg-gray-600 dark:bg-white'} `} onClick={(e) => HandleNavClick(e, 'Services')} ></span>
            </a>
            <a href="#Contacts" className={`group lg:text-lg md:text-base  text-sm font-light  lg-mr-12 mr-8 tracking-wide relative ${ActiveSection==='Contacts'?'text-red-500 dark:text-yellow-500':'text-gray-600 dark:text-white'}`} onClick={(e) => HandleNavClick(e, 'Contacts')}>Contacts
                <span className={`absolute  -bottom-1 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300 ${ActiveSection==='Contacts'?'bg-red-500 dark:bg-yellow-500':'bg-gray-600 dark:bg-white'} `}  ></span>
            </a>
        </div>
    </div>
  )
}

export default Navbar