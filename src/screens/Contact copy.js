import { Flex } from "@chakra-ui/react";
import React from "react";
import AddresSec2 from "../components/contactus copy/AddresSec";
import ContactMain2 from "../components/contactus copy/contact-main";
import ProSites2 from "../components/contactus copy/ProSites";
import AddresSec from "../components/contactus/AddresSec";

import GetInTouch from "../components/contactus/GetInTouch";
import ProSites from "../components/contactus/ProSites";

const Contact2 = () => {
  return (
    <Flex direction="column" w="100%" h="100%" align="center" justify="center">
      <ContactMain2 />
      <AddresSec2 />
      <ProSites2 />
      <GetInTouch />
    </Flex>
  );
};

export default Contact2;
