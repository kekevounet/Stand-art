import { AiFillCheckCircle } from "react-icons/ai";
import { FaBrain } from "react-icons/fa";
import Home from "./About/Home";
import Competences from "./About/Compétences";
import { Parallax } from 'react-scroll-parallax';
import Choix from '../Pages/About/Choix';
import Logo from '../Assets/Logo20.png';

export default function Propos() {

  return (
    <div className="" id="Propos">
      <Home />

      <div
        className="w-full h-[70vh] bg-white p-2 bg-fixed inset-0 flex justify-between bg-contain bg-no-repeat bg-center items-center text-blue-500"
        style={{ backgroundImage: `url(${Logo})` }}
      ></div>

      <div className="w-full h-[40vh] lg:h-[70vh] bg-white p-2 bg-fixed overflow-hidden inset-0 flex lg:flex-row-reverse justify-center lg:justify-between bg-contain bg-no-repeat bg-center items-center text-blue-500 fond4">
        <Parallax speed={-25} rotate={[-10, 10]} className="text-white text-4xl lg:text-8xl font-extrabold tracking-widest lg:mr-20">COMPETENCE</Parallax>
        <Parallax speed={-25} rotate={[10, -10]} className="text-white text-3xl lg:text-8xl font-extrabold tracking-widest ml-20"><FaBrain /></Parallax>
      </div>

      <Competences />

      <div className="w-full h-[40vh] lg:h-[70vh] bg-white p-2 bg-fixed overflow-hidden inset-0 flex lg:flex-row justify-center lg:justify-between bg-contain bg-no-repeat bg-center items-center text-blue-500 fond1">
        <Parallax speed={-25} rotate={[10, -10]} className="text-white text-4xl lg:text-7xl font-extrabold tracking-widest lg:ml-20">Gamme complète.</Parallax>
        <Parallax speed={-25} rotate={[10, -10]} className="text-white text-3xl lg:text-8xl font-extrabold tracking-widest ml-20 lg:mr-20 lg:ml-0"><AiFillCheckCircle /></Parallax>
      </div>

      <Choix />

      <div
        className="w-full h-[70vh] bg-white p-2 bg-fixed inset-0 flex justify-between bg-contain bg-no-repeat bg-center items-center text-blue-500"
        style={{ backgroundImage: `url(${Logo})` }}
      ></div>


    </div>
  );
}
