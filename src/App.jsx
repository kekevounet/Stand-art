import Création1 from "./Elements/Pages/Création1";
import { ImSpinner10 } from "react-icons/im"; 
import { Routes, Route, useLocation } from 'react-router-dom';
import Index from './Elements/Pages/Index';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
export default function App()
{
  const location = useLocation();
  const [chargement, setChargement] = useState(true);
  useEffect(()=>
    {
      setTimeout(()=>
      {
        setChargement(false);
      },5000)
    },[]);
  if(chargement)
  {
    return(
      <div className="flex items-center justify-center w-full h-screen bg-cyan-900">
        <ImSpinner10 className="text-white fas fa-spinner text-7xl lg:text-9xl animate-spin"/>
      </div>
    )
  }
  return(
    <>
    <AnimatePresence mode='wait'>
        <Routes location={ location } key={location.pathname}>
          <Route path='/' element={<Index />}/>
          <Route path='/Creation' element={<Création1 />} />
        </Routes>
    </AnimatePresence>
    </>
  )
}