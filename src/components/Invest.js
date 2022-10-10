import {
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  Divider,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { ImLocation } from "react-icons/im";

const Invest = () => {
  return (
    <Flex
      w="100%"
      direction="column"
      align="center"
      h="100vh"
      justify="center"
      py="12"
    >
      <Heading fontFamily="goudy" fontWeight="400" fontSize="50px">
        INVEST IN RENT GENERATING ASSETS
      </Heading>
      <Flex w="100%" py="10">
        <Flex w="100%" h="600px">
          <Image src="/images/invest.png" />
        </Flex>
        <Flex h="16.5rem" direction="column" align="center" px="6">
          <Divider
            orientation="vertical"
            border="3px solid"
            borderColor="#DFBD69"
          />{" "}
          <Box
            height="30px"
            width="25px"
            backgroundColor="#DFBD69"
            border="3px solid white"
            boxShadow="0px 0px 0px 3px #B88746"
            borderRadius="50%"
            my="1"
          />
        </Flex>
        <Flex w="100%" py="6" direction="column" justify="center">
          <Heading fontFamily="avenir">8% ROI ON HOMES</Heading>

          <Flex my="10" w="100%">
            <Flex w="100%" direction="column" p="2">
              <Text
                pb="4"
                fontFamily="veralaRound"
                fontWeight="400"
                fontSize="24px"
              >
                Smart Home
              </Text>
              <Text fontWeight="700" fontFamily="avenir" fontSize="30px">
                2 BHK
              </Text>
              <Text fontFamily="veralaRound" fontSize="24px" fontWeight="400">
                1085 sqft.
              </Text>
            </Flex>
            <Flex w="100%" direction="column" p="2">
              <Text
                pb="4"
                fontFamily="veralaRound"
                fontWeight="400"
                fontSize="24px"
              >
                Price
              </Text>
              <Text fontWeight="700" fontFamily="avenir" fontSize="30px">
                Rs. 85 Lakhs
              </Text>
              <Text fontFamily="veralaRound" fontSize="24px" fontWeight="400">
                Fully Furnished With White Goods
              </Text>
            </Flex>
            <Flex w="100%" direction="column" p="2">
              <Text
                pb="4"
                fontFamily="veralaRound"
                fontWeight="400"
                fontSize="24px"
              >
                Rental Income
              </Text>
              <Text fontWeight="700" fontFamily="avenir" fontSize="30px">
                Rs. 32,000*
              </Text>
              <Text fontFamily="veralaRound" fontSize="24px" fontWeight="400">
                Per Month
              </Text>
            </Flex>
          </Flex>
          <Button
            w="250px"
            h="75px"
            fontSize="24px"
            fontFamily="avenir"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
          >
            VIEW DETAILS
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Invest;
