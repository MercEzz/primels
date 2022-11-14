import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React from "react";

import { useRef } from "react";

const FifthSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
      <Text
        ref={ref}
        transform={isInView ? "none" : "translateY(-100px)"}
        opacity={isInView ? 1 : 0}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="40px"
        mb="50px"
      >
        A township that defines smart living
      </Text>
      <Flex w="100%" h="100%">
        <Flex w="100%" h="100%" direction="column" mr="25px">
          <VStack mb="50px">
            <Image
              ref={ref}
              transform={isInView ? "scale(1)" : "scale(0.6)"}
              transition="all 2s"
              src="/images/arete-homes/arete meditation retreat 1.jpg"
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
              ref={ref}
              transform={isInView ? "scale(1)" : "scale(0.6)"}
              transition="all 2s"
              src="/images/arete-homes/kids play area.jpeg"
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
              ref={ref}
              transform={isInView ? "scale(1)" : "scale(0.6)"}
              transition="all 2s"
              src="/images/arete-homes/garden and jogging track.jpg"
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
              ref={ref}
              transform={isInView ? "scale(1)" : "scale(0.6)"}
              transition="all 2s"
              src="/images/arete-homes/open exercise area.jpg"
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
