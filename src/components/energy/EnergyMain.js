import { Text, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const EnergyMain = () => {
  return (
    <>
      <Flex
        w="100%"
        h="100vh"
        bgImage="/images/energy/main-sec.png"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        alignItems="center"
        justifyContent="center"
        p="10rem"
      >
        <Heading
          fontFamily="avenir"
          fontSize="48px"
          lineHeight="58px"
          px="200px"
          color="white"
          textAlign="center"
        >
          SUSTAINABILITY IS VALUABLE!
        </Heading>
      </Flex>
      <Flex w="100%" h="100%" direction="column" px="100px" my="80px">
        <Heading
          pb="25px"
          fontFamily="goudy"
          fontWeight="400"
          fontSize="48px"
          lineHeight="58px"
          textAlign="center"
        >
          PLS GREEN POWER PVT LTD
        </Heading>
        <Text
          pb="25px"
          fontFamily="veralaRound"
          fontSize="20px"
          lineHeight="24px"
        >
          We provide solutions in the power sector including conventional and
          non conventional energy sector. We are committed for more than 2
          decades to provide technically best and cost effective solutions to
          our esteemed customers. We are enriched with the experience of
          configuring and devising plant preventive maintenance.
        </Text>
        <Text fontFamily="veralaRound" fontSize="20px" lineHeight="24px">
          Establishing IMS System for major power sector including ISO 9001,
          14001, 18001, ISO 17025 for laboratory Accreditation & safety norms.
          We also have our expertise in customization & development of ABT
          systems for operation of the plant in ABT regime and reduction in
          penalties like UI charges etc.
        </Text>
      </Flex>
    </>
  );
};

export default EnergyMain;
