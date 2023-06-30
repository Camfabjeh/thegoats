import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO_ADOPTE_UN_TEL.png";
import backgroundImage from "../assets/background.png";

function HomePage() {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      step: "Nettoyer le téléphone si besoin !",
      color: "bg-[#233D8D] text-[#FFFFFF]",
    },
    {
      step: "Bien remplir le formulaire ",
      color: "bg-[#2A49A1] text-[#FFFFFF]",
    },
    {
      step: "Le résultat de l'estimation ",
      color: "bg-[#3157B0] text-[#FFFFFF]",
    },
    {
      step: "Petite phrase d'accroche pour aider à vendre ! :p",
      color: "bg-[#3157B0] text-[#FFFFFF]",
    },
  ];

  const handleCardClick = () => {
    setActiveCard((prevCard) => (prevCard + 1) % cards.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleCardClick();
    }
  };

  return (
    <div
      className="bg-cover bg-no-repeat bg-center min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex items-center fixed top-0 left-0 right-0">
        <img src={logo} alt="Logo Adopte Un Tel" className="w-50 h-40 pl-2" />
        <div className="w-11/12 bg-[#233D8D] rounded-l-xl">
          <div className="flex items-center justify-center h-40 rounded-l-xl">
            <h1 className="text-4xl text-[#FFFFFF]">Bienvenue</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="relative w-full h-full">
          {cards.map((card, index) => (
            <div
              key={card.step}
              className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity ${
                index === activeCard ? "opacity-100" : "opacity-0"
              }`}
              onClick={handleCardClick}
              onKeyDown={handleKeyDown}
              role="button"
              tabIndex={0}
            >
              <h2 className={`p-4 rounded ${card.color} text-3xl`}>
                {card.step}
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div className="flex fixed inset-x-0 bottom-0 py-4 bg-gray-200 justify-end items-center">
        <div className="mr-10 mb-5">
          <Link
            to="/nettoyage"
            className="bg-gradient-to-r from-green to-darkblue  h-10 w-40 text-yellow font-semibold font-text py-2 px-4 mr-5 rounded shadow"
          >
            Démarrer
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
