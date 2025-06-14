import { useEffect, useState } from 'react';
import FondNav from '../Assets/rez.jpg';
import Logo from '../Assets/logo.jpg';
import { motion } from 'framer-motion';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}

export default function NavBar({ ouvert, setOuvert }) {
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOuvert(false);
      } else {
        setOuvert(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [setOuvert]);

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', icon: 'fa-home' },
    { label: 'Vetements', icon: 'fa-shirt' },
    { label: 'Materiels', icon: 'fa-laptop' },
    { label: 'Creation', icon: 'fa-code' },
    { label: 'Contact', icon: 'fa-envelope' },
    { label: 'Propos', icon: 'fa-user' }
  ];

  return (
    <div
      className={`z-50 shadow-md h-[120vh] lg:h-20 fixed flex flex-col items-center justify-center lg:flex-row transition-all duration-500 overflow-hidden bg-no-repeat bg-cover bg-center 
      ${ouvert ? 'lg:w-full w-1/2' : 'w-0'} 
      ${showNav ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}
      style={{ backgroundImage: `url(${FondNav})` }}
    >
      <nav className="relative flex flex-col items-center justify-center w-[90%] h-full lg:h-20 lg:space-x-3 lg:ml-28 lg:space-y-0 lg:flex-row mt-32 md:mt-0 lg:mt-0">
        <div className="relative flex flex-col items-center justify-center w-full h-screen space-y-0 lg:space-y-0 lg:space-x-3 lg:w-1/2 lg:ml-28 lg:flex-row">
          {navItems.map(({ label, icon }) => (
            <li key={label} className="list-none">
              <a
                href={`#${label}`}
                className="p-4 text-lg font-bold text-white no-underline transition-all duration-200 rounded-md hover:border-b-4 hover:shadow-[0px_2px_10px_rgba(0,0,0,0.7)] hover:bg-cyan-900 flex items-center space-x-2"
                onClick={() => {
                  if (isMobile) setOuvert(false);
                }}
              >
                <i className={`fa-solid ${icon}`}></i>
                <span>{label}</span>
              </a>
            </li>
          ))}
        </div>
        {ouvert && <div className="lg:hidden">
          <i
            className="fixed text-4xl text-white cursor-pointer top-5 left-5 fas fa-xmark"
            onClick={() => setOuvert(!ouvert)}
          ></i>
        </div>}
      </nav>
      <div className="lg:flex justify-center w-[10%] h-20 hidden">
        <motion.img src={Logo} alt="Logo" drag dragConstraints={{top:0, bottom:0, left:0, right:0}} dragElastic={1.1} className="cursor-pointer animate-pulse" />
      </div>
    </div>
  );
}
