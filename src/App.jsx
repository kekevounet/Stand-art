import { ImSpinner10 } from "react-icons/im"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './Elements/Pages/Index';
import { useEffect, useState } from 'react';
export default function App()
{
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
    <div className="">
      <Router>
        <Routes>
          <Route path='/' element={<Index />}/>
        </Routes>
      </Router>
    </div>
  )
}