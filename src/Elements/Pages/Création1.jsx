import { AiOutlineWarning } from "react-icons/ai"; 
import { ImSpinner3 } from "react-icons/im"; 
import { motion } from "framer-motion";
import { useEffect } from "react";
import NavBar1 from "../Components/NavBar1";

export default function Création1() {
  const initial = { opacity: 0, y: 30 };
  const whileInView = { opacity: 1, y: 0, transition: { duration: 0.6 } };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const Creations = [
    {
      id: "Services",
      title: "Site vitrine",
      emoji: "🌐",
      color: "text-cyan-400",
      tagline: [
        "Présence en ligne élégante et efficace pour entreprise, artisan ou freelance.",
        "Portfolio accessible 24h/24 pour artistes, designers et créateurs.",
        "Un site vitrine qui reflète votre savoir-faire — idéal pour consultants et coachs.",
        "Présentez votre entreprise avec clarté, que vous soyez commerçant ou restaurateur.",
        "Un site moderne et responsive pour associations et ONG.",
        "Faites briller votre activité artisanale avec une vitrine digitale sur-mesure.",
        "Exposez vos créations, attirez vos clients — parfait pour photographes et artisans.",
        "Une vitrine digitale taillée pour votre cabinet professionnel ou votre startup.",
        "Votre image pro, boostée par un design épuré, adaptée aux indépendants et PME.",
        "Transformez vos visiteurs en clients grâce à un site percutant, pour tous secteurs."
      ],
           
      description: [
        "✨ Présentation claire et professionnelle de votre entreprise ou projet.",
        "🎨 CV ou portfolio en ligne, design épuré pour valoriser votre talent.",
        "📄 4 à 5 pages stratégiques : Accueil, Contact, Activités, À propos.",
        "📩 Adresse mail personnalisée pour donner confiance à vos visiteurs.",
        "🔍 Seo de base pour une visibilité sur google",
        "💰 Tarif abordable à partir de 500 000 Ar, rapport qualité-prix au top.",
        "🖼️ Option retouches photos (+100 000 Ar) pour un rendu visuel pro.",
      ],
      cta: "Achat d'un site vitrine",
    },
    {
      id: "Services",
      title: "Site catalogue",
      emoji: "🛍️",
      color: "text-pink-400",
      tagline: [
        "Exposez vos produits avec style et clarté.",
        "Un catalogue en ligne qui valorise chaque article.",
        "Présentez votre collection, inspirez la découverte.",
        "Vos produits accessibles partout, tout le temps.",
        "Catalogue moderne pour booster votre visibilité.",
        "Chaque article mérite une vitrine professionnelle.",
        "Simplifiez la découverte, encouragez l’achat.",
        "Offrez une navigation fluide à vos clients.",
        "Design épuré pour une présentation impactante.",
        "Transformez la curiosité en achat concret."
      ],
         
      description: [
        "🛍️ Toutes les fonctionnalités d’un site vitrine + présentation produit.",
        "🖼️ Galerie images soignée pour chaque produit, mise en valeur garantie.",
        "🔐 Espace admin sécurisé pour gérer tous les produits, stocks, et contenu.",
        "🛒 Panier virtuel fluide pour que votre clients passent commande en toute simplicité.",
        "📄 10 à 15 pages personnalisables selon votre catalogue et besoins.",
        "📧 Mails professionnels inclus pour la relation client et notifications.",
        "🔍 Seo de base pour une visibilité sur google",
        "💰 À partir de 800 000 Ar, une vraie solution business complète.",
        "🖼️ Retouches photos premium (+200 000 Ar) pour des visuels impactants.",
      ],
      cta: "Achat d'un site catalogue",
    },
    {
      id: "Services",
      title: "Application web sur mesure",
      emoji: "🧠",
      color: "text-yellow-400",
      tagline: [
        "Un site web pensé uniquement pour vous.",
        "Des fonctionnalités sur-mesure, un design à votre image.",
        "Votre site personnalisé, développé avec précision.",
        "Automatisez, simplifiez, innovez grâce au sur-mesure.",
        "Une interface unique pour des besoins uniques.",
        "Faites évoluer votre présence en ligne avec un site personnalisé.",
        "Du code taillé pour booster votre impact digital.",
        "Chaque page, chaque fonction : 100% utile, 100% vous.",
        "Alliez performance et ergonomie dans votre site sur-mesure.",
        "Votre communication digitale, améliorée par un site qui vous comprend."
      ],
         
      description: [
        "🧠 Fonctionnalités développées à 100% selon votre besoins spécifiques.",
        "🖌️ Design moderne, UX/UI soignée, pour une expérience utilisateur top.",
        "📧 Intégration de mails personnalisés pour automatiser votre communication.",
        "📱 Responsive : fonctionne parfaitement sur mobile, tablette et PC.",
        "⚡ Optimisation SEO avancée pour booster votre visibilité sur Google.",
        "🔐 Sécurité renforcée avec authentification et gestion de sessions.",
        "🧑‍💼 Interface d’administration simple et intuitive, zéro prise de tête.",
        "🔄 Maintenance continue et mises à jour incluses, toujours à jour.",
        "📄 Devis personnalisé, car chaque projet est unique et mérite son prix.",
      ],
      cta: "Achat d'une appli sur mesure",
    },
  ];
  const cardsWeb = [
    { icon: 'fa-code', title: 'Création de Site Web', desc: 'Site vitrine, blog, application en ligne.', color: 'bg-cyan-600' },
    { icon: 'fa-cloud', title: 'Hébergement & Domaine', desc: 'On gère tout pendant 1 an.', color: 'bg-indigo-500' },
    { icon: 'fa-mobile-screen-button', title: 'Responsive Design', desc: 'Sites adaptés mobile, tablette, ordi.', color: 'bg-teal-500' },
    { icon: 'fa-headset', title: 'Support & Suivi', desc: 'On reste dispo après livraison.', color: 'bg-rose-500' },
  ];

  const Card = ({ icon, title, desc, color }) => (
    <div className="flex flex-col items-center justify-start h-full p-6 text-center transition-all duration-300 border shadow-md cursor-pointer bg-slate-800 hover:scale-105 rounded-xl hover:shadow-xl" id="Choix">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${color}`}>
        <i className={`fa-solid ${icon} text-white text-2xl`}></i>
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm text-gray-200">{desc}</p>
    </div>
  );

  // const exemplesSites = [
  //   {
  //     title: "Portfolio Graphiste",
  //     description: "Un site vitrine élégant pour exposer tes créations artistiques avec style.",
  //     img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  //     url: "https://portfolio-exemple.com",
  //   },
  //   {
  //     title: "Boutique de mode",
  //     description: "Catalogue moderne avec gestion de produits et panier, parfait pour vendre tes fringues.",
  //     img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
  //     url: "https://boutique-mode.com",
  //   },
  //   {
  //     title: "Application CRM sur mesure",
  //     description: "Solution personnalisée pour gérer tes clients, projets et équipes facilement.",
  //     img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  //     url: "https://crm-sur-mesure.com",
  //   },
  // ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" id="Accueil">
      {/* Navbar */}
      <NavBar1 />

      {/* Hero Section */}
      <div className="flex items-center justify-center flex-1 px-8 pt-16 min-h-[100vh] shadow-[0px_0px_10px_white] z-30">
        <div className="max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Brillez-vous avec Stand'Art
          </h1>
          <p className="max-w-3xl mx-auto mb-8 text-lg md:text-xl text-slate-300">
            Design percutant. Performance au top. Responsive.  
            Laissez-nous pour vous aider à bâtir votre présence digitale, propre, nette et stylée.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#Services"
              className="px-8 py-4 text-lg font-semibold text-white no-underline transition-all duration-300 bg-indigo-600 shadow-lg rounded-xl hover:bg-indigo-700 hover:shadow-xl"
            >
              Tout voir
            </a>
            <a
              href="#Propos"
              className="px-8 py-4 text-lg font-semibold no-underline transition-all duration-300 border border-white shadow-md rounded-xl hover:bg-white hover:text-slate-900"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>

      {/* Pourquoi nous? */}
      <section id="Pourquoi" className="w-full h-full p-5 bg-slate-950">
         {/* SERVICES WEB */}
         <h3 className="mb-4 text-3xl font-semibold text-center text-cyan-700 lg:py-5">Pourquoi nous faire confiance ?</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cardsWeb.map((card, i) => <Card key={i} {...card} />)}
        </div>
      </section>

      {/* Section détaillée par offre */}
      {Creations.map((item, index) => (
        <section
          id={item.id}
          key={index}
          className={`w-full px-2 lg:px-8 py-24 border-t border-slate-800 bg-slate-950 flex justify-around lg:flex-row flex-col ${index % 2 === 0 ? 'lg:flex-row'  : ' lg:flex-row-reverse' }`}
        >
          <motion.div
            className="flex flex-col items-center justify-center max-w-5xl mx-auto mb-12 text-center"
            initial={initial}
            whileInView={whileInView}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl font-extrabold mb-3 tracking-wide ${item.color}`}>
              {item.emoji} {item.title}
            </h2>
            {/* <p className="max-w-2xl mx-auto text-lg italic text-slate-400">{item.tagline}</p> */}
            {item.tagline.map((line, i) => (
                <li key={i} className="max-w-2xl mx-auto text-lg italic list-none text-slate-400">{line}</li>
              ))}

          </motion.div>

          <motion.div
            className="max-w-4xl p-10 mx-auto border shadow-xl bg-slate-800 rounded-3xl border-cyan-600"
            initial={initial}
            whileInView={whileInView}
            viewport={{ once: true }}
          >
            <div className="space-y-4 text-lg leading-relaxed text-left list-disc list-inside text-slate-300">
              {item.description.map((line, i) => (
                <li key={i} className="transition-colors cursor-pointer hover:text-cyan-400">{line}</li>
              ))}
            </div>

            <a
              href={`mailto:manager.standart0306@gmail.com?subject=Je veux un site comme ${encodeURIComponent(
                item.title
              )}&body=${encodeURIComponent(
                `Salut,\n\nJe suis intéressé par un "${item.title}". Voici ce que j’aime :\n- ${item.description.join(
                  "\n- "
                )}\n\nMerci de me contacter.`
              )}`}
              className="block px-8 py-3 mx-auto mt-12 font-semibold text-center text-white no-underline transition rounded-full shadow-lg w-max bg-cyan-600 hover:bg-cyan-700 hover:scale-105"
            >
              {item.cta}
            </a>
          </motion.div>
        </section>
      ))}

      {/* Section Exemples de sites */}
      <section
        id="Exemples"
        className="flex flex-col items-center justify-center w-full px-8 py-24 border-t border-slate-800 bg-slate-950"
      >
        <ImSpinner3 className="text-9xl animate-spin text-cyan-800"/>
        <h1 className="flex items-center"><AiOutlineWarning className="hidden mr-5 lg:flex"/> Cette section est en cours de production, revenez plus tard.</h1>
        {/* <motion.div
          className="max-w-5xl mx-auto mb-16 text-center"
          initial={initial}
          whileInView={whileInView}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-extrabold tracking-wider text-green-400">
            ✨ Exemples de sites
          </h2>
          <p className="max-w-xl mx-auto text-lg leading-relaxed text-slate-400">
            Quelques réalisations pour te montrer ce que je peux faire. Chaque projet est unique, prêt à booster ta visibilité et tes ventes.
          </p>
        </motion.div>

        <motion.div
          className="grid max-w-6xl grid-cols-1 gap-10 mx-auto md:grid-cols-3"
          initial={initial}
          whileInView={whileInView}
          viewport={{ once: true }}
        >
          {exemplesSites.map(({ title, description, img, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden transition-shadow duration-300 shadow-lg group rounded-2xl bg-slate-800 hover:shadow-2xl"
            >
              <img
                src={img}
                alt={title}
                className="object-cover w-full h-56 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-semibold tracking-wide text-white">{title}</h3>
                <p className="text-base leading-relaxed text-slate-300">{description}</p>
              </div>
            </a>
          ))}
        </motion.div> */}
      </section>

      {/* Section À propos */}
      <section
  id="Propos"
  className="w-full px-8 py-24 border-t border-slate-800 bg-slate-950"
>
  <motion.div
    className="max-w-4xl mx-auto text-center"
    initial={initial}
    whileInView={whileInView}
    viewport={{ once: true }}
  >
    <h2 className="mb-8 text-4xl font-extrabold tracking-wide text-cyan-700">
      À propos de Stand'Art
    </h2>
    <p className="max-w-3xl mx-auto mb-6 text-lg leading-relaxed text-slate-300">
      Chez Stand'Art , nous ne nous contentons pas de développer des sites internet, nous créons des expériences digitales uniques et impactantes.  
      Animés par la passion du web et de l’innovation, notre objectif est de vous accompagner dans votre transformation digitale grâce à des solutions modernes, performantes et entièrement personnalisées.
    </p>
    <p className="max-w-3xl mx-auto mb-6 text-lg leading-relaxed text-slate-300">
      Qu’il s’agisse d’un site vitrine élégant ou d’un projet sur mesure complexe, nous mettons tout en œuvre pour que chaque détail — du design aux fonctionnalités — reflète parfaitement votre vision et stimule votre croissance.  
      Collaborons ensemble pour donner vie à votre présence numérique avec professionnalisme, créativité et efficacité.
    </p>
    <a
      href="mailto:manager.standart0306@gmail.com"
      className="inline-block px-10 py-4 mt-6 text-lg font-semibold text-white no-underline transition rounded-full shadow-lg bg-cyan-800 hover:bg-cyan-700 hover:scale-105"
    >
      Contactez-nous
    </a>
  </motion.div>
</section>


      {/* Footer */}
      <footer className="py-6 text-lg font-bold text-center text-white border-t-2 border-gray-300 lg:text-xl">
        © 2025 Stand'Art. Tous droits réservés.
      </footer>
    </div>
  );
}
