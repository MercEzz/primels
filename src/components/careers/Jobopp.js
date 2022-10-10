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
    <Flex direction="column" w="100%" py="12" align="center">
      <Heading fontFamily="goudy" fontSize="50px" fontWeight="400" py="6">
        JOB OPPORTUNITIES
      </Heading>
      <Flex w="100%" py="2">
        <Flex
          direction="column"
          w="40%"
          h="100%"
          align="center"
          justify="center"
          textAlign="center"
          px="12"
          py="16"
        >
          <Heading fontFamily="avenir" fontSize="40px">
            FOLLOW US ON LINKEDIN
          </Heading>
          <Text fontFamily="veralaRound" fontSize="24px" py="6">
            The best way to stay updated on Job Opportunities at Prime Lifespace
            is to follow us on Linkedin.
          </Text>
          <Icon h="100px" w="100px" color="#0A66C2" as={AiFillLinkedin} />
          Logo
        </Flex>
        <Grid
          w="100%"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          mx="6"
          gap="4"
        >
          {joblisting.map((job) => (
            <Flex
              direction="column"
              align="center"
              w="100%"
              bgGradient="linear(to-b, #DFBD69, #B88746)"
              my="2"
              textAlign="center"
            >
              <Heading fontSize="30px" fontFamily="avenir">
                {job.title}
              </Heading>
              <VStack
                align="flex-start"
                fontFamily="veralaRound"
                fontSize="24px"
              >
                <Flex align="center" justify="flex-start">
                  <Icon as={MdLocationOn} />
                  <Text>{job.loc}</Text>
                </Flex>
                <Flex align="center" justify="center">
                  <Icon as={FaBusinessTime} />
                  <Text>{job.exp}</Text>
                </Flex>
                <Flex align="center" justify="center">
                  <Icon as={MdBusinessCenter} />
                  <Text>{job.type}</Text>
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
