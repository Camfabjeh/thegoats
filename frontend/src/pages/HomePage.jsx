import React from "react";

function HomePage() {
  return (
    <div>
      <div className="flex items-center bg-[#233D8D] fixed top- left-0 right-0">
        <div className="flex items-center">
          <div className="h-40 w-40 bg-gray-500 mr-2" />
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
        <button
          className="h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Cliquez ici
        </button>
      </div>
    </div>
  );
}

export default HomePage;
