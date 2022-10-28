import React from "react";
import AddresSec from "../components/contactus/AddresSec";
import ContactMain from "../components/contactus/contact-main";
import GetInTouch from "../components/contactus/GetInTouch";
import ProSites from "../components/contactus/ProSites";
import SideVector from "../components/contactus/side-vector";

const Contact = () => {
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

export default Contact;
