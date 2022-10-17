import { Box, Flex, Image, Divider, Heading, Text } from "@chakra-ui/react";
import React from "react";

const PLSGreen = () => {
  return (
    <Flex w="100%" h="100%" mb="660px" pos="relative">
      <Flex w="100%" direction="column" pos="relative">
        <Image
          src="/images/energy/ourPro1.png"
          h="514px"
          w="813px"
          pos="absolute"
        />
        <Image
          src="/images/energy/ourPro2.png"
          h="514px"
          w="813px"
          pos="absolute"
          left="25%"
          top="120%"
        />
      </Flex>
      <Flex direction="column" align="center" px="42px">
        <Divider
          orientation="vertical"
          h="109px"
          border="3px solid"
          borderColor="#DFBD69"
        />
        <Box
          height="50px"
          width="50px"
          backgroundColor="#DFBD69"
          border="5px solid white"
          boxShadow="0px 0px 0px 3px #B88746"
          borderRadius="50%"
          my="1"
        />
      </Flex>
      <Flex direction="column" mt="100px">
        <Heading
          fontFamily="goudy"
          fontSize="48px"
          lineHeight="58px"
          fontWeight="400"
          pb="25px"
        >
          OUR PROJECT
        </Heading>
        <Text
          fontFamily="veralaRound"
          fontSize="20px"
          lineHeight="24px"
          mr="100px"
        >
          Execution of a solar power plant of 5 MegaWatt at Telangana, Mothkur
          Village, Nalagonda.
        </Text>
      </Flex>
    </Flex>
  );
};

export default PLSGreen;
