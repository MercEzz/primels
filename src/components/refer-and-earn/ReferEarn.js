import { Button, Flex, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import { BiInfinite } from "react-icons/bi";
// images
import banner from "../refer and earn imgs/BANNER IMAGE.png";

const ReferEarn = () => {
  return (
    <Flex w="100%" h="100vh" bgColor="#ACCAD4" pos="relative" overflow="hidden">
      <Image
        h="37.5rem"
        src={banner}
        pos="absolute"
        objectFit="cover"
        right="-6%"
        bottom="0"
      />
      <Flex
        px="6.25rem"
        pos="absolute"
        w="100%"
        h="100%"
        direction="column"
        top="40%"
      >
        <Heading
          pb="1.875rem"
          fontfamilty="goudy"
          fontSize="2.5rem"
          color="#13314F"
        >
          MORE REFERRALS = MORE EARNINGS
        </Heading>
        <Heading
          pb="0.625rem"
          fontfamilty="avenir"
          fontSize="2.125rem"
          color="#1F4973"
        >
          Gauranteed Rewards
        </Heading>
        <BiInfinite size="3.125rem" color="#1F4973" />
        <Heading
          pb="1.563rem"
          fontfamilty="avenir"
          fontSize="2.125rem"
          color="#1F4973"
        >
          Unlimited Times
        </Heading>
        <Button
          w="fit-content"
          bgGradient="linear(to-b, #B88746 ,#DFBD69)"
          color="white"
          fontSize="1rem"
          fontFamily="avenir"
          fontWeight="bold"
          _hover={{
            bgGradient: "linear(to-b, #DFBD69, #B88746)",
          }}
          _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
        >
          BOOK A SITE VISIT
        </Button>
      </Flex>
    </Flex>
  );
};

export default ReferEarn;
