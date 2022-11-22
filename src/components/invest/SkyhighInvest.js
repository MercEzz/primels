import {
  Flex,
  Image,
  Text,
  Box,
  Divider,
  Heading,
  Button,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import smartInvest from "../Invest imgs/INTRO1.jpg";
//
import rentalYield from "../Invest imgs/renta;l yield.svg";
import rentalIncome from "../Invest imgs/rental income.svg";
import rentalyears from "../Invest imgs/rental income years.svg";

const SkyhighInvest = () => {
  return (
    <>
      {/* Smart invest */}
      <Flex
        w="100%"
        h="100%"
        direction="column"
        align="center"
        py="5rem"
        px="6.25rem"
      >
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem">
          SMART INVESTMENT
        </Text>
        <Flex w="100%" h="100%">
          <Flex w="100%" h="100%">
            <Image src={smartInvest} />
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
              <Heading fontSize="1.5rem" pb="0.938rem">
                ARETE HOMES SKY HIGH TOWER
              </Heading>
              <Heading fontSize="1.25rem" pb="0.938rem">
                SMART 2 BHK - 690 SQFT.
              </Heading>
              <Heading fontSize="2.125rem" pb="0.625rem">
                ₹ 34 LAKHS
              </Heading>
              <Text fontFamily="veralaRound" fontSize="1rem" pb="2.188rem">
                Fully Furnished With White Goods
              </Text>
              <Flex w="100%" gap="2.938rem" pb="1.875rem">
                <Flex w="100%" direction="column" align="center">
                  <Image
                    w="3.125rem"
                    h="3.125rem"
                    src={rentalYield}
                    mb="0.625rem"
                  />
                  <Heading fontSize="1.5rem" mb="0.625rem">
                    7 %
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
                    ₹ 20,000
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
                I AM INTERESTED
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* easy payment plan sec */}
      <Flex
        w="100%"
        h="100%"
        direction="column"
        align="center"
        px="6.25rem"
        pb="5rem"
      >
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
            <Heading align="center" fontSize="1.5rem" pb="3.125rem">
              10% PRINCIPAL INSTALLMENT
              <br /> IN 2 YEARS{" "}
            </Heading>
            <Flex w="100%" gap="0.625rem">
              <Text w="20%" fontSize="1rem" fontFamily="veralaRound">
                Booking <br />
                Amount
              </Text>
              <Text w="100%" fontSize="1rem" fontFamily="veralaRound">
                7 Installments
                <br />
                rs. 50,000 every quater
              </Text>
            </Flex>
            <Flex w="100%" h="0.938rem" my="1.25rem">
              <Flex bgColor="#B88746" w="20%" />
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
                <Box w="100%" bgGradient="linear(to-r, #DFBD69,#B88746)" />
                <Box w="100%" bgGradient="linear(to-r, #DFBD69,#B88746)" />
                <Box w="100%" bgGradient="linear(to-r, #DFBD69,#B88746)" />
                <Box w="100%" bgGradient="linear(to-r, #DFBD69,#B88746)" />
                <Box w="100%" bgGradient="linear(to-r, #DFBD69,#B88746)" />
                <Box w="100%" bgGradient="linear(to-r, #DFBD69,#B88746)" />
              </Flex>
            </Flex>
            <Flex w="100%" gap="0.625rem" pb="1.875rem">
              <Heading w="20%" fontSize="1rem" fontFamily="veralaRound">
                ₹ 1 LAKH
              </Heading>
              <Heading w="100%" fontSize="1rem" fontFamily="veralaRound">
                ₹ 3.5 LAKHS
              </Heading>
            </Flex>
            <Divider
              orientation="horizontal"
              border="1px solid"
              borderColor="#B88746"
              bgColor="#B88746"
              mb="0.938rem"
            />
            <Flex w="100%" justify="space-between">
              <Text fontSize="1rem" fontFamily="veralaRound">
                Total Principal Amount{" "}
              </Text>
              <Heading fontSize="1.5rem">₹ 4,50,000</Heading>
            </Flex>
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
              90% HOME LOAN
            </Heading>
            <Flex w="100%" gap="2.938rem" pb="1.875rem">
              <Flex w="100%" direction="column" align="center">
                <Image
                  w="3.125rem"
                  h="3.125rem"
                  src={rentalYield}
                  mb="0.625rem"
                />
                <Heading fontSize="1.5rem" mb="0.625rem">
                  7 %
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
                  ₹ 20,000
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
              <Heading fontSize="1.5rem">₹ 20,000</Heading>
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
    </>
  );
};

export default SkyhighInvest;
