import React, { useEffect, useState } from "react";

function calculatePhoneCost() {
  return Math.random() * 100;
}

function generatePhonePitch(phone) {
  let conditionStatement;
  switch (phone.phoneCondition) {
    case "DEEE":
      conditionStatement =
        "je suis un peu amoché, mais je peux encore servir, pour pièces";
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
        "j'ai un peu morflé dans ma vie, c'est pourquoi je suis à la recherche d'un foyer accueillant où couler des jours heureux jusqu'à mon trépas";
      break;
    default:
      screenConditionStatement =
        "je suis frais comme un gardon, mon écran est impeccable";
      break;
  }

  return `Hello, moi c'est ${phone.model}, ${conditionStatement}. J'ai ${phone.ram} de mémoire RAM, et ${phone.storage} de capacité de stockage. Mon écran mesure ${phone.screen}, je suis bien sûr connecté à la ${phone.network} et ${chargerStatement}. ${screenConditionStatement}`;
}

function PhoneCalculator() {
  const [phoneData, setPhoneData] = useState(null);

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRORRJMHAI_C1D_6TGINZ4FhoGTl9iKzmaOlOAtYPPcazkuK2dhNVCC_Sx_7vDkI7ETfkl-mI16C91F/pub?output=csv"
    )
      .then((response) => response.text())
      .then((data) => {
        const rows = data.split("\n").slice(1);
        const phones = rows.map((row) => {
          const columns = row.split(",");
          return {
            horodateur: columns[0],
            brand: columns[1],
            model: columns[2],
            ram: columns[3],
            storage: columns[4],
            screen: columns[5],
            network: columns[6],
            charger: columns[7],
            phoneCondition: columns[8],
            screenCondition: columns[9],
            shellCondition: columns[10],
            chargeTime: columns[11],
          };
        });

        const randomPhone = phones[Math.floor(Math.random() * phones.length)];
        setPhoneData(randomPhone);
      });
  }, []);

  if (!phoneData) return null;

  const cost = calculatePhoneCost();
  const pitch = generatePhonePitch(phoneData);

  return (
    <div>
      <h2>
        {phoneData.brand} {phoneData.model}
      </h2>
      <p>{pitch}</p>
      <p>
        Le coût final pour le téléphone {phoneData.brand} {phoneData.model} est{" "}
        {cost.toFixed(2)} euros.
      </p>
    </div>
  );
}

export default PhoneCalculator;
