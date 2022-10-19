import { Flex, Heading, Text, Divider, Box, Icon } from "@chakra-ui/react";
import React from "react";
import SideVector from "./side-vector";

const ContactMain = () => {
  return (
    <Flex
      w="100%"
      h="568px"
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
        pb="150px"
        px="100px"
        color="white"
      >
        <Flex
          w="100%"
          h="100%"
          direction="column"
          align="center"
          pt="150px"
          pl="225px"
        >
          <Heading py="15px" fontSize="40px" fontFamily="avenir">
            CONTACT US
          </Heading>
          <Text fontSize="18px" fontFamily="veralaRound" textAlign="center">
            We know there’s all sorts of reasons why you <br /> might want to
            chat to our team. Use this page to <br /> find the right contact
            details, quickly and easily.
          </Text>
        </Flex>
      </Flex>
      <SideVector />
    </Flex>
  );
};

export default ContactMain;
