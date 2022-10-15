import { Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const EnergyMain = () => {
  return (
    <Flex
      w="100%"
      h="100vh"
      bgImage="/images/energy/main-sec.png"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        fontFamily="avenir"
        fontSize="80px"
        lineHeight="95px"
        px="300px"
        color="white"
        textAlign="center"
      >
        SUSTAINABILITY IS VALUABLE!
      </Heading>
    </Flex>
  );
};

export default EnergyMain;
