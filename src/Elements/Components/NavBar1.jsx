import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

import { FaBars, FaTimes } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";
import { GiStoneCrafting, GiReturnArrow, GiWorld } from "react-icons/gi";
import { MdOutlineContacts } from "react-icons/md";
import { GoHome } from "react-icons/go";

import FondNav from '../Assets/rez.jpg';
import Logo from '../Assets/logo.jpg';

export default function NavBar1() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [ouvert, setOuvert] = useState(window.innerWidth >= 1000);

  // Gestion resize + scroll lock
  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 1000;
      setIsMobile(isNowMobile);
      setOuvert(!isNowMobile);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobile && ouvert ? 'hidden' : 'auto';
  }, [isMobile, ouvert]);

  const navItems = [
    { label: 'Accueil', icon: <GoHome />, lien: 'Accueil' },
    { label: 'Pourquoi nous?', icon: <CiCircleQuestion />, lien: 'Pourquoi' },
    { label: 'Services', icon: <GiStoneCrafting />, lien: 'Services' },
    { label: 'Exemples de sites', icon: <GiWorld />, lien: 'Exemples' },
    { label: 'À propos', icon: <MdOutlineContacts />, lien: 'Propos' }
  ];

  return (
    <>
      {/* Bouton ouverture mobile */}
      {isMobile && !ouvert && (
        <button
          onClick={() => setOuvert(true)}
          className="fixed z-50 p-3 text-white bg-cyan-800 rounded-full top-5 right-5 shadow-[inset_-1px_-1px_1px_white] hover:bg-cyan-700 transition"
          aria-label="Ouvrir le menu"
        >
          <FaBars className="text-2xl" />
        </button>
      )}

      <AnimatePresence>
        {ouvert && (
          <motion.div
            initial={{ x: isMobile ? '-100%' : 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: isMobile ? '-100%' : 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 80 }}
            className={`fixed top-0 left-0 z-40 w-full ${isMobile ? 'h-screen' : 'h-20'} shadow-[0px_0px_10px_#0c53af] bg-cover bg-center overflow-hidden`}
            style={{ backgroundImage: !isMobile ? `url(${FondNav})` : undefined }}
          >

            {/* Overlay mobile */}
            {isMobile && <div className="absolute inset-0 bg-cyan-900/90 backdrop-blur-sm z-[-1]" />}

            <div className="flex flex-col items-center justify-between h-full lg:flex-row lg:px-5">

              {/* Nav Links */}
              <nav className="flex flex-col items-center justify-center w-full h-full py-10 ml-0 lg:justify-start lg:ml-24 lg:flex-row lg:gap-3 lg:py-0">
                {navItems.map(({ label, icon, lien }) => (
                  <motion.li
                    key={label}
                    className="list-none"
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={`#${lien}`}
                      className="flex items-center no-underline p-4 text-lg font-bold hover:border-b-2 border-white text-white transition rounded-md hover:bg-cyan-900 hover:shadow-[0px_2px_10px_rgba(0,0,0,0.7)]"
                      onClick={() => isMobile && setOuvert(false)}
                      aria-label={label}
                      
                    >
                      <span className="mr-2 text-2xl">{icon}</span>
                      <span>{label}</span>
                    </a>
                  </motion.li>
                ))}

                {/* Retour Stand'Art */}
                <motion.li className="list-none" whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/"
                    className="flex items-center no-underline p-4 text-lg font-bold hover:border-b-2 border-white text-white transition rounded-md hover:bg-cyan-900 hover:shadow-[0px_2px_10px_rgba(0,0,0,0.7)]"
                    onClick={() => isMobile && setOuvert(false)}
                    aria-label="Stand'Art"
                  >
                    <span className="mr-2 text-2xl"><GiReturnArrow /></span>
                    <span>Stand'Art</span>
                  </Link>
                </motion.li>
              </nav>

              {/* Logo draggable */}
              <div className="hidden w-[10%] h-20 lg:flex justify-center items-center">
                <motion.img
                  src={Logo}
                  alt="Logo"
                  drag
                  dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                  dragElastic={1.1}
                  className="h-full transition-transform duration-300 rounded-full cursor-pointer hover:scale-110 animate-pulse"
                />
              </div>

              {/* Bouton fermeture mobile */}
              {isMobile && (
                <button
                  onClick={() => setOuvert(false)}
                  className="fixed z-50 p-3 text-white bg-red-600 rounded-full top-5 right-5 hover:bg-red-500 transition shadow-[inset_-1px_-1px_2px_white]"
                  aria-label="Fermer le menu"
                >
                  <FaTimes className="text-2xl" />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
