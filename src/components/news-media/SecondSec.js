import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ImageSlider from "./ImageSlider";

const SecondSec = () => {
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
        PRESS RELEASE
      </Text>
      <ImageSlider />
    </Flex>
  );
};

export default SecondSec;
