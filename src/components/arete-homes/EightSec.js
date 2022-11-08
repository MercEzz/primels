import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const MtnBx = motion(Box);

const EightSec = () => {
  return (
    <Flex w="100%" h="100vh" pos="relative">
      <Image
        w="100%"
        h="100%"
        objectFit="cover"
        objectPosition="center bottom"
        src="/images/ARETE HOMES/MIVAN TECHNOLOGY TOWER.jpg"
      />
      <Image
        pos="absolute"
        top="75px"
        left="50%"
        h="125px"
        transform="translateX(-50%)"
        src="/images/ARETE HOMES/MIVAN TECHNOLOGY 2.png"
      />
      <Image
        top="215px"
        left="50%"
        h="80px"
        pos="absolute"
        transform="translateX(-50%)"
        src="/images/ARETE HOMES/MIVAN TECHNOLOGY 1.png"
      />
    </Flex>
  );
};

export default EightSec;
