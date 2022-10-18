import { Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ProSites = () => {
  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      mt="100px"
      align="center"
      justify="center"
    >
      <Heading
        fontFamily="goudy"
        fontWeight="400"
        fontSize="40px"
        lineHeight="58px"
      >
        OUR PROJECT SITES
      </Heading>
      <Flex w="100%" mt="50px" mb="50px" px="100px" justify="center">
        <Flex
          direction="column"
          w="100%"
          align="center"
          h="100%"
          textAlign="center"
          pr="25px"
        >
          <Heading
            fontFamily="avenir"
            fontSize="24px"
            lineHeight="41px"
            pb="7px"
          >
            ARETE HOMES <br /> SKY HIGH TOWER
          </Heading>
          <Text fontFamily="veralaRound" fontSize="16px">
            V no.76, Peruncheri, Ponneri Opposite Velammal International School,
            <br />
            North Chennai - 601204
          </Text>
        </Flex>
        <Flex
          direction="column"
          w="100%"
          align="center"
          h="100%"
          textAlign="center"
          pr="25px"
        >
          <Heading
            fontFamily="avenir"
            fontSize="24px"
            lineHeight="41px"
            pb="7px"
          >
            ARETE <br />
            HOMES
          </Heading>
          <Text fontFamily="veralaRound" fontSize="16px">
            V. No. 76 , Thatchoor 1, Perucheri, Ponneri, Taluk, Thiruvallur
            District, <br />
            Chennai- 6001 204
          </Text>
        </Flex>
        <Flex
          direction="column"
          w="100%"
          align="center"
          h="100%"
          textAlign="center"
        >
          <Heading
            fontFamily="avenir"
            fontSize="24px"
            lineHeight="41px"
            pb="7px"
          >
            PONNERI <br /> GYMKHANA CLUB
          </Heading>
          <Text fontFamily="veralaRound" fontSize="16px">
            Next To Arete Homes <br /> V no.76, Peruncheri, Ponneri <br />
            North Chennai - 601204
          </Text>
        </Flex>
      </Flex>
      <VStack mb="50px">
        <Text fontFamily="veralaRound" fontSize="20px" lineHeight="24px">
          For consultancy related queries, email us at
        </Text>
        <Heading fontFamily="avenir" fontSize="24px" lineHeight="41px">
          info@primelifespace.com
        </Heading>
      </VStack>
      <VStack>
        <Text fontFamily="veralaRound" fontSize="20px" lineHeight="24px">
          For procurement related queries, email us at
        </Text>
        <Heading fontFamily="avenir" fontSize="24px" lineHeight="41px">
          purchase@primelifespace.com
        </Heading>
      </VStack>
    </Flex>
  );
};

export default ProSites;
