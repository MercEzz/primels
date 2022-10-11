import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";

const Lifeatls = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      mt="150px"
      mb="50px"
      textAlign="center"
      px="100px"
    >
      <Heading fontSize="48px" fontFamily="goudy" fontWeight="400" p="2">
        LIFE AT PRIME LIFESPACE
      </Heading>
      <Text fontSize="20px" fontFamily="veralaRound" px="150px" my="25px">
        We believe when everyone is moving forward together then success takes
        care of itself. Here is a glimpse of what’s it’s like to be a member of
        the Prime Lifespace Team.
      </Text>
      <Flex w="100%" h="100%" py="2" align="flex-start">
        <Flex w="818px" h="612px">
          <Image src="/images/careers/career-life.png" />
        </Flex>
        <Flex w="397px" h="514px" pl="25px">
          <Image src="/images/careers/career-life2.png" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Lifeatls;
