import {
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import React from "react";

const OurProjects = () => {
  return (
    <Flex w="100%" direction="column" align="center" justify="center" py="10">
      <Flex w="100%" align="center" py="6" px="22.5rem">
        <Divider border="3px solid" borderColor="#DFBD69" bgColor="#DFBD69" />
        <Flex w="100%">
          <Heading px="4">OUR PROJECTS</Heading>
        </Flex>
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
        <Flex h="23rem" direction="column" align="center" pt="5rem">
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
