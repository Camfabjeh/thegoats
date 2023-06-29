import React from "react";
import { Link } from "react-router-dom";

import BreadCrumb from "../components/BreadCrumb";

function PhoneCharacteristics() {
  return (
    <div style={{ overflowY: "scroll", maxHeight: "100vh" }}>
      <div className="flex items-center fixed top-0 left-0 right-0">
        <div className="w-2/12 h-40 bg-gray-500" />
        <div className="w-10/12 h-40 bg-[#233D8D]">
          <div className="flex items-center justify-center h-40 bg-[#233D8D]">
            <h1 className="text-4xl text-[#FFFFFF]">
              Caractéristiques du téléphone
            </h1>
          </div>
        </div>
      </div>
      <BreadCrumb />
      <div className="flex-1 pt-40 pb-50">
        <div className="flex justify-around">
          <iframe
            title="formulaire estimation telephone"
            src="https://docs.google.com/forms/d/e/1FAIpQLScDFI83PEa1ezMD53eGirIupp_PIMssmemocdFbhHkwIM7Rlw/viewform?embedded=true"
            width="700"
            height="3536"
          />
        </div>
      </div>
      <div className="flex h-40 fixed bottom-0 left-0 right-0 py-4 bg-gray-200 justify-center items-center">
        <Link
          to="/nettoyage"
          className="bg-green text-yellow font-semibold font-text py-2 px-4 mr-5 pr-5 rounded shadow"
        >
          Précédent
        </Link>
        <Link
          to="/nettoyage/estimation/bilan"
          className="bg-yellow text-green font-semibold font-text py-2 px-4 ml-5 rounded shadow"
        >
          Suivant
        </Link>
      </div>
    </div>
  );
}

export default PhoneCharacteristics;
