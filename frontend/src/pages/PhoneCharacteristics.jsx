import React from "react";
import HeaderStyle from "../components/HeaderStyle";
import ButtonStyle from "../components/ButtonStyle";
import BreadCrumb from "../components/BreadCrumb";

function PhoneCharacteristics() {
  return (
    <div>
      PhoneCharacteristics
      <HeaderStyle />
      <BreadCrumb />
      <iframe
        title="formulaire estimation telephone"
        src="https://docs.google.com/forms/d/e/1FAIpQLScDFI83PEa1ezMD53eGirIupp_PIMssmemocdFbhHkwIM7Rlw/viewform?embedded=true"
        width="640"
        height="3536"
      />
      <ButtonStyle />
    </div>
  );
}

export default PhoneCharacteristics;
