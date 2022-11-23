import { Button, Flex, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import { BiInfinite } from "react-icons/bi";
// images
import banner from "../refer and earn imgs/BANNER IMAGE.png";
import "./animations.css";
import "./rne.css";

const ReferEarn = () => {
  return (
    <Flex w="100%" h="100vh" bgColor="#ACCAD4" pos="relative" overflow="hidden">
      <Image
        style={{ opactiy: 0, animation: "fadein 1 2s linear" }}
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
        top="35%"
      >
        <Heading
          style={{ opactiy: 0, animation: "fadein 1 2s linear" }}
          pb="1.875rem"
          fontfamilty="goudy"
          fontSize="2.5rem"
          color="#13314F"
        >
          MORE REFERRALS=MORE EARNINGS
        </Heading>
        <Heading
          style={{ opactiy: 0, animation: "fadein-2sdelay 1 4s linear" }}
          fontfamilty="avenir"
          fontSize="2.125rem"
          color="#1F4973"
        >
          Gauranteed Rewards
        </Heading>
        <BiInfinite
          size="3.125rem"
          color="#1F4973"
          style={{ opactiy: 0, animation: "fadein-2sdelay 1 4s linear" }}
        />
        <Heading
          style={{ opactiy: 0, animation: "fadein-2sdelay 1 4s linear" }}
          pb="1.563rem"
          fontfamilty="avenir"
          fontSize="2.125rem"
          color="#1F4973"
        >
          Unlimited Times
        </Heading>
        <Button
          style={{ opactiy: 0, animation: "fadein-2sdelay 1 4s linear" }}
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
