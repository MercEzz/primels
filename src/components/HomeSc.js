import { Box } from "@chakra-ui/react";
import React from "react";
import AboutUs from "./AboutUs";
import Invest from "./Invest";
import MainSec from "./MainSec";
import OurProjects from "./OurProjects";
import SmartLiving from "./SmartLiving";

const HomeSc = () => {
  return (
    <Box>
      <MainSec />
      <AboutUs />
      <Invest />
      <OurProjects />
      <SmartLiving />
    </Box>
  );
};

export default HomeSc;
