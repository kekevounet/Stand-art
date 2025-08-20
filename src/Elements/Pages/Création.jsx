import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Creation({ ouvert }) {
  const initial = { opacity: 0, y: 30 };
  const whileInView = { opacity: 1, y: 0, transition: { duration: 0.6 } };

  const Creations = [
    {
      title: 'Site vitrine',
      description: [
        "✨ Présentation professionnelle d'entreprise ou de business",
        '🎨 Portfolio ou CV en ligne moderne',
        '🧭 Structure claire : Accueil, Contact, Services, À propos',
        '📩 Adresse mail personnalisée incluse',
        '💰 À partir de 500 000 Ar',
        '🖼️ Retouches photos optionnelles (+100 000 Ar)',
      ],
    },
    {
      title: 'Site catalogue',
      description: [
        '🛍️ Fonctionnalités complètes de catalogue produits',
        '📸 Présentation détaillée avec images haute qualité',
        '🔐 Gestion sécurisée via espace admin dédié',
        '🛒 Panier virtuel pour faciliter les commandes',
        '📄 Jusqu’à 15 pages personnalisables',
        '📧 Mails professionnels inclus',
        '💰 À partir de 800 000 Ar',
        '🖼️ Retouches photos optionnelles (+200 000 Ar)',
      ],
    },
    {
      title: 'Application web sur mesure',
      description: [
        '🧠 Développement de fonctionnalités personnalisées',
        '🖌️ Design unique, ergonomique et moderne',
        '📧 Système d’envoi d’emails intégré',
        '📱 Compatible mobile, tablette et desktop',
        '⚡ Optimisation SEO et performances avancées',
        '🔐 Authentification et sécurité renforcée',
        "🧑‍💼 Interface d’administration intuitive",
        '🔄 Maintenance et mises à jour incluses',
        '📄 Tarification sur devis selon projet',
      ],
    },
  ];

  const ProjetTypes = [
    '🛒 E-commerce complet',
    '📚 Plateforme e-learning',
    '📦 Gestion de stock personnalisée',
    '🏘️ Portail immobilier',
    '🧾 Services en ligne divers',
    '📰 Blogs et magazines professionnels',
    '🧳 Système de réservation & voyages',
    '💪 Applications santé et fitness',
    '💼 Portails carrière et emploi',
  ];

  return (
    <section
      className={`w-full min-h-screen px-6 py-16 bg-gray-50 ${
        ouvert ? 'blur-sm lg:blur-none' : ''
      }`}
      id="Creation"
    >
      {/* Introduction */}
      <motion.div
        className="max-w-5xl p-10 mx-auto mb-20 bg-white shadow-lg rounded-3xl"
        initial={initial}
        whileInView={whileInView}
        viewport={{ once: true }}
      >
        <h1 className="mb-6 text-4xl font-extrabold tracking-wide text-center text-cyan-700">
          CRÉATION <span className="text-cyan-900">WEB</span>
        </h1>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="p-6 shadow-inner bg-cyan-50 rounded-xl">
            <h3 className="mb-4 text-2xl font-semibold text-cyan-800">
              🌐 Projets réalisés et possibles
            </h3>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              {ProjetTypes.map((type, index) => (
                <li key={index}>{type}</li>
              ))}
            </ul>
          </div>

          <Link
            to="/Creation"
            className="flex flex-col items-center justify-center p-6 no-underline transition duration-300 shadow-md bg-cyan-100 rounded-xl hover:bg-cyan-200"
          >
            <h4 className="mb-2 text-xl font-bold text-cyan-700">
              Et bien plus encore...
            </h4>
            <p className="mb-2 text-center text-gray-700">
              Chaque projet est unique. Parlons ensemble de vos besoins spécifiques pour une solution 100% adaptée.
            </p>
            <p className="font-semibold text-cyan-600 hover:underline">
              Cliquez ici pour en savoir plus
            </p>
          </Link>
        </div>

        <p className="mt-8 text-center text-gray-600 text-md">
          Notre mission : vous aider à émerger sur internet, gagner en visibilité, automatiser vos process et attirer plus de clients. 💡
        </p>
        <p className="mt-2 text-lg font-semibold text-center text-cyan-700">
          📞 Contactez-nous : +261 34 31 093 79 / +261 38 66 414 82
        </p>
      </motion.div>

      {/* Offres détaillées */}
      <div className="grid grid-cols-1 gap-10 mb-20 md:grid-cols-2 lg:grid-cols-3">
        {Creations.map((item, index) => (
          <motion.div
            key={index}
            initial={initial}
            whileInView={whileInView}
            viewport={{ once: true }}
            className="flex flex-col justify-between p-8 transition-transform duration-300 bg-white shadow-lg rounded-3xl hover:shadow-2xl hover:-translate-y-2"
          >
            <h3 className="mb-6 text-2xl font-bold text-center text-cyan-700">
              {item.title}
            </h3>
            <ul className="mb-8 space-y-3 text-gray-700 list-disc list-inside">
              {item.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <a
              href={`mailto:manager.standart0306@gmail.com?subject=Demande de création - ${encodeURIComponent(
                item.title
              )}&body=${encodeURIComponent(
                `Bonjour,\n\nJe souhaite créer un projet de type "${item.title}". Voici les points qui m’intéressent :\n- ${item.description.join(
                  '\n- '
                )}\n\nMerci de me contacter pour discuter des détails.\n\nCordialement,`
              )}`}
              className="py-3 font-semibold text-center text-white no-underline transition-colors rounded-full bg-cyan-700 hover:bg-cyan-800"
            >
              {item.title}
            </a>
          </motion.div>
        ))}
      </div>

      {/* Avantages */}
      <motion.div
        className="grid max-w-4xl gap-10 mx-auto lg:grid-cols-2"
        initial={initial}
        whileInView={whileInView}
        viewport={{ once: true }}
      >
        <ul className="p-6 space-y-4 font-medium text-gray-700 bg-white shadow-md rounded-2xl">
          <li>✅ Hébergement offert pendant 1 an</li>
          <li>✅ Nom de domaine et adresse mail professionnelle inclus</li>
          <li>✅ Mises à jour régulières tous les 6 mois</li>
          <li>✅ Design responsive (ordinateur, tablette, smartphone)</li>
          <li>✅ Livraison rapide : moins d’une semaine</li>
          <li>✅ Tarif d’abonnement annuel à prix réduit</li>
        </ul>
        <ul className="p-6 space-y-4 font-medium text-gray-700 bg-white shadow-md rounded-2xl">
          <li>🎨 Création de logos sur mesure</li>
          <li>📞 Assistance et support à distance</li>
          <li>🧠 Formation bureautique (Word, Excel, etc.)</li>
          <li>🛠️ Dépannage logiciel et système d’exploitation</li>
          <li>💿 Vente de logiciels originaux et solutions alternatives</li>
          <li>👋 Prêt à collaborer ? Contactez-nous dès maintenant !</li>
        </ul>
      </motion.div>
    </section>
  );
}
