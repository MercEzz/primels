import { Flex, Image } from "@chakra-ui/react";
import React from "react";

const FirstSec = () => {
  return (
    <Flex
      w="100%"
      h="100vh"
      bgImage="/images/sky-high/sec1.png"
      bgPos="bottom"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify="center"
      pos="relative"
    >
      <Image
        w="290px"
        h="150px"
        pos="absolute"
        top="25%"
        left="5%"
        src="/images/sky-high/Arete.png"
      />
    </Flex>
  );
};

export default FirstSec;
