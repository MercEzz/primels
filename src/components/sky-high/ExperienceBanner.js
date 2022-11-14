import { Flex, Image } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect } from "react";
import { useRef } from "react";

const ThirdSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <Flex
      ref={ref}
      w="100%"
      h="100vh"
      align="center"
      justify="center"
      pos="relative"
    >
      <Image
        transform={isInView ? "scale(1)" : "scale(0.6)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        w="100%"
        h="100%"
        src="/images/sky-high/3RD SECTION.jpg"
        objectPosition="30% 30%"
        bgRepeat="no-repeat"
        objectFit="cover"
      />
      <Image
        transform={isInView ? "none" : "translateX(-100px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        h="200px"
        src="/images/sky-high/3RD SECTION ASSET.png"
        pos="absolute"
        top="125px"
        right="150px"
      />
    </Flex>
  );
};

export default ThirdSec;
