import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';



// Materiels
import materiel from '../Assets/materiels/materiel.png';
import materiel1 from '../Assets/materiels/materiel1.png';
import materiel2 from '../Assets/materiels/materiel2.png';
import materiel3 from '../Assets/materiels/materiel3.png';

// Consommables
import consommable from '../Assets/Consommables/consommable.png';
import consommable1 from '../Assets/Consommables/consommable1.png';
import consommable2 from '../Assets/Consommables/consommable2.png';
import consommable3 from '../Assets/Consommables/consommable3.png';

// Accessoires
import accessoire from '../Assets/accessoires/access.png';
import accessoire1 from '../Assets/accessoires/access1.png';
import accessoire2 from '../Assets/accessoires/access4.png';
import accessoire3 from '../Assets/accessoires/access5.png';

// Fournitures bureautiques
import fourniture1 from '../Assets/fournitures/fourni1.png';
import fourniture2 from '../Assets/fournitures/fourni2.png';
import fourniture3 from '../Assets/fournitures/fourni3.png';
import fourniture4 from '../Assets/fournitures/fourni5.png';

const services = [
  {
    title: 'Matériels informatiques',
    description: [
      "Nous proposons une large gamme de matériels informatiques adaptés à tous vos besoins professionnels et personnels.",
      "Ordinateurs portables, unités centrales, écrans, imprimantes... Nous sélectionnons les marques les plus fiables du marché.",
      "Performance, durabilité et esthétique : chaque matériel est choisi avec soin pour vous offrir la meilleure expérience."
    ],
    details: [
      { label: 'Marques disponibles', value: 'Dell, HP, Lenovo, Acer, etc.' },
      { label: 'Personnalisation', value: 'Couleurs et configurations sur commande' }
    ],
    images: [materiel, materiel1, materiel2, materiel3]
  },
  {
    title: 'Consommables',
    description: [
      "Des consommables de qualité pour garantir le bon fonctionnement de vos équipements au quotidien.",
      "Cartouches d’encre, toners, papiers spéciaux, câbles et connectiques, disponibles selon vos besoins.",
      "Nos produits sont compatibles avec les grandes marques pour un usage sans souci."
    ],
    details: [
      { label: 'Marques compatibles', value: 'Canon, Epson, HP, Brother, etc.' },
      { label: 'Disponibilité', value: 'Produits standards en stock, commandes spécifiques sur demande' }
    ],
    images: [consommable, consommable1, consommable2, consommable3]
  },
  {
    title: 'Accessoires',
    description: [
      "Complétez vos équipements avec une sélection d’accessoires modernes et ergonomiques.",
      "Claviers, souris, casques audio, webcams, supports et bien plus encore pour un confort d’utilisation optimal.",
      "Nous allions utilité et esthétique pour sublimer vos espaces de travail."
    ],
    details: [
      { label: 'Marques disponibles', value: 'Logitech, Microsoft, HP, etc.' },
      { label: 'Personnalisation', value: 'Coloris et modèles disponibles sur commande' }
    ],
    images: [accessoire, accessoire1, accessoire2, accessoire3]
  },
  {
    title: 'Fournitures bureautiques',
    description: [
      "Tout le nécessaire pour équiper efficacement vos bureaux, de la petite fourniture aux équipements essentiels.",
      "Stylos, papiers, classeurs, enveloppes, agrafeuses, et plus encore pour une organisation parfaite.",
      "Nos produits sont sélectionnés pour leur fiabilité, leur praticité et leur rapport qualité-prix."
    ],
    details: [
      { label: 'Marques proposées', value: 'Bic, Maped, Clairefontaine, etc.' },
      { label: 'Disponibilité', value: 'Produits en stock ou sur commande selon les volumes' }
    ],
    images: [fourniture1, fourniture2, fourniture3, fourniture4]
  }
];


export default function Vetements({ouvert}) {

  const initial={opacity:0, scale:0};
  const whileInView={opacity:1, scale:1,transition:{duration:1}}

  const initial1={opacity:0, translateY:'-100%'}
  const whileInView1={opacity:1, translateY:0}
  const transition={duration:1, delay:0.5}
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex items-center justify-center flex-col w-full py-10 ${ouvert ? 'blur lg:blur-none' : 'blur-none'}`} id='Materiels'>
        <div className='container p-20'>
            <h2 className='text-center'>Matériels informatiques</h2>
            <hr />
            {/* <div className="">Matériels, consommables et accessoires informatique comme PC de bureau ou laptop, imprimantes et toner, onduleur, etc...</div>
            <div className="">Fournitures et mobilier de bureau dont les RAM papier, table</div> */}
        </div>
      <div className="flex flex-col w-full space-y-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row bg-gray-100' : 'lg:flex-row-reverse'
            } items-center justify-center gap-10 lg:gap-20 w-full p-4 lg:p-5 overflow-hidden`}
          >
            {/* Image ou Carrousel */}
            <div className="flex items-center justify-center w-full lg:w-1/2">
              <div className="w-full max-w-xl h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden border-8 rounded-3xl border-cyan-800">
                {service.images ? (
                  <motion.img
                    initial={initial}
                    whileInView={whileInView}
                    src={service.images[carouselIndex]}
                    alt={`${service.title} - ${carouselIndex + 1}`}
                    className="object-contain w-full h-full transition duration-700 ease-in-out"
                  />
                ) : (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-contain w-full h-full"
                  />
                )}
              </div>
            </div>

            {/* Texte */}
            <motion.div className="flex flex-col items-center justify-center w-full lg:w-1/2" initial={initial1} whileInView={whileInView1} transition={transition}>
              <div className="relative flex flex-col w-full h-full max-w-xl p-2 space-y-6">
                <p className="p-3 text-2xl font-bold text-center border-b-4 border-cyan-600">
                  {service.title}
                </p>
                {service.description.map((desc, i) => (
                  <p key={i} className="text-xl leading-relaxed">
                    {desc}
                  </p>
                ))}
                <ul className="space-y-1">
                  {service.details.map((detail, i) => (
                    <li key={i} className='ml-4 text-xl list-disc'>
                      <strong>{detail.label}:</strong> {detail.value}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-center w-full pt-4">
                    <a href="#Contact" className='w-full p-2 font-bold text-center text-white no-underline rounded-lg shadow bottom-5 animate-pulse bg-cyan-600 hover:bg-cyan-700'>Contactez-nous</a>           
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
