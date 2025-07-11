import React, { useEffect, useState } from 'react'
import { skillCards } from '../Data'
import NavigationCircles from './NavigationCircles';

function Services() {
  const[HoverIndex,setHoverIndex]=useState(null);
  const[isLargeScreen,setisLargeScreen]=useState(false);
  useEffect(()=>{
    const checkScreenSize =()=>{
      setisLargeScreen(window.innerWidth>1024);
    }
      checkScreenSize();
    window.addEventListener('resize',checkScreenSize);
    return ()=> window.removeEventListener('resize',checkScreenSize)

  },[])
  const getpos= (card)=>{
    const pos = isLargeScreen?card.hoverPosition.large:card.hoverPosition.small;
    return pos==='bottom'?'bottom-0':'top-0';
  }
  const gethoverpos= (card)=>{
    const pos = isLargeScreen?card.hoverPosition.large:card.hoverPosition.small;
    return pos==='bottom'?'bottom-full':'top-full';
  }
  return (
    <div id='Services' className='min-h-screen flex flex-col items-center justify-center px-4 xl:py-0 py-10'>
        <h2 className='text-4xl font-light mb-32 xl:mt-0 mt-12 '>SkillSet</h2>
        <div className='w-full xl:w-[900px] lg:w-[850px] md:w-[600px] grid lg:grid-cols-3 grid-cols-1 lg:gap-12 gap-26 md:gap-18 xl:mb-0 mb-16'>
            {skillCards.map((card,index)=>{
              return(
                <div key={index} className='lg:max-w-[400px] max-w-[320px] w-full mx-auto rounded-sm ring-2 ring-gray-400/20 shadow-md shadow-gray-700/20 relative isolate' onMouseEnter={()=>setHoverIndex(index)} onMouseLeave={()=>setHoverIndex(null)}>
                  <div className='p-3 bg-gray-200 dark:bg-gray-800 transition-colors duration-500'>
                    <i className={`${card.icon} md:text-4xl text-3xl text-gray-900 dark:text-white transition-colors duration-500`}></i>
                    <h3 className='md:text-2xl text-xl font-bold my-4  text-red-500 dark:text-yellow-500 transition-colors duration-500'>
                      {card.title}
                    </h3>
                    <p className='text-gray-900 dark:text-white md:h-28 h-24 md:text-base text-sm font-light overflow-y-auto custom-scrollbar pr-2 transition-colors duration-500'>{card.description}</p>
                  </div>
                
                  <div className={`absolute w-full left-0  ${getpos(card)}  flex flex-col py-4 items-center justify-center ${HoverIndex===index && `${gethoverpos(card)}` } -z-10 transition-all duration-500 gap-y-5 `}>
                     {isLargeScreen && card.hoverPosition.large === 'top' && (<div className='flex w-full justify-between '>
                    {
                      [...Array(card.projectCount)].map((_,index)=>(<a  key={index} href={card.link[index]} className='text-lg bg-red-500 dark:bg-yellow-500 w-10 rounded-full aspect-square grid place-items-center text-white transition-colors   ' >{index+1}

                      </a>))
                    }
                  </div>)}
                    
                    <h2 className='text-2xl text-centern text-gray-900 dark:text-white font-light tracking-wide '>Projects
                    </h2>
                      {(!isLargeScreen || (isLargeScreen&&card.hoverPosition.large === 'bottom')) && (<div className='flex w-full justify-between '>
                    {
                      [...Array(card.projectCount)].map((_,index)=>(<a key={index} href={card.link[index]} className='text-lg bg-red-500 dark:bg-yellow-500 w-10 rounded-full aspect-square grid place-items-center text-white transition-colors   ' >{index+1}

                      </a>))
                    }
                  </div>)}</div>
                </div>
              )
                
            })}
        </div>
        <NavigationCircles section='Services' />
    </div>
  )
}

export default Services