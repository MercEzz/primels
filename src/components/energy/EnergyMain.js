import { Text, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const MtnHd = motion(Heading);
const MtnTxt = motion(Text);

const EnergyMain = () => {
  return (
    <>
      <Flex
        w="100%"
        h="568px"
        alignItems="center"
        justifyContent="center"
        pos="relative"
        overflow="hidden"
      >
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            minHeight: "100%",
            minWidth: "100%",
            // zIndex: -1,
          }}
        >
          <source src="/images/energy/energy-hero.mp4" type="video/mp4" />
        </video>
        <MtnHd
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, type: "just" }}
          pos="absolute"
          fontFamily="avenir"
          fontSize="40px"
          lineHeight="58px"
          color="white"
          textAlign="center"
        >
          SUSTAINABILITY
        </MtnHd>
        <MtnHd
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 2, type: "just" }}
          pos="absolute"
          top="300px"
          fontFamily="avenir"
          fontSize="40px"
          lineHeight="58px"
          color="white"
          textAlign="center"
        >
          IS VALUABLE!
        </MtnHd>
      </Flex>
      <Flex w="100%" h="100%" direction="column" px="100px" my="100px">
        <MtnHd
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, type: "just" }}
          pb="25px"
          fontFamily="goudy"
          fontWeight="400"
          fontSize="40px"
          lineHeight="58px"
          textAlign="center"
        >
          PLS GREEN POWER PVT LTD
        </MtnHd>
        <MtnTxt
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, type: "just" }}
          pb="15px"
          fontFamily="veralaRound"
          fontSize="16px"
          lineHeight="24px"
        >
          We provide solutions in the power sector including conventional and
          non conventional energy sector. We are committed for more than 2
          decades to provide technically best and cost effective solutions to
          our esteemed customers. We are enriched with the experience of
          configuring and devising plant preventive maintenance.
        </MtnTxt>
        <MtnTxt
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, type: "just" }}
          fontFamily="veralaRound"
          fontSize="16px"
          lineHeight="24px"
        >
          Establishing IMS System for major power sector including ISO 9001,
          14001, 18001, ISO 17025 for laboratory Accreditation & safety norms.
          We also have our expertise in customization & development of ABT
          systems for operation of the plant in ABT regime and reduction in
          penalties like UI charges etc.
        </MtnTxt>
      </Flex>
    </>
  );
};

export default EnergyMain;
