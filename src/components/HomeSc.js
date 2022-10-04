import { Box } from "@chakra-ui/react";
import React from "react";
import AboutUs from "./AboutUs";
import Invest from "./Invest";
import MainSec from "./MainSec";
import OurProjects from "./OurProjects";

const HomeSc = () => {
  return (
    <Box>
      <MainSec />
      <AboutUs />
      <Invest />
      <OurProjects />
    </Box>
  );
};

export default HomeSc;
