import { Flex, Heading, Text, Divider, Box, Icon } from "@chakra-ui/react";
import React from "react";
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiFacebookCircleFill,
  RiYoutubeFill,
} from "react-icons/ri";

const ContactMain = () => {
  return (
    <Flex
      w="100%"
      h="568px"
      bgImage="/images/contactus/contact-us1.jpg"
      bgPos="bottom"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify="center"
      pb="150px"
      px="100px"
    >
      <Flex w="100%" direction="column" align="center" pt="150px">
        <Heading py="15px" fontSize="40px" fontFamily="avenir">
          CONTACT US
        </Heading>
        <Text fontSize="18px" fontFamily="veralaRound" textAlign="center">
          We know there’s all sorts of reasons why you might want to chat to our
          team.
          <br /> Use this page to find the right contact details, quickly and
          easily.
        </Text>
      </Flex>
      <Flex h="100%" direction="column" align="center" justify="flex-start">
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
        <Icon as={RiInstagramFill} h="50px" w="50px" mt="10px" />
        <Icon as={RiLinkedinBoxFill} h="50px" w="50px" my="10px" />
        <Icon as={RiFacebookCircleFill} h="50px" w="50px" mb="10px" />
        <Icon as={RiYoutubeFill} h="50px" w="50px" />
      </Flex>
    </Flex>
  );
};

export default ContactMain;
