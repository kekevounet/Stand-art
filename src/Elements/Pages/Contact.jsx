import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactPage({ ouvert }) {
  return (
    <div
      id="Contact"
      className={`flex flex-col lg:flex-row w-full min-h-screen px-4 py-8 lg:px-16 lg:py-12 gap-8 bg-gradient-to-br from-gray-50 via-gray-100 to-white text-gray-800 ${
        ouvert ? "blur-sm lg:blur-none" : "blur-none"
      }`}
    >
      {/* Infos de contact */}
      <div className="flex flex-col items-start justify-center flex-1 gap-6 p-6 bg-white shadow-xl lg:p-10 rounded-2xl">
        <h1 className="mb-2 text-3xl font-bold lg:text-4xl text-cyan-700">Contactez Stand’art</h1>
        <p className="text-base text-gray-600 lg:text-lg">
          Pour un projet web, une assistance ou juste échanger une idée, on est là pour toi 🫶
        </p>

        <div className="flex flex-col w-full gap-4 mt-6">
          <ContactItem
            icon={<FaMapMarkerAlt />}
            label="Adresse"
            content="Ankadikely Ilafy, Antananarivo"
          />
          <ContactItem
            icon={<FaPhone />}
            label="Téléphone"
            content="+261 34 31 093 79 / +261 38 66 414 82"
          />
          <ContactItem
            icon={<FaEnvelope />}
            label="Email"
            content={
              <a
                href="mailto:manager.standart0306@gmail.com?subject=Demande de renseignement&body=Bonjour, je suis intéressé par vos services et j’aimerais en savoir plus. Pourriez-vous me donner plus d’informations ? Merci d’avance."
                className="underline transition-colors hover:text-cyan-700"
              >
                manager.standart0306@gmail.com
              </a>
            }
          />
          <ContactItem
            icon={<FaClock />}
            label="Horaires"
            content="Lun - Sam : 7h30 à 16h30"
          />
        </div>

        <p className="mt-8 text-sm italic text-gray-500">
          "Votre problème devient le nôtre. Alors contactez-nous sans hésiter !"
        </p>
      </div>


     {/* Bloc Map intégré */}
     <div className="flex items-center justify-center flex-1 p-4 shadow-md lg:p-10 bg-cyan-50 rounded-2xl">
  <iframe
    title="Stand'art Location"
    width="100%"
    height="100%"
    className="rounded-xl w-full h-[300px] lg:h-full"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    src="https://www.google.com/maps?q=-18.853962,47.566114&z=15&output=embed"
  ></iframe>
</div>


    </div>
  );
}

// Petit composant sympa pour éviter les répétitions
function ContactItem({ icon, label, content }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 text-xl text-cyan-600">{icon}</div>
      <div>
        <p className="font-semibold text-gray-800">{label} :</p>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}
