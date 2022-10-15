import {
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { ImLocation } from "react-icons/im";
import { HiMail, HiPhone } from "react-icons/hi";

const AddresSec = () => {
  return (
    <Flex w="100%" h="100%" mb="4rem">
      <Flex w="40%" h="100%" direction="column" align="center" justify="center">
        <Flex
          direction="column"
          w="100%"
          color="white"
          py="37px"
          pl="100px"
          pr="50px"
          bgGradient="linear(to-b, #B88746, #DFBD69)"
        >
          <Heading
            fontFamily="avenir"
            fontSize="34px"
            pb="25px"
            lineHeight="41px"
          >
            CORPORATE OFFICE
          </Heading>
          <VStack w="100%" align="flex-start">
            <HStack align="flex-start" mb="15px">
              <Icon as={ImLocation} w="30px" h="40px" mr="1" />
              <Text fontFamily="veralaRound" fontSize="20px" lineHeight="24px">
                202, Krishna Kunj, above HDFC Bank,30, Navyug Society V.M. Road,
                J.V.P.D. Scheme Vile Parle (West), Mumbai- 400 056
              </Text>
            </HStack>
            <HStack align="center" mb="15px">
              <Icon as={HiMail} w="35px" h="30px" />
              <Text fontFamily="veralaRound" fontSize="20px" lineHeight="24px">
                info@primelifespace.com
              </Text>
            </HStack>
            <HStack align="center">
              <Icon as={HiPhone} w="35px" h="40px" />
              <Text fontFamily="veralaRound" fontSize="20px" lineHeight="24px">
                7338808775
              </Text>
            </HStack>
          </VStack>
        </Flex>
        <Flex direction="column" w="100%" py="70px" pl="100px" pr="50px">
          <Heading
            fontFamily="avenir"
            fontSize="34px"
            pb="25px"
            lineHeight="41px"
          >
            CHENNAI OFFICE
          </Heading>
          <VStack w="100%" align="flex-start">
            <HStack align="flex-start" mb="15px">
              <Icon as={ImLocation} w="30px" h="40px" mr="1" />
              <Text fontFamily="veralaRound" fontSize="20px" lineHeight="24px">
                Prime Expat Infra No. 33, Mandapam Road, Kilpauk, Chennai -
                600010
              </Text>
            </HStack>
            <HStack align="center" mb="15px">
              <Icon as={HiMail} w="35px" h="30px" />
              <Text fontFamily="veralaRound" fontSize="20px" lineHeight="24px">
                sales@primelifespace.com
              </Text>
            </HStack>
            <HStack align="center">
              <Icon as={HiPhone} w="35px" h="40px" />
              <Text fontFamily="veralaRound" fontSize="20px" lineHeight="24px">
                7338808775
              </Text>
            </HStack>
          </VStack>
        </Flex>
      </Flex>
      <Flex w="60%" h="100%">
        <Box w="918px" h="768px">
          <iframe
            class="gmap_iframe"
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=918&amp;height=768&amp;hl=en&amp;q=Prime lifespace&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AddresSec;
