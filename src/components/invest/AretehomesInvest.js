import {
  Flex,
  Image,
  Text,
  Box,
  Divider,
  Heading,
  Button,
  VStack,
  UnorderedList,
  ListItem,
  IconButton,
  FormControl,
  HStack,
  FormLabel,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import React, { useState } from "react";
import smartInvest from "../Invest imgs/INTRO1.jpg";
import floorPlan from "../Invest imgs/FLOOR PLAN-sky high.jpg";
import locationImg from "../Invest imgs/connectivity-removebg-preview.png";
import foreignInvest from "../Invest imgs/invest-removebg-preview.png";
import socialFabric from "../Invest imgs/social1-removebg-preview.png";
import roiImg from "../Invest imgs/roi.jpg";
// icons
import rentalYield from "../Invest imgs/renta;l yield.svg";
import rentalIncome from "../Invest imgs/rental income.svg";
import rentalyears from "../Invest imgs/rental income years.svg";
import interestRate from "../Invest imgs/interest rate.svg";
import pmay from "../Invest imgs/pmay.svg";
import tax from "../Invest imgs/tax saving.svg";
import institute from "../Invest imgs/institutes.svg";
import company from "../Invest imgs/companies.svg";
import industry from "../Invest imgs/industrial park.svg";
import port from "../Invest imgs/port.svg";
import locationadv from "../commercial-properties imgs/Asset 1-100.jpg";
import DropDown from "./DropDown";

import areteInto1 from "../Invest imgs/arete homes - intro1.jpeg";
import twoBhkFloor from "../Invest imgs/arete homes Tower A6-1.jpg";
import snarttwobhk from "../Invest imgs/INTRO1.jpg";

const SkyhighInvest = () => {
  const [active, setActive] = useState(true);
  return (
    <>
      {" "}
      <Flex w="100%" h="100%" px="6.25rem" direction="column" align="center">
        <Flex w="100%">
          <Button
            w="100%"
            bgColor="white"
            bgGradient={active ? "linear(to-b, #B88746 ,#DFBD69)" : "white"}
            border="1px solid #B88746"
            color={active ? "white" : "black"}
            mr="0.625rem"
            p="1.563rem"
            borderRadius="none"
            fontSize="1rem"
            fontFamily="avenir"
            fontWeight="bold"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
              color: "white",
            }}
            onClick={() => {
              setActive(true);
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            2 BHK - 1025 SQFT.
          </Button>
          <Button
            ml="0.625rem"
            w="100%"
            bgColor="white"
            color={active ? "black" : "white"}
            p="1.563rem"
            border="1px solid #B88746"
            bgGradient={active ? "none" : "linear(to-b, #B88746 ,#DFBD69)"}
            borderRadius="none"
            fontSize="1rem"
            fontFamily="avenir"
            fontWeight="bold"
            onClick={() => {
              setActive(false);
            }}
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
              color: "white",
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            3 BHK - 1787 SQFT.
          </Button>
        </Flex>
        {active ? <Twobhk /> : <Threebhk />}
      </Flex>
      <Text fontSize="0.625rem" pb="1.25rem" textTransform="uppercase">
        Terms & Conditions* : Assured Rent for 3 years from possession • Tax
        saving subject to yearly income • Appreciation - 5% is considered
        (considering Ination) • PMAY subject to eligibility
      </Text>
      <DropDown />
    </>
  );
};

const Twobhk = () => {
  return (
    <>
      {/* Smart invest */}
      <Flex w="100%" h="100%" direction="column" align="center" py="3.125rem">
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem">
          SMART INVESTMENT
        </Text>
        <Flex w="100%" h="100%">
          <Flex w="100%" h="100%">
            <Image src={areteInto1} />
          </Flex>
          <Flex w="100%" h="100%">
            {" "}
            <Flex
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
              px="1.563rem"
            >
              <Divider
                h="9.375rem"
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
              h="100%"
              direction="column"
              justify="center"
              fontFamily="avenir"
            >
              <Flex align="center" justify="space-between">
                <Flex direction="column">
                  <Heading fontSize="1.5rem" pb="0.938rem">
                    ARETE HOMES
                  </Heading>
                  <Heading fontSize="1.25rem" pb="0.938rem">
                    2 BHK - 1025 SQFT.
                  </Heading>
                  <Heading
                    fontSize="2.125rem"
                    pb="0.625rem"
                    bgGradient="linear(to-b, #B88746, #DFBD69)"
                    bgClip="text"
                  >
                    ₹52 LAKHS
                  </Heading>
                  <Text fontFamily="veralaRound" fontSize="1rem" pb="2.188rem">
                    Fully Furnished With White Goods
                  </Text>
                </Flex>
                <Button
                  w="fit-content"
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
                  I AM INTERESTED
                </Button>
              </Flex>
              <Flex w="100%" gap="2.938rem" pb="1.875rem">
                <Flex w="100%" direction="column" align="center">
                  <Image
                    w="3.125rem"
                    h="3.125rem"
                    src={rentalYield}
                    mb="0.625rem"
                  />
                  <Heading fontSize="1.5rem" mb="0.625rem">
                    8 %
                  </Heading>
                  <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                    Rental Yield
                  </Text>
                </Flex>
                <Flex w="100%" direction="column" align="center">
                  {" "}
                  <Image
                    w="3.125rem"
                    h="3.125rem"
                    src={rentalIncome}
                    mb="0.625rem"
                  />
                  <Heading fontSize="1.5rem" mb="0.625rem">
                    ₹32,000
                  </Heading>
                  <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                    Rental Income per month
                  </Text>
                </Flex>
                <Flex w="100%" direction="column" align="center">
                  <Image
                    w="3.125rem"
                    h="3.125rem"
                    src={rentalyears}
                    mb="0.625rem"
                  />
                  <Heading fontSize="1.5rem" mb="0.625rem">
                    3 YEARS
                  </Heading>
                  <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                    Assured Rental Income
                  </Text>
                </Flex>
              </Flex>
              <Heading
                w="100%"
                textAlign="center"
                fontFamily="avenir"
                fontSize="2.125rem"
              >
                ASSURED RENT > EMI
              </Heading>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* easy payment plan sec */}
      <Flex w="100%" h="100%" direction="column" align="center" pb="5rem">
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem">
          EASY PAYMENT PLAN
        </Text>
        <Flex w="100%" h="100%" gap="1.25rem">
          <Flex
            w="100%"
            h="100%"
            direction="column"
            align="center"
            fontFamily="avenir"
            boxShadow="2xl"
            p="1.875rem"
          >
            <Heading align="center" fontSize="1.5rem" pb="1.563rem">
              PRINCIPAL INSTALLMENT
            </Heading>
            <Flex w="100%" gap="0.625rem" align="flex-end">
              <Text w="60%" fontSize="1rem" fontFamily="veralaRound">
                PRINCIPAL
                <br /> AMOUNT
              </Text>
              <Text w="100%" fontSize="1rem" fontFamily="veralaRound">
                HOME LOAN AMOUNT
              </Text>
            </Flex>
            <Flex w="100%" h="0.938rem" my="1.25rem">
              <Flex bgColor="#B88746" w="50%" />
              <Divider
                mt="-0.4rem"
                h="1.563rem"
                orientation="vertical"
                border="1px solid"
                borderColor="#B88746"
                bgColor="#B88746"
              />
              <Flex w="100%" h="100%">
                <Box w="100%" bgGradient="linear(to-r, #DFBD69,#B88746)" />
              </Flex>
            </Flex>
            <Flex w="100%" gap="0.625rem" pb="1.875rem">
              <Heading w="60%" fontSize="1rem" fontFamily="veralaRound">
                ₹ 10 LAKHS
              </Heading>
              <Heading w="100%" fontSize="1rem" fontFamily="veralaRound">
                ₹ 42 LAKHS
              </Heading>
            </Flex>
            <Divider
              orientation="horizontal"
              border="1px solid"
              borderColor="#B88746"
              bgColor="#B88746"
              mb="0.938rem"
            />
            <Flex w="100%" justify="space-between" pb="1.25rem">
              <Text fontSize="1rem" fontFamily="veralaRound">
                TOTAL INVESTMENT
              </Text>
              <Heading fontSize="1.5rem">₹ 52,00,000</Heading>
            </Flex>
            <Flex w="100%" justify="space-between" pb="1.25rem">
              <Text fontSize="1rem" fontFamily="veralaRound">
                ASSURED RENT PER MONTH
              </Text>
              <Heading fontSize="1.5rem">₹ 32,000</Heading>
            </Flex>{" "}
            <Heading
              w="100%"
              textAlign="center"
              fontFamily="avenir"
              fontSize="1.5rem"
            >
              ASSURED RENT > EMI
            </Heading>
          </Flex>
          <Flex
            w="100%"
            h="100%"
            direction="column"
            p="1.875rem"
            align="center"
            fontFamily="avenir"
          >
            <Heading fontSize="1.5rem" pb="1.875rem">
              HOME LOAN
            </Heading>
            <Flex w="100%" gap="2.938rem" pb="1.875rem">
              <Flex w="100%" direction="column" align="center">
                <Image
                  w="3.125rem"
                  h="3.125rem"
                  src={rentalIncome}
                  mb="0.625rem"
                />
                <Heading fontSize="1.25rem" mb="0.625rem">
                  ₹ 42 LAKHS
                </Heading>
                <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                  LOAN AMOUNT
                </Text>
              </Flex>
              <Flex w="100%" direction="column" align="center">
                {" "}
                <Image
                  w="3.125rem"
                  h="3.125rem"
                  src={rentalyears}
                  mb="0.625rem"
                />
                <Heading fontSize="1.25rem" mb="0.625rem">
                  25 YEARS
                </Heading>
                <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                  TENURE
                </Text>
              </Flex>
              <Flex w="100%" direction="column" align="center">
                <Image
                  w="3.125rem"
                  h="3.125rem"
                  src={interestRate}
                  mb="0.625rem"
                />
                <Heading fontSize="1.25rem" mb="0.625rem">
                  6.7% p.a.
                </Heading>
                <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                  INTEREST RATE
                </Text>
              </Flex>
            </Flex>
            <Divider
              orientation="horizontal"
              border="1px solid"
              borderColor="#B88746"
              bgColor="#B88746"
              mb="0.938rem"
            />{" "}
            <Flex w="100%" justify="space-between" pb="1.25rem">
              <Text fontSize="1rem" fontFamily="veralaRound">
                EMI PER MONTH
              </Text>
              <Heading fontSize="1.5rem">₹ 27,510</Heading>
            </Flex>
            <Button
              alignSelf="center"
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
              GET HOME LOAN
            </Button>
          </Flex>
        </Flex>
      </Flex>
      {/* FINANCIAL MODEL sec */}
      <Flex w="100%" h="100%" direction="column" align="center" pb="1.875rem">
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem">
          FINANCIAL MODEL
        </Text>
        <Flex w="100%" h="100%">
          <Flex
            w="38%"
            h="100%"
            direction="column"
            fontFamily="avenir"
            align="center"
          >
            <Heading textAlign="center" pb="3.125rem" fontSize="1.5rem">
              INCOME ON THE INVESTMENT
            </Heading>
            <Flex w="100%" align="center" justify="flex-start">
              {" "}
              <Image
                w="3.125rem"
                h="3.125rem"
                src={rentalIncome}
                mr="0.625rem"
              />
              <Heading color="#D4AD4B" fontSize="1.25rem">
                RENTAL INCOME ₹4 LAKHS
              </Heading>
            </Flex>
            <Text color="#B88746" fontSize="1.563rem" my="0.938rem">
              +
            </Text>
            <Flex w="100%" align="center" justify="flex-start">
              {" "}
              <Image w="3.125rem" h="3.125rem" src={tax} mr="0.625rem" />
              <Heading color="#B78C23" fontSize="1.25rem">
                TAX SAVINGS UPTO ₹2 LAKH
              </Heading>
            </Flex>
            <Text color="#B88746" fontSize="1.563rem" my="0.938rem">
              +
            </Text>
            <Flex w="100%" align="center" justify="flex-start">
              {" "}
              <Image
                w="3.125rem"
                h="3.125rem"
                src={rentalYield}
                mr="0.625rem"
              />
              <Heading color="#B88746" fontSize="1.25rem">
                APPRECIATION EXPECTED 5% PER YEAR
              </Heading>
            </Flex>
            <Text color="#B88746" fontSize="1.563rem" my="0.938rem">
              +
            </Text>
            <Flex w="100%" align="center" justify="flex-start">
              {" "}
              <Image w="3.125rem" h="3.125rem" src={pmay} mr="0.625rem" />
              <Heading color="#8D6229" fontSize="1.25rem">
                PMAY BENIFIT ₹2.67 LAKHS
              </Heading>
            </Flex>
          </Flex>
          <Flex
            w="10%"
            h="100%"
            direction="column"
            justify="flex-start"
            align="center"
            px="1.563rem"
          >
            <Divider
              h="29.25rem"
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
            w="52%"
            h="100%"
            align="center"
            justify="flex-end"
            fontFamily="avenir"
            direction="column"
          >
            <Heading
              w="100%"
              textAlign="center"
              fontSize="1.5rem"
              pb="1.563rem"
            >
              INCOME GROWTH JOURNEY
            </Heading>
            <Flex w="100%" h="100%" gap="0.938rem" pb="0.625rem">
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                <Heading textAlign="center" fontSize="1.125rem">
                  ₹11 L
                </Heading>
                <Flex h="5rem" bgColor="#8D6229" />
                <Flex h="4.375rem" bgColor="#B88746" />
                <Flex h="3.75rem" bgColor="#B78C23" />
                <Flex h="8.125rem" bgColor="#D4AD4B" />
              </Flex>
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                {" "}
                <Heading textAlign="center" fontSize="1.125rem">
                  ₹8 L
                </Heading>
                <Flex h="4.375rem" bgColor="#B88746" />
                <Flex h="3.75rem" bgColor="#B78C23" />
                <Flex h="8.125rem" bgColor="#D4AD4B" />
              </Flex>
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                {" "}
                <Heading textAlign="center" fontSize="1.125rem">
                  ₹8 L
                </Heading>
                <Flex h="4.375rem" bgColor="#B88746" />
                <Flex h="3.75rem" bgColor="#B78C23" />
                <Flex h="8.125rem" bgColor="#D4AD4B" />
              </Flex>
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                {" "}
                <Heading textAlign="center" fontSize="1.125rem">
                  ₹8.5 L
                </Heading>
                <Flex h="4.375rem" bgColor="#B88746" />
                <Flex h="3.75rem" bgColor="#B78C23" />
                <Flex h="9.375rem" bgColor="#D4AD4B" />
              </Flex>
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                {" "}
                <Heading textAlign="center" fontSize="1.125rem">
                  ₹8.5 L
                </Heading>
                <Flex h="4.375rem" bgColor="#B88746" />
                <Flex h="3.75rem" bgColor="#B78C23" />
                <Flex h="9.375rem" bgColor="#D4AD4B" />
              </Flex>
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                {" "}
                <Heading textAlign="center" fontSize="1.125rem">
                  ₹8.5 L
                </Heading>
                <Flex h="4.375rem" bgColor="#B88746" />
                <Flex h="3.75rem" bgColor="#B78C23" />
                <Flex h="9.375rem" bgColor="#D4AD4B" />
              </Flex>
            </Flex>
            <Divider border="1px solid" borderColor="#B88746" />
            <Flex
              w="100%"
              fontFamily="veralaRound"
              fontSize="1rem"
              align="center"
              justify="space-between"
              px="0.938rem"
            >
              <Text>YEAR 1</Text>
              <Text>YEAR 2</Text>
              <Text>YEAR 3</Text>
              <Text>YEAR 4</Text>
              <Text>YEAR 5</Text>
              <Text>YEAR 6</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex h="100%" align="center" p="1rem" pt="1.875rem" boxShadow="2xl">
          <Heading
            w="100%"
            fontFamily="avenir"
            textAlign="center"
            fontSize="2.125rem"
            bgGradient="linear(to-b, #B88746,#DFBD69)"
            bgClip="text"
          >
            TOTAL INCOME IN 6 YEARS{" "}
            <Text as={"span"} fontSize="1.25rem">
              APPROX.
            </Text>{" "}
            ₹52.5 LAKHS
          </Heading>
        </Flex>
      </Flex>
      {/* location */}
      <Flex
        overflow="hidden"
        w="100%"
        h="100%"
        direction="column"
        pt="3.125rem"
        align="center"
        justify="center"
        pb="3.125rem"
      >
        <Text fontFamily="goudy" pb="1.875rem" fontSize="2.5rem">
          LOCATION
        </Text>
        <Heading align="center" fontSize="1.5rem" pb="1.563rem">
          Arete Homes Is The Largest Smart Township Of Premium Housing & Modern
          Lifestyle
          <br /> Within 30KM Radius Catering To 12 LAKH+ Individuals, Students,
          Immigrants.
        </Heading>
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
          <Flex overflow="hidden" w="10%" h="100%" px="1.563rem">
            <Flex
              direction="column"
              justify="center"
              align="center"
              w="100%"
              h="100%"
            >
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
          <Flex w="100%" direction="column" overflow="hidden">
            {" "}
            <Flex w="100%" align="center" pb="1.563rem" id="0">
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
            <div id="0">
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
            </div>
          </Flex>
          <Flex w="100%" direction="column" overflow="hidden">
            {" "}
            <Flex w="100%" align="center" pb="1.563rem" id="1">
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
            <div id="1">
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
            </div>
          </Flex>
          <Flex w="100%" direction="column" overflow="hidden">
            {" "}
            <Flex w="100%" align="center" pb="1.563rem" id="2">
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
            <div id="2">
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
            </div>
          </Flex>
          <Flex w="100%" direction="column" overflow="hidden">
            {" "}
            <Flex w="100%" align="center" pb="1.563rem" id="3">
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
            <div id="3">
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
            </div>
          </Flex>
        </Flex>
      </Flex>
      {/* TENANTS */}
      <Flex
        w="100%"
        pt="1.875rem"
        pb="3.125rem"
        direction="column"
        align="center"
      >
        <Text fontFamily="goudy" fontSize="2.5rem">
          TENANTS
        </Text>
        <Flex w="100%" justify="center">
          <Flex w="60%">carousel</Flex>
          <Flex
            w="10%"
            h="100%"
            direction="column"
            justify="flex-start"
            align="center"
            px="1.562rem"
          >
            <Divider
              h="9.375rem"
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
          <Flex w="30%" direction="column" justify="center">
            <Text fontFamily="veralaRound" fontSize="1rem" pb="1.875rem">
              Arete Serviced Apartments company providing safe, hygienic and
              premium co-living spaces to students, working professionals and
              organizations.
            </Text>
            logo grid
          </Flex>
        </Flex>
      </Flex>
      {/* Floor plan */}
      <Flex w="100%" h="100%" align="center" py="1.875rem" direction="column">
        <Text
          w="100%"
          align="center"
          fontFamily="goudy"
          fontSize="2.5rem"
          textTransform="uppercase"
          pb="1.875rem"
        >
          FLOOR PLAN
        </Text>
        <Flex w="100%" h="100%" gap="1.563rem">
          <Flex w="58%">
            <Image boxShadow="2xl" w="100%" h="100%" src={twoBhkFloor} />
          </Flex>
          <Flex w="42%" h="100%" alignSelf="flex-start" direction="column">
            {" "}
            <Heading
              fontSize="1.5rem"
              textTransform="uppercase"
              fontFamily="avenir"
              pb="0.938rem"
            >
              SMART HOMES THAT ARE VASTU COMPLIANT
            </Heading>
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              border="1px solid #B88746"
            >
              <Text
                w="100%"
                textAlign="center"
                bgGradient="linear(to-b, #DFBD69, #B88746)"
                fontFamily="veralaRound"
                fontSize="1.25rem"
                p="0.938rem"
                color="white"
                borderBottom="1px solid #B88746"
              >
                TOWER DETAILS
              </Text>
              <Flex
                w="100%"
                pt="0.938rem"
                pb="1.875rem"
                px="1.875rem"
                direction="column"
                gap="1.875rem"
              >
                <Flex w="100%" align="center" gap="3.125rem">
                  <Text w="50%" fontFamily="veralaRound" fontSize="1.25rem">
                    TYPE OF UNITS
                  </Text>
                  <Heading w="50%" fontFamily="avenir" fontSize="1.25rem">
                    2 BHK(C), 2 BHK(L), 3 BHK
                  </Heading>
                </Flex>
                <Flex w="100%" align="center" gap="3.125rem">
                  <Text w="50%" fontFamily="veralaRound" fontSize="1.25rem">
                    SALEABLE AREA
                  </Text>
                  <Heading w="50%" fontFamily="avenir" fontSize="1.25rem">
                    1008-1748 SQFT.
                  </Heading>
                </Flex>
                <Flex w="100%" align="center" gap="3.125rem">
                  <Text w="50%" fontFamily="veralaRound" fontSize="1.25rem">
                    FLOORS
                  </Text>
                  <Heading w="50%" fontFamily="avenir" fontSize="1.25rem">
                    10
                  </Heading>
                </Flex>
                <Flex w="100%" align="center" gap="3.125rem">
                  <Text w="50%" fontFamily="veralaRound" fontSize="1.25rem">
                    NO. OF FLATS ON EACH FLOOR
                  </Text>
                  <Heading w="50%" fontFamily="avenir" fontSize="1.25rem">
                    8
                  </Heading>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* why invest */}
      <Flex w="100%" h="100%" direction="column" py="3.125rem" align="center">
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem">
          WHY INVEST?
        </Text>
        <Flex w="100%" h="100%" gap="0.938rem">
          <Flex
            w="100%"
            h="25rem"
            direction="column"
            pt="1.875rem"
            px="1.875rem"
            align="center"
          >
            <Heading fontFamily="avenir" fontSize="1.5rem" pb="1.563rem">
              CONNECTIVITY
            </Heading>{" "}
            <Flex w="100%" h="100%" direction="column" justify="space-between">
              <UnorderedList
                fontFamily="veralaRound"
                fontSize="1rem"
                pb="0.625rem"
              >
                <ListItem>
                  Peripheral Ring Road - Pass Through Arete Homes
                </ListItem>
                <ListItem>Outer Ring Road</ListItem>
                <ListItem>Railway Network - Large Ponneri Station</ListItem>
              </UnorderedList>
              <Image
                justifySelf="flex-end"
                h="9.375rem"
                src={locationImg}
                objectFit="contain"
                objectPosition="50% 80%"
              />
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="25rem"
            direction="column"
            pt="1.875rem"
            px="1.875rem"
            align="center"
          >
            <Heading fontFamily="avenir" fontSize="1.5rem" pb="1.563rem">
              FOREIGN INVESTMENTS
            </Heading>
            <Flex w="100%" h="100%" direction="column" justify="space-between">
              <UnorderedList
                fontFamily="veralaRound"
                fontSize="1rem"
                pb="0.625rem"
              >
                <ListItem>
                  JICA Japan International Cooperation Agency chose Ponneri to
                  manage, design and develop as a ‘Smart City’ in 3 phases.
                </ListItem>
              </UnorderedList>
              <Image
                justifySelf="flex-end"
                h="9.375rem"
                src={foreignInvest}
                objectFit="contain"
                objectPosition="50% 80%"
              />
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="25rem"
            direction="column"
            pt="1.875rem"
            px="1.875rem"
            align="center"
            justify="space-between"
          >
            <Heading fontFamily="avenir" fontSize="1.5rem" pb="1.563rem">
              SOCIAL FABRIC
            </Heading>
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="1rem"
              pb="0.625rem"
            >
              <ListItem>Nearby Stores - Revathi, Saravana etc.</ListItem>
              <ListItem>Nearby Restaurants- A2B, Royal Kitchen</ListItem>
              <ListItem> Nearby Cinemas - PVR, PGC theater</ListItem>
              <ListItem>
                Nearby Attractions - Pulicat Lake, Shri Lakshmi Golden Temple
              </ListItem>
            </UnorderedList>
            <Image
              w="100%"
              h="11.25rem"
              src={socialFabric}
              objectFit="contain"
              objectPosition="150%"
            />
          </Flex>
        </Flex>
      </Flex>
      {/*more amenities*/}
      <MoreAmenities />
      {/* our investors */}
      <Flex w="100%" h="100%" py="3.125rem" direction="column" align="center">
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem">
          OUR INVESTORS
        </Text>
        {/* carousel */}
      </Flex>
      <Flex w="100%" h="100%" gap="3.125rem" pb="5rem">
        <Flex w="60%" h="100%" direction="column" align="center">
          <Text fontFamily="goudy" fontSize="2.125rem" pb="1.875rem">
            7% ROI ON ARETE HOMES
          </Text>
          <Flex w h="100%" gap="1.875rem" justify="center" align="center">
            <Image w="20.75rem" h="15.313rem" src={snarttwobhk} />
            <Flex
              h="100%"
              direction="column"
              justify="center"
              fontFamily="avenir"
            >
              <Heading fontSize="1.25rem" pb="0.938rem">
                SMART 2 BHK - 690 SQFT.
              </Heading>
              <Heading fontSize="1.5rem">₹34 LAKHS</Heading>
              <Text fontFamily="veralaRound" fontSize="1rem" pb="1.875rem">
                Fully Furnished With White Goods
              </Text>
              <Heading fontSize="1.5rem">₹20,000</Heading>
              <Text
                textTransform="uppercase"
                fontFamily="veralaRound"
                fontSize="1rem"
              >
                Rental Income per month
              </Text>
            </Flex>
          </Flex>
          <Button
            mt="1.25rem"
            alignSelf="center"
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
            VIEW DETAILS
          </Button>
        </Flex>
        <Flex
          w="40%"
          h="100%"
          align="center"
          justify="center"
          direction="column"
        >
          <Text
            fontSize="2.125rem"
            fontFamily="goudy"
            textTransform="uppercase"
            pb="1.563rem"
          >
            SCHEDULE A VISIT
          </Text>
          <Heading fontFamily="avenir" fontSize="1.5rem" pb="1.563rem">
            GET AN EXPERT OPINION
          </Heading>{" "}
          <form>
            <Flex w="100%" align="center" justify="center" direction="column">
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="0.938rem">
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
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="0.938rem">
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
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="0.938rem">
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
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" ml="4.5rem">
                  <Checkbox
                    ml="0.85rem"
                    value="yes"
                    fontFamily="veralaRound"
                    fontSize="1rem"
                    size="lg"
                  >
                    Book a visit
                  </Checkbox>
                </HStack>
              </FormControl>
              <Button
                mt="1.563rem"
                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                color="white"
                fontSize="1rem"
                fontFamily="avenir"
                p="0.938rem"
                _hover={{
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
                _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
              >
                SCHEDULE A CALL
              </Button>{" "}
            </Flex>
          </form>
        </Flex>
      </Flex>
    </>
  );
};

const Threebhk = () => {
  return (
    <>
      {/* Smart invest */}
      <Flex w="100%" h="100%" direction="column" align="center" py="3.125rem">
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem">
          SMART INVESTMENT
        </Text>
        <Flex w="100%" h="100%">
          <Flex w="49%" h="100%">
            <Image src={smartInvest} />
          </Flex>
          <Flex
            w="7.5%"
            h="100%"
            direction="column"
            justify="flex-start"
            align="center"
            px="1.563rem"
          >
            <Divider
              h="9.375rem"
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
            w="43.5%"
            h="100%"
            direction="column"
            justify="center"
            fontFamily="avenir"
          >
            <Flex align="center" justify="space-between" justifySelf="center">
              <Flex direction="column">
                <Heading fontSize="1.5rem" pb="0.938rem">
                  ARETE HOMES
                </Heading>
                <Heading fontSize="1.25rem" pb="0.938rem">
                  3 BHK - 1787 SQFT.
                </Heading>
                <Heading
                  fontSize="2.125rem"
                  pb="0.625rem"
                  bgGradient="linear(to-b, #B88746, #DFBD69)"
                  bgClip="text"
                >
                  ₹85 LAKHS
                </Heading>
                <Text fontFamily="veralaRound" fontSize="1rem" pb="2.188rem">
                  Fully Furnished With White Goods
                </Text>
              </Flex>
              <Button
                w="fit-content"
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
                I AM INTERESTED
              </Button>
            </Flex>
            <Flex
              w="100%"
              gap="2.938rem"
              pb="1.875rem"
              textTransform="uppercase"
            >
              <Flex w="100%" direction="column" align="center">
                <Image
                  w="3.125rem"
                  h="3.125rem"
                  src={rentalYield}
                  mb="0.625rem"
                />
                <Heading fontSize="1.5rem" mb="0.625rem">
                  HIGH
                </Heading>
                <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                  Rental Yield
                </Text>
              </Flex>
              <Flex w="100%" direction="column" align="center">
                {" "}
                <Image
                  w="3.125rem"
                  h="3.125rem"
                  src={rentalIncome}
                  mb="0.625rem"
                />
                <Heading fontSize="1.5rem" mb="0.625rem">
                  ₹48,000
                </Heading>
                <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                  Rental Income per month
                </Text>
              </Flex>
              <Flex w="100%" direction="column" align="center">
                <Image
                  w="3.125rem"
                  h="3.125rem"
                  src={rentalyears}
                  mb="0.625rem"
                />
                <Heading fontSize="1.5rem" mb="0.625rem">
                  3 YEARS
                </Heading>
                <Text
                  align="center"
                  fontFamily="veralaRound"
                  fontSize="1rem"
                  textTransform="uppercase"
                >
                  Assured Rental Income
                </Text>
              </Flex>
            </Flex>
            <Heading
              w="100%"
              textAlign="center"
              fontFamily="avenir"
              fontSize="2.125rem"
            >
              ASSURED RENT > EMI
            </Heading>
          </Flex>
        </Flex>
      </Flex>
      {/* easy payment plan sec */}
      <Flex w="100%" h="100%" direction="column" align="center" pb="5rem">
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem">
          EASY PAYMENT PLAN
        </Text>
        <Flex w="100%" h="100%" gap="1.25rem">
          <Flex
            w="100%"
            h="100%"
            direction="column"
            align="center"
            fontFamily="avenir"
            boxShadow="2xl"
            p="1.875rem"
          >
            <Heading align="center" fontSize="1.5rem" pb="1.563rem">
              PRINCIPAL INSTALLMENT
            </Heading>
            <Flex w="100%" gap="0.625rem" align="flex-end">
              <Text w="60%" fontSize="1rem" fontFamily="veralaRound">
                PRINCIPAL
                <br /> AMOUNT
              </Text>
              <Text w="100%" fontSize="1rem" fontFamily="veralaRound">
                HOME LOAN AMOUNT
              </Text>
            </Flex>
            <Flex w="100%" h="0.938rem" my="1.25rem">
              <Flex bgColor="#B88746" w="50%" />
              <Divider
                mt="-0.4rem"
                h="1.563rem"
                orientation="vertical"
                border="1px solid"
                borderColor="#B88746"
                bgColor="#B88746"
              />
              <Flex w="100%" h="100%">
                <Box w="100%" bgGradient="linear(to-r, #DFBD69,#B88746)" />
              </Flex>
            </Flex>
            <Flex w="100%" gap="0.625rem" pb="1.875rem">
              <Heading w="60%" fontSize="1rem" fontFamily="veralaRound">
                ₹ 25 LAKHS
              </Heading>
              <Heading w="100%" fontSize="1rem" fontFamily="veralaRound">
                ₹ 60 LAKHS
              </Heading>
            </Flex>
            <Divider
              orientation="horizontal"
              border="1px solid"
              borderColor="#B88746"
              bgColor="#B88746"
              mb="0.938rem"
            />
            <Flex w="100%" justify="space-between" pb="1.25rem">
              <Text fontSize="1rem" fontFamily="veralaRound">
                TOTAL INVESTMENT
              </Text>
              <Heading fontSize="1.5rem">₹ 85,00,000</Heading>
            </Flex>
            <Flex w="100%" justify="space-between" pb="1.25rem">
              <Text fontSize="1rem" fontFamily="veralaRound">
                ASSURED RENT PER MONTH
              </Text>
              <Heading fontSize="1.5rem">₹ 48,000</Heading>
            </Flex>{" "}
            <Heading
              w="100%"
              textAlign="center"
              fontFamily="avenir"
              fontSize="1.5rem"
            >
              ASSURED RENT > EMI
            </Heading>
          </Flex>
          <Flex
            w="100%"
            h="100%"
            direction="column"
            p="1.875rem"
            align="center"
            fontFamily="avenir"
          >
            <Heading fontSize="1.5rem" pb="1.875rem">
              HOME LOAN
            </Heading>
            <Flex w="100%" gap="2.938rem" pb="1.875rem">
              <Flex w="100%" direction="column" align="center">
                <Image
                  w="3.125rem"
                  h="3.125rem"
                  src={rentalIncome}
                  mb="0.625rem"
                />
                <Heading fontSize="1.25rem" mb="0.625rem">
                  ₹62 LAKHS
                </Heading>
                <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                  LOAN AMOUNT
                </Text>
              </Flex>
              <Flex w="100%" direction="column" align="center">
                {" "}
                <Image
                  w="3.125rem"
                  h="3.125rem"
                  src={rentalyears}
                  mb="0.625rem"
                />
                <Heading fontSize="1.25rem" mb="0.625rem">
                  25 YEARS
                </Heading>
                <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                  TENURE
                </Text>
              </Flex>
              <Flex w="100%" direction="column" align="center">
                <Image
                  w="3.125rem"
                  h="3.125rem"
                  src={interestRate}
                  mb="0.625rem"
                />
                <Heading fontSize="1.25rem" mb="0.625rem">
                  6.7% p.a.
                </Heading>
                <Text align="center" fontFamily="veralaRound" fontSize="1rem">
                  INTEREST RATE
                </Text>
              </Flex>
            </Flex>
            <Divider
              orientation="horizontal"
              border="1px solid"
              borderColor="#B88746"
              bgColor="#B88746"
              mb="0.938rem"
            />{" "}
            <Flex w="100%" justify="space-between" pb="1.25rem">
              <Text fontSize="1rem" fontFamily="veralaRound">
                EMI PER MONTH
              </Text>
              <Heading fontSize="1.5rem">₹41,265</Heading>
            </Flex>
            <Button
              alignSelf="center"
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
              GET HOME LOAN
            </Button>
          </Flex>
        </Flex>
      </Flex>
      {/* FINANCIAL MODEL sec */}
      <Flex w="100%" h="100%" direction="column" align="center" pb="1.875rem">
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem">
          FINANCIAL MODEL
        </Text>
        <Flex w="100%" h="100%">
          <Flex
            w="38%"
            h="100%"
            direction="column"
            fontFamily="avenir"
            align="center"
          >
            <Heading textAlign="center" pb="3.125rem" fontSize="1.5rem">
              INCOME ON THE INVESTMENT
            </Heading>
            <Flex w="100%" align="center" justify="flex-start">
              {" "}
              <Image
                w="3.125rem"
                h="3.125rem"
                src={rentalIncome}
                mr="0.625rem"
              />
              <Heading color="#D4AD4B" fontSize="1.25rem">
                RENTAL INCOME ₹5.7 LAKHS
              </Heading>
            </Flex>
            <Text color="#B88746" fontSize="1.563rem" my="0.938rem">
              +
            </Text>
            <Flex w="100%" align="center" justify="flex-start">
              {" "}
              <Image w="3.125rem" h="3.125rem" src={tax} mr="0.625rem" />
              <Heading color="#B78C23" fontSize="1.25rem">
                TAX SAVINGS UPTO ₹2 LAKH
              </Heading>
            </Flex>
            <Text color="#B88746" fontSize="1.563rem" my="0.938rem">
              +
            </Text>
            <Flex w="100%" align="center" justify="flex-start">
              {" "}
              <Image
                w="3.125rem"
                h="3.125rem"
                src={rentalYield}
                mr="0.625rem"
              />
              <Heading color="#B88746" fontSize="1.25rem">
                APPRECIATION EXPECTED 5% PER YEAR
              </Heading>
            </Flex>
            <Text color="#B88746" fontSize="1.563rem" my="0.938rem">
              +
            </Text>
            <Flex w="100%" align="center" justify="flex-start">
              {" "}
              <Image w="3.125rem" h="3.125rem" src={pmay} mr="0.625rem" />
              <Heading color="#8D6229" fontSize="1.25rem">
                PMAY BENIFIT ₹2.67 LAKHS
              </Heading>
            </Flex>
          </Flex>
          <Flex
            w="10%"
            h="100%"
            direction="column"
            justify="flex-end"
            align="center"
            px="1.563rem"
          >
            <Divider
              h="27.25rem"
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
            w="52%"
            h="100%"
            align="center"
            justify="flex-end"
            fontFamily="avenir"
            direction="column"
          >
            <Heading
              w="100%"
              textAlign="center"
              fontSize="1.5rem"
              pb="1.563rem"
            >
              INCOME GROWTH JOURNEY
            </Heading>
            <Flex w="100%" h="100%" gap="0.938rem" pb="0.625rem">
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                <Heading textAlign="center" fontSize="1.125rem">
                  ₹14.6 L
                </Heading>
                <Flex h="5rem" bgColor="#8D6229" />
                <Flex h="4.375rem" bgColor="#B88746" />
                <Flex h="3.75rem" bgColor="#B78C23" />
                <Flex h="8.125rem" bgColor="#D4AD4B" />
              </Flex>
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                {" "}
                <Heading textAlign="center" fontSize="1.125rem">
                  ₹12 L
                </Heading>
                <Flex h="4.375rem" bgColor="#B88746" />
                <Flex h="3.75rem" bgColor="#B78C23" />
                <Flex h="8.125rem" bgColor="#D4AD4B" />
              </Flex>
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                {" "}
                <Heading textAlign="center" fontSize="1.125rem">
                  ₹12 L
                </Heading>
                <Flex h="4.375rem" bgColor="#B88746" />
                <Flex h="3.75rem" bgColor="#B78C23" />
                <Flex h="8.125rem" bgColor="#D4AD4B" />
              </Flex>
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                {" "}
                <Heading textAlign="center" fontSize="1.125rem">
                  ₹12.4 L
                </Heading>
                <Flex h="4.375rem" bgColor="#B88746" />
                <Flex h="3.75rem" bgColor="#B78C23" />
                <Flex h="9.375rem" bgColor="#D4AD4B" />
              </Flex>
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                {" "}
                <Heading textAlign="center" fontSize="1.125rem">
                  ₹12.4 L
                </Heading>
                <Flex h="4.375rem" bgColor="#B88746" />
                <Flex h="3.75rem" bgColor="#B78C23" />
                <Flex h="9.375rem" bgColor="#D4AD4B" />
              </Flex>
              <Flex
                w="100%"
                direction="column"
                gap="0.313rem"
                justify="flex-end"
              >
                {" "}
                <Heading textAlign="center" fontSize="1.125rem">
                  ₹12.4 L
                </Heading>
                <Flex h="4.375rem" bgColor="#B88746" />
                <Flex h="3.75rem" bgColor="#B78C23" />
                <Flex h="9.375rem" bgColor="#D4AD4B" />
              </Flex>
            </Flex>
            <Divider border="1px solid" borderColor="#B88746" />
            <Flex
              w="100%"
              fontFamily="veralaRound"
              fontSize="1rem"
              align="center"
              justify="space-between"
              px="0.938rem"
            >
              <Text>YEAR 1</Text>
              <Text>YEAR 2</Text>
              <Text>YEAR 3</Text>
              <Text>YEAR 4</Text>
              <Text>YEAR 5</Text>
              <Text>YEAR 6</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex h="100%" align="center" p="1rem" pt="1.875rem" boxShadow="2xl">
          <Heading
            w="100%"
            fontFamily="avenir"
            textAlign="center"
            fontSize="2.125rem"
            bgGradient="linear(to-b, #B88746,#DFBD69)"
            bgClip="text"
          >
            TOTAL INCOME IN 6 YEARS{" "}
            <Text as={"span"} fontSize="1.25rem">
              APPROX.
            </Text>{" "}
            ₹76 LAKHS
          </Heading>
        </Flex>
      </Flex>
      {/* location */}
      <Flex
        overflow="hidden"
        w="100%"
        h="100%"
        direction="column"
        pt="3.125rem"
        align="center"
        justify="center"
        pb="3.125rem"
      >
        <Text fontFamily="goudy" pb="1.875rem" fontSize="2.5rem">
          LOCATION
        </Text>
        <Heading align="center" fontSize="1.5rem" pb="1.563rem">
          Sky High Tower Will Be First Premium Housing Lifestyle Within 30KM
          Radius Catering To 12 LAKH+ Individuals, Students, Immigrants.
        </Heading>
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
                direction="column"
                align="center"
                mr="1rem"
                _hover={{ cursor: "pointer" }}
              >
                <Image w="5rem" h="5rem" src={institute} />
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
                direction="column"
                align="center"
                mr="1rem"
                _hover={{ cursor: "pointer" }}
              >
                <Image w="5rem" h="5rem" src={industry} />
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
          <Flex overflow="hidden" w="10%" h="100%" px="1.563rem">
            <Flex
              direction="column"
              justify="center"
              align="center"
              w="100%"
              h="100%"
            >
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
          <Flex w="100%" direction="column" overflow="hidden">
            {" "}
            <Flex w="100%" align="center" pb="1.563rem" id="0">
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
            <div id="0">
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
            </div>
          </Flex>
          <Flex w="100%" direction="column" overflow="hidden">
            {" "}
            <Flex w="100%" align="center" pb="1.563rem" id="1">
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
            <div id="1">
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
            </div>
          </Flex>
          <Flex w="100%" direction="column" overflow="hidden">
            {" "}
            <Flex w="100%" align="center" pb="1.563rem" id="2">
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
            <div id="2">
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
            </div>
          </Flex>
          <Flex w="100%" direction="column" overflow="hidden">
            {" "}
            <Flex w="100%" align="center" pb="1.563rem" id="3">
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
            <div id="3">
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
            </div>
          </Flex>
        </Flex>
      </Flex>
      {/* Floor plan */}
      <Flex w="100%" h="100%" align="center" py="1.875rem" direction="column">
        <Text
          w="100%"
          align="center"
          fontFamily="goudy"
          fontSize="2.5rem"
          textTransform="uppercase"
          pb="1.875rem"
        >
          FLOOR PLAN
        </Text>
        <Flex w="100%" h="100%" gap="1.563rem">
          <Flex w="58%">
            <Image boxShadow="2xl" w="100%" h="100%" src={twoBhkFloor} />
          </Flex>
          <Flex w="42%" h="100%" alignSelf="center" direction="column">
            {" "}
            <Heading
              fontSize="1.5rem"
              textTransform="uppercase"
              fontFamily="avenir"
              pb="0.938rem"
            >
              SMART HOMES THAT ARE VASTU COMPLIANT
            </Heading>
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              border="1px solid #B88746"
            >
              <Text
                w="100%"
                textAlign="center"
                bgGradient="linear(to-b, #DFBD69, #B88746)"
                fontFamily="veralaRound"
                fontSize="1.25rem"
                p="0.938rem"
                color="white"
                borderBottom="1px solid #B88746"
              >
                TOWER DETAILS
              </Text>
              <Flex
                w="100%"
                pt="0.938rem"
                pb="1.875rem"
                px="1.875rem"
                direction="column"
                gap="1.875rem"
              >
                <Flex w="100%" align="center" gap="3.125rem">
                  <Text w="50%" fontFamily="veralaRound" fontSize="1.25rem">
                    TYPE OF UNITS
                  </Text>
                  <Heading w="50%" fontFamily="avenir" fontSize="1.25rem">
                    2 BHK(C), 2 BHK(L), 3 BHK
                  </Heading>
                </Flex>
                <Flex w="100%" align="center" gap="3.125rem">
                  <Text w="50%" fontFamily="veralaRound" fontSize="1.25rem">
                    SALEABLE AREA
                  </Text>
                  <Heading w="50%" fontFamily="avenir" fontSize="1.25rem">
                    1008-1748 SQFT.
                  </Heading>
                </Flex>
                <Flex w="100%" align="center" gap="3.125rem">
                  <Text w="50%" fontFamily="veralaRound" fontSize="1.25rem">
                    FLOORS
                  </Text>
                  <Heading w="50%" fontFamily="avenir" fontSize="1.25rem">
                    10
                  </Heading>
                </Flex>
                <Flex w="100%" align="center" gap="3.125rem">
                  <Text w="50%" fontFamily="veralaRound" fontSize="1.25rem">
                    NO. OF FLATS ON EACH FLOOR
                  </Text>
                  <Heading w="50%" fontFamily="avenir" fontSize="1.25rem">
                    8
                  </Heading>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* why invest */}
      <Flex w="100%" h="100%" direction="column" py="3.125rem" align="center">
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem">
          WHY INVEST?
        </Text>
        <Flex w="100%" h="100%" gap="0.938rem">
          <Flex
            w="100%"
            h="25rem"
            direction="column"
            pt="1.875rem"
            px="1.875rem"
            align="center"
          >
            <Heading fontFamily="avenir" fontSize="1.5rem" pb="1.563rem">
              CONNECTIVITY
            </Heading>{" "}
            <Flex w="100%" h="100%" direction="column" justify="space-between">
              <UnorderedList
                fontFamily="veralaRound"
                fontSize="1rem"
                pb="0.625rem"
              >
                <ListItem>
                  Peripheral Ring Road - Pass Through Arete Homes
                </ListItem>
                <ListItem>Outer Ring Road</ListItem>
                <ListItem>Railway Network - Large Ponneri Station</ListItem>
              </UnorderedList>
              <Image
                justifySelf="flex-end"
                h="9.375rem"
                src={locationImg}
                objectFit="contain"
                objectPosition="50% 80%"
              />
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="25rem"
            direction="column"
            pt="1.875rem"
            px="1.875rem"
            align="center"
          >
            <Heading fontFamily="avenir" fontSize="1.5rem" pb="1.563rem">
              FOREIGN INVESTMENTS
            </Heading>
            <Flex w="100%" h="100%" direction="column" justify="space-between">
              <UnorderedList
                fontFamily="veralaRound"
                fontSize="1rem"
                pb="0.625rem"
              >
                <ListItem>
                  JICA Japan International Cooperation Agency chose Ponneri to
                  manage, design and develop as a ‘Smart City’ in 3 phases.
                </ListItem>
              </UnorderedList>
              <Image
                justifySelf="flex-end"
                h="9.375rem"
                src={foreignInvest}
                objectFit="contain"
                objectPosition="50% 80%"
              />
            </Flex>
          </Flex>
          <Flex
            w="100%"
            h="25rem"
            direction="column"
            pt="1.875rem"
            px="1.875rem"
            align="center"
            justify="space-between"
          >
            <Heading fontFamily="avenir" fontSize="1.5rem" pb="1.563rem">
              SOCIAL FABRIC
            </Heading>
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="1rem"
              pb="0.625rem"
            >
              <ListItem>Nearby Stores - Revathi, Saravana etc.</ListItem>
              <ListItem>Nearby Restaurants- A2B, Royal Kitchen</ListItem>
              <ListItem> Nearby Cinemas - PVR, PGC theater</ListItem>
              <ListItem>
                Nearby Attractions - Pulicat Lake, Shri Lakshmi Golden Temple
              </ListItem>
            </UnorderedList>
            <Image
              w="100%"
              h="11.25rem"
              src={socialFabric}
              objectFit="contain"
              objectPosition="150%"
            />
          </Flex>
        </Flex>
      </Flex>
      {/*more amenities*/}
      <MoreAmenities />
      {/* our investors */}
      <Flex w="100%" h="100%" py="3.125rem" direction="column" align="center">
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem">
          OUR INVESTORS
        </Text>
        {/* carousel */}
      </Flex>
      <Flex w="100%" h="100%" gap="3.125rem" pb="5rem">
        <Flex w="60%" h="100%" direction="column" align="center">
          <Text fontFamily="goudy" fontSize="2.125rem" pb="1.875rem">
            7% ROI ON ARETE HOMES
          </Text>
          <Flex h="100%" gap="1.875rem" justify="center" align="center">
            <Image w="20.75rem" h="15.313rem" src={snarttwobhk} />
            <Flex
              h="100%"
              direction="column"
              justify="center"
              fontFamily="avenir"
            >
              <Heading fontSize="1.25rem" pb="0.938rem">
                SMART 2 BHK - 690 SQFT.
              </Heading>
              <Heading fontSize="1.5rem" pb="0.625rem">
                ₹34 LAKHS
              </Heading>
              <Text fontFamily="veralaRound" fontSize="1rem" pb="1.875rem">
                Fully Furnished With White Goods
              </Text>
              <Heading fontSize="1.5rem" pb="0.625rem">
                ₹20,000
              </Heading>
              <Text
                textTransform="uppercase"
                fontFamily="veralaRound"
                fontSize="1rem"
              >
                Rental Income per month
              </Text>
            </Flex>
          </Flex>
          <Button
            mt="1.25rem"
            alignSelf="center"
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
            VIEW DETAILS
          </Button>
        </Flex>
        <Flex
          w="40%"
          h="100%"
          align="center"
          justify="center"
          direction="column"
        >
          <Text
            fontSize="2.125rem"
            fontFamily="goudy"
            textTransform="uppercase"
            pb="1.563rem"
          >
            SCHEDULE A VISIT
          </Text>
          <Heading fontFamily="avenir" fontSize="1.5rem" pb="1.563rem">
            GET AN EXPERT OPINION
          </Heading>{" "}
          <form>
            <Flex w="100%" align="center" justify="center" direction="column">
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="0.938rem">
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
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="0.938rem">
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
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="0.938rem">
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
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" ml="4.5rem">
                  <Checkbox
                    ml="0.85rem"
                    value="yes"
                    fontFamily="veralaRound"
                    fontSize="1rem"
                    size="lg"
                  >
                    Book a visit
                  </Checkbox>
                </HStack>
              </FormControl>
              <Button
                mt="1.563rem"
                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                color="white"
                fontSize="1rem"
                fontFamily="avenir"
                p="0.938rem"
                _hover={{
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
                _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
              >
                SCHEDULE A CALL
              </Button>{" "}
            </Flex>
          </form>
        </Flex>
      </Flex>
    </>
  );
};

const TestimonialCarousel = (props) => {
  const { tenantsImg } = props;
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Box
      position={"relative"}
      width={"full"}
      height={"full"}
      overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Slider {...settings} style={{ display: "flex" }}>
        {tenantsImg.map((tes) => (
          <Flex
            align="center"
            justify="space-between"
            flexDirection="column"
            w="100%"
            mt="1.875rem"
            key={tes}
            height={"100%"}
          >
            <Image w="100%" h="100%" src={tes} />
          </Flex>
        ))}
      </Slider>
    </Box>
  );
};

const tenantsImg = [roiImg, roiImg, roiImg];

export default SkyhighInvest;

const gymclubimgs = [
  "/images/arete-homes/PGC-ACTIVITY AREA.jpeg",
  "/images/arete-homes/PGC-BANQUET HALL.jpg",
  "/images/arete-homes/PGC-CAFETERIA.jpg",
  "/images/arete-homes/PGC-GRAND ENTRANCE.jpg",
  "/images/arete-homes/PGC-GYM.jpg",
  "/images/arete-homes/PGC-multi sports arena.jpg",
  "/images/arete-homes/PGC-SQUASH COURT.jpg",
  "/images/arete-homes/PGC-SWIMMING POOL.jpg",
];

const MoreAmenities = () => {
  const [slider, setSlider] = useState(null);

  const settings = {
    // className: "center",
    centerMode: true,
    infinite: true,
    draggable: true,
    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      py="1.875rem"
      px="1.562rem"
    >
      <Text fontFamily="goudy" fontSize="2.5rem" pb="1.562rem">
        MORE AMENITIES
      </Text>
      <Box
        position={"relative"}
        height={"100%"}
        width={"full"}
        overflow={"hidden"}
        pl="4.687rem"
        pr="3.75rem"
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {gymclubimgs.map((prime) => (
            <Flex w="100%" align="center" direction="column">
              <Image
                key={prime}
                w="100%"
                height="15.437rem"
                pr="0.937rem"
                mb="0.938rem"
                position="relative"
                objectPosition="center"
                backgroundRepeat="no-repeat"
                objectFit="fill"
                src={prime}
              />
              <Heading textAlign="center" fontSize="1.5rem" fontFamily="avenir">
                MULTI SPORTS ARENA
              </Heading>
            </Flex>
          ))}
        </Slider>
        <IconButton
          aria-label="left-arrow"
          variant="outline"
          borderColor="#B88746"
          borderRadius="full"
          position="absolute"
          top="50%"
          left="0"
          h="3.125rem"
          w="3.125rem"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => {
            slider?.slickPrev();
          }}
        >
          <AiOutlineLeft color="#B88746" size="2.5rem" />
        </IconButton>

        <IconButton
          aria-label="right-arrow"
          borderRadius="full"
          variant="outline"
          borderColor="#B88746"
          position="absolute"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          right="0"
          top="50%"
          h="3.125rem"
          w="3.125rem"
          onClick={() => {
            slider?.slickNext();
          }}
        >
          <AiOutlineRight color="#B88746" size="2.5rem" />
        </IconButton>
      </Box>
    </Flex>
  );
};
