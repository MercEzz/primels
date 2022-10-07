import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Carousel from "./Carousel";

const MainSec = () => {
  return (
    <Flex
      h="100vh"
      bgImage={"/images/bg.png"}
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify="center"
    >
      <Flex w="80%" h="100%" align="center">
        <Flex direction="column" pl="10">
          <Heading
            py="4"
            fontSize="50px"
            fontFamily="avenir"
            letterSpacing="wide"
          >
            THE LARGEST SMART TOWNSHIP OF NORTH CHENNAI
          </Heading>
          <Text
            pt="2"
            pb="4"
            pr="4"
            fontWeight="400"
            fontFamily="veralaRound"
            lineHeight="36px"
            fontSize="30px"
          >
            Carefully crafted Living of high Life and Aminities.
          </Text>
          <Button
            my="2"
            w="270px"
            h="75px"
            fontSize="24px"
            fontFamily="avenir"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
          >
            EXPLORE NOW
          </Button>
        </Flex>
      </Flex>
      <Flex w="100%" h="100%" align="flex-end" justify="flex-end">
        <Carousel />
      </Flex>
    </Flex>
  );
};

export default MainSec;
