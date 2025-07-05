import React from 'react'

const NavigationCircles = ({section}) => {
  return (
    <div className='h-[300px] w-[1px] absolute right-12 bg-red-500 dark:bg-yellow-500 hidden md:flex flex-col justify-between items-center '  >
        <div className={`w-5 aspect-square rounded-full border border-red-500 dark:border-yellow-500  transition-colors duration-500 ${section==='Main'?'bg-red-500 dark:bg-yellow-500':'bg-gray-300'}  `}></div>
        <div className={`w-5 aspect-square rounded-full border border-red-500 dark:border-yellow-500  transition-colors duration-500 ${section==='Services'?'bg-red-500 dark:bg-yellow-500':'bg-gray-300'}  `}></div>
        <div className={`w-5 aspect-square rounded-full border border-red-500 dark:border-yellow-500  transition-colors duration-500 ${section==='Contacts'?'bg-red-500 dark:bg-yellow-500':'bg-gray-300'}  `}></div>
    </div>
  )
}

export default NavigationCircles