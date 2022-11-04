import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";

const ThirdSec = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      px="100px"
      py="50px"
      direction="column"
      align="center"
      justify="center"
    >
      <Text fontFamily="goudy" fontSize="40px" lineHeight="48px">
        PRIME EVENTS
      </Text>
      <Heading fontFamily="avenir" fontSize="34px" lineHeight="48px" py="25px">
        SKY HIGH TOWER LAUNCH AT HYATT REGENCY, CHENNAI{" "}
      </Heading>
      <ImageSlider />
    </Flex>
  );
};

export default ThirdSec;
