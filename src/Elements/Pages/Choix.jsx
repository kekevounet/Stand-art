export default function Choix() {
    const Card = ({ icon, title, desc, color }) => (
      <div className="flex flex-col items-center justify-start h-full p-6 text-center transition bg-white border shadow-md rounded-xl hover:shadow-xl">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${color}`}>
          <i className={`fa-solid ${icon} text-white text-2xl`}></i>
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{desc}</p>
      </div>
    );
  
    const cardsVetements = [
      { icon: 'fa-shirt', title: 'T-shirts & Polo', desc: 'Des vêtements stylés pour tous les goûts.', color: 'bg-blue-500' },
      { icon: 'fa-user-tie', title: 'Uniformes', desc: 'Conception pro pour entreprise & écoles.', color: 'bg-green-500' },
      { icon: 'fa-gem', title: 'Sur-mesure', desc: 'Vêtements adaptés à vos besoins spécifiques.', color: 'bg-purple-500' },
      { icon: 'fa-tags', title: 'Prix Compétitifs', desc: 'Des tarifs avantageux pour tous.', color: 'bg-yellow-500' },
    ];
  
    const cardsMateriels = [
      { icon: 'fa-laptop', title: 'Ordinateurs', desc: 'PC portables & fixes performants.', color: 'bg-blue-600' },
      { icon: 'fa-mouse', title: 'Accessoires', desc: 'Souris, claviers, tapis de qualité.', color: 'bg-emerald-500' },
      { icon: 'fa-bolt', title: 'Consommables', desc: 'Cartouches, câbles, batteries.', color: 'bg-pink-500' },
      { icon: 'fa-boxes-packing', title: 'Fournitures', desc: 'Tout pour vos bureaux et projets.', color: 'bg-orange-500' },
    ];
  
    const cardsWeb = [
      { icon: 'fa-code', title: 'Création de Site Web', desc: 'Site vitrine, blog, application en ligne.', color: 'bg-cyan-600' },
      { icon: 'fa-cloud', title: 'Hébergement & Domaine', desc: 'On gère tout pendant 1 an.', color: 'bg-indigo-500' },
      { icon: 'fa-mobile-screen-button', title: 'Responsive Design', desc: 'Sites adaptés mobile, tablette, ordi.', color: 'bg-teal-500' },
      { icon: 'fa-headset', title: 'Support & Suivi', desc: 'On reste dispo après livraison.', color: 'bg-rose-500' },
    ];
  
    return (
      <div className="w-full h-full p-5 bg-white">
        <h2 className="mb-8 text-2xl font-bold text-center lg:text-4xl text-cyan-800">Pourquoi nous choisir ?</h2>
  
        {/* VÊTEMENTS */}
        <h3 className="mb-4 text-xl font-semibold text-cyan-700">Nos Vêtements</h3>
        <div className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-2 lg:grid-cols-4">
          {cardsVetements.map((card, i) => <Card key={i} {...card} />)}
        </div>
  
        {/* MATÉRIELS */}
        <h3 className="mb-4 text-xl font-semibold text-cyan-700">Matériels & Fournitures</h3>
        <div className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-2 lg:grid-cols-4">
          {cardsMateriels.map((card, i) => <Card key={i} {...card} />)}
        </div>
  
        {/* SERVICES WEB */}
        <h3 className="mb-4 text-xl font-semibold text-cyan-700">Nos Services Web</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cardsWeb.map((card, i) => <Card key={i} {...card} />)}
        </div>
      </div>
    );
  } 
  