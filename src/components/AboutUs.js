import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const AboutUs = () => {
  return (
    <Flex justify="center" w="100%" align="flex-end" p="6" direction="column">
      <Flex w="40%" direction="column" pt="14" px="10">
        <Heading align="center">ABOUT US</Heading>
        <Flex direction="column">
          <Heading pt="10" pb="2">
            BRIGHT IDEAS-SMART SOLUTIONS
          </Heading>
          <Text pb="8">
            Prime Life Space is a reputed developer in the Real Estate industry
            well known in the western region of Maharashtra namely Mumbai,
            Khopoli,Pune & Alibaug.
          </Text>
        </Flex>
        <Flex direction="column">
          <Text>Experience</Text>
          <Text>30 YEARS</Text>
          <Text pt="6">Completed Development</Text>
          <Text>1 Million sqft. (approx.)</Text>
          <Text pt="6">Done Consultancy for</Text>
          <Text>30 years</Text>
        </Flex>
        <Button
          my="6"
          w="240px"
          h="75px"
          bgGradient="linear(to-b, #B88746 ,#DFBD69)"
          color="white"
          fontSize="30px"
          _hover={{
            bgGradient: "linear(to-b, #DFBD69, #B88746)",
          }}
        >
          Know More
        </Button>
      </Flex>
    </Flex>
  );
};

export default AboutUs;
