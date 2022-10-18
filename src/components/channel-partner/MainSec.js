import { Image, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const MtnHead = motion(Heading);

const MainSec = () => {
  return (
    <Flex w="100%" h="100%" direction="column" align="center">
      <Image w="100%" h="100%" src="/images/channel-partner/HANDSHAKE.gif" />
      <MtnHead
        initial={{}}
        fontSize="48px"
        fontFamily="avenir"
        lineHeight="57px"
        textTransform="uppercase"
        textAlign="center"
        mt="2rem"
        mb="4rem"
      >
        where opportunities pave the way for incredible rewards
      </MtnHead>
      <Text
        px="100px"
        fontFamily="veralaRound"
        fontSize="20px"
        lineHeight="24px"
        mb="25px"
      >
        Your association with us is extremely valuable to us. We support our
        Channel Partners to catalyst their growth with ours. Join our network
        and scale to greater heights as we bring to you various reward wining
        sources from our projects. So come, to be introduced to an achiever's
        destination reserved for those who make success happen.
        <Text pt="2rem">
          Please fill in the details below for all your marketing requirements.
        </Text>
      </Text>
    </Flex>
  );
};

export default MainSec;
