import { Flex, Heading, Text, Divider, Box, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import SideVector from "./side-vector";

const MtnHd = motion(Heading);
const MtnTxt = motion(Text);

const ContactMain = () => {
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
      <Flex
        w="100%"
        h="100%"
        align="center"
        justify="center"
        bgColor="blackAlpha.300"
        pb="9.375rem"
        px="1rem"
      >
        {" "}
        <Flex
          w="100%"
          h="100%"
          direction="column"
          align="center"
          justify="center"
          color="black"
          textAlign="center"
          mt="8rem"
        >
          <MtnHd
            w="100%"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, type: "just" }}
            py="0.938rem"
            fontSize="2.5rem"
            fontFamily="avenir"
          >
            CONTACT US
          </MtnHd>
          <MtnTxt
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, type: "just" }}
            fontSize="1rem"
            fontFamily="veralaRound"
            textAlign="center"
          >
            We know there’s all sorts of reasons why you might want to
            chat to our team. Use this page to find the right contact
            details, quickly and easily.
          </MtnTxt>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactMain;
