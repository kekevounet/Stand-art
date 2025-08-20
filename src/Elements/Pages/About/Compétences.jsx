import { IoIosBusiness } from "react-icons/io";
import { MdBusinessCenter } from "react-icons/md";
import { FaHeadset, FaPaintBrush, FaSitemap } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";

export default function Competences() {
  const items = [
    {
      titre: 'Conception & Personnalisation',
      texte: [
        "Création de maquettes graphiques (logos, visuels, simulations textile)",
        "Broderie, flocage, impression numérique & sérigraphie sur textile",
        "Réalisation de supports personnalisés : T-shirts, polos, blouses, sacs, casquettes, etc."
      ],
      icon: <FaPaintBrush />
    },
    {
      titre: 'Confection textile',
      texte: [
        "Patronage, coupe, montage et finition sur différents types de vêtements",
        "Confection de tenues professionnelles, sportives et événementielles",
        "Adaptation aux besoins spécifiques du client (quantité, tailles, design)"
      ],
      icon: <MdBusinessCenter />
    },
    {
      titre: 'Service client & gestion de projet',
      texte: [
        "Conseil et accompagnement personnalisé",
        "Suivi de commande rigoureux et respect des délais",
        "Qualité de service et fidélisation client"
      ],
      icon: <IoIosBusiness />
    },
    {
      titre: 'Développement web et mobile',
      texte: [
        "Conception de sites web et applications mobiles",
        "Réalisation d'applications métiers sur mesure",
        "Intégration et mise en ligne de solutions performantes"
      ],
      icon: <FaSitemap />
    },
    {
      titre: 'Services numériques & assistance',
      texte: [
        "Assistance technique à distance",
        "Formation bureautique et informatique",
        "Vente de logiciels professionnels"
      ],
      icon: <FaHeadset />
    },
    {
      titre: 'Vente de matériel & consommables',
      texte: [
        "Ordinateurs, imprimantes, périphériques",
        "Fournitures et consommables informatiques",
        "Accessoires bureautiques professionnels"
      ],
      icon: <BsCartCheckFill />
    }
  ];

  return (
    <div className="w-full h-[200vh] lg:h-[100vh] my-10 bg-white container overflow-auto" id="Compétences">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <p className="text-lg text-gray-700">
          Nous combinons créativité, expertise technique et sens du service pour répondre efficacement aux besoins de nos clients.
        </p>
      </div>

      <div className="w-full h-1/2 mb-10 gap-5 grid lg:grid-cols-2 grid-cols-1">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full h-52 shadow-md overflow-hidden border-b-4 border-t border-t-gray-400 border-cyan-500 cursor-pointer bg-white p-4 space-y-5 relative group"
          >
            <div className="flex">
              <span className="text-3xl mr-3 group-hover:text-cyan-800 transition-all duration-300">{item.icon}</span>
              <span className="text-xl group-hover:text-cyan-500 transition-all duration-300">{item.titre}</span>
            </div>
            <ul className="text-gray-700 space-y-1 list-none pl-1">
              {item.texte.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <span className="absolute bottom-0 -right-28 w-0 bg-cyan-500 h-full -skew-x-[45deg] group-hover:w-1/6 transition-all duration-500"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
