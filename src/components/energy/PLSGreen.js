import { Box, Flex, Image, Divider, Heading, Text } from "@chakra-ui/react";
import React from "react";

const PLSGreen = () => {
  return (
    <Flex w="100%" h="100%" mb="660px" pos="relative">
      <Flex w="100%" direction="column" pos="relative">
        <Image
          src="/images/energy/ourPro1.jpeg"
          h="500px"
          w="813px"
          pos="absolute"
        />
        <Image
          src="/images/energy/ourPro2.jpeg"
          h="500px"
          w="813px"
          pos="absolute"
          left="25%"
          top="120%"
        />
      </Flex>
      <Flex direction="column" align="center" px="42px">
        <Divider
          orientation="vertical"
          h="92px"
          border="3px solid"
          borderColor="#DFBD69"
        />
        <Box
          height="30px"
          width="30px"
          backgroundColor="#DFBD69"
          border="5px solid white"
          boxShadow="0px 0px 0px 3px #B88746"
          borderRadius="50%"
          my="1"
          // _hover={{
          //   width: "25px",
          //   height: "25px",
          // }}
          // transition="all .5s"
        />
      </Flex>
      <Flex direction="column" mt="100px">
        <Heading
          fontFamily="goudy"
          fontSize="40px"
          lineHeight="58px"
          fontWeight="400"
          pb="15px"
        >
          OUR PROJECT
        </Heading>
        <Text
          fontFamily="veralaRound"
          fontSize="16px"
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
