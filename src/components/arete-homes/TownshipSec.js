import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React from "react";

import { useRef } from "react";

const FifthSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      py="6.25rem"
      px="6.25rem"
    >
      <Text
        transform={isInView ? "none" : "translateY(-100px)"}
        opacity={isInView ? 1 : 0}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
        mb="3.125rem"
      >
        A TOWNSHIP THAT DEFINES SMART LIVING
      </Text>
      <Flex w="100%" h="100%">
        <Flex w="100%" h="100%" direction="column" mr="1.562rem">
          <VStack mb="3.125rem">
            <Image
              transform={isInView ? "scale(1)" : "scale(0.6)"}
              transition="all 2s"
              src="/images/arete-homes/arete meditation retreat 1.jpg"
              h="21.25rem"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="2.125rem" fontFamily="avenir" pt="1.562rem">
              ARETE MEDITATION RETREAT
            </Heading>
          </VStack>
          <VStack>
            <Image
              transform={isInView ? "scale(1)" : "scale(0.6)"}
              transition="all 2s"
              src="/images/arete-homes/kids play area.jpeg"
              h="21.25rem"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="2.125rem" fontFamily="avenir" pt="1.562rem">
              KIDS PLAY AREA
            </Heading>
          </VStack>
        </Flex>
        <Flex w="100%" h="100%" direction="column">
          <VStack mb="3.125rem">
            <Image
              transform={isInView ? "scale(1)" : "scale(0.6)"}
              transition="all 2s"
              src="/images/arete-homes/garden and jogging track.jpg"
              h="21.25rem"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="2.125rem" fontFamily="avenir" pt="1.562rem">
              GARDEN & JOGGING TRACK
            </Heading>
          </VStack>
          <VStack>
            <Image
              transform={isInView ? "scale(1)" : "scale(0.6)"}
              transition="all 2s"
              src="/images/arete-homes/open exercise area.jpg"
              h="21.25rem"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="2.125rem" fontFamily="avenir" pt="1.562rem">
              OPEN EXERCISE AREA
            </Heading>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FifthSec;
