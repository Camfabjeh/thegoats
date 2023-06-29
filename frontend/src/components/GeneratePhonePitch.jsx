import React from "react";
import PropTypes from "prop-types";
import Typewriter from "typewriter-effect";

function GeneratePhonePitch({ phone }) {
  let conditionStatement;
  switch (phone.phoneCondition) {
    case "DEEE":
      conditionStatement =
        "Je suis un peu amoché, mais je peux encore servir, pour pièces";
      break;
    case "Réparable":
      conditionStatement = `j'ai pas mal souffert mais je suis encore ${phone.phoneCondition}`;
      break;
    case "Bloqué":
      conditionStatement = `je suis actuellement ${phone.phoneCondition}, mais je peux encore servir !`;
      break;
    case "Reconditionnable":
      conditionStatement = `je suis tout à fait ${phone.phoneCondition}`;
      break;
    case "Reconditionné":
      conditionStatement = `j'ai été soigneusement ${phone.phoneCondition} par l'équipe d'Emmaüs Connect`;
      break;
    default:
      conditionStatement = "";
      break;
  }

  const chargerStatement =
    phone.charger === "oui"
      ? "je suis équipé d'un câble de chargeur"
      : "je ne possède pas de chargeur";

  let screenConditionStatement;
  switch (phone.screenCondition) {
    case "écran fêlé":
      screenConditionStatement =
        "j'ai un peu morflé dans ma vie, donc je cherche un foyer accueillant où couler des jours heureux jusqu'à mon trépas";
      break;
    default:
      screenConditionStatement =
        "Je suis frais comme un gardon, mon écran est impeccable";
      break;
  }

  return (
    <div className="PhoneCalculator">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(`Hello, moi c'est ${phone.model}.`)
            .pauseFor(1000)
            .deleteAll()
            .typeString(
              `J'ai ${phone.ram} de mémoire RAM, et ${phone.storage} de capacité de stockage. `
            )
            .pauseFor(1000)
            .deleteAll()
            .typeString(
              `Mon écran mesure ${phone.screen}, je suis bien sûr connecté à la ${phone.network} et ${chargerStatement}.`
            )
            .pauseFor(1000)
            .deleteAll()
            .typeString(`${screenConditionStatement}`)
            .pauseFor(1000)
            .deleteAll()
            .typeString(`${conditionStatement}`)
            .start();
        }}
      />
    </div>
  );
}

GeneratePhonePitch.propTypes = {
  phone: PropTypes.shape({
    model: PropTypes.string,
    ram: PropTypes.string,
    storage: PropTypes.string,
    screen: PropTypes.string,
    network: PropTypes.string,
    charger: PropTypes.string,
    phoneCondition: PropTypes.string,
    screenCondition: PropTypes.string,
    shellCondition: PropTypes.string,
    chargeTime: PropTypes.string,
  }),
};

GeneratePhonePitch.defaultProps = {
  phone: {
    model: "",
    ram: "",
    storage: "",
    screen: "",
    network: "",
    charger: "",
    phoneCondition: "",
    screenCondition: "",
    shellCondition: "",
    chargeTime: "",
  },
};

export default GeneratePhonePitch;
