import FondNav from '../Assets/rez.jpg';
import Logo from '../Assets/logo.jpg';
import me from '../Assets/me_info.png'
export default function Footer({ouvert})
{
    return(
        <div className={`flex flex-col w-full mt-20 bg-white lg:border-t-2 h-max lg:h-96 lg:mt-0 ${ouvert ? 'blur lg:blur-none' : 'blur-none'}`}>
            {/* Footer 1 */}
            <div className="w-full shadow-md h-[80%] bg-white p-3 flex flex-col justify-around items-center gap-3 lg:flex-row">
                <div className="w-full h-full p-1 lg:p-0">
                    <h3 className='text-center'>Stand'Art</h3>
                    <hr />
                    <div className="flex items-center justify-center w-full h-[75%]">
                        <h4>« Des textures qui inspirent, des outils qui boostent, des sites qui brillent, un service qui dépanne — votre réussite, notre mission. »</h4>
                    </div>
                </div>
                <div className="w-full h-full p-1 lg:p-0">
                    <h3 className='text-center'>Divers Liens</h3>
                    <hr />
                    <div className="grid w-full grid-cols-2 gap-1 h-[75%]">
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <a href="#Accueil" title='Accueil' className="p-3 text-lg font-bold text-black no-underline transition-all duration-200 rounded-md hover:bg-gray-100 hover:shadow-[inset_0px_0px_5px_rgba(0,0,0,0.7)]">Accueil</a>
                            <a href="#Vetements" title='Vetements' className="p-3 text-lg font-bold text-black no-underline transition-all duration-200 rounded-md hover:bg-gray-100 hover:shadow-[inset_0px_0px_5px_rgba(0,0,0,0.7)]">Vêtements</a>
                            <a href="#Materiels" title='Materiels' className="p-3 text-lg font-bold text-black no-underline transition-all duration-200 rounded-md hover:bg-gray-100 hover:shadow-[inset_0px_0px_5px_rgba(0,0,0,0.7)]">Matériels</a>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <a href="#Creation" title='Creation' className="p-3 text-lg font-bold text-black no-underline transition-all duration-200 rounded-md hover:bg-gray-100 hover:shadow-[inset_0px_0px_5px_rgba(0,0,0,0.7)]">Création</a>
                            <a href="#Contact" title='Contact' className="p-3 text-lg font-bold text-black no-underline transition-all duration-200 rounded-md hover:bg-gray-100 hover:shadow-[inset_0px_0px_5px_rgba(0,0,0,0.7)]">Contact</a>
                            <a href="#Propos" title='Propos' className="p-3 text-lg font-bold text-black no-underline transition-all duration-200 rounded-md hover:bg-gray-100 hover:shadow-[inset_0px_0px_5px_rgba(0,0,0,0.7)]">Propos</a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end w-full h-full px-5">
                    <a className="w-[75%] overflow-hidden h-full relative" href='https://niavo.netlify.app' target='_blank' rel='noopener noreferrer' title='Niavo Kevin'>
                        <img src={me} alt="Information" className='absolute object-contain w-full h-full' />
                    </a>
                </div>
            </div>

            {/* Footer 2 */}
            <div
                className={`mt-0 lg:mt-0 z-40 shadow-md relative h-[8vh] lg:h-20 w-full text-white flex flex-col items-center justify-center lg:flex-row transition-all duration-500 overflow-hidden bg-no-repeat bg-cover bg-center `}
                style={{ backgroundImage: `url(${FondNav})` }}
            >

            <h4 className='mr-20 text-base lg:text-lg lg:mr-0'><strong>&copy; Stand'Art. </strong>Tous droits réservés.</h4>
            
            <div className="absolute flex justify-end w-full h-20 mr-0 lg:mr-28" >
              <img src={Logo} alt="" className='scale-75 animate-pulse lg:scale-100' />
            </div>
          
        </div>

        </div>
    )
}
