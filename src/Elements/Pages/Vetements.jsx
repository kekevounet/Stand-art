import { useState, useEffect } from 'react';
import {  motion } from 'framer-motion';

// Tabliers
import tablier from '../Assets/tabliers/tablier.png';
import tablier1 from '../Assets/tabliers/tablier1.png';
import tablier2 from '../Assets/tabliers/tablier2.png';
import tablier3 from '../Assets/tabliers/tablier3.png';
import tablier4 from '../Assets/tabliers/tablier4.png';

// Demi-tabliers
import demitablier from '../Assets/demitabliers/demitablier.png';
import demitablier1 from '../Assets/demitabliers/demitablier1.png';
import demitablier2 from '../Assets/demitabliers/demitablier2.png';
import demitablier3 from '../Assets/demitabliers/demitablier3.png';
import demitablier4 from '../Assets/demitabliers/demitablier4.png';

// Costumes , chemises
import costume from '../Assets/costumes/costume.png';
import costume1 from '../Assets/costumes/costume1.png';
import costume2 from '../Assets/costumes/costume2.png';
import costume3 from '../Assets/costumes/costume3.png';
import costume4 from '../Assets/costumes/costume4.png';

// Blouses
import blouse from '../Assets/blouses/blouse.png';
import blouse1 from '../Assets/blouses/blouse1.png';
import blouse2 from '../Assets/blouses/blouse2.png';
import blouse3 from '../Assets/blouses/blouse3.png';
import blouse4 from '../Assets/blouses/blouse4.png';

// Gilets
import gilet from '../Assets/Gilet/gilet.png';
import gilet1 from '../Assets/Gilet/gilet1.png';
import gilet2 from '../Assets/Gilet/gilet2.png';
import gilet3 from '../Assets/Gilet/gilet3.png';
import gilet4 from '../Assets/Gilet/gilet4.png';

// Polos , t-shirt, sweat
import polo from '../Assets/Polos/polo4.png';
import polo1 from '../Assets/Polos/shirt1.png';
import polo2 from '../Assets/Polos/polo5.png';
import polo3 from '../Assets/Polos/sweat1.png';
import polo4 from '../Assets/Polos/polo6.png';


// Doudounes
import doudoune from '../Assets/doudounes/doudoune.png';
import doudoune1 from '../Assets/doudounes/doudoune1.png';
import doudoune2 from '../Assets/doudounes/doudoune2.png';
import doudoune3 from '../Assets/doudounes/doudoune3.png';
import doudoune4 from '../Assets/doudounes/doudounemanche.png';

// Imperméable
import imper from '../Assets/impermeable/imper.png';
import imper1 from '../Assets/impermeable/imper1.png';
import imper2 from '../Assets/impermeable/imper2.png';
import imper3 from '../Assets/impermeable/imper4.png';

const services = [
  {
    title: 'Tabliers / Veste de cuisine',
    description: [
      "Découvrez notre veste de cuisine professionnelle, confectionnée à partir d’un tissu satiné haut de gamme, composé de 60% coton équitable et 40% polyester.",
      "Pensée pour les chefs exigeants, cette tenue allie confort, style et résistance.",
      "Elle peut être entièrement personnalisée avec votre logo grâce à un marquage Broderie-Flex."
    ],
    details: [
      { label: 'Marquage', value: 'Broderie-Flex, DTF, sérigraphie' },
      { label: 'Couleurs', value: 'sur commande' }
    ],
    images: [tablier,tablier1,tablier2,tablier3,tablier4]
  },
  {
    title: 'Tabliers / Demi-tablier',
    description: [
      'Fabriqué en mélange coton/polyester, notre demi-tablier est un indispensable en cuisine.',
      'Il dispose de deux poches pratiques et d’une bretelle résistante, idéal pour travailler confortablement.',
      'Il protège vos vêtements tout en valorisant votre image de marque, grâce à une personnalisation en broderie ou flex.',
      'Personnalisable avec votre logo ou marque.'
    ],
    details: [
      { label: 'Marquage', value: 'Broderie-Flex, DTF, sérigraphie' },
      { label: 'Couleurs', value: 'sur commande' }
    ],
    images: [demitablier,demitablier1,demitablier2,demitablier3,demitablier4]
  },
  {
    title: 'Dossard & Gilet',
    description: [
      "Que ce soit pour l’entraînement sportif ou les activités en extérieur, optez pour notre gilet dossard respirant, à séchage rapide.",
      "Conçu pour adultes et enfants, il est léger, confortable, et personnalisable avec un marquage DTF-Flex.",
      "Un accessoire pratique et stylé, parfait pour les équipes et événements !"
    ],
    details: [
      { label: 'Marquage', value: 'DTF-Flex, sérigraphie' },
      { label: 'Couleurs', value: 'sur commande' }
    ],
    images: [gilet, gilet1, gilet2, gilet3,gilet4]
  },
  {
    title: 'Sweat Shirt / Tee-Shirt / Protège bras / Polo',
    description: [
      'Nos vêtements pro (sweat-shirt, polo, tee-shirt, protège-bras) sont conçus pour allier confort, performance et élégance.',
      'Finitions renforcées, double surpiqûre, poignets en bord-côte élasthanne : rien n’est laissé au hasard.',
      'Poignets et bas en bord côte élasthanne.'
    ],
    details: [
      { label: 'Marquage', value: 'Broderie-Flex, DTF, sérigraphie' },
      { label: 'Matière', value: '100%' },
      { label: 'Couleurs', value: 'sur commande' }
    ],
    images: [polo, polo1, polo2, polo3, polo4]
    
  },
  {
    title: 'Blouse de travail pour homme / femme / blanche',
    description: [
      'Confectionnée en 100% coton peigné, notre blouse blanche de travail offre un confort supérieur et une allure soignée.',
      "Idéale pour les secteurs médical, scientifique ou technique, elle peut recevoir votre logo en broderie ou flex.",
      "Disponible en différentes coupes et tailles, avec un large choix de couleurs sur commande."
    ],
    details: [
      { label: 'Marquage', value: 'Broderie-Flex, DTF, sérigraphie' },
      { label: 'Couleurs', value: 'sur commande' }
    ],
    images: [blouse,blouse1,blouse2,blouse3,blouse4]
  },
  {
    title: 'Chemise demi-manche / manche longue / costume',
    description: [
      'Look soigné garanti avec notre collection de chemises professionnelles à manches courtes ou longues.',
      'Que ce soit pour les bureaux, salons ou événements, elles valorisent votre image d’entreprise.',
      "Marquage broderie-flex + coloris personnalisables disponibles."
    ],
    details: [
      { label: 'Marquage', value: 'Broderie-Flex, DTF, sérigraphie' },
      { label: 'Couleurs', value: 'sur commande' }
    ],
    images: [costume,costume1,costume2,costume3,costume4]
  },
  {
    title: 'Le poncho de pluie / tenue de travail imperméable',
    description: [
      'Ne laissez plus la météo vous ralentir !',
      'Notre poncho de pluie en EVA est respectueux de l’environnement, ultra léger, respirant et séchant rapidement.',
      "Il est doté de manches longues, d’une capuche avec cordon, et reste 100% personnalisable.",
      "Idéal pour les travailleurs en extérieur."
    ],
    details: [
      { label: 'Marquage', value: 'Broderie-Flex, DTF, sérigraphie' },
      { label: 'Couleurs', value: 'sur commande' },
      { label: 'Matière', value: '100% polyester' }
    ],

    images: [imper, imper1, imper2, imper3, imper2]
  },
  {
    title: 'Doudoune avec / sans manches',
    description: [
      'Cette doudoune stylée pour homme est à la fois légère, chaude et élégante.',
      'Elle comporte un col montant, une coupe cintrée, et deux poches à zip.',
      'Marquage possible côté cœur et au dos – pour un maximum de visibilité !'
    ],
    details: [
      { label: 'Marquage', value: 'Broderie-Flex, DTF, sérigraphie' },
      { label: 'Matières', value: 'Polyester, doublure nylon au choix' },
      { label: 'Couleurs', value: 'Noir' }
    ],
    images: [doudoune, doudoune1, doudoune2, doudoune3,doudoune4]
  }
];

export default function Vetements({ouvert}) {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const initial={opacity:0, scale:0};
  const whileInView={opacity:1, scale:1,transition:{duration:1}}

  const initial1={opacity:0, translateY:'-100%'}
  const whileInView1={opacity:1, translateY:0}
  const transition={duration:1, delay:0.5}

  return (
    <div className={`flex items-center justify-center flex-col w-full py-10 ${ouvert ? 'blur lg:blur-none' : 'blur-none'}`} id='Vetements'>
      <div className='container'>
        <h2 className='text-center'>Vêtements</h2>
        <hr />
        {/* <div className="">Stand'art vend et créer des vêtements de travail pour divers secteur comme l'industrie, secteur médical, l'hôtellerie, etc ...</div> */}
      </div>
      <div className="flex flex-col w-full space-y-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row bg-cyan-50' : 'lg:flex-row-reverse'
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
                  <motion.img
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
                <p className="p-3 text-lg font-bold text-center border-b-4 lg:text-2xl border-cyan-600">
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}
