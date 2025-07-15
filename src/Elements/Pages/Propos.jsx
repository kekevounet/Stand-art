import React from "react";

export default function Propos({ ouvert }) {
  return (
    <section
      id="Propos"
      className={`min-h-screen py-20 px-6 bg-white text-black font-sans ${
        ouvert ? "blur-sm lg:blur-none" : "blur-none"
      }`}
    >
      <div className="max-w-5xl p-10 mx-auto bg-white shadow-2xl lg:p-16 bg-opacity-10 backdrop-blur-lg rounded-3xl">
        <h1 className="mb-12 text-3xl font-extrabold tracking-wide text-center lg:text-5xl drop-shadow-md">
          À propos de <span className="text-cyan-700">Stand'Art</span>
        </h1>

        <div className="max-w-3xl mx-auto space-y-8 text-base leading-relaxed lg:text-lg">
          <p className="transition-opacity duration-300 opacity-90 hover:opacity-100">
            Chez <span className="font-semibold text-cyan-500">Stand'Art</span>, nous tissons bien plus que des textures : nous créons des styles uniques qui reflètent votre personnalité.  
            Que ce soit pour des vêtements comme des t-shirts, sweats ou pantalons, chaque détail est pensé pour vous démarquer.
          </p>

          <p className="transition-opacity duration-300 opacity-90 hover:opacity-100">
            Nous proposons également du matériel de bureau et des accessoires conçus pour optimiser votre productivité tout en stylisant votre espace de travail.
          </p>

          <p className="transition-opacity duration-300 opacity-90 hover:opacity-100">
            Notre équipe développe des sites web modernes, rapides et intuitifs, des vitrines digitales conçues pour booster votre présence en ligne et conquérir de nouveaux marchés.
          </p>

          <p className="transition-opacity duration-300 opacity-90 hover:opacity-100">
            Et lorsque la technologie vous fait défaut, nous assurons un dépannage logiciel efficace, rapide et sans stress, pour que vous puissiez rester concentré sur l’essentiel.
          </p>

          <blockquote className="pl-8 mt-12 text-2xl italic border-l-8 text-cyan-700 border-cyan-400 drop-shadow-md">
            « Des textures qui inspirent, des outils qui boostent, des sites qui brillent, un service qui dépanne — votre réussite, notre priorité. »
          </blockquote>

          <p className="mt-12 text-xl font-semibold tracking-wide text-center text-cyan-600">
            Rejoignez <span className="font-extrabold text-cyan-500">Stand'Art</span>,  
            là où chaque détail transforme votre univers en succès.
          </p>
        </div>
      </div>
    </section>
  );
}
