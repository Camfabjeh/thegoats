import React from "react";
import { Link } from "react-router-dom";
import HeaderStyle from "../components/HeaderStyle";
import BreadCrumb from "../components/BreadCrumb";

// roue animée à tourner, comprenant par exemple 8 couleurs (reprendre couleurs charte) chacune correspondant à une phrase commerciale
// pour l'instant j'ai juste mis un .find histoire d'appeler la variable et que ça ne mette pas d'erreur au linter

function CommercialSentences() {
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
  return (
    <div className="absolute">
      <HeaderStyle />
      <BreadCrumb />
      {phraseschoc.find((element) => element[0])}
      <div className="flex-1">
        <div className="flex justify-around absolute bottom-100 left-100">
          <Link to="/bilan">
            <button
              type="button"
              className="bg-green text-yellow font-semibold font-text py-2 px-4 rounded shadow"
            >
              Précédent
            </button>
          </Link>
          <Link to="/accueil">
            <button
              type="button"
              className="bg-darkblue text-yellow font-semibold font-text py-2 px-4 rounded shadow"
            >
              Redémarrer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CommercialSentences;
