import { Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import banner from "../../news-and-media/BANNER-IMAGE.jpg";

const MtnFlx = motion(Flex);
const MtnHd = motion(Heading);

const FirstSec = () => {
  return (
    <Flex w="100%" h="100vh" pos="relative">
      <MtnFlx
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, type: "just" }}
        w="100%"
        h="100%"
        pos="absolute"
        bgImage={banner}
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        align="center"
        justify="center"
      ></MtnFlx>
      <MtnHd
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, type: "just" }}
        pos="absolute"
        top="35%"
        textAlign="center"
        w="100%"
        fontFamily="avenir"
        fontSize="2.125rem"
        lineHeight="3.562rem"
        color="white"
      >
      NEWS & MEDIA
      </MtnHd>
    </Flex>
  );
};

export default FirstSec;
