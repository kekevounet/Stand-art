import { BsFillPenFill } from "react-icons/bs";
import { BsFillUsbDriveFill } from "react-icons/bs";
import { GiGlowingArtifact } from "react-icons/gi";
import { RiShirtLine } from "react-icons/ri";
import { GiClothes } from "react-icons/gi";
import { IoIosShirt } from "react-icons/io";
import { TiPrinter } from "react-icons/ti";
import { BsKeyboardFill } from "react-icons/bs";
import { BsFillPrinterFill } from "react-icons/bs";
import { AiFillPrinter } from "react-icons/ai";
import { TbBottle } from "react-icons/tb";
import { BiDesktop } from "react-icons/bi";
import { AiOutlineLaptop } from "react-icons/ai";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { BiHeadphone } from "react-icons/bi";
import { BsFillMouse2Fill } from "react-icons/bs";
import { FaTshirt } from "react-icons/fa";
import photo1 from '../../Assets/photo/photo1.png';
import photo2 from '../../Assets/photo/photo2.png';
import photo3 from '../../Assets/photo/photo3.png';
import photo4 from '../../Assets/photo/photo4.png';
import photo5 from '../../Assets/photo/photo5.png';
import photo6 from '../../Assets/photo/photo6.png';
import photo7 from '../../Assets/photo/photo7.png';
import photo8 from '../../Assets/photo/photo8.png';
import photo9 from '../../Assets/photo/photo9.png';
import photo10 from '../../Assets/photo/photo10.png';
import photo11 from '../../Assets/photo/photo11.png';
import photo12 from '../../Assets/photo/photo12.png';
import photo13 from '../../Assets/photo/photo13.png';
import photo14 from '../../Assets/photo/photo14.png';
import photo15 from '../../Assets/photo/photo15.png';
import photo16 from '../../Assets/photo/photo16.png';
import photo17 from '../../Assets/photo/photo17.png';
import photo18 from '../../Assets/photo/photo18.png';
import photo19 from '../../Assets/photo/photo19.png';
import photo20 from '../../Assets/photo/photo20.png';
import photo21 from '../../Assets/photo/photo1.jpg';
import photo22 from '../../Assets/photo/photo2.jpg';
import part from '../../Assets/photo/part.jpg'
import part1 from '../../Assets/photo/part1.jpg'
export default function Choix() {
  // const images = [
  //   "https://pngimg.com/uploads/tshirt/tshirt_PNG5442.png",
  //   "https://pngimg.com/uploads/tshirt/tshirt_PNG5443.png",
  //   "https://pngimg.com/uploads/tshirt/tshirt_PNG5440.png",
  //   "https://pngimg.com/uploads/tshirt/tshirt_PNG5441.png",
  //   "https://pngimg.com/uploads/tshirt/tshirt_PNG5445.png",
  //   "https://pngimg.com/uploads/tshirt/tshirt_PNG5446.png",
  //   "https://pngimg.com/uploads/tshirt/tshirt_PNG5447.png",
  //   "https://pngimg.com/uploads/tshirt/tshirt_PNG5448.png",
  //   "https://pngimg.com/uploads/tshirt/tshirt_PNG5449.png",
  //   "https://pngimg.com/uploads/tshirt/tshirt_PNG5450.png",
  // ];
  const images = [
    {img: photo1, texte: "Tapis souris",icon: <BsFillMouse2Fill /> },
    {img: photo2, texte: "Casque",icon: <BiHeadphone /> },
    {img: photo3, texte: "Disque dur",icon: <BsFillLightningChargeFill />},
    {img: photo4, texte: "Ordinateur portable",icon: <AiOutlineLaptop /> },
    {img: photo18, texte: "tablier", icon: <RiShirtLine />},
    {img: photo15, texte: "Combinaison", icon: <GiClothes /> },
    {img: photo6, texte: "Gourde personnaliser",icon: <TbBottle /> },
    {img: photo7, texte: "Imprimante",icon: <AiFillPrinter /> },
    {img: photo8, texte: "Souris",icon: <BsFillMouse2Fill /> },
    {img: photo5, texte: "Ordinateur de bureau",icon: <BiDesktop /> },
    {img: photo9, texte: "Imprimante",icon: <BsFillPrinterFill /> },
    {img: photo10, texte: "Clavier",icon: <BsKeyboardFill />},
    {img: photo11, texte: "Toner",icon: <TiPrinter /> },
    {img: photo12, texte: "Gourde",icon: <TbBottle /> },
    {img: photo14, texte: "Polo personnalisé", icon: <IoIosShirt /> },
    {img: photo16, texte: "Combinaison", icon: <GiClothes />},
    {img: photo17, texte: "tablier", icon: <RiShirtLine />},
    {img: photo19, texte: "T-shirt personnalisé", icon: <IoIosShirt />},
    {img: photo20, texte: "Gilet", icon: <GiGlowingArtifact />},
    {img: photo21, texte: "USB personnalisé", icon:<BsFillUsbDriveFill />},
    {img: photo13, texte: "Polo", icon: <FaTshirt /> },
    {img: photo22, texte: "Stylo", icon: <BsFillPenFill />},
  ]
  const fullImages = [...images, ...images]; // Duplication pour continuité


  return (
    <section className="w-full bg-white text-gray-800 py-12 overflow-auto" id="Choix">
      <div className="text-center mb-8 px-4">
        <h2 className="text-4xl font-bold mb-4">Nous proposons une large gamme de produits.</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Nous vous proposons une vaste sélection de produits de qualité pour répondre à tous vos besoins. Notre gamme diversifiée garantit que vous trouverez la solution parfaite pour vous, que ce soit pour un usage personnel ou professionnel.
        </p>
      </div>

      {/* Bande t-shirts */}
      <div className="overflow-hidden w-full h-[50vh] relative">
        <div className="flex w-max animate-marquee gap-6">
          {fullImages.map((url, index) => (
            <div className=" flex flex-col space-y-10">
              <img
              key={index}
              src={url.img}
              alt={`vetement-${index}`}
              className="h-[35vh] w-auto object-contain bg-white p-2 rounded-md flex-shrink-0"
              />
              <div className="text-black flex justify-center items-center h-full mr-3">
                <span className="text-2xl mr-3">{url.icon}</span>
                <span className="text-3xl">{url.texte}</span>
              </div>
            </div>
          ))}

        </div>
      </div>

 <div className="w-full container mx-auto px-4 py-8 flex flex-col items-center text-center space-y-4 bg-white">
  <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
    Ils nous font confiance. Et vous ?
  </h2>
  <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
    La confiance ne se demande pas, elle se mérite. Jour après jour, nous bâtissons la nôtre avec rigueur, transparence et engagement.
  </p>
  <div className="w-16 h-[2px] bg-gray-300 mt-2 rounded-full"></div>
</div>


      <div className="w-full h-[100vh] lg:h-[50vh] flex justify-around items-center flex-col lg:flex-row container">
        <img src={part} alt="parti" classname="w-full h-full border-2" />
        <img src={part1} alt="par"  classname="w-full h-full border-2 "/>
      </div>
    </section>
  );
}
