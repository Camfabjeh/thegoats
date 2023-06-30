import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO_ADOPTE_UN_TEL.png";
import backgroundImage from "../assets/background.png";

import BreadCrumb from "../components/BreadCrumb";

function PhoneCharacteristics() {
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
              Caractéristiques du téléphone
            </h1>
          </div>
        </div>
      </div>
      <BreadCrumb />
      <div className="flex-1 pt-10 pb-50">
        <div className="flex justify-around">
          <iframe
            title="formulaire estimation telephone"
            src="https://docs.google.com/forms/d/e/1FAIpQLScDFI83PEa1ezMD53eGirIupp_PIMssmemocdFbhHkwIM7Rlw/viewform?embedded=true"
            width="700"
            height="3536"
          />
        </div>
      </div>
      <div className="flex fixed inset-x-0 bottom-0 py-4 bg-gray-200 justify-end items-center">
        <div className="mr-10 mb-5">
          <Link
            to="/nettoyage"
            className="bg-gradient-to-r from-darkblue to-green h-10 w-40 text-yellow font-semibold font-text py-2 px-4 mr-5 rounded shadow"
          >
            Précédent
          </Link>
          <Link
            to="/nettoyage/estimation/bilan"
            className="bg-gradient-to-r from-green to-darkblue  h-10 w-40 text-yellow font-semibold font-text py-2 px-4 mr-5 rounded shadow"
          >
            Suivant
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PhoneCharacteristics;
