import {
  Button,
  Flex,
  Text,
  Image,
  Heading,
  Divider,
  Box,
} from "@chakra-ui/react";
import React from "react";

const AreteSec = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      px="100px"
    >
      <Flex w="100%">
        <Button
          w="100%"
          bgGradient="linear(to-b, #B88746 ,#DFBD69)"
          border="1px solid #B88746"
          color="white"
          mr="10px"
          p="25px"
          borderRadius="none"
          fontSize="16px"
          fontFamily="avenir"
          fontWeight="bold"
          _hover={{
            bgGradient: "linear(to-b, #DFBD69, #B88746)",
          }}
          // onClick={() => {
          //   setActive(true);
          // }}
          // _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
        >
          ARETE PLAZA
        </Button>
        <Button
          ml="10px"
          w="100%"
          bgColor="white"
          p="25px"
          border="1px solid #B88746"
          // bgGradient="linear(to-b, #B88746 ,#DFBD69)"
          borderRadius="none"
          color="black"
          fontSize="16px"
          fontFamily="avenir"
          fontWeight="bold"
          // onClick={() => {
          //   setActive(false);
          // }}
          // _hover={{
          //   bgGradient: "linear(to-b, #DFBD69, #B88746)",
          // }}
          // _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
        >
          ARETE MALL
        </Button>
      </Flex>
      <Flex
        w="100%"
        h="100%"
        direction="column"
        align="center"
        justify="center"
        pt="50px"
        pb="100px"
      >
        <Text textAlign="center" fontFamily="goudy" fontSize="40px" pb="25px">
          ARETE PLAZA
        </Text>
        <Text
          fontFamily="veralaRound"
          fontSize="18px"
          pb="50px"
          textAlign="center"
        >
          First time ever in North Chennai a tallest tower with G+1 - 20 Retail
          Spaces, an impeccable mix of Shopping, HyperMarket, Pharmacy, Fine
          Dining & Entertainment.
        </Text>
        <Flex w="100%" gap="20px">
          <Flex w="100%">1</Flex>
          <Flex w="100%">2</Flex>
          <Flex w="100%">3</Flex>
        </Flex>
      </Flex>
      <Flex w="100%" h="100%">
        img
        <Flex
          w="100%"
          h="100%"
          direction="column"
          justify="center"
          align="center"
          px="25px"
        >
          {" "}
          <Divider
            h="170px"
            orientation="vertical"
            border="3px solid"
            borderColor="#DFBD69"
            bgColor="#DFBD69"
          />
          <Box
            height="30px"
            width="30px"
            backgroundColor="#DFBD69"
            border="3px solid white"
            boxShadow="0px 0px 0px 3px #B88746"
            borderRadius="50%"
            my="1"
          />
        </Flex>
        <Flex
          w="100%"
          h="100%"
          direction="column"
          align="flex-start"
          justify="center"
        >
          <Heading fontFamily="avenir" fontSize="34px" pb="20px">
            FLOOR PLAN
          </Heading>
          <Text fontFamily="veralaRound" fontSize="18px" pb="10px">
            Typology
          </Text>
          <Heading fontFamily="avenir" fontSize="20px" pb="20px">
            FLOOR PLAN
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AreteSec;
