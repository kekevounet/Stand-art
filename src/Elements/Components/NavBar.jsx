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
  const [showNav, setShowNav] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', icon: 'fa-home' },
    { label: 'Vetements', icon: 'fa-shirt' },
    { label: 'Materiels', icon: 'fa-laptop' },
    { label: 'Creation', icon: 'fa-code' },
    { label: 'Choix', icon: 'fa-circle-question' },
    { label: 'Contact', icon: 'fa-envelope' },
    { label: 'Propos', icon: 'fa-user' }
  ];

  return (
    <div
      className={`z-50 fixed top-0 left-0 w-full transition-all duration-500 ease-in-out overflow-hidden
        ${ouvert ? 'h-screen lg:h-20 opacity-100 translate-x-0' : 'h-0 opacity-0 -translate-x-full'}
        ${showNav ? 'shadow-md' : ''}`}
    >
      {/* BACKGROUND IMAGE DESKTOP */}
      <div className="absolute inset-0 hidden bg-center bg-cover lg:block" style={{ backgroundImage: `url(${FondNav})` }} />

      {/* BACKGROUND COLOR MOBILE */}
      <div className="absolute inset-0 lg:hidden bg-cyan-900/90 backdrop-blur-sm" />

      <div className={`relative flex flex-col lg:flex-row items-center justify-between transition-all duration-500 ease-in-out w-full`}>
        {/* NAVIGATION LINKS */}
        <nav className="relative flex flex-col items-center justify-start transition-all duration-500 ease-in-out w-[90%] h-full lg:h-20 lg:space-x-3 lg:ml-28 lg:space-y-0 lg:flex-row  md:mt-0 lg:mt-0">
          <div className="relative flex flex-col items-center justify-center w-full h-screen space-y-0 lg:space-y-0 lg:space-x-3 lg:w-1/2 lg:ml-28 lg:flex-row">
            {navItems.map(({ label, icon }) => (
              <li key={label} className="list-none">
                <a
                  href={`#${label}`}
                  className="p-4 text-lg font-bold text-white no-underline transition-all duration-200 rounded-md hover:border-b-4 hover:shadow-[0px_2px_10px_rgba(0,0,0,0.7)] hover:bg-cyan-900 flex items-center space-x-2"
                  title={`${label}`}
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

          {/* CLOSE BUTTON MOBILE */}
          {ouvert && isMobile && (
            <div className="lg:hidden">
              <i
                className="fixed text-4xl text-white cursor-pointer top-5 left-5 fas fa-xmark"
                onClick={() => setOuvert(!ouvert)}
              ></i>
            </div>
          )}
        </nav>

        {/* LOGO DRAGGABLE */}
        <div className="lg:flex justify-center w-[10%] h-20 hidden">
          <motion.img
            src={Logo}
            alt="Logo"
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            dragElastic={1.1}
            className="cursor-pointer animate-pulse"
          />
        </div>
      </div>
    </div>
  );
}
