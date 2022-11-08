import {
  Flex,
  Heading,
  Image,
  Text,
  Divider,
  Box,
  Button,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import React from "react";

const TenthSec = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      px="100px"
      my="50px"
      align="center"
      justify="center"
      direction="column"
    >
      <Text fontFamily="goudy" fontSize="40px" mb="25px">
        SMART INVEST
      </Text>
      <Heading fontFamily="avenir" fontSize="34px" textAlign="center" mb="50px">
        AN EXCELLENT INVESTMENT OPPORTUNITY <br /> IN A LIFETIME GROWING ASSET
      </Heading>
      <Flex w="100%" h="100%">
        <Flex w="100%" h="100%" pos="relative">
          <Image
            // pos="absolute"
            h="568px"
            w="707px"
            objectPosition="center top"
            objectFit="cover"
            src="/images/sky-high/SMART INVEST.jpg"
          />
          <Image
            pos="absolute"
            h="225px"
            bottom="15px"
            right="15px"
            src="/images/sky-high/SMART INVEST ASSET.png"
          />
        </Flex>
        <Flex w="100%">
          <Flex
            h="100%"
            direction="column"
            justify="flex-start"
            align="center"
            px="25px"
          >
            <Divider
              h="80px"
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
          <Flex direction="column" align="center" justify="center">
            <Heading
              w="100%"
              fontSize="24px"
              textAlign="left"
              fontFamily="avenir"
              mb="25px"
            >
              EMI = RENT
            </Heading>
            <Flex mb="25px" alignSelf="flex-start">
              <TableContainer>
                <Table>
                  <Thead
                    textTransform="uppercase"
                    bgGradient="linear(to-b, #DFBD69, #B88746)"
                  >
                    {" "}
                    <Tr>
                      <Th
                        colSpan="2"
                        fontFamily="veralaRound"
                        fontSize="20px"
                        fontWeight="400"
                        color="white"
                        textAlign="center"
                        border="1px solid #B88746"
                        p="15px"
                      >
                        Smart 2 BHK - 690 sqft.
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td
                        w="100%"
                        textAlign="left"
                        fontFamily="veralaRound"
                        fontSize="18px"
                        border="1px solid #B88746"
                        p="25px"
                      >
                        <Text
                          as="span"
                          fontWeight="bold"
                          fontFamily="avenir"
                          fontSize="24px"
                        >
                          Rs. 34 LAKHS{" "}
                        </Text>
                        <br /> Fully Furnished <br /> With White Goods
                      </Td>
                      <Td
                        w="100%"
                        textAlign="left"
                        fontFamily="veralaRound"
                        fontSize="18px"
                        border="1px solid #B88746"
                        p="25px"
                      >
                        <Text
                          as="span"
                          fontWeight="bold"
                          fontFamily="avenir"
                          fontSize="24px"
                        >
                          Rs. 20,000
                        </Text>{" "}
                        p.m.
                        <br />
                        For 3 Years
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Flex>
            <Heading fontFamily="avenir" fontSize="24px" mb="15px">
              2 YEAR DOWNPAYMENT PLAN
            </Heading>
            <Text
              mb="10px"
              textAlign="center"
              textTransform="uppercase"
              fontFamily="veralaRound"
              fontSize="16px"
            >
              Rental income + TAx savings + PMAY Benefits + Appreciation{" "}
            </Text>
            <Text
              textAlign="center"
              fontWeight="bold"
              fontSize="30px"
              mb="10px"
            >
              &#8595;
            </Text>
            <Text fontFamily="veralaRound" fontSize="24px" mb="25px">
              Income growth journey
            </Text>
            <Button
              w="146px"
              h="51px"
              fontSize="16px"
              fontFamily="avenir"
              bgGradient="linear(to-b, #B88746 ,#DFBD69)"
              color="white"
              _hover={{
                bgGradient: "linear(to-b, #DFBD69, #B88746)",
              }}
              _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
            >
              KNOW MORE
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TenthSec;
