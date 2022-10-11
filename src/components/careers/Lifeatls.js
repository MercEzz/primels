import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";

const Lifeatls = () => {
  return (
    <Flex
      w="100%"
      h="100vh"
      direction="column"
      my="10"
      textAlign="center"
      px="5rem"
    >
      <Heading fontSize="48px" fontFamily="goudy" fontWeight="400" py="4">
        LIFE AT PRIME LIFESPACE
      </Heading>
      <Text fontSize="20px" fontFamily="veralaRound" px="15rem" py="2">
        We believe when everyone is moving forward together then success takes
        care of itself. Here is a glimpse of what’s it’s like to be a member of
        the Prime Lifespace Team.
      </Text>
      <Flex w="100%" h="100%" py="2" align="flex-start">
        <Flex w="65%" pr="3">
          <Image src="/images/careers/career-life.png" />
        </Flex>
        <Flex w="35%" pl="3">
          <Image src="/images/careers/career-life2.png" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Lifeatls;
