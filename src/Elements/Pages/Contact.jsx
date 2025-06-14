import React from "react";

export default function ContactPage({ouvert}) {
  return (
    <div className={`flex w-full flex-col lg:flex-row min-h-screen gap-5 lg:gap-12 p-2 lg:p-10 space-y-3 font-sans text-gray-900 bg-gray-100 ${ouvert ? 'blur-sm lg:blur-none' : 'blur-none'}`} id="Contact">
      
      {/* Left side : Infos de la boîte */}
      <div className="flex flex-col items-center justify-center flex-1 w-full p-3 space-y-4 bg-blue-100 shadow-md lg:bg-gray-100 lg:p-8 rounded-xl">
        <h1 className="mb-6 text-3xl font-bold text-blue-800">Contactez Stand'art</h1>
        <p className="p-3 lg:p-4 mb-2 bg-gray-200 w-full lg:w-[60%] rounded-lg"><strong>Adresse :</strong> Ankadikely Ilafy, Antananarivo, Madagascar</p>
        <p className="p-3 lg:p-4 mb-2 bg-gray-200 w-full lg:w-[60%] rounded-lg"><strong>Téléphone :</strong> +261 34 31 093 79</p>
        <p className="p-3 lg:p-4 mb-2 bg-gray-200 w-full lg:w-[60%] rounded-lg"><strong>Téléphone :</strong> +261 38 66 414 82</p>
        <p className="p-3 lg:p-4 mb-2 bg-gray-200 w-full lg:w-[60%] rounded-lg overflow-x-auto"><strong>Email :</strong> <a href="mailto:manager.standart0306@gmail.com">manager.standart0306@gmail.com</a></p>
        <p className="p-3 lg:p-4 mb-2 bg-gray-200 w-full lg:w-[60%] rounded-lg"><strong>Horaires :</strong> Lun - Sam : 7h 30 - 16h 30</p>
        <p className="mt-6 italic text-gray-600">
          "Votre problème deviens la notre, alors contactez-nous!"
        </p>
      </div>

      {/* Right side : Message statique */}
      <div className="flex flex-col items-center justify-center flex-1 p-8 text-lg leading-relaxed text-gray-700 bg-white shadow-sm rounded-xl">
        <h2 className="mb-4 text-2xl font-semibold text-blue-700">Envie de nous parler ?</h2>
        <p className="text-center">
          Tu peux nous joindre facilement par téléphone ou email.<br />
          On répond vite, promis !<br /><br />
          Hâte d’échanger avec toi, que ce soit pour un projet, une question ou juste dire bonjour !
        </p>
      </div>
    </div>
  );
}
