import {
  Button,
  Flex,
  Text,
  Image,
  Heading,
  Divider,
  Box,
  HStack,
  VStack,
  UnorderedList,
  ListItem,
  Container,
  Input,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
// images
import arete1 from "../commercial-properties imgs/ARETE PLAZA2.jpg";
import arete2 from "../commercial-properties imgs/ARETE PLAZA4.jpg";
import arete3 from "../commercial-properties imgs/ARETE PLAZA3.jpg";
import aretefloor from "../commercial-properties imgs/A7 commercial with C.A_pages-to-jpg-0001.jpg";
import institute from "../commercial-properties imgs/INSTITUTES.svg";
import industry from "../commercial-properties imgs/INDUSTRY.svg";
import locationadv from "../commercial-properties imgs/Asset 1-100.jpg";
import DropDown from "./DropDown";

const AreteSec = () => {
  return (
    <>
      <Flex
        w="100%"
        h="100%"
        direction="column"
        align="center"
        justify="center"
        px="6.25rem"
      >
        <Flex w="100%">
          <Button
            w="100%"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            border="1px solid #B88746"
            color="white"
            mr="0.625rem"
            p="1.563rem"
            borderRadius="none"
            fontSize="1rem"
            fontFamily="avenir"
            fontWeight="bold"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
            // onClick={() => {
            //   setActive(true);
            // }}
            // _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            ARETE PLAZA
          </Button>
          <Button
            ml="10px"
            w="100%"
            bgColor="white"
            p="1.563rem"
            border="1px solid #B88746"
            // bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            borderRadius="none"
            color="black"
            fontSize="1rem"
            fontFamily="avenir"
            fontWeight="bold"
            // onClick={() => {
            //   setActive(false);
            // }}
            // _hover={{
            //   bgGradient: "linear(to-b, #DFBD69, #B88746)",
            // }}
            // _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            ARETE MALL
          </Button>
        </Flex>
        <Flex
          w="100%"
          h="100%"
          direction="column"
          align="center"
          justify="center"
          pt="3.125rem"
          pb="6.25rem"
        >
          <Text
            textAlign="center"
            fontFamily="goudy"
            fontSize="2.5rem"
            pb="1.563rem"
          >
            ARETE PLAZA
          </Text>
          <Text
            fontFamily="veralaRound"
            fontSize="1.125rem"
            pb="3.125rem"
            textAlign="center"
          >
            First time ever in North Chennai a tallest tower with G+1 - 20
            Retail Spaces, an impeccable mix of Shopping, HyperMarket, Pharmacy,
            Fine Dining & Entertainment.
          </Text>
          <Flex w="100%" gap="1.25rem">
            <Flex w="100%">
              <Image h="22rem" src={arete1} />
            </Flex>
            <Flex w="100%">
              {" "}
              <Image h="22rem" src={arete2} />
            </Flex>
            <Flex w="100%">
              {" "}
              <Image h="22rem" src={arete3} />
            </Flex>
          </Flex>
        </Flex>
        <Flex w="100%" h="100%" align="flex-start" justify="space-between">
          <Flex alignSelf="flex-start">
            <Image h="33rem" src={aretefloor} />
          </Flex>
          <Flex
            h="100%"
            direction="column"
            justify="center"
            align="center"
            px="1.563rem"
          >
            {" "}
            <Divider
              h="8rem"
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
          <Flex h="100%" direction="column" alignSelf="center" justify="center">
            <Heading fontFamily="avenir" fontSize="2.125rem" pb="1.25rem">
              FLOOR PLAN
            </Heading>
            <Text fontFamily="veralaRound" fontSize="1.125rem" pb="0.625rem">
              Typology
            </Text>
            <Heading fontFamily="avenir" fontSize="1.25rem" pb="1.25rem">
              SHOPS/OFFICES
            </Heading>
            <Text fontFamily="veralaRound" fontSize="1.125rem" pb="0.625rem">
              Carpet Area
            </Text>
            <Heading fontFamily="avenir" fontSize="1.25rem" pb="1.25rem">
              450-650 SQFT.
            </Heading>
            <Button
              bgGradient="linear(to-b, #B88746 ,#DFBD69)"
              color="white"
              mr="0.625rem"
              p="1rem"
              fontSize="1rem"
              fontFamily="avenir"
              fontWeight="bold"
              _hover={{
                bgGradient: "linear(to-b, #DFBD69, #B88746)",
              }}
              _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
            >
              CHECK PRICE
            </Button>
          </Flex>
        </Flex>
        <Flex
          w="100%"
          h="100%"
          direction="column"
          pt="6.25rem"
          align="center"
          justify="center"
          pb="3.125rem"
        >
          <Text fontFamily="goudy" pb="3.125rem" fontSize="2.5rem">
            LOCATION ADVANTAGE
          </Text>
          <Flex w="100%" h="100%" justify="space-between" pb="1.563rem">
            <Flex
              h="100%"
              direction="column"
              align="flex-start"
              justify="center"
            >
              <Flex pb="1.5rem">
                <Box
                  borderRadius="50%"
                  p="0.625rem"
                  bgGradient="linear(to-b,#B88746, #DFBD69)"
                  direction="column"
                  w="5rem"
                  h="5rem"
                  align="center"
                  mr="1rem"
                  _hover={{ cursor: "pointer" }}
                >
                  <Image w="3.125rem" h="3.125rem" src={institute} />
                </Box>
                <VStack align="flex-start">
                  <Heading fontFamily="avenir" fontSize="2.125rem">
                    100+
                  </Heading>
                  <Text fontFamily="veralaRound" fontSize="1rem">
                    EDUCATIONAL INSTITUTES
                  </Text>
                </VStack>
              </Flex>
              <Flex pb="1.5rem">
                <Box
                  borderRadius="50%"
                  p="0.625rem"
                  bgGradient="linear(to-b,#B88746, #DFBD69)"
                  direction="column"
                  w="5rem"
                  h="5rem"
                  align="center"
                  mr="1rem"
                  _hover={{ cursor: "pointer" }}
                >
                  <Image w="3.125rem" h="3.125rem" src={institute} />
                </Box>
                <VStack align="flex-start">
                  <Heading fontFamily="avenir" fontSize="2.125rem">
                    2000+
                  </Heading>
                  <Text fontFamily="veralaRound" fontSize="1rem">
                    COMPANIES NEARBY
                  </Text>
                </VStack>
              </Flex>{" "}
              <Flex pb="1.5rem">
                <Box
                  borderRadius="50%"
                  p="0.625rem"
                  bgGradient="linear(to-b,#B88746, #DFBD69)"
                  direction="column"
                  w="5rem"
                  h="5rem"
                  align="center"
                  mr="1rem"
                  _hover={{ cursor: "pointer" }}
                >
                  <Image w="3.125rem" h="3.125rem" src={industry} />
                </Box>
                <VStack align="flex-start">
                  <Heading fontFamily="avenir" fontSize="2.125rem">
                    2
                  </Heading>
                  <Text fontFamily="veralaRound" fontSize="1rem">
                    LARGE INDUSTRIAL PARKS
                  </Text>
                </VStack>
              </Flex>{" "}
              <Flex pb="1.5rem">
                <Box
                  borderRadius="50%"
                  p="0.625rem"
                  bgGradient="linear(to-b,#B88746, #DFBD69)"
                  direction="column"
                  w="5rem"
                  h="5rem"
                  align="center"
                  mr="1rem"
                  _hover={{ cursor: "pointer" }}
                >
                  <Image w="3.125rem" h="3.125rem" src={industry} />
                </Box>
                <VStack align="flex-start">
                  <Heading fontFamily="avenir" fontSize="2.125rem">
                    3
                  </Heading>
                  <Text fontFamily="veralaRound" fontSize="1rem">
                    MAJOR PORTS, SEZ
                  </Text>
                </VStack>
              </Flex>
            </Flex>
            <Flex
              h="100%"
              direction="column"
              justify="center"
              align="center"
              px="1.563rem"
            >
              {" "}
              <Divider
                h="3rem"
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
            <Flex>
              <Image boxShadow="lg" w="45rem" h="30rem" src={locationadv} />
            </Flex>
          </Flex>
          <Flex w="100%">
            <Flex w="100%" direction="column">
              {" "}
              <Flex w="100%" align="center" pb="1.563rem">
                <Divider
                  orientation="horizontal"
                  border="3px solid"
                  borderColor="#DFBD69"
                  bgColor="#DFBD69"
                />
                <Box
                  height="1.875rem"
                  width="4rem"
                  backgroundColor="#DFBD69"
                  border="3px solid white"
                  boxShadow="0px 0px 0px 3px #B88746"
                  borderRadius="50%"
                  my="1"
                />{" "}
                <Divider
                  orientation="horizontal"
                  border="3px solid"
                  borderColor="#DFBD69"
                  bgColor="#DFBD69"
                />
              </Flex>
              <Heading
                textAlign="center"
                fontFamily="avenir"
                fontSize="1.5rem"
                pb="1rem"
              >
                5 MINS
              </Heading>
              <UnorderedList fontFamily="veralaRound" fontSize="1rem">
                <ListItem pb="0.625rem">Velammal International School</ListItem>
                <ListItem pb="0.625rem">Origin By Mahindra</ListItem>
                <ListItem>Ponneri Railway Station</ListItem>
              </UnorderedList>
            </Flex>
            <Flex w="100%" direction="column">
              {" "}
              <Flex w="100%" align="center" pb="1.563rem">
                <Divider
                  orientation="horizontal"
                  border="3px solid"
                  borderColor="#DFBD69"
                  bgColor="#DFBD69"
                />
                <Box
                  height="1.875rem"
                  width="4rem"
                  backgroundColor="#DFBD69"
                  border="3px solid white"
                  boxShadow="0px 0px 0px 3px #B88746"
                  borderRadius="50%"
                  my="1"
                />{" "}
                <Divider
                  orientation="horizontal"
                  border="3px solid"
                  borderColor="#DFBD69"
                  bgColor="#DFBD69"
                />
              </Flex>
              <Heading
                textAlign="center"
                fontFamily="avenir"
                fontSize="1.5rem"
                pb="1rem"
              >
                10 MINS
              </Heading>
              <UnorderedList fontFamily="veralaRound" fontSize="1rem">
                <ListItem pb="0.625rem">Connect To Outer Ring Road</ListItem>
                <ListItem pb="0.625rem">Siruvapuri Murugan Temple</ListItem>
                <ListItem pb="0.625rem">VELS Medical Hospital</ListItem>
                <ListItem>R.K.M. Engineering College</ListItem>
              </UnorderedList>
            </Flex>
            <Flex w="100%" direction="column">
              {" "}
              <Flex w="100%" align="center" pb="1.563rem">
                <Divider
                  orientation="horizontal"
                  border="3px solid"
                  borderColor="#DFBD69"
                  bgColor="#DFBD69"
                />
                <Box
                  height="1.875rem"
                  width="4rem"
                  backgroundColor="#DFBD69"
                  border="3px solid white"
                  boxShadow="0px 0px 0px 3px #B88746"
                  borderRadius="50%"
                  my="1"
                />{" "}
                <Divider
                  orientation="horizontal"
                  border="3px solid"
                  borderColor="#DFBD69"
                  bgColor="#DFBD69"
                />
              </Flex>
              <Heading
                textAlign="center"
                fontFamily="avenir"
                fontSize="1.5rem"
                pb="1rem"
              >
                20 MINS
              </Heading>
              <UnorderedList fontFamily="veralaRound" fontSize="1rem">
                <ListItem pb="0.625rem">Gummidipoondi SIPCOT</ListItem>
                <ListItem pb="0.625rem">Amazon</ListItem>
                <ListItem pb="0.625rem">Minjur</ListItem>
                <ListItem>Pulicat Lake</ListItem>
              </UnorderedList>
            </Flex>
            <Flex w="100%" direction="column">
              {" "}
              <Flex w="100%" align="center" pb="1.563rem">
                <Divider
                  orientation="horizontal"
                  border="3px solid"
                  borderColor="#DFBD69"
                  bgColor="#DFBD69"
                />
                <Box
                  height="1.875rem"
                  width="4rem"
                  backgroundColor="#DFBD69"
                  border="3px solid white"
                  boxShadow="0px 0px 0px 3px #B88746"
                  borderRadius="50%"
                  my="1"
                />{" "}
                <Divider
                  orientation="horizontal"
                  border="3px solid"
                  borderColor="#DFBD69"
                  bgColor="#DFBD69"
                />
              </Flex>
              <Heading
                textAlign="center"
                fontFamily="avenir"
                fontSize="1.5rem"
                pb="1rem"
              >
                30 MINS
              </Heading>
              <UnorderedList fontFamily="veralaRound" fontSize="1rem">
                <ListItem pb="0.625rem">Sri City</ListItem>
                <ListItem>Kattupalli Adani Port, Chennai Port</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w="100%"
          h="100%"
          pt="3.125rem"
          pb="6.25rem"
          align="center"
          justify="center"
          direction="column"
        >
          <Text
            fontSize="2.5rem"
            fontFamily="goudy"
            textTransform="uppercase"
            pb="3.125rem"
          >
            pre book & avail best offers
          </Text>
          <Container w="container.sm" align="center">
            {" "}
            <form>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    NAME
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    PHONE
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    EMAIL
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack
                  w="100%"
                  align="flex-start"
                  justify="space-between"
                  mb="1.5rem"
                >
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    REQUIREMENTS
                  </FormLabel>
                  <Textarea
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="11.25rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>
              </FormControl>
              <Button
                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                color="white"
                fontSize="1rem"
                fontFamily="avenir"
                p="1rem"
                _hover={{
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
                _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
              >
                SUBMIT NOW
              </Button>
            </form>
          </Container>
        </Flex>
      </Flex>
      <DropDown />
    </>
  );
};

export default AreteSec;
