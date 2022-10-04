import { Box } from "@chakra-ui/react";
import React from "react";
import AboutUs from "./AboutUs";
import Invest from "./Invest";
import MainSec from "./MainSec";

const HomeSc = () => {
  return (
    <Box>
      <MainSec />
      <AboutUs />
      <Invest />
    </Box>
  );
};

export default HomeSc;
