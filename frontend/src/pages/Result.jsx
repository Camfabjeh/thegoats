import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import PhoneCalculator from "../components/PhoneCalculator";
import logo from "../assets/LOGO_ADOPTE_UN_TEL.png";
function Result() {
  return (
    <div>
      <div className="flex items-center top-0 left-0 right-0 ">
        <img src={logo} alt="Logo Adopte Un Tel" className="w-50 h-40 pl-2" />
        <div className="w-11/12 bg-[#233D8D] rounded-l-xl">
          <div className="flex items-center justify-center h-40 rounded-l-xl">
            <h1 className="text-4xl text-[#FFFFFF]">
            Bilan de l'estimation
            </h1>
          </div>
        </div>
      </div>
      <BreadCrumb />
      <PhoneCalculator />
      <div className="flex h-40 fixed bottom-0 left-0 right-0 py-4 bg-gray-200 justify-center items-center">
        <Link
          to="/nettoyage/estimation"
          className="bg-green text-yellow font-semibold font-text py-2 px-4 mr-5 rounded shadow"
        >
          Précédent
        </Link>
        <Link
          to="/nettoyage/estimation/bilan/phraseschoc"
          className="bg-yellow text-green font-semibold font-text py-2 px-4 ml-5 rounded shadow"
        >
          Suivant
        </Link>
      </div>
    </div>
  );
}

export default Result;
