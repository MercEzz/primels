import { Flex, Heading, Text, Divider, Box, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import SideVector2 from "./side-vector";
import SideVector from "./side-vector";

const MtnHd = motion(Heading);
const MtnTxt = motion(Text);

const ContactMain2 = () => {
  return (
    <Flex
      w="100%"
      h="100vh"
      bgImage="/images/contactus/contact-us3.jpg"
      bgPos="bottom"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify="center"
    >
      <Flex w="10%" h="100%" bgColor="blackAlpha.300"></Flex>
      <Flex
        w="100%"
        h="100%"
        align="center"
        justify="center"
        bgColor="blackAlpha.300"
        pb="150px"
        px="100px"
        color="white"
      >
        <Flex
          w="80%"
          h="100%"
          direction="column"
          align="center"
          justify="center"
          color="black"
        >
          <Heading py="15px" fontSize="40px" fontFamily="avenir">
            CONTACT US
          </Heading>
          <Text fontFamily="veralaRound" textAlign="center">
            We know there’s all sorts of reasons why you <br /> might want to
            chat to our team. Use this page to <br /> find the right contact
            details, quickly and easily.
          </Text>
        </Flex>
      </Flex>
      <Flex w="10%" h="100%">
        <SideVector2 />
      </Flex>
    </Flex>
  );
};

export default ContactMain2;
