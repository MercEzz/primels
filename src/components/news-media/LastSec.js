import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import ImageSlider from "./ImageSlider";

const LastSec = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      pt="50px"
      px="100px"
      pb="100px"
      align="center"
      justify="center"
    >
      <Text fontFamily="goudy" fontSize="40px" lineHeight="48px">
        PRIME REALTY REPORT
      </Text>
      <ImageSlider />
    </Flex>
  );
};

export default LastSec;
