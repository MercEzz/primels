import React from "react";
import AddresSec from "../components/mob/contactus/AddresSec";
import ContactMain from "../components/mob/contactus/contact-main";
import GetInTouch from "../components/mob/contactus/GetInTouch";
import ProSites from "../components/mob/contactus/ProSites";
import SideVector from "../components/mob/contactus/side-vector";

const MobContact = () => {
  return (
    <>
      <SideVector />
      <ContactMain />
      <AddresSec />
      <ProSites />
      <GetInTouch />
    </>
  );
};

export default MobContact;
