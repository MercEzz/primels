import { Box, Flex, Image } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";

const MtnBx = motion(Box);

const EightSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Flex
      ref={ref}
      transform={isInView ? "scale(1)" : "scale(0.6)"}
      transition="all 2s"
      w="100%"
      h="100vh"
      pos="relative"
    >
      <Image
        w="100%"
        h="100%"
        objectFit="cover"
        objectPosition="center bottom"
        src="/images/arete-homes/MIVAN TECHNOLOGY TOWER.jpg"
      />
      <Image
        pos="absolute"
        top="75px"
        left="50%"
        h="125px"
        transform="translateX(-50%)"
        src="/images/arete-homes/MIVAN TECHNOLOGY 2.png"
      />
      <Image
        top="215px"
        left="50%"
        h="80px"
        pos="absolute"
        transform="translateX(-50%)"
        src="/images/arete-homes/MIVAN TECHNOLOGY 1.png"
      />
    </Flex>
  );
};

export default EightSec;
