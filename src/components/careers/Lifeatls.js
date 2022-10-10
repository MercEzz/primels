import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";

const Lifeatls = () => {
  return (
    <Flex w="100%" direction="column" py="12" textAlign="center" px="6">
      <Heading fontSize="50px" fontFamily="goudy" fontWeight="400" py="4">
        LIFE AT PRIME LIFESPACE
      </Heading>
      <Text fontSize="24px" fontFamily="veralaRound" px="9rem" py="4">
        We believe when everyone is moving forward together then success takes
        care of itself. Here is a glimpse of what’s it’s like to be a member of
        the Prime Lifespace Team.
      </Text>
      <Flex w="100%" py="6">
        <Flex px="3">
          <Image h="650px" src="/images/careers/career-life.png" />
        </Flex>
        <Flex px="3">
          <Image h="550px" src="/images/careers/career-life2.png" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Lifeatls;
