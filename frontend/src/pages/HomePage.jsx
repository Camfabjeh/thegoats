import React from "react";
import { Link } from "react-router-dom";

// création de cards avec insertion images apple et android

function HomePage() {
  return (
    <div>
      <div className="flex-1">
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
