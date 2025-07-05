
import React, { useEffect, useState } from 'react'
import Main from './Components/Main'
import { ThemeProvider } from './Context/ThemeContext'
import Services from './Components/Services'
import Contacts from './Components/Contacts'
import Loader from './Components/Loader'

function App() {
  const[isLoading,setIsLoading]=useState(true);
  useEffect(()=>{
   const timer =  setTimeout(()=>{
      setIsLoading(false);
    },2000)

    return ()=> clearTimeout(timer)
  },[])
  
  return (
    <ThemeProvider className='bg-gray-900'>
<Loader isLoading={isLoading} />
  {!isLoading && <>
    <div  className='bg-white dark:bg-gray-900 text-red-500 dark:text-yellow-500 transition-colors duration-500'><Main />
    <Services />
    <Contacts />
    </div>
</>}
     </ThemeProvider>

  )
}

export default App