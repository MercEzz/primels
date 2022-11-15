/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useRef } from "react";
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
import { ImLocation } from "react-icons/im";
import { useInView } from "framer-motion";

const NinethSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      px="100px"
      pt="50px"
      pb="50px"
      direction="column"
      align="center"
      justify="center"
    >
      <Text
        transform={isInView ? "translate(0)" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="40px"
        lineHeight="48px"
        textTransform="uppercase"
      >
        LOCATION ADVANTAGE
      </Text>
      <Heading
        transform={isInView ? "translate(0)" : "translateY(50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="avenir"
        fontSize="34px"
        lineHeight="48px"
        pt="25px"
        pb="50px"
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
            transition="all 2s"
            w="100%"
            h="100%"
            mb="15px"
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
            w="100%"
            h="100%"
            mb="20px"
            align="flex-start"
            justify="space-between"
          >
            <VStack align="center">
              <Box
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="50px"
                h="50px"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  w="30px"
                  h="30px"
                  src="/images/arete-homes/TEMPLES.svg"
                />
              </Box>
              <Heading fontFamily="avenir" fontSize="14px">
                TEMPLES
              </Heading>
            </VStack>
            <VStack align="center">
              <Box
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="50px"
                h="50px"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  w="30px"
                  h="30px"
                  src="/images/arete-homes/HOSPITAL.svg"
                />
              </Box>
              <Heading fontFamily="avenir" fontSize="14px">
                HOSPITALS
              </Heading>
            </VStack>
            <VStack align="center">
              <Box
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="50px"
                h="50px"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  w="30px"
                  h="30px"
                  src="/images/arete-homes/INSTITUTES.svg"
                />
              </Box>
              <Heading fontFamily="avenir" fontSize="14px" textAlign="center">
                EDUCATIONAL <br />
                INSTITUTES
              </Heading>
            </VStack>
            <VStack align="center">
              <Box
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="50px"
                h="50px"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  w="30px"
                  h="30px"
                  src="/images/arete-homes/SOCIAL FABRIC.svg"
                />
              </Box>
              <Heading fontFamily="avenir" fontSize="14px">
                SOCIAL
                <br /> FABRIC
              </Heading>
            </VStack>
            <VStack align="center">
              <Box
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="50px"
                h="50px"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  w="30px"
                  h="30px"
                  src="/images/arete-homes/INDUSTRY.svg"
                />
              </Box>
              <Heading textAlign="center" fontFamily="avenir" fontSize="14px">
                INDUSTRIAL <br />
                PARKS
              </Heading>
            </VStack>
            <VStack align="center">
              <Box
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="50px"
                h="50px"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image w="30px" h="30px" src="/images/arete-homes/PORT.svg" />
              </Box>
              <Heading fontFamily="avenir" fontSize="14px">
                PORTS
              </Heading>
            </VStack>
          </Flex>
          <Flex w="100%" h="100%">
            <Button
              w="100%"
              h="51px"
              fontSize="16px"
              fontFamily="avenir"
              fontWeight="bold"
              bgGradient="linear(to-b, #B88746 ,#DFBD69)"
              color="white"
              _hover={{
                bgGradient: "linear(to-b, #DFBD69, #B88746)",
              }}
              _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
            >
              <ImLocation size="30px" /> SHOW LOCATION ON GOOGLE MAPS
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
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
              px="25px"
            >
              {" "}
              <Flex
                transform={isInView ? "translateY(0)" : "translateY(-50px)"}
                opacity={isInView ? "1" : "0"}
                transition="all 2s"
                h="100%"
                direction="column"
                justify="flex-start"
                align="center"
              >
                <Divider
                  h="50px"
                  orientation="vertical"
                  border="3px solid"
                  borderColor="#DFBD69"
                  bgColor="#DFBD69"
                />
                <Box
                  height="30px"
                  width="30px"
                  backgroundColor="#DFBD69"
                  border="3px solid white"
                  boxShadow="0px 0px 0px 3px #B88746"
                  borderRadius="50%"
                  my="1"
                />
              </Flex>
              <Divider
                transform={isInView ? "translateY(0)" : "translateY(-50px)"}
                opacity={isInView ? "1" : "0"}
                transition="all 2s 2s"
                h="50px"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              w="100%"
              transform={isInView ? "none" : "translateX(-100px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s"
            >
              <Heading
                alignSelf="center"
                fontFamily="avenir"
                fontSize="20px"
                mr="25px"
              >
                5 Mins
              </Heading>
              <UnorderedList
                alignSelf="center"
                textTransform="uppercase"
                fontFamily="veralaRound"
                fontSize="16px"
              >
                <ListItem pb="10px">
                  Walk to Velammal International School{" "}
                </ListItem>
                <ListItem pb="10px">DRIVE TO Origin by Mahindra </ListItem>
                <ListItem pb="10px">DRIVE TO Ponneri Railway Station</ListItem>
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
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
              px="25px"
            >
              {" "}
              <Flex
                transform={isInView ? "translateY(0)" : "translateY(-50px)"}
                opacity={isInView ? "1" : "0"}
                transition="all 2s 2s"
                h="100%"
                direction="column"
                justify="flex-start"
                align="center"
              >
                <Divider
                  h="35px"
                  orientation="vertical"
                  border="3px solid"
                  borderColor="#DFBD69"
                  bgColor="#DFBD69"
                />
                <Box
                  height="30px"
                  width="30px"
                  backgroundColor="#DFBD69"
                  border="3px solid white"
                  boxShadow="0px 0px 0px 3px #B88746"
                  borderRadius="50%"
                  my="1"
                />
              </Flex>
              <Divider
                transform={isInView ? "translateY(0)" : "translateY(-50px)"}
                opacity={isInView ? "1" : "0"}
                transition="all 2s 4s"
                h="50px"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              w="100%"
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 2s"
              h="100%"
            >
              <Heading
                w="fit-content"
                display="flex"
                alignSelf="center"
                fontFamily="avenir"
                fontSize="20px"
                mr="25px"
              >
                10 Mins
              </Heading>
              <UnorderedList
                textTransform="uppercase"
                alignSelf="center"
                fontFamily="veralaRound"
                fontSize="16px"
              >
                <ListItem pb="10px">CONNECT TO Outer Ring Road</ListItem>
                <ListItem pb="10px">
                  DRIVE TO Siruvapuri Murugan Temple{" "}
                </ListItem>
                <ListItem pb="10px">VELS Medical Hospital</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <Flex h="100%" alignSelf="flex-start" justify="center">
            {" "}
            <Flex
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
              px="25px"
            >
              {" "}
              <Flex
                transform={isInView ? "translateY(0)" : "translateY(-50px)"}
                opacity={isInView ? "1" : "0"}
                transition="all 2s 4s"
                h="100%"
                direction="column"
                justify="flex-start"
                align="center"
              >
                <Divider
                  h="25px"
                  orientation="vertical"
                  border="3px solid"
                  borderColor="#DFBD69"
                  bgColor="#DFBD69"
                />
                <Box
                  height="30px"
                  width="30px"
                  backgroundColor="#DFBD69"
                  border="3px solid white"
                  boxShadow="0px 0px 0px 3px #B88746"
                  borderRadius="50%"
                  my="1"
                />
              </Flex>
              <Divider
                transform={isInView ? "translateY(0)" : "translateY(-50px)"}
                opacity={isInView ? "1" : "0"}
                transition="all 2s 6s"
                h="30px"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>{" "}
            <Flex
              w="100%"
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 4s"
              h="100%"
            >
              {" "}
              <Heading
                alignSelf="center"
                fontFamily="avenir"
                fontSize="20px"
                mr="25px"
              >
                20 Mins
              </Heading>
              <Flex alignSelf="center">
                <UnorderedList
                  textTransform="uppercase"
                  fontFamily="veralaRound"
                  fontSize="16px"
                >
                  <ListItem pb="10px">DRIVE TO REDHILLS</ListItem>
                  <ListItem pb="10px">PULICAT LAKE </ListItem>
                  <ListItem pb="10px">DRIVE TO GUMMIDIPOONDI SIPCOT</ListItem>
                </UnorderedList>
              </Flex>
            </Flex>
          </Flex>
          <Flex h="100%" alignSelf="flex-start" justify="center">
            {" "}
            <Flex
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
              px="25px"
            >
              <Flex
                transform={isInView ? "translateY(0)" : "translateY(-50px)"}
                opacity={isInView ? "1" : "0"}
                transition="all 2s 6s"
                h="100%"
                direction="column"
                justify="flex-start"
                align="center"
              >
                <Divider
                  h="40px"
                  orientation="vertical"
                  border="3px solid"
                  borderColor="#DFBD69"
                  bgColor="#DFBD69"
                />
                <Box
                  height="30px"
                  width="30px"
                  backgroundColor="#DFBD69"
                  border="3px solid white"
                  boxShadow="0px 0px 0px 3px #B88746"
                  borderRadius="50%"
                  my="1"
                />
              </Flex>
              <Divider
                transform={isInView ? "translateY(0)" : "translateY(-50px)"}
                opacity={isInView ? "1" : "0"}
                transition="all 2s 8s"
                h="40px"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>{" "}
            <Flex
              w="100%"
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 6s"
              h="100%"
            >
              <Heading
                alignSelf="center"
                fontFamily="avenir"
                fontSize="20px"
                mr="25px"
              >
                30 Mins
              </Heading>
              <Flex alignSelf="center">
                <UnorderedList
                  textTransform="uppercase"
                  fontFamily="veralaRound"
                  fontSize="16px"
                >
                  <ListItem pb="10px">DRIVE TO SRI CITY</ListItem>
                  <ListItem pb="10px">DRIVE TO ADANI PORT</ListItem>
                  <ListItem pb="10px">
                    DRIVE TO Ponneri Railway Station
                  </ListItem>
                </UnorderedList>
              </Flex>
            </Flex>
          </Flex>
          <Flex w="100%" h="100%" align="center" justify="space-between">
            {" "}
            <Flex
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
              px="25px"
            >
              <Flex
                transform={isInView ? "translateY(0)" : "translateY(-50px)"}
                opacity={isInView ? "1" : "0"}
                transition="all 2s 8s"
                h="100%"
                direction="column"
                justify="flex-start"
                align="center"
              >
                <Divider
                  h="10px"
                  orientation="vertical"
                  border="3px solid"
                  borderColor="#DFBD69"
                  bgColor="#DFBD69"
                />
                <Box
                  height="30px"
                  width="30px"
                  backgroundColor="#DFBD69"
                  border="3px solid white"
                  boxShadow="0px 0px 0px 3px #B88746"
                  borderRadius="50%"
                  my="1"
                />
              </Flex>
              <Divider
                transform={isInView ? "translateY(0)" : "translateY(-50px)"}
                opacity={isInView ? "1" : "0"}
                transition="all 2s 10s"
                h="10px"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>{" "}
            <Flex
              w="100%"
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 8s"
              h="100%"
              align="center"
              justify="flex-start"
            >
              <Heading
                h="100%"
                alignSelf="center"
                fontFamily="avenir"
                fontSize="20px"
                mr="25px"
              >
                40 Mins
              </Heading>
              <Flex w="100%" h="100%" alignSelf="center">
                <UnorderedList
                  textTransform="uppercase"
                  fontFamily="veralaRound"
                  fontSize="16px"
                >
                  <ListItem pb="10px">DRIVE TO CHENNAI AIRPORT</ListItem>
                </UnorderedList>
              </Flex>
            </Flex>
          </Flex>
          <Flex w="100%" h="100%" align="center" justify="space-between">
            {" "}
            <Flex
              transform={isInView ? "translateY(0)" : "translateY(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 10s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
              px="25px"
            >
              <Divider
                h="10px"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="30px"
                width="30px"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>{" "}
            <Flex
              w="100%"
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 10s"
              h="100%"
            >
              <Heading
                alignSelf="center"
                fontFamily="avenir"
                fontSize="20px"
                mr="25px"
              >
                2 Hours
              </Heading>
              <Flex alignSelf="center">
                <UnorderedList
                  textTransform="uppercase"
                  fontFamily="veralaRound"
                  fontSize="16px"
                >
                  <ListItem pb="10px">DRIVE TO TIRUPATI</ListItem>
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
