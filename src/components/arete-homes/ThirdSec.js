import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";

const ThirdSec = () => {
  return (
    <Flex w="100%" h="100%" direction="column" align="center" justify="center">
      <Text fontFamily="goudy" fontSize="40px" mb="50px">
        MASTER PLAN
      </Text>
      <Flex w="100%" h="100%">
        <Flex w="100%" h="100%">
          <Image h="500px" src="/images/ARETE HOMES/MASTER PLAN.jpg" />
        </Flex>
        <Flex></Flex>
      </Flex>
    </Flex>
  );
};

export default ThirdSec;
