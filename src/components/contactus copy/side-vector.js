import React from "react";
import { Flex, Divider, Box, Icon } from "@chakra-ui/react";
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiFacebookCircleFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { motion } from "framer-motion";

const MtnFlx = motion(Flex);

const SideVector = () => {
  return (
    <Flex h="100%" bgColor="blackAlpha.300">
      <MtnFlx
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, type: "just" }}
        h="100%"
        direction="column"
        align="center"
        justify="flex-start"
        color="black"
        // pos="fixed"
        // right="0"
        // top="0"
        px="100px"
      >
        <Divider
          h="100px"
          orientation="vertical"
          border="3px solid"
          borderColor="#DFBD69"
        />{" "}
        <Box
          height="30px"
          width="30px"
          backgroundColor="#DFBD69"
          border="4px solid white"
          boxShadow="0px 0px 0px 3px #B88746"
          borderRadius="50%"
          my="1"
        />
        <MtnFlx
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 2, type: "just" }}
          direction="column"
        >
          <Icon as={RiInstagramFill} h="50px" w="50px" mt="10px" />
          <Icon as={RiLinkedinBoxFill} h="50px" w="50px" my="10px" />
          <Icon as={RiFacebookCircleFill} h="50px" w="50px" mb="10px" />
          <Icon as={RiYoutubeFill} h="50px" w="50px" />
        </MtnFlx>
      </MtnFlx>
    </Flex>
  );
};

export default SideVector;
