import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import logo from "../assets/LOGO_ADOPTE_UN_TEL.png";
import backgroundImage from "../assets/background.png";

// insertion du lien vers les tutos

function CleaningNeeded() {
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
              Faut-il nettoyer le téléphone ?
            </h1>
          </div>
        </div>
      </div>
      <BreadCrumb />
      <div className="text-center text-secondary font-text text-xl pt-20">
        Cliquer sur les téléphones pour accéder à un tutoriel simple, sinon
        appuyer sur Suivant pour passer à la suite
        <div />
        <a
          href="https://www.numerama.com/tech/639549-comment-effacer-les-donnees-de-son-smartphone-avant-de-le-revendre-ou-le-recycler.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://media.discordapp.net/attachments/1081687214460780575/1123951706925965383/img_telephone_modif.jpg?width=586&height=586"
            alt="telephone a nettoyer"
            className="mx-auto h-80"
          />
        </a>
      </div>

      <div className="flex fixed inset-x-0 bottom-0 py-4 bg-gray-200 justify-end items-center">
        <div className="mr-10 mb-5">
          <Link
            to="/"
            className="bg-gradient-to-r from-darkblue to-green h-10 w-40 text-yellow font-semibold font-text py-2 px-4 mr-5 rounded shadow"
          >
            Précédent
          </Link>
          <Link
            to="/nettoyage/estimation"
            className="bg-gradient-to-r from-green to-darkblue  h-10 w-40 text-yellow font-semibold font-text py-2 px-4 mr-5 rounded shadow"
          >
            Suivant
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CleaningNeeded;
