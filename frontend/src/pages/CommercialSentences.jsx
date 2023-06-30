import React, { useState } from "react";
import { Link } from "react-router-dom";

import BreadCrumb from "../components/BreadCrumb";
import Vente1 from "../assets/Vente1.png";
import Vente2 from "../assets/Vente2.png";
import Vente3 from "../assets/Vente3.png";
import logo from "../assets/LOGO_ADOPTE_UN_TEL.png";
import backgroundImage from "../assets/background.png";

function CommercialSentences() {
  const [randomSentence, setRandomSentence] = useState(
    " Que dire... que dire ???"
  );
  const [picture, setPicture] = useState(Vente1);

  const phraseschoc = [
    "Nos téléphones d'occasion sont comme des stars du rock : ils ont déjà vécu une vie palpitante et ils sont prêts à vous offrir une expérience incroyable !",
    "Les téléphones d'occasion que nous proposons ont été soigneusement sélectionnés et chouchoutés, prêts à être adoptés par des propriétaires passionnés de technologie à prix cassé.",
    "Ne craignez pas les rayures et les petits défauts ! Nos téléphones d'occasion ont du caractère, comme une bonne histoire à raconter à chaque utilisation.",
    "Laissez-vous séduire par le charme rétro des téléphones d'occasion. Ils ont le style et la substance pour vous faire revivre les souvenirs du passé avec une touche moderne.",
    "Les téléphones d'occasion sont comme des trésors cachés : ils ont déjà servi, mais ils sont prêts à révéler tout leur potentiel et à devenir votre nouveau compagnon technologique.",
    "Offrez-vous un téléphone d'occasion et devenez le héros de la durabilité ! Vous faites un geste pour la planète tout en bénéficiant d'un appareil de haute qualité.",
    "Imaginez-vous en train de dire : 'Mon téléphone est unique, il a déjà une histoire'. Nos téléphones d'occasion sont le choix parfait pour ceux qui veulent se démarquer.",
    "Soyez audacieux et choisissez un téléphone d'occasion. Vous ne suivez pas les tendances, vous les créez, tout en économisant de l'argent !",
    "Nos téléphones d'occasion sont comme des diamants bruts : ils ont juste besoin d'un peu de polissage pour briller de nouveau. Et vous serez celui qui leur donne cette seconde chance.",
    "Les téléphones d'occasion sont comme des trésors de seconde main, prêts à être chéris. Avec eux, vous obtenez le meilleur rapport qualité-prix et une histoire à raconter à chaque fois que vous l'utilisez.",
  ];
  const changePicture = () => {
    if (picture === Vente1) {
      setPicture(Vente2);
    } else if (picture === Vente2) {
      setPicture(Vente3);
    } else if (picture === Vente3) {
      setPicture(Vente2);
    }
  };
  const handleClickRandom = () => {
    const random = Math.floor(Math.random() * phraseschoc.length);
    setRandomSentence(phraseschoc[random]);
    changePicture();
  };

  return (
    <div
      className="bg-cover bg-no-repeat bg-center min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex items-center top-0 left-0 right-0 ">
        <img src={logo} alt="Logo Adopte Un Tel" className="w-50 h-40 pl-2" />
        <div className="w-11/12 bg-[#233D8D] rounded-l-xl">
          <div className="flex items-center justify-center h-40 rounded-l-xl">
            <h1 className="text-4xl text-[#FFFFFF]">
              Le petit plus marketing !
            </h1>
          </div>
        </div>
      </div>
      <BreadCrumb />
      <div className="flex items-start flex-row-reverse justify-center mt-18 mb-10">
        <div className="w-80 h-4 pt-5 pb-60 pr-5 mt-2 pl-10 font-text font-semibold bg-yellow bg-opacity-40 bg-size py-2 px-4 mr-5 rounded shadow">
          {randomSentence}
        </div>
        <div className="ml-10 pt-40">
          <img src={picture} alt="crumbs" className="w-40 h-40" />
          <button
            type="button"
            onClick={() => handleClickRandom()}
            className=" bg-gradient-to-r from-green to-darkblue h-10 w-40 text-yellow font-semibold font-text py-2 px-4 mr-5 rounded shadow">
            Cliquer ici
          </button>
        </div>
      </div>

      <div className="flex fixed inset-x-0 bottom-0 py-4 bg-gray-200 justify-end items-center">
        <div className="mr-10 mb-5">
          <Link
            to="/nettoyage/estimation/bilan"
            className="bg-gradient-to-r from-darkblue to-green h-10 w-40 text-yellow font-semibold font-text py-2 px-4 mr-5 rounded shadow"
          >
            Précédent
          </Link>
          <Link
            to="/"
            className="bg-gradient-to-r from-green to-darkblue h-10 w-40 text-yellow font-semibold font-text py-2 px-4 mr-5 rounded shadow"
          >
            Recommencer
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CommercialSentences;
