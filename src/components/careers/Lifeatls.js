import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const MtnHead = motion(Heading);
const MotnTxt = motion(Text);
const MtnFlx = motion(Flex);

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
      <MtnHead
        initial={{ opacity: 1, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, type: "just" }}
        fontSize="48px"
        fontFamily="goudy"
        fontWeight="400"
        p="2"
      >
        LIFE AT PRIME LIFESPACE
      </MtnHead>
      <MotnTxt
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, type: "just" }}
        fontSize="20px"
        fontFamily="veralaRound"
        px="150px"
        my="25px"
      >
        We believe when everyone is moving forward together then success takes
        care of itself. Here is a glimpse of what’s it’s like to be a member of
        the Prime Lifespace Team.
      </MotnTxt>
      <Flex w="100%" h="100%" py="2" align="flex-start">
        <MtnFlx
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, type: "just" }}
          w="818px"
          h="612px"
        >
          <Image src="/images/careers/career-life.png" />
        </MtnFlx>
        <MtnFlx
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, type: "just" }}
          w="397px"
          h="514px"
          pl="25px"
        >
          <Image src="/images/careers/career-life2.png" />
        </MtnFlx>
      </Flex>
    </Flex>
  );
};

export default Lifeatls;
