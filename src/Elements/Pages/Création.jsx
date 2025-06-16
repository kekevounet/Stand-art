import { motion } from 'framer-motion';

export default function Creation({ ouvert }) {
  const initial = { opacity: 0, scale: 0.95 };
  const whileInView = { opacity: 1, scale: 1, transition: { duration: 0.6 } };

  const Creations = [
    {
      title: 'Site vitrine',
      description: [
        "Présentation d'entreprise ou de business",
        'CV ou portfolio en ligne',
        '4 à 5 pages (Accueil, Contact, Activités...)',
        '1 mail personnalisé',
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
        '3 mails personnalisés',
        'À partir de 800 000 Ar',
        '+ 200 000 Ar pour retouches photos',
      ],
    },
    {
      title: 'Site e-commerce',
      description: [
        'Tout le catalogue +',
        'Commande en ligne',
        'Espace client dédié',
        '15 à 20 pages',
        '3 mails personnalisés',
        'À partir de 1 500 000 Ar',
        '+ 300 000 Ar pour retouches photos',
      ],
    },
  ];

  return (
    <section className={`w-full min-h-screen px-6 py-16 bg-gradient-to-br from-white via-cyan-50 to-white ${ouvert ? 'blur lg:blur-none' : ''}`} id="Creation">
      <div className="mx-auto mb-16 text-center max-w-7xl">
        <h2 className="mb-4 text-2xl font-bold lg:text-4xl text-cyan-800">Nos offres de création web 💻</h2>
        <p className="text-lg text-gray-600">
          Des solutions modernes, pro, et sur mesure. Livraison rapide, responsive et accompagnée.
        </p>
      </div>

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
              href={`mailto:manager.standart0306@gmail.com?subject=Je veux un site comme ${encodeURIComponent(item.title)}&body=${encodeURIComponent(`Salut,\n\nJ'aimerais créer un site comme "${item.title}".\nVoici ce que j'aime :\n- ${item.description.join('\n- ')}\n\nMerci de me contacter pour en discuter !`)}`}
              className="py-2 font-semibold text-center text-white no-underline transition-colors duration-200 rounded-full bg-cyan-700 hover:bg-cyan-800"
            >
              Je veux ce genre site 🚀
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="lg:w-[90%] w-full mx-auto grid gap-10 lg:grid-cols-2"
        initial={initial}
        whileInView={whileInView}
        viewport={{ once: true }}
      >
        <ul className="p-6 space-y-3 font-medium text-gray-700 shadow-lg rounded-2xl bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100">
          <li>✅ Hébergement gratuit pendant 1 an</li>
          <li>✅ Nom de domaine & email pro offerts</li>
          <li>✅ Mises à jour gratuites tous les 6 mois</li>
          <li>✅ Design responsive (ordi, tablette, smartphone)</li>
          <li>✅ Livraison en moins d’une semaine</li>
          <li>✅ Abonnement annuel à moitié prix</li>
        </ul>
        <ul className="p-6 space-y-3 font-medium text-gray-700 shadow-lg rounded-2xl bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100">
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
