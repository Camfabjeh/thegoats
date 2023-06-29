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
      <div className="flex items-center fixed top-0 left-0 right-0">
        <div className="w-2/12 h-40 bg-gray-500" />
        <div className="w-10/12 h-40 bg-[#233D8D]">
          <div className="flex items-center justify-center h-40 bg-[#233D8D]">
            <h1 className="text-4xl text-[#FFFFFF]">Resultat</h1>
          </div>
        </div>
      </div>
      <BreadCrumb />
      <div className="flex h-40 fixed bottom-0 left-0 right-0 py-4 bg-gray-200 justify-center items-center">
        <Link to="/nettoyage/estimation">
          <button
            type="button"
            className="bg-green text-yellow font-semibold font-text py-2 px-4 mr-5 rounded shadow"
          >
            Précédent
          </button>
        </Link>
        <Link to="/nettoyage/estimation/bilan/phraseschoc">
          <button
            type="button"
            className="bg-yellow text-green font-semibold font-text py-2 px-4 ml-5 rounded shadow"
          >
            Suivant
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Result;
