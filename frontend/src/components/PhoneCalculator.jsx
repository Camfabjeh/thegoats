import React, { useEffect, useState } from "react";
import GeneratePhonePitch from "./GeneratePhonePitch";

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

  const calculatePhoneCost = () => {
    return Math.random() * 100;
  };
  const cost = calculatePhoneCost();

  return (
    <div>
      {phoneData && <GeneratePhonePitch phone={phoneData} />}
      <p>
        Le coût final pour le téléphone {phoneData.model} est {cost.toFixed(2)}{" "}
        euros.
      </p>
    </div>
  );
}

export default PhoneCalculator;
