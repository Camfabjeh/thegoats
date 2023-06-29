import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";

// insertion du lien vers les tutos

function CleaningNeeded() {
  return (
    <div>
      <div className="text-center text-secondary font-text text-2xl">
        Cliquer sur les téléphones pour accéder au tuto
        <div className="object-center	object-position: center;" />
        <a href="https://www.numerama.com/tech/639549-comment-effacer-les-donnees-de-son-smartphone-avant-de-le-revendre-ou-le-recycler.html" target="_blank">
          <img
            src="https://media.discordapp.net/attachments/1081687214460780575/1123951706925965383/img_telephone_modif.jpg?width=586&height=586"
            alt="telephone a nettoyer"
            className="mx-auto"
          />
        </a>
      </div>

      <div className="flex items-center fixed top-0 left-0 right-0">
        <div className="w-2/12 h-40 bg-gray-500" />
        <div className="w-10/12 h-40 bg-[#233D8D]">
          <div className="flex items-center justify-center h-40 bg-[#233D8D]">
            <h1 className="text-4xl text-[#FFFFFF]">
              Faut-il nettoyer téléphone ?
            </h1>
          </div>
        </div>
      </div>
      <BreadCrumb />
      <div className="flex h-40 fixed bottom-0 left-0 right-0 py-4 bg-gray-200 justify-center items-center">
        <Link to="/accueil">
          <button
            type="button"
            className="bg-green text-yellow font-semibold font-text py-2 px-4 mr-5 rounded shadow"
          >
            Précédent
          </button>
        </Link>
        <Link to="/nettoyage/estimation">
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

export default CleaningNeeded;
