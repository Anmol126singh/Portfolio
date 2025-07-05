import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { aboutText, letters, professionTexts, socialIcons } from '../Data'
import NavigationCircles from './NavigationCircles';

function Main() {
   const [hoveredLetter,setHoveredLetter]=useState(null);
   let[currentText,setCurrentText]=useState(professionTexts[0]);
   const[isRotating,setIsRotating]=useState(false);
   const[istextvisible,setIsTextVisible]=useState(false);
   const[RoadOpacity,setRoadOpacity]=useState(0.5);
   let currentindex =0;
   useEffect(()=>{
    const interval = setInterval(()=>{
        setIsRotating(true);
        setTimeout(()=>{
            currentindex = (currentindex+1)%professionTexts.length
            setCurrentText(professionTexts[currentindex]);
            setIsRotating(false)
        },300)
    },5000)
    return ()=>clearInterval(interval);
   },[])
  return (
    <div id='Main' className='w-full h-screen  flex flex-col justify-center items-center isolate relative z-10'> <Navbar />
    <div className='flex flex-col md:items-center items-start xl:gap-y-10 gap-y-3 xl:mb-0 md:mb-20 mb-0 '>
        <h1 className='flex flex-col xl:space-y-8 md:space-y-4 space-y-2 xl:text-6xl md:text-4xl text-3xl md:font-normal font-bolder mt-8 md:mt-0 '>
            <span className='flex mx-auto md:mx-0'>
                {letters.map((letter,key)=>{
                    return <span key={key} className='inline-block md:w-38 w-32 md:-mr-20 -mr-24 relative' onMouseEnter={()=>setHoveredLetter(key)} onMouseLeave={()=>setHoveredLetter(null)}>{letter.char}
                    <img src={letter.img} alt= {`hover-img  ${key}`} className={`absolute xl:h-38 h-24 bottom-full -translate-x-1/2 ${letter.rotate} ${hoveredLetter===key ? 'visible':'invisible'}
                         `} />
                    
                    </span>
                    
                })}
            </span>
            <span className='xl:text-6xl md:text-4xl text-2xl text-center tracking-wider xl:py-4 py-2 overflow-hidden'>
                I'm <span className={`inline-block xl:w-[380px] md:w-[240px] w-[160px] lg:ml-6 ml-2 font-extrabold transform origin-left  transition-transform duration-300 ease-out ${isRotating?'md:rotate-[100deg]':'rotate-0'}`}>{currentText}</span> Web Developer
            </span>

        </h1>
        <button className='xl:w-[400px] md:w-300px w-270px bg-gray-900 dark:bg-gray-200 md:py-1 py-0 md:px-4 px-2 xl:text-2xl md:text-xl text-base text-white dark:text-gray-900 tracking-widest rounded-r-4xl flex justify-between items-center md:mr-auto md:mx-0 mx-auto ' onClick={()=> setIsTextVisible((prev)=>!prev)} onMouseEnter={()=>setRoadOpacity(0.8) } onMouseLeave={()=>setRoadOpacity(0.5)}>
           {istextvisible?'Hide My Story':'Read My Story'}  <i className={ `bx ${istextvisible?'ri-book-open-line':'ri-book-line  '} `}></i>
        </button>
        <div className='flex md:gap-12 gap-2  mr-auto absolute md:relative left-4 md:left-auto top-20 md:top-auto flex-col md:flex-row '>
            {socialIcons.map((elem,key)=>{
               return( <a href={elem.link} key={key} className='xl:text-3xl md:text-2xl text-red-500 dark:text-yellow-500 dark:hover:text-white transition-colors duration-500  hover:text-gray-900 transition-colors duration-500 '>
                    <i className={elem.icon}></i>
                </a>)
            })}
        </div>
<div className="lg:w-[600px] md:w-[500px] w-[350px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 mt-10">
            <img src="road.png" alt="" className='w-full mx-auto transition-opacity duration-300 ' style={{opacity:RoadOpacity}} />
            <span className='xl:text-xs md:text-[10px] text-[9px] font-bold tracking-wide absolute -top-5 xl:right-22 md:right-16 right-11 rotate-[3.5deg] custom-bounce '>Looking for new challenges</span>
            <div className={`xl:h-[150px] h-[100px] px-3 xl:text-lg md:text-sm text-xs font-light text-gray-900 dark:text-gray-200 text-justify tracking wide transform origin-top custom-scrollbar ${istextvisible?'scale-y-100':'scale-y-0'} transition-transform duration-300 overflow-y-auto -mb-10 `}>
                <p className='xl:py-3 py-1 px-1'>{aboutText}</p>
            </div>
        </div>

    </div>
    <NavigationCircles section='Main' />
    </div>
  )
}

export default Main