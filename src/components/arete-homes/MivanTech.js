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
      h="57.937rem"
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
        top="4.687rem"
        left="50%"
        h="7.812rem"
        transform="translateX(-50%)"
        src="/images/arete-homes/MIVAN TECHNOLOGY 2.png"
      />
      <Image
        top="13.437rem"
        left="50%"
        h="5rem"
        pos="absolute"
        transform="translateX(-50%)"
        src="/images/arete-homes/MIVAN TECHNOLOGY 1.png"
      />
    </Flex>
  );
};

export default EightSec;
