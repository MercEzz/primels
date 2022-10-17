import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
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
        fontSize="48px"
        lineHeight="58px"
      >
        OUR PROJECT SITES
      </Heading>
      <Flex w="100%" mt="50px" mb="50px" justify="center" px="80px">
        <VStack align="center" h="100%" textAlign="center">
          <Heading
            fontFamily="avenir"
            fontSize="34px"
            lineHeight="41px"
            px="10"
            pb="17px"
          >
            ARETE HOMES SKY HIGH TOWER
          </Heading>
          <Text fontFamily="veralaRound" fontSize="20px">
            V no.76, Peruncheri, Ponneri Opposite Velammal International School,
            North Chennai - 601204
          </Text>
        </VStack>
        <VStack align="center" h="100%" textAlign="center">
          <Heading
            fontFamily="avenir"
            fontSize="34px"
            lineHeight="41px"
            pb="17px"
            px="40px"
          >
            ARETE <br />
            HOMES
          </Heading>
          <Text fontFamily="veralaRound" fontSize="20px">
            V. No. 76 , Thatchoor 1, Perucheri, Ponneri, Taluk, Thiruvallur
            District, Chennai- 6001 204
          </Text>
        </VStack>
        <VStack align="center" h="100%" textAlign="center">
          <Heading
            fontFamily="avenir"
            fontSize="34px"
            lineHeight="41px"
            pb="17px"
            px="20px"
          >
            PONNERI GYMKHANA CLUB
          </Heading>
          <Text fontFamily="veralaRound" fontSize="20px">
            Next To Arete Homes V no.76, Peruncheri, Ponneri North Chennai -
            601204
          </Text>
        </VStack>
      </Flex>
      <VStack mb="50px">
        <Text fontFamily="veralaRound" fontSize="20px" lineHeight="24px">
          For consultancy related queries, email us at
        </Text>
        <Heading fontFamily="avenir" fontSize="34px" lineHeight="41px">
          info@primelifespace.com
        </Heading>
      </VStack>
      <VStack>
        <Text fontFamily="veralaRound" fontSize="20px" lineHeight="24px">
          For procurement related queries, email us at
        </Text>
        <Heading fontFamily="avenir" fontSize="34px" lineHeight="41px">
          purchase@primelifespace.com
        </Heading>
      </VStack>
    </Flex>
  );
};

export default ProSites;
