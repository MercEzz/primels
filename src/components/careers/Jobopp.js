import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { MdLocationOn, MdBusinessCenter } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";

const Jobopp = () => {
  return (
    <Flex direction="column" w="100%" h="100vh" mb="4rem" align="center">
      <Heading fontFamily="goudy" fontSize="48px" fontWeight="400" py="6">
        JOB OPPORTUNITIES
      </Heading>
      <Flex w="100%" py="2" px="12">
        <Flex
          direction="column"
          w="100%"
          h="100%"
          align="center"
          justify="center"
          textAlign="center"
          bgImage="/images/careers/card-bg.png"
          py="5rem"
        >
          <Heading fontFamily="avenir" fontSize="34px" px="12rem">
            FOLLOW US ON LINKEDIN
          </Heading>
          <Text fontFamily="veralaRound" fontSize="20px" py="6" px="9rem">
            The best way to stay updated on Job Opportunities at Prime Lifespace
            is to follow us on Linkedin.
          </Text>
          <Icon h="100px" w="100px" color="#0A66C2" as={AiFillLinkedin} />
          Logo
        </Flex>
        <Grid
          w="100%"
          h="100%"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          mx="6"
          gap="4"
        >
          {joblisting.map((job) => (
            <Flex
              direction="column"
              align="center"
              justify="center"
              w="100%"
              bgGradient="linear(to-b, #DFBD69, #B88746)"
              textAlign="center"
              color="white"
            >
              <Heading fontSize="24px" px="16" fontFamily="avenir">
                {job.title}
              </Heading>
              <VStack
                align="flex-start"
                fontFamily="veralaRound"
                fontSize="20px"
                py="4"
              >
                <Flex align="center" justify="flex-start">
                  <Icon as={MdLocationOn} w="6" h="6" />
                  <Text px="1">{job.loc}</Text>
                </Flex>
                <Flex align="center" justify="center">
                  <Icon as={FaBusinessTime} w="6" h="6" />
                  <Text px="1">{job.exp}</Text>
                </Flex>
                <Flex align="center" justify="center">
                  <Icon as={MdBusinessCenter} w="6" h="6" />
                  <Text px="1">{job.type}</Text>
                </Flex>
              </VStack>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Jobopp;

const joblisting = [
  {
    title: "SALES MANAGER",
    loc: "Chennai",
    exp: "5-7 years",
    type: "Full-time",
  },
  {
    title: "OPERATIONS MANAGER",
    loc: "Chennai",
    exp: "5-7 years",
    type: "Full-time",
  },
  {
    title: "GRAPHIC DESIGNER",
    loc: "Mumbai",
    exp: "1-2 years",
    type: "Internship",
  },
  {
    title: "HOSPITALITY MANAGEMENT",
    loc: "Mumbai",
    exp: "1-2 years",
    type: "Full-time",
  },
];
