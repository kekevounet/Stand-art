import { useState } from "react";
import { CgSpinnerTwo } from "react-icons/cg";
import Swal from 'sweetalert2';

export default function Commander()
{
    // Etat
    const [ isWeb, setIsWeb ] = useState(false);
    const [result, setResult] = useState("");

      const onSubmit = async (event) => {
    event.preventDefault();
    setResult(()=>{
      return(
        <div className="flex items-center ml-4 text-5xl"> <CgSpinnerTwo className="animate-spin ml-3"/></div>
      )
    });
    setTimeout(() => {
      setResult(null);
  }, 7000);
    const formData = new FormData(event.target);

    formData.append("access_key", "5a5726b2-d782-436b-b4bc-51697b576221");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
          title: "Message envoyé avec succès",
          text: "Stand'Art vous remercie pour votre soutien.",
          icon: "success"
        });
      event.target.reset();
    } else {
      Swal.fire({
        title: "Oups, une erreur a été détecté !",
        text: "Nous sommes navrés de vous dire de recommencer plus tard, merci.",
        icon: "error"
      });
    }
  };


    // Affichage
    return(
        <div className="flex items-center justify-center w-full h-full bg-white lg:h-screen relative" id="Commander">

            <div className="lg:w-[30%] w-[95%] rounded-lg shadow h-[85%] bg-white mt-10">
                <div className="p-3 text-2xl font-extrabold text-center text-black shadow-sm">Commander</div>

                <form className="w-full h-[90%] mt-3 flex flex-col space-y-4 p-3" onSubmit={onSubmit}>
                    <label htmlFor="Nom" className="text-lg tracking-wide fon-bold">Entrez votre nom</label>
                    <input name="Nom" type="text" placeholder="Nadia" required className="w-full p-2 text-lg border rounded-lg outline-none focus:outline focus:outline-offset-2 focus:outline-cyan-800 focus:outline-1"/>
                    <label htmlFor="Email" className="text-lg tracking-wide fon-bold">Entrez votre Email</label>
                    <input name="Email" type="text" placeholder="manager.standart0306@gmail.com" required className="w-full p-2 text-lg border rounded-lg outline-none focus:outline focus:outline-offset-2 focus:outline-cyan-800 focus:outline-1"/>
                    <label htmlFor="Numero" className="text-lg tracking-wide fon-bold">Entrez votre numéro</label>
                    <input name="Numéro" type="text" placeholder="+261 34 31 093 79" required className="w-full p-2 text-lg border rounded-lg outline-none focus:outline focus:outline-offset-2 focus:outline-cyan-800 focus:outline-1"/>
                    <label htmlFor="Entreprise" className="text-lg tracking-wide fon-bold">Entrez le nom de votre entreprise / profession</label>
                    <input name="Profession / Entreprise" type="text" placeholder="Stand'Art" required className="w-full p-2 text-lg border rounded-lg outline-none focus:outline focus:outline-offset-2 focus:outline-cyan-800 focus:outline-1"/>
                    <label htmlFor="Choix" className="text-lg tracking-wide fon-bold">Choisissez l'offre qui vous convient</label>
                    <div className="flex justify-between w-full">
                        <select className="w-full p-2 mr-1 font-semibold text-center bg-transparent border rounded-lg cursor-pointer outline-1" required>
                            <option value="" onClick={()=>setIsWeb(false)}>------------------- Selectionnez --------------------</option>
                            <option value="" required name="Vêtement" onClick={() =>setIsWeb(false)}>Vêtement</option>
                            <option value="" required name="Matériel & Fourniture" onClick={() =>setIsWeb(false)}>Matériel & Fourniture</option>
                            <option value="" required name="Site web" onClick={() =>setIsWeb(true)}>Création site web</option>
                        </select>
                        {isWeb && <select className="w-full p-2 ml-1 font-semibold text-center bg-transparent border rounded-lg cursor-pointer outline-1" required>
                            <option value="">------ Selectionnez -------</option>
                            <option value="" required name="Site vitrine">Site web vitrine</option>
                            <option value="" required name="Site catalogue">Site web catalogue</option>
                            <option value="" required name="Site personnalisé">Application web personnalisé</option>
                        </select>}
                    </div>
                    <label htmlFor="Description" className="text-lg tracking-wide fon-bold">Décrivez votre projet</label>
                    <textarea  name="Déscription du projet" id="Description" placeholder="Je veux une application web pour la gestion de stock ..." className="w-full p-2 text-lg border rounded-lg outline-none focus:outline focus:outline-offset-2 focus:outline-cyan-800 focus:outline-1" required></textarea>
                    <input type="submit" className="w-full p-2 mb-5 text-lg font-bold tracking-wide text-white border rounded-lg bg-cyan-700 border-cyan-500 lg:mb-0" value='Envoyer' />
                    <p className="text-sm absolute z-10 mt-2 group-hover:text-white opacity-0">{result}</p>

                </form>







            </div>
        </div>
    )
}