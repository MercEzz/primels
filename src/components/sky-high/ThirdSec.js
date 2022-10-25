import { Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

const ThirdSec = () => {
  return (
    <Flex
      w="100%"
      h="100vh"
      direction="column"
      align="center"
      justify="center"
      p="100px"
    >
      <Heading
        fontFamily="goudy"
        fontSize="40px"
        fontWeight="400"
        textTransform="uppercase"
        textAlign="center"
      >
        An iconic dwell of sky high residences and <br /> retail spaces
      </Heading>
      <Flex w="100%" h="100%">
        <Flex w="100%" h="100%">
          <Image src="/images/sky-high/sec3.png" />
        </Flex>
        <Flex w="100%" h="100%"></Flex>
      </Flex>
    </Flex>
  );
};

export default ThirdSec;
