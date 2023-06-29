import React from "react";
import { Link } from "react-router-dom";
import HeaderStyle from "../components/HeaderStyle";
import BreadCrumb from "../components/BreadCrumb";

// insertion du lien vers les tutos

function CleaningNeeded() {
  return (
    <div>
      <HeaderStyle />
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
          <Link to="/estimation">
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

export default CleaningNeeded;
