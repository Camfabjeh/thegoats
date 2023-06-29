import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";

// écran de téléphone sur lequel se rédige, en direct, le pitch de l'histoire de vie du téléphone, et son prix
// suppose l'import des données du google sheet et le calcul sur la base de l'algo
// insertion de l'image du téléphone content
// insertion d'un petit logo d'imprimante pour pouvoir éditer une étiquette du pitch + prix

function Result() {
  return (
    <div>
      Result
      <BreadCrumb />
      <div className="flex-1">
        <div className="flex justify-around">
          <Link to="/nettoyage/estimation">
            <button
              type="button"
              className="bg-green text-yellow font-semibold font-text py-2 px-4 rounded shadow"
            >
              Précédent
            </button>
          </Link>
          <Link to="/nettoyage/estimation/bilan/phraseschoc">
            <button
              type="button"
              className="bg-yellow text-green font-semibold font-text py-2 px-4 rounded shadow"
            >
              Suivant
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Result;
