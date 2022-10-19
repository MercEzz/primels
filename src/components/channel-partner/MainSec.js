import { Image, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const MainSec = () => {
  return (
    <Flex
      w="100%"
      h="568px"
      direction="column"
      align="center"
      pos="relative"
      overflow="hidden"
    >
      <video
        autoPlay
        muted
        // loop
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          minHeight: "100%",
          minWidth: "100%",
          // zIndex: -1,
        }}
      >
        <source
          src="/images/channel-partner/handshake-done.mp4"
          type="video/mp4"
        />
      </video>
    </Flex>
  );
};

export default MainSec;
