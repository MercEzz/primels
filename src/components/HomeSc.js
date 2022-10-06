import { Box } from "@chakra-ui/react";
import React from "react";
import AboutUs from "./AboutUs";
import Allia from "./Alia";
import Invest from "./Invest";
import LastSection from "./lastSection";
import MainSec from "./MainSec";
import OurProjects from "./OurProjects";
import Ponneri from "./Ponneri";
import SmartLiving from "./SmartLiving";

const HomeSc = () => {
  return (
    <Box>
      <MainSec />
      <AboutUs />
      <Invest />
      <OurProjects />
      <SmartLiving />
      <Ponneri />
      <Allia />
      <LastSection />
    </Box>
  );
};

export default HomeSc;
