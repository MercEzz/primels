import {
  Flex,
  Heading,
  Image,
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
      pt="50px"
      pb="15px"
      px="100px"
      direction="column"
    >
      <Heading
        fontFamily="goudy"
        w="100%"
        fontSize="40px"
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
          pt="50px"
          direction="column"
          justify="space-between"
          align="flex-start"
        >
          {leftSec.map((item) => (
            <VStack w="100%" align="flex-start" pb="25px">
              <Flex w="100%" align="center" justify="center">
                <Image w="80px" h="80px" src={item.icon} />
              </Flex>
              <Heading
                fontFamily="avenir"
                fontSize="24px"
                lineHeight="41px"
                textTransform="uppercase"
                mb="7px"
              >
                {item.title}
              </Heading>
              <UnorderedList
                fontFamily="veralaRound"
                fontSize="16px"
                lineHeight="24px"
                fontWeight="400"
                pl="6"
              >
                {item.list.map((el) => (
                  <ListItem>
                    <Text py="5px">{el}</Text>
                  </ListItem>
                ))}
              </UnorderedList>
            </VStack>
          ))}
        </Flex>
        {/* center */}
        <Flex
          w="10%"
          px="100px"
          h="100%"
          align="center"
          justify="center"
          direction="column"
        >
          <Divider
            orientation="vertical"
            h="60px"
            border="3px solid"
            borderColor="#DFBD69"
          />
          <Box
            height="30px"
            width="30px"
            backgroundColor="#DFBD69"
            border="5px solid white"
            boxShadow="0px 0px 0px 3px #B88746"
            borderRadius="50%"
            my="1"
          />
          <Divider
            orientation="vertical"
            h="190px"
            border="3px solid"
            borderColor="#DFBD69"
          />
          <Box
            height="30px"
            width="30px"
            backgroundColor="#DFBD69"
            border="5px solid white"
            boxShadow="0px 0px 0px 3px #B88746"
            borderRadius="50%"
            my="1"
          />{" "}
          <Divider
            orientation="vertical"
            h="355px"
            border="3px solid"
            borderColor="#DFBD69"
          />
          <Box
            height="30px"
            width="30px"
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
          pt="55px"
          direction="column"
          justify="space-between"
          align="flex-start"
        >
          {rightSec.map((item) => (
            <VStack w="100%" align="flex-start" pb="35px">
              <Flex w="100%" align="center" justify="center">
                <Image w="80px" h="80px" my="1px" src={item.icon} />
              </Flex>
              <Heading
                fontFamily="avenir"
                fontSize="24px"
                lineHeight="41px"
                textTransform="uppercase"
                pb="7px"
              >
                {item.title}
              </Heading>
              <UnorderedList
                fontFamily="veralaRound"
                fontSize="16px"
                lineHeight="24px"
                fontWeight="400"
                pl="6"
              >
                {item.list.map((el) => (
                  <ListItem>
                    <Text py="5px">{el}</Text>
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
    icon: "/images/energy-page/financial-and-ppa.svg",
    title: "FINANCIAL & PPA SUPPORT",
    list: ["Project Financing", "Power Purchase Agreements"],
  },
  {
    icon: "/images/energy-page/engineering-design.svg",
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
    icon: "/images/energy-page/o-m-consultancy.svg",
    title: "O & M+ CONSULTANCY",
    list: [
      "Plant AMC for Operation & Maintenance",
      "Specification and Tender Assessment",
    ],
  },
];

const rightSec = [
  {
    icon: "/images/energy-page/liaisoning.svg",
    title: "LIAISONING & APPROVALS",
    list: ["Liaisoning for all Govt. Approvals for Project Sanctions"],
  },
  {
    icon: "/images/energy-page/feasibility.svg",
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
    icon: "/images/energy-page/procurement.svg",
    title: "PROCUREMENT & CONSTRUCTION",
    list: [
      " Project Design and Optimization",
      "Detail Technology Assessment, Selection and Specification Preparation",
      "Preparation of Layout Drawings, Erection Documents etc",
    ],
  },
];
