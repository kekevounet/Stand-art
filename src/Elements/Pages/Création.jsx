import { motion } from 'framer-motion';

export default function Creation({ ouvert }) {
  const initial = { opacity: 0, y: 30 };
  const whileInView = { opacity: 1, y: 0, transition: { duration: 0.6 } };

  const Creations = [
    {
      title: 'Site vitrine',
      description: [
        "Présentation d'entreprise ou de business",
        'CV ou portfolio en ligne',
        '4 à 5 pages (Accueil, Contact, Activités...)',
        'Mail personnalisé',
        'À partir de 500 000 Ar',
        '+ 100 000 Ar pour retouches photos',
      ],
    },
    {
      title: 'Site catalogue',
      description: [
        'Tout le site vitrine +',
        'Présentation de produits',
        'Gestion depuis un espace admin',
        'Panier virtuel pour visualiser les commandes',
        '10 à 15 pages',
        'Mails personnalisés',
        'À partir de 800 000 Ar',
        '+ 200 000 Ar pour retouches photos',
      ],
    },
    {
      title: 'Application web sur mesure',
      description: [
        'Fonctionnalités personnalisées',
        'Design unique et moderne',
        'Mails personnalisés',
        'Compatible avec mobile, tablette et PC',
        'Optimisé pour la performance et le SEO',
        'Connexion sécurisée (authentification, sessions, etc.)',
        'Interface d’administration intuitive',
        'Maintenance et mises à jour incluses',
        'Sur devis selon votre besoin',
      ],
    },
  ];

  const ProjetTypes = [
    'E-commerce',
    'E-learning',
    'Gestion de stock',
    'Immobilier',
    'Service en ligne',
    'Blogs et Magazines',
    'Réservation | Voyage',
    'Santé et fitness',
    'Carrière et emploi',
  ];

  return (
    <section
      className={`w-full min-h-screen px-6 py-16 bg-white ${ouvert ? 'blur-sm lg:blur-none' : ''}`}
      id="Creation"
    >
      {/* Intro style affiche */}
      <motion.div
        className="max-w-4xl p-8 mx-auto mb-20 text-center border shadow-xl bg-gradient-to-br from-gray-100 to-gray-300 rounded-3xl"
        initial={initial}
        whileInView={whileInView}
        viewport={{ once: true }}
      >
        <h1 className="mb-6 text-3xl font-extrabold tracking-wide text-gray-800 md:text-4xl">CRÉATION <span className="text-cyan-700">WEB</span></h1>

        <div className="grid gap-6 mt-8 md:grid-cols-2">
          <div className="p-6 bg-white shadow-inner rounded-xl">
            <h3 className="mb-4 text-xl font-semibold text-gray-700">Pour tout projet :</h3>
            <ul className="space-y-2 text-left text-gray-600 list-disc list-inside">
              {ProjetTypes.map((type, index) => (
                <li key={index}>{type}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-white shadow-inner rounded-xl">
            <h4 className="mb-2 text-lg font-bold text-cyan-700">Et bien plus encore...</h4>
            <p className="text-gray-600">Chaque projet est unique, discutons-en ensemble pour créer une solution sur mesure qui répond à vos besoins.</p>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-700">Émerger sur internet et dans le monde pour augmenter votre visibilité et faciliter vos tâches afin de bien gérer et d’avoir le plus de clients possible.</p>
        <p className="mt-2 font-semibold text-md text-cyan-800">Contact : 034 77 917 58</p>
      </motion.div>

      {/* Offres */}
      <div className="grid grid-cols-1 gap-10 mb-20 md:grid-cols-2 lg:grid-cols-3">
        {Creations.map((item, index) => (
          <motion.div
            key={index}
            initial={initial}
            whileInView={whileInView}
            viewport={{ once: true }}
            className="flex flex-col justify-between p-6 transition duration-300 bg-white shadow-xl rounded-3xl hover:-translate-y-2 hover:shadow-2xl"
          >
            <h3 className="mb-4 text-xl font-bold text-center text-cyan-700">{item.title}</h3>
            <ul className="mb-6 space-y-2 text-left text-gray-700 list-disc list-inside">
              {item.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <a
              href={`mailto:manager.standart0306@gmail.com?subject=Je veux un site comme ${encodeURIComponent(
                item.title
              )}&body=${encodeURIComponent(
                `Salut,

J'aimerais créer un site comme ${item.title}.
Voici ce que j'aime :
- ${item.description.join('\n- ')}

Merci de me contacter pour en discuter !`
              )}`}
              className="py-2 font-semibold text-center text-white transition-colors duration-200 rounded-full bg-cyan-700 hover:bg-cyan-800"
            >
              Je veux ce genre de site 🚀
            </a>
          </motion.div>
        ))}
      </div>

      {/* Avantages */}
      <motion.div
        className="lg:w-[50%] w-full mx-auto grid gap-10 lg:grid-cols-2"
        initial={initial}
        whileInView={whileInView}
        viewport={{ once: true }}
      >
        <ul className="p-6 space-y-3 font-medium text-gray-700 bg-white shadow-md rounded-2xl">
          <li>✅ Hébergement gratuit pendant 1 an</li>
          <li>✅ Nom de domaine & email pro offerts</li>
          <li>✅ Mises à jour gratuites tous les 6 mois</li>
          <li>✅ Design responsive (ordi, tablette, smartphone)</li>
          <li>✅ Livraison en moins d’une semaine</li>
          <li>✅ Abonnement annuel à moitié prix</li>
        </ul>
        <ul className="p-6 space-y-3 font-medium text-gray-700 bg-white shadow-md rounded-2xl">
          <li>🎨 Création de logos sur mesure</li>
          <li>📞 Assistance à distance disponible</li>
          <li>🧠 Formation bureautique (Word, Excel...)</li>
          <li>🛠️ Dépannage logiciels & OS</li>
          <li>💿 Vente logiciels (originaux & cracks)</li>
          <li>👋 Prêt à bosser avec nous ? Contacte-nous !</li>
        </ul>
      </motion.div>
    </section>
  );
}
