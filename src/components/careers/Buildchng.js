import {
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  Divider,
  Box,
} from "@chakra-ui/react";
import React from "react";

const Buildchng = () => {
  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      align="center"
      justify="flex-start"
      py="2"
      my="10rem"
    >
      <Heading fontSize="48px" fontWeight="400" fontFamily="goudy">
        BUILDING CHANGE
      </Heading>
      <Flex align="flex-start" py="16" justify="space-between" w="100%">
        <Flex w="60%">
          <Image src="/images/careers/bldchng.png" />
        </Flex>
        <Flex w="10%" px="6" direction="column" h="100%" align="center">
          <Divider
            orientation="vertical"
            border="3px solid"
            borderColor="#DFBD69"
            bgColor="#DFBD69"
            h="100px"
          />{" "}
          <Box
            height="25px"
            width="25px"
            backgroundColor="#DFBD69"
            border="3px solid white"
            boxShadow="0px 0px 0px 3px #B88746"
            borderRadius="50%"
            my="1"
          />
          {txt.map((letter) => (
            <Heading
              fontSize="110px"
              fontWeight="400"
              fontFamily="goudy"
              lineHeight="132px"
              py="7"
              color="#D9D9D9"
              css={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              {letter}
            </Heading>
          ))}
        </Flex>
        <Flex w="35%" pr="8" h="100%" align="center" justify="center">
          <VStack align="flex-start" mt="11rem">
            <Flex direction="column" pb="6">
              <Heading fontSize="24px" fontFamily="avenir" pr="16" py="2">
                PROBLEM SOLVING SKILLS
              </Heading>
              <Text fontSize="20px" fontFamily="veralaRound">
                We believe to nurture problem solvers, who lead better.
              </Text>
            </Flex>
            <Flex direction="column" py="10">
              <Heading fontSize="24px" fontFamily="avenir" pr="16" py="2">
                RELIABILITY
              </Heading>
              <Text fontSize="20px" fontFamily="veralaRound">
                We believe transperancy is the first step to any beginning.
              </Text>
            </Flex>
            <Flex direction="column" py="6">
              <Heading fontSize="24px" fontFamily="avenir" pr="16" py="2">
                INNOVATIVE THINKING
              </Heading>
              <Text fontSize="20px" fontFamily="veralaRound">
                We encourage innovative ideas and improvising new things.
              </Text>
            </Flex>
            <Flex direction="column" py="10">
              <Heading fontSize="24px" fontFamily="avenir" pr="16" py="2">
                MANAGEMENT SKILLS
              </Heading>
              <Text fontSize="20px" fontFamily="veralaRound">
                We thrive on good communication and motivation.
              </Text>
            </Flex>
            <Flex direction="column" py="6">
              <Heading fontSize="24px" fontFamily="avenir" pr="16" py="2">
                ENGAGEMENT
              </Heading>
              <Text fontSize="20px" fontFamily="veralaRound">
                Team work is the secret to achieve uncommon results.
              </Text>
            </Flex>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Buildchng;

const txt = ["P", "R", "I", "M", "E"];
