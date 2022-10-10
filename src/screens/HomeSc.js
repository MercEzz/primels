import { Box } from "@chakra-ui/react";
import React from "react";
import MainSec from "../components/MainSec";
import AboutUs from "../components/AboutUs";
import Invest from "../components/Invest";
import OurProjects from "../components/OurProjects";
import SmartLiving from "../components/SmartLiving";
import Ponneri from "../components/Ponneri";
import Allia from "../components/Alia";
import LastSection from "../components/lastSection";

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
