import React from "react";
import { Link } from "react-router-dom";
import HeaderStyle from "../components/HeaderStyle";
import BreadCrumb from "../components/BreadCrumb";

function PhoneCharacteristics() {
  return (
    <div>
      <HeaderStyle />
      <BreadCrumb />
      <div className="flex-1">
        <div className="flex justify-around">
          <iframe
            title="formulaire estimation telephone"
            src="https://docs.google.com/forms/d/e/1FAIpQLScDFI83PEa1ezMD53eGirIupp_PIMssmemocdFbhHkwIM7Rlw/viewform?embedded=true"
            width="640"
            height="3536"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-around">
          <Link to="/nettoyage">
            <button
              type="button"
              className="bg-green text-yellow font-semibold font-text py-2 px-4 rounded shadow"
            >
              Précédent
            </button>
          </Link>
          <Link to="/nettoyage/estimation/bilan">
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

export default PhoneCharacteristics;
