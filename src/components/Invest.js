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
    <Flex w="100%" direction="column" align="center" justify="center" py="12">
      <Heading>INVEST WITH US</Heading>
      <Flex w="100%" py="10">
        <Flex w="100%">
          <Image src="/images/invest.png" />
        </Flex>
        <Flex h="12.5rem" direction="column" align="center" px="6">
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
          <Heading>8% RETURN ON INVESTMENT</Heading>
          <Heading>ARETE HOMES</Heading>
          <Text as="span">
            <Icon as={ImLocation} />
            North Chennai
          </Text>
          <Flex my="10" w="100%">
            <Flex w="100%" direction="column" p="2">
              <Text pb="4">Smart Home</Text>
              <Text fontWeight="bold">3 BHK</Text>
              <Text>1787 sqft.</Text>
            </Flex>
            <Flex w="100%" direction="column" p="2">
              <Text pb="4">Price</Text>
              <Text fontWeight="bold">Rs. 85 Lakhs</Text>
              <Text>Furnished with White Goods</Text>
            </Flex>
            <Flex w="100%" direction="column" p="2">
              <Text pb="4">Rental Income</Text>
              <Text fontWeight="bold">Rs. 48,000*</Text>
              <Text>Per Month</Text>
            </Flex>
          </Flex>
          <Button
            w="250px"
            h="75px"
            fontSize="24px"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
          >
            View Details
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Invest;
