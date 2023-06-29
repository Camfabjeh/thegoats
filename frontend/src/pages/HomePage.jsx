import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="flex items-center fixed top-0 left-0 right-0">
        <div className="w-2/12 h-40 bg-gray-500" />
        <div className="w-10/12 h-40 bg-[#233D8D]">
          <div className="flex items-center justify-center h-40 bg-[#233D8D]">
            <h1 className="text-4xl text-[#FFFFFF]">
              Bienvenue, choisissez le système d'exploitation du téléphone
            </h1>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 flex items-center justify-center">
        <div className="h-40 w-40 bg-[#00ACB0] bg-opacity-30 mr-2 mr-20 rounded-lg" />
        <div className="h-40 w-40 bg-[#00ACB0] bg-opacity-30 mr-2 ml-20 rounded-lg" />
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
