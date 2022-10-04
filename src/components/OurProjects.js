import { Button, Divider, Flex, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";

const OurProjects = () => {
  return (
    <Flex w="100%" direction="column" align="center" justify="center" py="10">
      <Flex align="center" py="6">
        <Divider w="110px" border="3px solid" borderColor="#DFBD69" />
        <Heading px="4">OUR PROJECTS</Heading>
      </Flex>
      <Flex>
        <Flex direction="column" justify="center" w="35%" mx="10">
          <Heading py="2">ARETE HOMES</Heading>
          <Text py="2">
            The group luxuriates the highest brand esteem in Mumbai & Chennai
            for its fusion of luxuries and affordability in the projects thus
            adding to its growth
          </Text>
          <Button
            my="4"
            w="270px"
            h="75px"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize="30px"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
          >
            View Project
          </Button>
        </Flex>
        <Flex h="242x">
          <Divider
            orientation="vertical"
            w="242x"
            border="3px solid"
            borderColor="#DFBD69"
          />
        </Flex>
        <Flex direction="column" p="10">
          <Flex>
            <Text
              fontSize="24px"
              px="2"
              py="1"
              color="white"
              bgGradient="linear(to-r, #B88746 ,#DFBD69)"
              textTransform="uppercase"
            >
              Ready to move in
            </Text>
          </Flex>
          <Image src="/images/pro1.png" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OurProjects;
