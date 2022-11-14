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
      my="50px"
      align="center"
      justify="center"
      direction="column"
    >
      <Text fontFamily="goudy" fontSize="40px" mb="25px">
        SMART INVEST
      </Text>
      <Heading fontFamily="avenir" fontSize="34px" textAlign="center" mb="50px">
        RETURNS HIGHERN THAN YOUR IMAGINATION
      </Heading>
      <Flex w="100%" h="100%">
        <Flex w="100%">
          <Image
            // pos="absolute"
            h="568px"
            w="100%"
            objectPosition="center top"
            objectFit="cover"
            src="/images/arete-homes/SMART INVEST.jpg"
          />
        </Flex>

        <Flex w="100%" h="100%">
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
          <Flex
            w="100%"
            pr="100px"
            direction="column"
            align="center"
            justify="center"
          >
            <Heading
              w="100%"
              fontSize="24px"
              textAlign="left"
              fontFamily="avenir"
              mb="25px"
            >
              EARN HIGHEST RENTAL INCOME (ROI)
            </Heading>
            <Flex w="100%" mb="25px" alignSelf="flex-start">
              <TableContainer>
                <Table>
                  <Thead
                    textTransform="uppercase"
                    bgGradient="linear(to-b, #DFBD69, #B88746)"
                  >
                    {" "}
                    <Tr>
                      <Th
                        fontFamily="veralaRound"
                        fontSize="20px"
                        fontWeight="400"
                        color="white"
                        textAlign="center"
                        border="1px solid #B88746"
                        p="15px"
                      >
                        SMART HOME
                      </Th>
                      <Th
                        fontFamily="veralaRound"
                        fontSize="20px"
                        fontWeight="400"
                        color="white"
                        textAlign="center"
                        border="1px solid #B88746"
                        p="15px"
                      >
                        PRICE
                      </Th>
                      <Th
                        fontFamily="veralaRound"
                        fontSize="20px"
                        fontWeight="400"
                        color="white"
                        textAlign="center"
                        border="1px solid #B88746"
                        p="15px"
                      >
                        RENTAL INCOME
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
                          2 BHK
                        </Text>{" "}
                        <br />
                        1085 SQFT.
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
                          Rs. 52 LAKHS
                        </Text>{" "}
                        <br />
                        Fully Furnished With <br />
                        White Goods
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
                          Rs. 32,000
                        </Text>{" "}
                        <br />
                        Per Month
                      </Td>
                    </Tr>
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
                          3 BHK
                        </Text>{" "}
                        <br />
                        1787 SQFT.
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
                          Rs. 85 LAKHS
                        </Text>{" "}
                        <br />
                        Fully Furnished With <br /> White Goods
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
                          Rs. 48,000
                        </Text>{" "}
                        <br />
                        Per Month
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Flex>
            <Heading fontFamily="avenir" fontSize="20px" mb="25px">
              ASSURED RENTAL INCOME FOR 3 YEARS!
            </Heading>
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
