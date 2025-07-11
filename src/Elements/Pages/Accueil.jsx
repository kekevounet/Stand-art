import { useState, useEffect } from 'react';
import Accueil0 from '../Assets/Accueil0.png';
import Accueil1 from '../Assets/Accueil1.png';
import Accueil2 from '../Assets/Accueil2.png';
import Accueil3 from '../Assets/Accueil3.png';

const images = [Accueil0, Accueil1, Accueil2, Accueil3];

const texts = [
    {
        title: "Bienvenue chez STAND’ART",
        description: "Des textures qui inspirent, des outils qui boostent, des sites qui brillent, un service qui dépanne — ta réussite, notre mission."
    },
    {
        title: "Tenues Professionnelles",
        description: "Confort, sécurité et allure au cœur de l’action."
    },
    {
        title: "Matériel Informatique Mobilier & Fournitures",
        description: "Ordinateurs, imprimantes, onduleurs... connectez votre avenir. Un espace de travail organisé, productif et stylé."
    },
    {
        title: "Création digitales",
        description: "Site ou application web, logiciel , mobile"
    }
];

export default function Accueil({ ouvert }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    // const prevSlide = () => {
    //     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    // };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section
            className={`flex items-center justify-center w-full lg:bg-cyan-900 h-screen -my-24 lg:-my-0
                ${ouvert ? 'blur lg:blur-none' : 'blur-0'}

                `}
            id="Accueil"
        >
            <div className="relative flex items-center justify-center w-full overflow-hidden h-[60%] lg:h-full">

              {/* Images */}
                {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={`slide-${index}`}
                    className={`absolute h-full top-0 left-0 transition-all duration-700 ease-in-out
                    ${index === currentIndex ? 'w-full opacity-100 transform translate-x-0 scale-100' : 'w-0 opacity-0 transform translate-x-[100%] scale-50'}
                    `}
                />
                ))}


                {/* 📝 Texte affiché */}
                <div className="absolute z-10 px-6 text-center text-white">
                    <h1 className="text-4xl font-bold lg:text-7xl drop-shadow-lg">{texts[currentIndex].title}</h1>
                    <br />
                    <p className="mt-4 text-lg lg:text-xl drop-shadow-md">{texts[currentIndex].description}</p>
                    <br />
                    <br />
                </div>

                {/* ⬅️ Bouton gauche */}
                {/* <button
                    onClick={prevSlide}
                    className="absolute z-20 p-2 text-white transform -translate-y-1/2 left-4 top-1/2 bg-opacity-40 hover:bg-opacity-70"
                >
                    <i className="p-3 text-5xl transition-all duration-500 rounded-full fas fa-angle-left hover:bg-cyan-600 hover:text-black"></i>
                </button> */}

                {/* ➡️ Bouton droit */}
                {/* <button
                    onClick={nextSlide}
                    className="absolute z-20 p-2 text-white transform -translate-y-1/2 right-4 top-1/2 bg-opacity-40 hover:bg-opacity-70"
                >
                    <i className="p-3 text-5xl transition-all duration-500 rounded-full fas fa-angle-right hover:bg-cyan-600 hover:text-black"></i>
                </button> */}

                {/* 🔵 Petits points */}
                <div className="absolute z-20 flex space-x-2 bottom-6">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full ${
                                index === currentIndex ? 'bg-cyan-700' : 'bg-gray-400'
                            }`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
}
