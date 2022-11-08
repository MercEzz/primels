import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const FifthSec = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      py="100px"
      px="100px"
    >
      <Text fontFamily="goudy" fontSize="40px" mb="50px">
        A township that defines smart living
      </Text>
      <Flex w="100%" h="100%">
        <Flex w="100%" h="100%" direction="column" mr="25px">
          <VStack mb="50px">
            <Image
              src="/images/ARETE HOMES/arete meditation retreat 1.jpg"
              h="340px"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="34px" fontFamily="avenir" pt="25px">
              ARETE MEDITATION RETREAT
            </Heading>
          </VStack>
          <VStack>
            <Image
              src="/images/ARETE HOMES/kids play area.jpeg"
              h="340px"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="34px" fontFamily="avenir" pt="25px">
              KIDS PLAY AREA
            </Heading>
          </VStack>
        </Flex>
        <Flex w="100%" h="100%" direction="column">
          <VStack mb="50px">
            <Image
              src="/images/ARETE HOMES/garden and jogging track.jpg"
              h="340px"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="34px" fontFamily="avenir" pt="25px">
              GARDEN & JOGGING TRACK
            </Heading>
          </VStack>
          <VStack>
            <Image
              src="/images/ARETE HOMES/open exercise area.jpg"
              h="340px"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="34px" fontFamily="avenir" pt="25px">
              OPEN EXERCISE AREA
            </Heading>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FifthSec;
