import { useState } from "react"

export default function Commander()
{
    // Etat
    const [ isWeb, setIsWeb ] = useState(false);
    const valider = (e) =>
    {
        e.preventDefault();
        alert('Cette formulaire de commande ne fonctionne pas pour le moment. Veuillez réessayer dans quelques jours.')
    }

    // Affichage
    return(
        <div className="flex items-center justify-center w-full h-full bg-white lg:h-screen" id="Commander">
            <div className="lg:w-[30%] w-[95%] rounded-lg shadow h-[85%] bg-white mt-10">
                <div className="p-3 text-2xl font-extrabold text-center text-black shadow-sm">Commander</div>

                <form className="w-full h-[90%] mt-3 flex flex-col space-y-4 p-3" onSubmit={valider}>
                    <label htmlFor="Nom" className="text-lg tracking-wide fon-bold">Entrez votre nom</label>
                    <input type="text" placeholder="Nadia" required className="w-full p-2 text-lg border rounded-lg outline-none focus:outline focus:outline-offset-2 focus:outline-cyan-800 focus:outline-1"/>
                    <label htmlFor="Email" className="text-lg tracking-wide fon-bold">Entrez votre Email</label>
                    <input type="text" placeholder="manager.standart0306@gmail.com" required className="w-full p-2 text-lg border rounded-lg outline-none focus:outline focus:outline-offset-2 focus:outline-cyan-800 focus:outline-1"/>
                    <label htmlFor="Numero" className="text-lg tracking-wide fon-bold">Entrez votre numéro</label>
                    <input type="text" placeholder="+261 34 31 093 79" required className="w-full p-2 text-lg border rounded-lg outline-none focus:outline focus:outline-offset-2 focus:outline-cyan-800 focus:outline-1"/>
                    <label htmlFor="Entreprise" className="text-lg tracking-wide fon-bold">Entrez le nom de votre entreprise / profession</label>
                    <input type="text" placeholder="Stand'Art" required className="w-full p-2 text-lg border rounded-lg outline-none focus:outline focus:outline-offset-2 focus:outline-cyan-800 focus:outline-1"/>
                    <label htmlFor="Choix" className="text-lg tracking-wide fon-bold">Choisissez l'offre qui vous convient</label>
                    <div className="flex justify-between w-full">
                        <select className="w-full p-2 mr-1 font-semibold text-center bg-transparent border rounded-lg cursor-pointer outline-1" required>
                            <option value="" onClick={()=>setIsWeb(false)}>---------------------------- Selectionnez ----------------------------</option>
                            <option value="" onClick={() =>setIsWeb(false)}>Vêtement</option>
                            <option value="" onClick={() =>setIsWeb(false)}>Matériel & Fourniture</option>
                            <option value="" onClick={() =>setIsWeb(true)}>Création site web</option>
                        </select>
                        {isWeb && <select className="w-full p-2 ml-1 font-semibold text-center bg-transparent border rounded-lg cursor-pointer outline-1" required>
                            <option value="">------ Selectionnez -------</option>
                            <option value="">Site web vitrine</option>
                            <option value="">Site web catalogue</option>
                            <option value="">Application web personnalisé</option>
                        </select>}
                    </div>
                    <label htmlFor="Description" className="text-lg tracking-wide fon-bold">Décrivez votre projet</label>
                    <textarea id="Description" placeholder="Je veux une application web pour la gestion de stock ..." className="w-full p-2 text-lg border rounded-lg outline-none focus:outline focus:outline-offset-2 focus:outline-cyan-800 focus:outline-1" required></textarea>
                    <input type="submit" className="w-full p-2 mb-5 text-lg font-bold tracking-wide text-white border rounded-lg bg-cyan-700 border-cyan-500 lg:mb-0" value='Envoyer' />
                
                </form>


                 


                

            </div>
        </div>
    )
}