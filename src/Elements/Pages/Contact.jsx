// import { ImSpinner10 } from "react-icons/im";
// import React, { useState } from "react";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

// export default function ContactPage({ ouvert }) {
//   return (
//     <div
//       id="Contact"
//       className={`flex flex-col lg:flex-row w-full min-h-screen px-4 py-8 lg:px-16 lg:py-12 gap-8 bg-gradient-to-br from-gray-50 via-gray-100 to-white text-gray-800 ${
//         ouvert ? "blur-sm lg:blur-none" : "blur-none"
//       }`}
//     >
//       {/* Infos de contact */}
//       <div className="flex flex-col items-start justify-center flex-1 gap-6 p-6 bg-white shadow-xl lg:p-10 rounded-2xl">
//         <h1 className="mb-2 text-3xl font-bold lg:text-4xl text-cyan-700">Contactez Stand’art</h1>
//         <p className="text-base text-gray-600 lg:text-lg">
//           Pour un projet web, une assistance ou juste échanger une idée, on est là pour toi.
//         </p>

//         <div className="flex flex-col w-full gap-4 mt-6">
//           <ContactItem
//             icon={<FaMapMarkerAlt />}
//             label="Adresse"
//             content="Ankadikely Ilafy, Antananarivo"
//           />
//           <ContactItem
//             icon={<FaPhone />}
//             label="Téléphone"
//             content="+261 34 31 093 79 / +261 38 66 414 82"
//           />
//           <ContactEmailItem
//             icon={<FaEnvelope />}
//             label="Email"
//           />
//           <ContactItem
//             icon={<FaClock />}
//             label="Horaires"
//             content="Lun - Sam : 7h30 à 16h30"
//           />
//         </div>

//         <p className="mt-8 text-sm italic text-gray-500">
//           "Votre problème devient le nôtre. Alors contactez-nous sans hésiter !"
//         </p>
//       </div>

//       {/* Bloc Map intégré */}
//       <div className="flex items-center justify-center flex-1 p-4 shadow-md lg:p-10 bg-cyan-50 rounded-2xl">
//         <iframe
//           title="Stand'art Location"
//           width="100%"
//           height="100%"
//           className="rounded-xl w-full h-[300px] lg:h-full shadow-[inset_0px_0px_5px_rgba(0,0,0,0.7)]"
//           style={{ border: 0 }}
//           loading="lazy"
//           allowFullScreen
//           src="https://www.google.com/maps?q=-18.853962,47.566114&z=15&output=embed"
//         ></iframe>
//       </div>
//     </div>
//   );
// }

// // Composant générique
// function ContactItem({ icon, label, content }) {
//   return (
//     <div className="flex items-start gap-4">
//       <div className="mt-1 text-xl text-cyan-600">{icon}</div>
//       <div>
//         <p className="font-semibold text-gray-800">{label} :</p>
//         <p className="text-gray-600">{content}</p>
//       </div>
//     </div>
//   );
// }

// // Composant spécial pour l'email avec effet spin
// function ContactEmailItem({ icon, label }) {
//   const [loading, setLoading] = useState(false);

//   const handleClick = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       window.location.href =
//         "mailto:manager.standart0306@gmail.com?subject=Demande de renseignement&body=Bonjour, je suis intéressé par vos services et j’aimerais en savoir plus. Pourriez-vous me donner plus d’informations ? Merci d’avance.";
//     }, 3000); // délai pour spinner style
//   };

//   return (
//     <div className="flex items-start gap-4">
//       <div className="mt-1 text-xl text-cyan-600">{icon}</div>
//       <div>
//         <p className="font-semibold text-gray-800">{label} :</p>
//         <button
//           onClick={handleClick}
//           disabled={loading}
//           className="flex items-center gap-2 mt-1 text-left text-gray-600 underline transition hover:text-cyan-700 disabled:opacity-60"
//         >
//           {loading ? (
//             <>
//              <ImSpinner10 className="animate-spin text-cyan-600"/>
//               Veuillez patientez s'il vous plait ...
//             </>
//           ) : (
//             "manager.standart0306@gmail.com"
//           )}
//         </button>
//       </div>
//     </div>
//   );
// }

import { CgSpinnerTwo } from "react-icons/cg";
import { CgTimelapse } from "react-icons/cg";
import { HiMail } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import Swal from 'sweetalert2';
import { Parallax } from "react-scroll-parallax";
export default function Contact()
{
  // Etat
  const contacts = [
    { titre : 'Adresse', icon:<FaMapMarkerAlt />, nom: 'Ankadikely Ilafy, Antananarivo' },
    { titre : 'Téléphones', icon:<AiFillPhone />, nom: '+261 34 31 093 79 / +261 38 66 414 82' },
    { titre : 'Email', icon:<HiMail />, nom: 'manager.standart0306@gmail.com' },
    { titre : 'Horaires', icon:<CgTimelapse />, nom: 'Lun - Sam : 7h30 à 16h30' },
  ];

  // Comportement
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(()=>{
      return(
        <div className="flex items-center ml-4">Envoi du message <CgSpinnerTwo className="animate-spin ml-3"/></div>
      )
    });
    setTimeout(() => {
      setResult(null);
  }, 7000);
    const formData = new FormData(event.target);

    formData.append("access_key", "5a5726b2-d782-436b-b4bc-51697b576221");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
          title: "Message envoyé avec succès",
          text: "Stand'Art vous remercie pour votre soutien.",
          icon: "success"
        });
      event.target.reset();
    } else {
      Swal.fire({
        title: "Oups, une erreur a été détecté !",
        text: "Nous sommes navrés de vous dire de recommencer plus tard, merci.",
        icon: "error"
      });
    }
  };


  // Affichage
  return(
    <div className='relative overflow-hidden'>
      <div className="w-full lg:h-screen h-[120vh] container flex justify-between gap-5 items-center lg:flex-row flex-col" id="Contact">

          {/* Information de contact */}
          <div className="w-full h-3/4 border-2 space-y-7 flex justify-center flex-col lg:p-5 p-3 rounded-lg group relative">
            <h1 className="font-bold z-10 text-white"><span className="group-hover:text-black">Information</span></h1>
            {contacts.map((contact, index)=>(
            <div className="flex flex-col ml-5 z-10" key={index}>
              <div className="flex items-center text-xl text-white">
                <span className="mr-3 group-hover:text-black">{contact.icon}</span>
                <span className="group-hover:text-black">{contact.titre} :</span>
              </div>
              <div className="text-lg text-white"><span className="group-hover:text-gray-700">{contact.nom} </span></div>
            </div>
            ))}
            <span className="w-full h-full bg-cyan-800 absolute bottom-0 left-0 group-hover:h-0 transition-all duration-500"></span>
          </div>

          {/* Formulaire de contact */}
          <div className="w-full h-[90%] lg:h-3/4 border-2 flex justify-center flex-col rounded-lg p-3 relative overflow-hidden group">
          <h1 className="z-10 font-bold group-hover:text-white delay-300">Contactez-nous ici</h1>
            <form className="flex flex-col space-y-5 z-10" onSubmit={onSubmit}>
              <label htmlFor="Email" className="py-3 text-lg group-hover:text-white delay-300">Email:</label>
              <input type="email" className=" p-3 border focus:outline-1 focus:outline focus:outline-cyan-800 group-hover:border-white group-hover:bg-cyan-800 group-hover:text-white"  name="email" require/>
              <label htmlFor="Mess" className="text-lg group-hover:text-white delay-300">Message</label>
              <input type="text" className=" p-3 border focus:outline-1 focus:outline focus:outline-cyan-800 group-hover:border-white group-hover:bg-cyan-800 group-hover:text-white" name="message" require/>
              <input type="submit" className="p-3 bg-cyan-800 text-lg text-white  border-2 font-bold group-hover:border-2 delay-300" value='Envoyer' />
            </form>
            <p className="text-sms z-10 mt-2 group-hover:text-white">{result}</p>
            <span className="w-full h-0 bg-cyan-800 absolute top-0 left-0 group-hover:h-full transition-all duration-500"></span>
          </div>

      </div>

    {/* Google maps */}
     <Parallax
      className="absolute w-[14%] h-[30%] z-20 bottom-0 rounded-full overflow-hidden left-2 hidden lg:flex "
      speed={ -40}
    >
       <iframe
         title="Stand'art Location"
         width="100%"
         height="100%"
         className=" w-full h-full lg:h-full  shadow-[inset_0px_0px_5px_rgba(0,0,0,0.7)]"
         style={{ border: 0 }}
         loading="lazy"
         allowFullScreen
         src="https://www.google.com/maps?q=-18.853962,47.566114&z=15&output=embed"
       ></iframe>
     </Parallax>

    </div>
  )
}