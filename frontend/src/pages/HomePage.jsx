import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="flex items-center bg-[#233D8D] fixed top- left-0 right-0">
        <div className="flex items-center">
          <div className="h-40 w-40 bg-gray-500 mr-2">
            <span>Mon carré gris</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-5xl text-white pl-40">
            Bienvenue, choisissez le système d'exploitation du téléphone
          </h1>
        </div>
      </div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="flex items-center">
          <div className="h-40 w-40 bg-[#00ACB0] bg-opacity-50 mr-2 mr-20 rounded-lg" />
          <div className="h-40 w-40 bg-[#00ACB0] bg-opacity-50 mr-2 ml-20 rounded-lg" />
        </div>
      </div>
      <div className="flex h-40 fixed bottom-0 left-0 right-0 py-4 bg-gray-200 justify-center items-center">
        <div className="flex justify-around">
          <Link to="/nettoyage">
            <button
              type="button"
              className="bg-green text-yellow font-semibold font-text py-2 px-4 rounded shadow"
            >
              Suivant
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
