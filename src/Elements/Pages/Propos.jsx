import React from "react";

export default function Propos({ouvert}) {
  return (
    <section className={`min-h-screen text-base lg:text-5xl bg-white text-black py-20 px-6 font-sans ${ouvert ? 'blur-sm lg:blur-none' : 'blur-none'}`} id="Propos">
      <div className="max-w-5xl p-5 mx-auto bg-white shadow-2xl lg:p-12 bg-opacity-10 backdrop-blur-lg rounded-3xl">
        <h1 className="mb-12 text-2xl font-extrabold tracking-wide text-center lg:text-5xl drop-shadow-lg">
          À propos de <span className="text-cyan-700">Stand'art</span>
        </h1>

        <div className="max-w-3xl space-y-5 text-base leading-relaxed lg:space-y-10 lg:mx-auto lg:text-lg">
          <p className="transition-opacity duration-500 opacity-90 hover:opacity-100">
            Chez <span className="font-bold text-cyan-300">Stand'art</span>,  
            on tisse plus que des textures — on tisse des rêves et des styles uniques.  
            Chaque fibre, chaque maillage, raconte ta personnalité,  
            que ce soit pour t-shirts, sweats, ou pantalons.
          </p>

          <p className="transition-opacity duration-500 opacity-90 hover:opacity-100">
            On équipe aussi ton quotidien avec du matériel de bureau et des accessoires  
            conçus pour booster ta productivité et styliser ton espace de travail.
          </p>

          <p className="transition-opacity duration-500 opacity-90 hover:opacity-100">
            Notre équipe crée des sites web modernes, rapides, et ultra intuitifs,  
            ta vitrine digitale pour conquérir le monde en ligne.
          </p>

          <p className="transition-opacity duration-500 opacity-90 hover:opacity-100">
            Et quand la tech fait des siennes, on assure un dépannage logiciel efficace,  
            rapide et sans stress, pour que tu restes focus sur l’essentiel.
          </p>

          <blockquote className="pl-8 mt-12 text-2xl italic border-l-8 border-cyan-400 text-cyan-700 drop-shadow-lg">
            « Des textures qui inspirent, des outils qui boostent, des sites qui brillent, un service qui dépanne — ta réussite, notre mission. »
          </blockquote>

          <p className="mt-12 text-xl font-semibold tracking-wide text-center text-cyan-700">
            Rejoins <span className="font-extrabold text-cyan-500">Stand'art</span>,  
            là où chaque détail transforme ton univers en succès.
          </p>
        </div>
      </div>
    </section>
  );
}
