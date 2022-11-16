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
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";
// images
import arete1 from "../commercial-properties imgs/ARETE PLAZA2.jpg";
import arete2 from "../commercial-properties imgs/ARETE PLAZA4.jpg";
import arete3 from "../commercial-properties imgs/ARETE PLAZA3.jpg";
import aretefloor from "../commercial-properties imgs/COMERCIAL.jpg";
import institute from "../commercial-properties imgs/INSTITUTES.svg";
import company from "../commercial-properties imgs/company.svg";
import port from "../commercial-properties imgs/ports.svg";
import industry from "../commercial-properties imgs/INDUSTRY.svg";
import locationadv from "../commercial-properties imgs/Asset 1-100.jpg";
import mall from "../commercial-properties imgs/Arete Mall.jpg";
import market from "../commercial-properties imgs/hanson-lu-sq5P00L7lXc-unsplash.jpg";
import multiplex from "../commercial-properties imgs/multipllex.jpg";
import pharmacy from "../commercial-properties imgs/national-cancer-institute-byGTytEGjBo-unsplash.jpg";
import gamingArena from "../commercial-properties imgs/yara-2lS63pP77EQ-unsplash.jpg";
import foodCourt from "../commercial-properties imgs/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg";
import retailShop from "../commercial-properties imgs/carl-raw-s9rsYu-BYNo-unsplash.jpg";

import DropDown from "./DropDown";

const AreteSec = () => {
  const [active, setActive] = useState(true);
  return (
    <>
      <Flex
        w="100%"
        h="100%"
        direction="column"
        align="center"
        justify="center"
      >
        <Flex w="100%" px="6.25rem">
          <Button
            w="100%"
            bgColor="white"
            bgGradient={active ? "linear(to-b, #B88746 ,#DFBD69)" : "white"}
            border="1px solid #B88746"
            color={active ? "white" : "black"}
            mr="0.625rem"
            p="1.563rem"
            borderRadius="none"
            fontSize="1.25rem"
            fontFamily="avenir"
            fontWeight="bold"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
            onClick={() => {
              setActive(true);
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            ARETE PLAZA
          </Button>
          <Button
            ml="10px"
            w="100%"
            color={active ? "black" : "white"}
            bgColor="white"
            p="1.563rem"
            border="1px solid #B88746"
            bgGradient={active ? "white" : "linear(to-b, #B88746 ,#DFBD69)"}
            borderRadius="none"
            fontSize="1.25rem"
            fontFamily="avenir"
            fontWeight="bold"
            onClick={() => {
              setActive(false);
            }}
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            ARETE MALL
          </Button>
        </Flex>
      </Flex>
      {active ? <AretePlaza /> : <AreteMall />}
      <DropDown />
    </>
  );
};

export default AreteSec;

const AretePlaza = () => {
  return (
    <>
      {" "}
      <Flex
        w="100%"
        h="100%"
        direction="column"
        align="center"
        justify="center"
        px="6.25rem"
        pt="3.125rem"
        pb="5rem"
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
          pb="1.563rem"
          textAlign="center"
        >
          First time ever in North Chennai a tallest tower with G+1 - 20 Retail
          Spaces, an impeccable mix of Shopping, HyperMarket, Pharmacy, Fine
          Dining & Entertainment.
        </Text>
        <Flex w="100%" gap="1.25rem" align="center">
          <Flex w="100%">
            <Image
              transition="all .2s"
              _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
              objectFit="cover"
              objectPosition="50%"
              h="20rem"
              src={arete1}
            />
          </Flex>
          <Flex w="100%">
            {" "}
            <Image
              transition="all .2s"
              _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
              objectFit="cover"
              objectPosition="50% 50%"
              h="22rem"
              src={arete2}
            />
          </Flex>
          <Flex w="100%">
            {" "}
            <Image
              transition="all .2s"
              _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
              objectFit="cover"
              objectPosition="50%"
              h="20rem"
              src={arete3}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w="100%"
        h="100%"
        align="flex-start"
        justify="space-between"
        px="6.25rem"
      >
        <Flex w="65%" alignSelf="flex-start">
          <Image
            w="100%"
            h="29.25rem"
            src={aretefloor}
            border="1px solid grey"
          />
        </Flex>
        <Flex
          w="10%"
          h="100%"
          direction="column"
          justify="center"
          align="center"
          px="1.563rem"
        >
          {" "}
          <Divider
            h="6rem"
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
          w="25%"
          h="100%"
          direction="column"
          alignSelf="center"
          justify="center"
        >
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
            w="fit-content"
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
      <LocationAndFormPlaza />
    </>
  );
};

const AreteMall = () => {
  return (
    <>
      <Flex
        w="100%"
        h="100%"
        direction="column"
        align="center"
        justify="center"
        px="6.25rem"
        pt="3.125rem"
        pb="1.875rem"
      >
        <Text
          textAlign="center"
          fontFamily="goudy"
          fontSize="2.5rem"
          pb="3.125rem"
        >
          ARETE MALL
        </Text>
        <Flex w="100%" h="100%" align="flex-start" justify="space-between">
          <Flex w="50%">
            <Image src={mall} h="29.25rem" />
          </Flex>
          <Flex
            w="10%"
            h="100%"
            direction="column"
            justify="center"
            align="center"
            px="1.563rem"
          >
            {" "}
            <Divider
              h="6rem"
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
            w="40%"
            h="100%"
            direction="column"
            alignSelf="center"
            justify="center"
          >
            <Text fontSize="1rem" fontFamily="veralaRound" pb="1.875rem">
              An expansive development of 2.5 lakh sqft retail mall in close
              proximity to residential townships of North Chennai, will make
              sure all your social and recreational needs are met with. The mall
              will create a social fabric which will lead to a more wholesome
              and integrated living.
            </Text>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing="1.563rem"
              pb="3.125rem"
            >
              <Box>
                <Text
                  fontFamily="avenir"
                  fontSize="1.5rem"
                  fontWeight="bold"
                  bgGradient="linear(to-b,#B88746, #DFBD69)"
                  bgClip="text"
                >
                  300
                </Text>
                <Text fontFamily="veralaRound" fontSize="1rem" color={"black"}>
                  Car Parkings
                </Text>
              </Box>
              <Box>
                <Text
                  fontFamily="avenir"
                  fontSize="1.5rem"
                  fontWeight="bold"
                  bgGradient="linear(to-b,#B88746, #DFBD69)"
                  bgClip="text"
                >
                  LG, GF, +4
                </Text>
                <Text fontFamily="veralaRound" fontSize="1rem" color={"black"}>
                  Floors
                </Text>
              </Box>
              <Box>
                <Text
                  fontFamily="avenir"
                  fontSize="1.5rem"
                  fontWeight="bold"
                  bgGradient="linear(to-b,#B88746, #DFBD69)"
                  bgClip="text"
                >
                  1,50,000 SQFT
                </Text>
                <Text fontFamily="veralaRound" fontSize="1rem" color={"black"}>
                  Carpet Area
                </Text>
              </Box>
              <Box>
                <Text
                  fontFamily="avenir"
                  fontSize="1.5rem"
                  fontWeight="bold"
                  bgGradient="linear(to-b,#B88746, #DFBD69)"
                  bgClip="text"
                >
                  2,25.000 SQFT
                </Text>
                <Text fontFamily="veralaRound" fontSize="1rem" color={"black"}>
                  GLA
                </Text>
              </Box>
            </SimpleGrid>
            <Heading fontFamily="avenir" fontSize="1.25rem" pb="1rem">
              FLOOR PLAN
            </Heading>
            <Button
              w="fit-content"
              bgGradient="linear(to-b, #B88746 ,#DFBD69)"
              color="white"
              mr="0.625rem"
              p="1.563rem"
              fontSize="1.25rem"
              fontFamily="avenir"
              fontWeight="bold"
              _hover={{
                bgGradient: "linear(to-b, #DFBD69, #B88746)",
              }}
            >
              DOWNLOAD
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w="100%"
        h="100%"
        direction="column"
        align="center"
        pt="3.125rem"
        px="6.25rem"
      >
        <Text fontFamily="goudy" fontSize="2.5rem" pb="3.125rem">
          AMENITIES
        </Text>
        <Flex w="100%" h="100%" gap="1.25rem" align="center" pb="0.625rem">
          <Flex w="100%" direction="column" align="center">
            <Image src={retailShop} h="15rem" />
            <Heading fontFamily="avenir" fontSize="1.25rem" pt="1rem">
              RETAIL SHOPS
            </Heading>
          </Flex>
          <Flex w="100%" direction="column" align="center">
            <Image h="15rem" src={market} />
            <Heading fontFamily="avenir" fontSize="1.25rem" pt="1rem">
              HYPERMARKET
            </Heading>
          </Flex>
          <Flex w="100%" direction="column" align="center">
            <Image src={pharmacy} h="15rem" />
            <Heading fontFamily="avenir" fontSize="1.25rem" pt="1rem">
              PHARMACY
            </Heading>
          </Flex>
        </Flex>
        <Flex w="100%" h="100%" align="center" pb="0.625rem">
          {" "}
          <Flex w="100%" align="center">
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
          <Flex w="100%" align="center">
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
          <Flex w="100%" align="center">
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
        </Flex>
        <Flex w="100%" h="100%" gap="1.25rem" align="center" pb="0.625rem">
          <Flex w="100%" direction="column" align="center">
            <Heading fontFamily="avenir" fontSize="1.25rem" pb="1rem">
              FOOD COURT
            </Heading>
            <Image src={foodCourt} h="15rem" />
          </Flex>
          <Flex w="100%" direction="column" align="center">
            <Heading fontFamily="avenir" fontSize="1.25rem" pb="1rem">
              8 SCREEN MULTIPLEX
            </Heading>
            <Image src={multiplex} h="15rem" />
          </Flex>
          <Flex w="100%" direction="column" align="center">
            <Heading fontFamily="avenir" fontSize="1.25rem" pb="1rem">
              GAMING ARCADE
            </Heading>
            <Image src={gamingArena} h="15rem" />
          </Flex>
        </Flex>
      </Flex>
      <LocationAndFormMall />
    </>
  );
};

const LocationAndFormPlaza = () => {
  return (
    <>
      <Flex
        w="100%"
        h="100%"
        direction="column"
        pt="5rem"
        align="center"
        justify="center"
        pb="3.125rem"
        px="6.25rem"
      >
        <Text fontFamily="goudy" pb="3.125rem" fontSize="2.5rem">
          LOCATION ADVANTAGE
        </Text>
        <Flex w="100%" h="100%" justify="space-between" pb="3.125rem">
          <Flex
            w="28%"
            h="100%"
            direction="column"
            alignSelf="center"
            justify="center"
          >
            <Flex pb="1.5rem">
              <Box
                borderRadius="50%"
                p="1rem"
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
              <Image w="5rem" h="5rem" src={company} mr="1rem" />
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
                p="1rem"
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
              <Image w="5rem" h="5rem" src={port} mr="1rem" />
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
            w="10%"
            h="100%"
            direction="column"
            justify="center"
            align="center"
            px="1.563rem"
          >
            {" "}
            <Divider
              h="2rem"
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
          <Flex w="62%">
            <Image
              boxShadow="lg"
              w="100%"
              h="29.25rem"
              objectFit="cover"
              objectPosition="center"
              src={locationadv}
            />
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
        pt="1.875rem"
        pb="5rem"
        align="center"
        justify="center"
        direction="column"
      >
        <Text
          fontSize="2.5rem"
          fontFamily="goudy"
          textTransform="uppercase"
          pb="1.563rem"
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
    </>
  );
};

const LocationAndFormMall = () => {
  return (
    <>
      <Flex
        w="100%"
        h="100%"
        direction="column"
        pt="5rem"
        align="center"
        justify="center"
        pb="3.125rem"
        px="6.25rem"
      >
        <Text fontFamily="goudy" pb="3.125rem" fontSize="2.5rem">
          LOCATION ADVANTAGE
        </Text>
        <Flex w="100%" h="100%" justify="space-between" pb="3.125rem">
          <Flex
            w="28%"
            h="100%"
            direction="column"
            alignSelf="center"
            justify="center"
          >
            <Flex pb="1.5rem">
              <Box
                borderRadius="50%"
                p="1rem"
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
              <Image w="5rem" h="5rem" src={company} mr="1rem" />
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
                p="1rem"
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
              <Image w="5rem" h="5rem" src={port} mr="1rem" />
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
            w="10%"
            h="100%"
            direction="column"
            justify="center"
            align="center"
            px="1.563rem"
          >
            {" "}
            <Divider
              h="2rem"
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
          <Flex w="62%">
            <Image
              boxShadow="lg"
              w="100%"
              h="29.25rem"
              objectFit="cover"
              objectPosition="center"
              src={locationadv}
            />
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
              <ListItem pb="0.625rem">Drive To Siruvapuri</ListItem>
              <ListItem pb="0.625rem">Murugan Temple</ListItem>
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
        pt="1.875rem"
        pb="5rem"
        align="center"
        justify="center"
        direction="column"
      >
        <Text
          fontSize="2.5rem"
          fontFamily="goudy"
          textTransform="uppercase"
          pb="1.563rem"
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
    </>
  );
};
