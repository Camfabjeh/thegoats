import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";

// insertion du lien vers les tutos

function CleaningNeeded() {
  return (
    <div className="text-center text-secondary font-text text-2xl">
      Cliquer sur les téléphones pour accéder au tuto
      <div className="object-center	object-position: center;" />
      <img
        src="https://media.discordapp.net/attachments/1081687214460780575/1123951706925965383/img_telephone_modif.jpg?width=586&height=586"
        alt="telephone a nettoyer"
        className="mx-auto"
      />
      <div>
        <BreadCrumb />
        <div className="flex-1">
          <div className="flex justify-around">
            <Link to="/accueil">
              <button
                type="button"
                className="bg-green text-yellow font-semibold font-text py-2 px-4 rounded shadow"
              >
                Précédent
              </button>
            </Link>
            <Link to="/nettoyage/estimation">
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
    </div>
  );
}

export default CleaningNeeded;
