/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useRef } from "react";
import {
  Flex,
  Heading,
  Text,
  Button,
  Divider,
  Box,
  UnorderedList,
  ListItem,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { ImLocation } from "react-icons/im";

const NinethSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });

  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      px="6.25rem"
      pt="3.125rem"
      pb="3.125rem"
      direction="column"
      align="center"
      justify="center"
    >
      <Text
        transform={isInView ? "none" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
        lineHeight="3rem"
        textTransform="uppercase"
      >
        LOCATION ADVANTAGE
      </Text>
      <Heading
        transform={isInView ? "none" : "translateY(50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="avenir"
        fontSize="2.125rem"
        lineHeight="3rem"
        pt="1.562rem"
        pb="3.125rem"
      >
        PONNERI - A SMART CITY BY JICA
      </Heading>
      <Flex w="100%" h="100%" align="flex-start" justify="flex-start">
        <Flex
          direction="column"
          w="100%"
          h="100%"
          align="center"
          justify="center"
        >
          <Flex
            transform={isInView ? "scale(1)" : "scale(0.6)"}
            opacity={isInView ? "1" : "0"}
            transition="all 2s 1s"
            w="100%"
            h="100%"
            mb="0.937rem"
          >
            <iframe
              class="gmap_iframe"
              width="662"
              height="458"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=918&amp;height=700&amp;hl=en&amp;q=Prime lifespace&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </Flex>
          <Flex
            opacity={isInView ? "1" : "0"}
            transition="all 2s 2s"
            w="100%"
            h="100%"
            mb="1.25rem"
            align="flex-start"
            justify="space-between"
          >
            <VStack align="center">
              <Box
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="0.625"
                h="3.125rem"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  w="1.875rem"
                  h="1.875rem"
                  src="/images/arete-homes/TEMPLES.svg"
                />
              </Box>
              <Heading fontFamily="avenir" fontSize="0.875rem">
                TEMPLES
              </Heading>
            </VStack>
            <VStack align="center">
              <Box
                borderRadius="50%"
                p="0.625rem"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="3.125rem"
                h="3.125rem"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  w="1.875rem"
                  h="1.875rem"
                  src="/images/arete-homes/HOSPITAL.svg"
                />
              </Box>
              <Heading fontFamily="avenir" fontSize="0.875rem">
                HOSPITALS
              </Heading>
            </VStack>
            <VStack align="center">
              <Box
                borderRadius="50%"
                p="0.625rem"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="3.125rem"
                h="3.125rem"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  w="1.875rem"
                  h="1.875rem"
                  src="/images/arete-homes/INSTITUTES.svg"
                />
              </Box>
              <Heading fontFamily="avenir" fontSize="0.875rem" textAlign="center">
                EDUCATIONAL <br />
                INSTITUTES
              </Heading>
            </VStack>
            <VStack align="center">
              <Box
                borderRadius="50%"
                p="0.625rem"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="3.125rem"
                h="3.125rem"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  w="1.875rem"
                  h="1.875rem"
                  src="/images/arete-homes/SOCIAL FABRIC.svg"
                />
              </Box>
              <Heading fontFamily="avenir" fontSize="0.875rem">
                SOCIAL
                <br /> FABRIC
              </Heading>
            </VStack>
            <VStack align="center">
              <Box
                borderRadius="50%"
                p="0.625rem"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="3.125rem"
                h="3.125rem"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  w="1.875rem"
                  h="1.875rem"
                  src="/images/arete-homes/INDUSTRY.svg"
                />
              </Box>
              <Heading textAlign="center" fontFamily="avenir" fontSize="0.875rem">
                INDUSTRIAL <br />
                PARKS
              </Heading>
            </VStack>
            <VStack align="center">
              <Box
                borderRadius="50%"
                p="0.625rem"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="3.125rem"
                h="3.125rem"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image w="1.875rem" h="1.875rem" src="/images/arete-homes/PORT.svg" />
              </Box>
              <Heading fontFamily="avenir" fontSize="0.875rem">
                PORTS
              </Heading>
            </VStack>
          </Flex>
          <Flex w="100%" h="100%">
            <Button
              transform={isInView ? "none" : "translateY(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 1s"
              w="100%"
              h="3.187rem"
              fontSize="1rem"
              fontFamily="avenir"
              fontWeight="bold"
              bgGradient="linear(to-b, #B88746 ,#DFBD69)"
              color="white"
              _hover={{
                bgGradient: "linear(to-b, #DFBD69, #B88746)",
              }}
              _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
            >
              <ImLocation size="1.875rem" /> SHOW LOCATION ON GOOGLE MAPS
            </Button>
          </Flex>
        </Flex>
        <Flex w="100%" h="100%" align="center" direction="column">
          <Flex
            w="100%"
            h="100%"
            alignSelf="flex-start"
            justify="space-between"
          >
            <Flex
              transform={isInView ? "none" : "translateY(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 1s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
              px="1.562rem"
            >
              <Divider
                h="3.125rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="1.875rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
              <Divider
                transform={isInView ? "none" : "translateY(-50px)"}
                opacity={isInView ? "1" : "0"}
                transition="all 2s 2s"
                h="3.125rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              transform={isInView ? "none" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 1s"
              w="100%"
            >
              <Heading
                alignSelf="center"
                fontFamily="avenir"
                fontSize="1.25rem"
                mr="1.562rem"
              >
                5 Mins
              </Heading>
              <UnorderedList
                alignSelf="center"
                textTransform="uppercase"
                fontFamily="veralaRound"
                fontSize="1rem"
              >
                <ListItem pb="0.625rem">
                  Walk to Velammal International School{" "}
                </ListItem>
                <ListItem pb="0.625rem">DRIVE TO Origin by Mahindra </ListItem>
                <ListItem pb="0.625rem">DRIVE TO Ponneri Railway Station</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="100%"
            alignSelf="flex-start"
            justify="space-between"
          >
            {" "}
            <Flex
              transform={isInView ? "none" : "translateY(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 2s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
              px="1.562rem"
            >
              <Divider
                h="3.125rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="1.875rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
              <Divider
                transform={isInView ? "none" : "translateY(-50px)"}
                opacity={isInView ? "1" : "0"}
                transition="all 2s 3s"
                h="3.125rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              transform={isInView ? "none" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 2s"
              w="100%"
            >
              <Heading
                w="fit-content"
                display="flex"
                alignSelf="center"
                fontFamily="avenir"
                fontSize="1.25rem"
                mr="1.562rem"
              >
                10 Mins
              </Heading>
              <UnorderedList
                textTransform="uppercase"
                alignSelf="center"
                fontFamily="veralaRound"
                fontSize="1rem"
              >
                <ListItem pb="1.562rem">CONNECT TO Outer Ring Road</ListItem>
                <ListItem pb="1.562rem">
                  DRIVE TO Siruvapuri Murugan Temple{" "}
                </ListItem>
                <ListItem pb="1.562rem">VELS Medical Hospital</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <Flex h="100%" alignSelf="flex-start" justify="center">
            {" "}
            <Flex
              transform={isInView ? "none" : "translateY(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 3s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
              px="1.562rem"
            >
              <Divider
                h="3.125rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="1.875rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
              <Divider
                transform={isInView ? "none" : "translateY(-50px)"}
                opacity={isInView ? "1" : "0"}
                transition="all 2s 4s"
                h="3.125rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              transform={isInView ? "none" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 3s"
              w="100%"
            >
              <Heading
                alignSelf="center"
                fontFamily="avenir"
                fontSize="1.25rem"
                mr="1.562rem"
              >
                20 Mins
              </Heading>
              <Flex alignSelf="center">
                <UnorderedList
                  textTransform="uppercase"
                  fontFamily="veralaRound"
                  fontSize="1rem"
                >
                  <ListItem pb="0.625rem">DRIVE TO REDHILLS</ListItem>
                  <ListItem pb="0.625rem">PULICAT LAKE </ListItem>
                  <ListItem pb="0.625rem">DRIVE TO GUMMIDIPOONDI SIPCOT</ListItem>
                </UnorderedList>
              </Flex>
            </Flex>
          </Flex>
          <Flex h="100%" alignSelf="flex-start" justify="center">
            {" "}
            <Flex
              transform={isInView ? "none" : "translateY(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 4s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
              px="1.562rem"
            >
              <Divider
                h="3.125rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="1.875rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
              <Divider
                transform={isInView ? "none" : "translateY(-50px)"}
                opacity={isInView ? "1" : "0"}
                transition="all 2s 5s"
                h="3.125rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              transform={isInView ? "none" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 4s"
              w="100%"
            >
              <Heading
                alignSelf="center"
                fontFamily="avenir"
                fontSize="1.25rem"
                mr="1.562rem"
              >
                30 Mins
              </Heading>
              <Flex alignSelf="center">
                <UnorderedList
                  textTransform="uppercase"
                  fontFamily="veralaRound"
                  fontSize="1rem"
                >
                  <ListItem pb="0.625rem">DRIVE TO SRI CITY</ListItem>
                  <ListItem pb="0.625rem">DRIVE TO ADANI PORT</ListItem>
                  <ListItem pb="0.625rem">
                    DRIVE TO Ponneri Railway Station
                  </ListItem>
                </UnorderedList>
              </Flex>
            </Flex>
          </Flex>
          <Flex h="100%" alignSelf="flex-start" justify="center">
            {" "}
            <Flex
              h="100%"
              transform={isInView ? "none" : "translateY(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 5s"
              direction="column"
              justify="flex-start"
              align="center"
              px="1.562rem"
            >
              <Divider
                // h="20px"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="1.875rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
              <Divider
                transform={isInView ? "none" : "translateY(-50px)"}
                opacity={isInView ? "1" : "0"}
                transition="all 2s 6s"
                // h="50px"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              w="100%"
              transform={isInView ? "none" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 5s"
            >
              <Heading
                alignSelf="center"
                fontFamily="avenir"
                fontSize="1.25rem"
                mr="1.562rem"
              >
                40 Mins
              </Heading>
              <Flex alignSelf="center">
                <UnorderedList
                  textTransform="uppercase"
                  fontFamily="veralaRound"
                  fontSize="1rem"
                >
                  <ListItem pb="0.625rem">DRIVE TO CHENNAI AIRPORT</ListItem>
                </UnorderedList>
              </Flex>
            </Flex>
          </Flex>
          <Flex h="100%" alignSelf="flex-start" justify="center">
            {" "}
            <Flex
              transform={isInView ? "none" : "translateY(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 6s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
              px="1.562rem"
            >
              <Divider
                h="0.625rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="1.875rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>
            <Flex
              w="100%"
              transform={isInView ? "none" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 6s"
            >
              <Heading
                alignSelf="center"
                fontFamily="avenir"
                fontSize="1.25rem"
                mr="1.562rem"
              >
                2 Hours
              </Heading>
              <Flex alignSelf="center">
                <UnorderedList
                  textTransform="uppercase"
                  fontFamily="veralaRound"
                  fontSize="1rem"
                >
                  <ListItem pb="0.625rem">DRIVE TO TIRUPATI</ListItem>
                </UnorderedList>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NinethSec;
