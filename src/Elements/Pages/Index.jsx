import { useState } from "react";
import { motion } from 'framer-motion';
import NavBar from "../Components/NavBar";
import Accueil from "./Accueil";
import Vetements from "./Vetements";
import Materiels from "./Materiels";
import Creation from "./Création";
import Choix from "./Choix";
import Contact from "./Contact";
import Propos from "./Propos";
import Bannieres from '../Assets/bannière.jpg';
import Footer from "../Components/Footer";
function Index()
{
  // Etat
  const [ ouvert, setOuvert ] = useState(true);

  // Affichage
  return(
    <div className="w-full h-full transition-all duration-500">
      <div className=''>
      <NavBar ouvert={ouvert} setOuvert={setOuvert}/>
      {!ouvert && <div className="fixed z-40 right-5 top-5 ">
        <i className="z-40 text-4xl cursor-pointer fas fa-bars" onClick={() => setOuvert(!ouvert)}></i>
      </div>}
      <Accueil ouvert={ouvert}/>
      <Banniere/>
      <Vetements ouvert={ouvert}/>
      <Banniere/>
      <Materiels ouvert={ouvert}/>
      <Banniere/>
      <Creation ouvert={ouvert}/>
      <Banniere/>
      <Choix ouvert={ouvert}/>
      <Banniere/>
      <Contact ouvert={ouvert}/>
      <Banniere/>
      <Propos ouvert={ouvert}/>
      <Footer ouvert={ouvert}/>
        </div>
    </div>
  )
}
export default Index;



function Banniere() {
  const [showDialog, setShowDialog] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Bannieres;
    link.download = "banniere.jpg";
    link.click();
    setShowDialog(false);
  };

  return (
    <motion.section
      className="container relative w-full my-10 overflow-hidden h-36 lg:h-56"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src={Bannieres}
        alt="Bannière"
        className="absolute object-contain w-full h-full cursor-pointer lg:object-cover"
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragElastic={1.1}
        initial={{ opacity: 0, translateX: -100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        onClick={() => setShowDialog(true)}
      />

      {/* Dialog de confirmation */}
      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="w-full max-w-sm p-6 space-y-4 bg-white shadow-xl rounded-xl">
            <h2 className="text-lg font-semibold text-gray-800">Stand'art | Télécharger la bannière ?</h2>
            <p className="text-sm text-gray-600">Souhaitez-vous vraiment télécharger cette image pour faire une carte de visite ?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDialog(false)}
                className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
              >
                Annuler
              </button>
              <button
                onClick={handleDownload}
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Télécharger
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
}

