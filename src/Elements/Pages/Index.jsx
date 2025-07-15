import { BsCodeSlash } from "react-icons/bs"; 

// import { AiOutlineMessage } from "react-icons/ai"; 
// import { useState } from "react";
// import { motion } from 'framer-motion';
// import NavBar from "../Components/NavBar";
// import Accueil from "./Accueil";
// import Vetements from "./Vetements";
// import Materiels from "./Materiels";
// import Creation from "./Création";
// import Choix from "./Choix";
// import Contact from "./Contact";
// import Propos from "./Propos";
// import Bannieres from '../Assets/bannière.jpg';
// import Footer from "../Components/Footer";
// function Index()
// {
//   // Etat
//   const [ ouvert, setOuvert ] = useState(true);

//   // Affichage
//   return(
//     <div className="w-full h-full transition-all duration-500">
//       <div className=''>
//       <NavBar ouvert={ouvert} setOuvert={setOuvert}/>
//       {!ouvert && <div className="fixed z-40 right-5 top-5 ">
//         <i className="z-40 text-4xl cursor-pointer fas fa-bars" onClick={() => setOuvert(!ouvert)}></i>
//       </div>}
//       <Accueil ouvert={ouvert}/>
//       <Banniere/>
//       <Vetements ouvert={ouvert}/>
//       <Banniere/>
//       <Materiels ouvert={ouvert}/>
//       <Banniere/>
//       <Creation ouvert={ouvert}/>
//       <Banniere/>
//       <Choix ouvert={ouvert}/>
//       <Banniere/>
//       <Contact ouvert={ouvert}/>
//       <Banniere/>
//       <Propos ouvert={ouvert}/>
//       <Footer ouvert={ouvert}/>
//       <div className="fixed flex items-center justify-center p-3 border rounded-full cursor-pointer bottom-5 right-5 bg-cyan-900">
//         <AiOutlineMessage className="text-5xl font-bold text-white"/>
//       </div>
//         </div>
//     </div>
//   )
// }
// export default Index;



// function Banniere() {
//   const [showDialog, setShowDialog] = useState(false);

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = Bannieres;
//     link.download = "banniere.jpg";
//     link.click();
//     setShowDialog(false);
//   };

//   return (
//     <motion.section
//       className="container relative w-full my-10 overflow-hidden h-36 lg:h-56"
//       initial={{ opacity: 0, scale: 0 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <motion.img
//         src={Bannieres}
//         alt="Bannière"
//         className="absolute object-contain w-full h-full cursor-pointer lg:object-cover"
//         drag
//         dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
//         dragElastic={1.1}
//         initial={{ opacity: 0, translateX: -100 }}
//         whileInView={{ opacity: 1, translateX: 0 }}
//         onClick={() => setShowDialog(true)}
//       />

//       {/* Dialog de confirmation */}
//       {showDialog && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
//           <div className="w-full max-w-sm p-6 space-y-4 bg-white shadow-xl rounded-xl">
//             <h2 className="text-lg font-semibold text-gray-800">Stand'art | Télécharger la bannière ?</h2>
//             <p className="text-sm text-gray-600">Souhaitez-vous vraiment télécharger cette image pour faire une carte de visite ?</p>
//             <div className="flex justify-end space-x-4">
//               <button
//                 onClick={() => setShowDialog(false)}
//                 className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
//               >
//                 Annuler
//               </button>
//               <button
//                 onClick={handleDownload}
//                 className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
//               >
//                 Télécharger
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </motion.section>
//   );
// }
import { AiOutlineMessage } from "react-icons/ai";
import { BiDownArrowCircle } from "react-icons/bi"; 
import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../Components/NavBar";
import Accueil from "./Accueil";
import Vetements from "./Vetements";
import Materiels from "./Materiels";
import Creation from "./Création";
import Choix from "./Choix";
import Contact from "./Contact";
import Commander from "./Commander";
import Propos from "./Propos";
import Bannieres from "../Assets/bannière.jpg";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const qaPairs = [
  { question: "Quels sont vos horaires ?", answer: "Nous sommes ouverts de 7h 30 à 16h 30 du lundi au samedi." },
  { question: "Livrez-vous à domicile ?", answer: "Oui, la livraison est disponible dans toute la région." },
  { question: "Comment contacter le support ?", answer: "Par téléphone / whatsapp au +261 34 31 093 79 ou cliquez juste sur le mail dans le contact." },
  { question: "Quels moyens de paiement acceptez-vous ?", answer: "Chèque, espèces, et mobile money." },
  { question: "Où êtes-vous situés ?", answer: "Nous sommes à Ankadikely Ilafy, Antananarivo." },
  { question: "Faites-vous des devis gratuits ?", answer: "Oui, tous nos devis sont gratuits et sans engagement." },
  { question: "Quels types de vêtements vendez-vous ?", answer: "Traditionnels, modernes, personnalisés." },
  { question: "Faites-vous des sites web ?", answer: "Oui, nous créons des sites vitrines et site web personnalisé." },
  { question: "Proposez-vous des formations ?", answer: "Oui, en bureautique." },
];

function Index() {
  const [ouvert, setOuvert] = useState(true);
  const [chatVisible, setChatVisible] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const toggleChat = () => {
    setChatVisible(!chatVisible);
    setSelectedAnswer(null);
  };

  return (
    <div className={`w-full h-full transition-all duration-500`}>
      <NavBar ouvert={ouvert} setOuvert={setOuvert} />
      {!ouvert && (
        <div className="fixed z-40 right-5 top-5">
          <i
            className="z-40 text-4xl cursor-pointer fas fa-bars"
            onClick={() => setOuvert(!ouvert)}
          ></i>
        </div>
      )}

      {/* Sections principales */}
      <Accueil ouvert={ouvert} />
      <Banniere />
      <Vetements ouvert={ouvert} />
      <Banniere />
      <Materiels ouvert={ouvert} />
      <Banniere />
      <Creation ouvert={ouvert} />
      <Banniere />
      <Choix ouvert={ouvert} />
      <Banniere />
      <Contact ouvert={ouvert} />
      <Banniere />
      <Commander ouvert={ouvert} />
      <Banniere />
      <Propos ouvert={ouvert} />
      <Footer ouvert={ouvert} />

      <div className="fixed z-40 bottom-28 right-5">
        <Link to='/Creation' className="flex items-center justify-center p-4 transition border rounded-full shadow-md animate-bounce cursor-point bg-cyan-900 hover:scale-105">
          <BsCodeSlash className="text-3xl text-white"/>
        </Link>
      </div>

      {/* Mini Chatbot */}
      <div className="fixed z-40 bottom-5 right-5">
        {/* Floating Button */}
        <div
          className="flex items-center justify-center p-4 transition border rounded-full shadow-lg cursor-pointer bg-cyan-900 hover:scale-105"
          onClick={toggleChat}
        >
          {chatVisible ? (
            <BiDownArrowCircle className="text-3xl text-white" />
          ) : (
            <AiOutlineMessage className="text-3xl text-white" />
          )}
        </div>

        {/* Contenu du Chatbot */}
        {chatVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute right-0 w-[90vw] max-w-[340px] p-4 space-y-2 overflow-hidden bg-white border border-gray-300 shadow-xl bottom-20 rounded-xl"
          >
            <h4 className="mb-2 font-semibold text-md text-cyan-800">Question ?</h4>
            <div className="space-y-2 overflow-y-auto max-h-[280px] pr-1">
              {qaPairs.map((qa, index) => (
                <button
                  key={index}
                  className="w-full px-3 py-2 text-sm text-left rounded hover:bg-cyan-100"
                  onClick={() => setSelectedAnswer(qa.answer)}
                >
                  {qa.question}
                </button>
              ))}
            </div>
            {selectedAnswer && (
              <div className="p-3 mt-2 text-sm font-bold text-white rounded bg-gradient-to-t from-cyan-900 via-cyan-600 to-cyan-400 shadow-[inset_0px_0px_5px_0px_rgba(20,78,165,0.81)]">
                {selectedAnswer}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Index;

// Composant BANNIERE
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
