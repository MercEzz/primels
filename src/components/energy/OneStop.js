import {
  Flex,
  Heading,
  Icon,
  ListItem,
  UnorderedList,
  Text,
  VStack,
  Divider,
  Box,
} from "@chakra-ui/react";
import React from "react";

const OneStop = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      align="flex-start"
      justify="center"
      px="100px"
      direction="column"
    >
      <Heading
        fontFamily="goudy"
        fontSize="48px"
        lineHeight="58px"
        fontWeight="400"
        pb="25px"
        textAlign="center"
      >
        ONE STOP SOLUTION FOR POWER SECTOR
      </Heading>
      <Flex>
        <Flex
          w="45%"
          h="100%"
          mt="50px"
          direction="column"
          justify="space-between"
          align="flex-start"
        >
          {leftSec.map((item) => (
            <VStack align="flex-start" pb="50px">
              <Icon />
              <Heading fontFamily="avenir" fontSize="34px" lineHeight="41px">
                {item.title}
              </Heading>
              <UnorderedList
                fontFamily="veralaRound"
                fontSize="20px"
                lineHeight="24px"
                fontWeight="400"
                pl="6"
              >
                {item.list.map((el) => (
                  <ListItem>
                    <Text>{el}</Text>
                  </ListItem>
                ))}
              </UnorderedList>
            </VStack>
          ))}
        </Flex>
        {/* center */}
        <Flex
          w="10%"
          px="45px"
          h="100%"
          align="center"
          justify="center"
          direction="column"
        >
          <Divider
            orientation="vertical"
            h="50px"
            border="3px solid"
            borderColor="#DFBD69"
          />
          <Box
            height="50px"
            width="50px"
            backgroundColor="#DFBD69"
            border="5px solid white"
            boxShadow="0px 0px 0px 3px #B88746"
            borderRadius="50%"
            my="1"
          />
          <Divider
            orientation="vertical"
            h="200px"
            border="3px solid"
            borderColor="#DFBD69"
          />
          <Box
            height="50px"
            width="50px"
            backgroundColor="#DFBD69"
            border="5px solid white"
            boxShadow="0px 0px 0px 3px #B88746"
            borderRadius="50%"
            my="1"
          />{" "}
          <Divider
            orientation="vertical"
            h="200px"
            border="3px solid"
            borderColor="#DFBD69"
          />
          <Box
            height="50px"
            width="50px"
            backgroundColor="#DFBD69"
            border="5px solid white"
            boxShadow="0px 0px 0px 3px #B88746"
            borderRadius="50%"
            my="1"
          />
        </Flex>
        <Flex
          w="45%"
          h="100%"
          mt="50px"
          direction="column"
          justify="space-between"
          align="flex-start"
        >
          {rightSec.map((item) => (
            <VStack align="flex-start" pb="50px">
              <Icon />
              <Heading fontFamily="avenir" fontSize="34px" lineHeight="41px">
                {item.title}
              </Heading>
              <UnorderedList
                fontFamily="veralaRound"
                fontSize="20px"
                lineHeight="24px"
                fontWeight="400"
                pl="6"
              >
                {item.list.map((el) => (
                  <ListItem>
                    <Text>{el}</Text>
                  </ListItem>
                ))}
              </UnorderedList>
            </VStack>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OneStop;

const leftSec = [
  {
    icon: {},
    title: "FINANCIAL & PPA SUPPORT",
    list: ["Project Financing", "Power Purchase Agreements"],
  },
  {
    icon: {},
    title: "Engineering, Design & due diligence",
    list: [
      "Material Procurement and Negotiation on behalf of client",
      "Project & Site Management",
      "Plant Commissioning & Synchronisation",
      "Performance Test",
      "Technology Assessment",
      "Independent Technical & Commercial Due diligence",
    ],
  },
  {
    icon: {},
    title: "O & M+ CONSULTANCY",
    list: [
      "Plant AMC for Operation & Maintenance",
      "Specification and Tender Assessment",
    ],
  },
];

const rightSec = [
  {
    icon: {},
    title: "LIAISONING & APPROVALS",
    list: ["Liaisoning for all Govt. Approvals for Project Sanctions"],
  },
  {
    icon: {},
    title: "FEASIBILITY STUDY",
    list: [
      " Site Selection",
      "Resource Analysis",
      "Technical Review",
      "Environment Impact Analysis",
      "Identification & Selection of Technology",
      "Site Visits",
      "Detail Project Reports",
    ],
  },
  {
    icon: {},
    title: "PROCUREMENT & CONSTRUCTION",
    list: [
      " Project Design and Optimization",
      "Detail Technology Assessment, Selection and Specification Preparation",
      "Preparation of Layout Drawings, Erection Documents etc",
    ],
  },
];
