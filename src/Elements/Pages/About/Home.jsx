import Logo from '../../Assets/Logo20.png';
export default function Home()
{
  // Affichage
  return(
    <div className="w-full h-full flex flex-col py-20 lg:py-0" id='Accueil'>
      {/* Page d'accueil */}
      <div className="w-full h-[120vh] lg:h-screen flex justify-center items-center my-10 lg:my-0">
        <div className="lg:w-[80%] w-[90%] lg:h-[80%] h-full flex border-b-4 border-cyan-900 p-3 justify-between items-center gap-10 flex-col-reverse lg:flex-row">
          <div className="w-full h-full flex justify-center items-center flex-col">
            <h3 className='mb-5 text-3xl font-bold tracking-wider'><strong>STAND’<span className='text-cyan-800'>ART</span></strong> – Une expertise qui s’affirme</h3>
            <div className="text-center text-lg">
              Depuis plus de 3 ans, STAND’ART accompagne des clients particuliers dans la création de vêtements professionnels, d’objets personnalisés et de supports visuels.
              Forts de cette expérience de terrain, nous avons décidé de structurer et régulariser nos activités afin d’élargir notre champ d’action et collaborer désormais avec des entreprises, ONG et institutions.
            </div>
            <div className="text-center text-lg mt-5 font-bold">Notre objectif est de proposer des prestations fiables, créatives et professionnelles, tout en maintenant la proximité et la qualité qui ont fait notre réputation. </div>
          </div>
          <div className="w-[100%] h-[100%] flex justify-center items-center overflow-hidden relative rounded-full bg-white">
            <img src={Logo} alt="Logo de stand'Art" className="absolute lg:h-auto rounded-full border-4 border-cyan-800" />
          </div>
        </div>
      </div>
      {/* Fin page d'accueil */}

    </div>
  )
}