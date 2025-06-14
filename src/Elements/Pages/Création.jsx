import { motion } from 'framer-motion';

export default function Creation({ouvert})
{

    const initial={opacity:0, scale:0};
    const whileInView={opacity:1, scale:1, transition:{duration:1}}
  
    const Creations = [
        {
            title:'Site vitrine',
            desciption:[
                'Site pour une présentation d\'une entreprise ou bien d\'une business.',
                'CV ou porfolio en ligne.',
                '4 à 5 pages (Accueil, Contact, Activités, etc...).',
                '1 Mail personnalisé.',
                '400 000 Ar (Si vous avez un cahier de charge ) sinon 500 000 Ar.',
                '+ 100 000 Ar si nous occupons des retouches photos.'
            ]
        },
        {
            title:'Site catalogue',
            desciption:[
                'Site vitrine + :',
                'Possibilité de présenté les produits d\'une entreprise.',
                'Gestion de ces produits dans l\'espace administration.',
                'Un panier virtuel pour visualiser les commandes.',
                '10 à 15 pages',
                '3 Mails personnalisés',
                '700 000 Ar (Si vous avez un cahier de charge ) sinon 800 000 Ar.',
                '+ 200 000 Ar si nous occupons des retouches photos.'
            ]
        },
        {
            title:'Site e-commerce',
            desciption:[
                'Site Catalogue +:',
                'Commande en ligne.',
                'Espace client',
                '15 à 20 pages',
                '3 Mails personnalisés',
                '1 200 000 Ar (Si vous avez un cahier de charge ) sinon 1 500 000 Ar.',
                '+ 300 000 Ar si nous occupons des retouches photos.'

            ]
        }
    ]
    return(
        <div className={`flex flex-col items-center justify-center w-full h-full ${ouvert ? 'blur lg:blur-none' : 'blur-none'}`}>
            <div className='container p-10'>
                    <h2 className='text-center'>Services informatiques</h2>
                    <hr />
                {/* <div className="flex flex-col justify-center w-full p-5 bg-green-200">
                    <div className="">Conception et realisation d'un site web sur mesure.</div>
                    <div className="">Vente et dépannage logiciel, Assistance professionnelle sur office.</div>
                </div> */}
            </div>

            <div className="w-[90%] h-full p-1 lg:p-5" id="Creation">
                <div className="flex flex-col items-center w-full h-full gap-3 p-1lg:p-5 lg:flex-row lg:justify-around">
                    <div className="grid w-full h-full grid-cols-1 gap-5 lg:grid-cols-3">

                    {/* Site 1 */}
                    {Creations.map((Creation, index)=>(
                    <motion.div   initial={initial}
                    whileInView={whileInView} className="w-full h-[600px] relative hover:shadow-inner hover:-translate-y-5 transition-all duration-200 ease-in-out rounded-lg" key={index}>
                        <h4 className="p-3 text-center border-b-4 border-cyan-600">{Creation.title}</h4>
                        <div className="flex flex-col p-3">
                            {Creation.desciption.map((desc, index)=>(
                                <p key={index} className="">{desc}</p>
                            ))}
                            
                        </div>
                        <a href="#Contact" className="absolute w-full p-2 font-bold text-center text-white no-underline rounded-lg shadow bottom-5 animate-pulse bg-cyan-600 hover:bg-cyan-700">Contactez-nous</a>
                    </motion.div>
                    ))}

                    


                    </div>
                </div>
            <motion.div className="lg:w-[90%] w-full p-1 lg:p-2"   initial={initial}
                    whileInView={whileInView}>
                {/* <h2 className="p-3 text-center">Information</h2> */}<br /><br /><br /><br /><br />
                <div className="flex flex-col justify-between w-full font-semibold text-black lg:mx-20 lg:flex-row">
                   <ul className="p-2 space-y-3 transition-all duration-200 rounded-lg shadow-lg lg:p-5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 hover:-translate-y-5">
                        <li className="">Toutes des sites et applications web seront hébergé de 1 an gratuitement.</li>
                        <li className="">Abonnement par an à moitié prix.</li>
                        <li className="">Nom de domaine et mail personnalisé à chaque achat.</li>
                        <li className="">Possibilité d'une mis à jour tous les 6 mois gratuitement.</li>
                        <li className="">Tous les projets auront une deadline moins d'une semaine.</li>
                        <li className="">Responsive design (Ordinateur, Tablette, Portable)</li>
                   </ul>
                   <ul className="p-2 space-y-3 transition-all duration-200 rounded-lg shadow-lg lg:p-5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 hover:-translate-y-5">
                        <li className="">On crée aussi des logo à votre gout et marque pour votre entreprise.</li>
                        <li className="">Assistance possible à distance.</li>
                        <li className="">Formation bureautique avec monsieur Tsongy.</li>
                        <li className="">Dépannage d'un logiciel système d'exploitation</li>
                        <li className="">Vente logiciel original et cracké.</li>
                        <li className="">Qu'attendez-vous pour nous contactez?</li>
                   </ul>
                </div>
            </motion.div>
            </div>
        </div>
    )
}