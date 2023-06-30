import React from "react";
import { Link } from "react-router-dom";

function Nowhere() {
  return (
    <div className="text-left text-secondary font-text text-8xl">
      404 You've reached nowhere land...
      <img
        src="https://media.discordapp.net/attachments/1081687214460780575/1123894923356295249/Img_error404_modif.jpg?width=609&height=609"
        alt="Error 404"
      />
      <Link
        to="/"
        className="bg-gradient-to-r from-darkblue to-green h-10 w-40 text-yellow font-semibold font-text py-2 px-4 mr-5 rounded shadow">
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default Nowhere;
