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
      px="6.25rem"
      pt="5rem"
      pb="3.125rem"
      direction="column"
      align="center"
      justify="center"
    >
      <Text
        transform={isInView ? "translate(0)" : "translateY(-50px)"}
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
        transform={isInView ? "translate(0)" : "translateY(50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="avenir"
        fontSize="2.125rem"
        lineHeight="3rem"
        pt="1.563rem"
        pb="1.563rem"
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
              width="100%"
              height="430"
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
                _hover={{
                  cursor:"pointer",
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
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
        <Flex w="100%" h="100%" align="flex-start" justify="space-between">
          <Flex h="100%" direction="column" px="1.563rem">
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
            </Flex>{" "}
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
                h="5rem"
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
              transform={isInView ? "translateY(0)" : "translateY(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 4s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
            >
              <Divider
                h="4.8rem"
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
              transform={isInView ? "translateY(0)" : "translateY(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 6s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
            >
              <Divider
                h="4.9rem"
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
              transform={isInView ? "translateY(0)" : "translateY(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 8s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
            >
              <Divider
                h="2.75rem"
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
              transform={isInView ? "translateY(0)" : "translateY(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 10s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
            >
              <Divider
                h="0.5rem"
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
          </Flex>
          <Flex
            h="100%"
            direction="column"
            align="flex-start"
            justify="space-between"
            pr="0.938rem"
          >
            <Heading
              pt="3.925rem"
              transform={isInView ? "none" : "translateX(-100px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s"
              fontFamily="avenir"
              fontSize="1.25rem"
            >
              5 Mins
            </Heading>
            <Heading
              pt="6.25rem"
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 2s"
              fontFamily="avenir"
              fontSize="1.25rem"
            >
              10 Mins
            </Heading>
            <Heading
              pt="6rem"
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 4s"
              fontFamily="avenir"
              fontSize="1.25rem"
            >
              20 Mins
            </Heading>
            <Heading
              pt="6.25rem"
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 6s"
              fontFamily="avenir"
              fontSize="1.25rem"
            >
              30 Mins
            </Heading>
            <Heading
              pt="3.9rem"
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 8s"
              fontFamily="avenir"
              fontSize="1.25rem"
            >
              40 Mins
            </Heading>
            <Heading
              pt="1.8rem"
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 10s"
              fontFamily="avenir"
              fontSize="1.25rem"
            >
              2 Hours
            </Heading>
          </Flex>
          <Flex w="70%" h="100%" direction="column" gap="1.875rem">
            <UnorderedList
              pt="1.875rem"
              transform={isInView ? "none" : "translateX(-100px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s"
              display="flex"
              flexDir="column"
              textTransform="uppercase"
              fontFamily="veralaRound"
              fontSize="1rem"
            >
              <ListItem pb="0.625rem">
                Walk to Velammal International School{" "}
              </ListItem>
              <ListItem pb="0.625rem">DRIVE TO Origin by Mahindra </ListItem>
              <ListItem>DRIVE TO Ponneri Railway Station</ListItem>
            </UnorderedList>
            <UnorderedList
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 2s"
              display="flex"
              flexDir="column"
              textTransform="uppercase"
              fontFamily="veralaRound"
              fontSize="1rem"
            >
              <ListItem pb="0.625rem">CONNECT TO Outer Ring Road</ListItem>
              <ListItem pb="0.625rem">
                DRIVE TO Siruvapuri Murugan Temple{" "}
              </ListItem>
              <ListItem>VELS Medical Hospital</ListItem>
            </UnorderedList>
            <UnorderedList
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 4s"
              display="flex"
              flexDir="column"
              textTransform="uppercase"
              fontFamily="veralaRound"
              fontSize="1rem"
            >
              <ListItem pb="0.625rem">DRIVE TO REDHILLS</ListItem>
              <ListItem pb="0.625rem">PULICAT LAKE </ListItem>
              <ListItem>DRIVE TO GUMMIDIPOONDI SIPCOT</ListItem>
            </UnorderedList>
            <UnorderedList
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 6s"
              display="flex"
              flexDir="column"
              textTransform="uppercase"
              fontFamily="veralaRound"
              fontSize="1rem"
            >
              <ListItem pb="0.625rem">DRIVE TO SRI CITY</ListItem>
              <ListItem pb="0.625rem">DRIVE TO ADANI PORT</ListItem>
              <ListItem>DRIVE TO Ponneri Railway Station</ListItem>
            </UnorderedList>
            <UnorderedList
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 8s"
              display="flex"
              flexDir="column"
              textTransform="uppercase"
              fontFamily="veralaRound"
              fontSize="1rem"
            >
              {" "}
              <ListItem>DRIVE TO CHENNAI AIRPORT</ListItem>
            </UnorderedList>
            <UnorderedList
              transform={isInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 10s"
              display="flex"
              flexDir="column"
              textTransform="uppercase"
              fontFamily="veralaRound"
              fontSize="1rem"
            >
              {" "}
              <ListItem>DRIVE TO TIRUPATI</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NinethSec;
