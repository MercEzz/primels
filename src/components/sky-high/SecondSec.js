import { Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

const SecondSec = () => {
  return (
    <Flex
      w="100%"
      h="100vh"
      bgImage="/images/sky-high/sec2.png"
      bgPos="bottom"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify="center"
      pos="relative"
    >
      <Heading
        pos="absolute"
        color="white"
        textAlign="center"
        left="10%"
        top="30%"
        fontSize="40px"
        fontFamily="avenir"
        lineHeight="48px"
      >
        EXPERIENCE THE SKY <br /> HIGH LIFE
      </Heading>
    </Flex>
  );
};

export default SecondSec;
