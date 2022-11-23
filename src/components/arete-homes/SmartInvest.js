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
import { useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";

const TenthSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      mt="1.875rem"
      align="center"
      justify="center"
      direction="column"
    >
      <Text
        transform={isInView ? "translateY(0)" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
        mb="1.563rem"
      >
        SMART INVEST
      </Text>
      <Heading
        opacity={isInView ? "1" : "0"}
        transition="all 2s 2s"
        fontFamily="avenir"
        fontSize="2.125rem"
        textAlign="center"
        mb="1.563rem"
      >
        RETURNS HIGHER THAN YOUR IMAGINATION
      </Heading>
      <Flex w="100%" h="100%">
        <Flex
          w="50%"
          transform={isInView ? "translateX(0)" : "translateX(100px)"}
          opacity={isInView ? "1" : "0"}
          transition="all 2s 4s"
          pos="relative"
          justify="center"
        >
          <Image
            // pos="absolute"
            h="29.25rem"
            w="100%"
            objectPosition="center top"
            objectFit="cover"
            src="/images/arete-homes/SMART INVEST.jpg"
          />
          <Flex w="100%" pos="absolute" justify="center">
            <Heading
              textAlign="center"
              fontSize="1.25rem"
              p="1.25rem"
              bgColor="#DFBD69"
            >
              START YOUR INCOME FROM DAY 1
            </Heading>
          </Flex>
        </Flex>
        <Flex
          h="100%"
          direction="column"
          justify="flex-start"
          align="center"
          px="1.562rem"
          transform={isInView ? "translateY(0)" : "translateY(-50px)"}
          opacity={isInView ? "1" : "0"}
          transition="all 2s 4s"
        >
          <Divider
            h="4rem"
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
          w="50%"
          pr="6.25rem"
          direction="column"
          align="center"
          justify="center"
        >
          <Heading
            transform={isInView ? "translateX(0)" : "translateX(-100px)"}
            opacity={isInView ? "1" : "0"}
            transition="all 2s 4s"
            w="100%"
            fontSize="1.5rem"
            textAlign="left"
            fontFamily="avenir"
            mb="1.5rem"
          >
            EARN HIGHEST RENTAL INCOME (ROI)
          </Heading>
          <Flex
            w="100%"
            mb="1.562rem"
            alignSelf="flex-start"
            opacity={isInView ? "1" : "0"}
            transition="all 2s 4s"
          >
            <TableContainer>
              <Table w="100%">
                <Thead
                  textTransform="uppercase"
                  bgGradient="linear(to-b, #DFBD69, #B88746)"
                >
                  {" "}
                  <Tr>
                    <Th
                      fontFamily="veralaRound"
                      fontSize="1.25rem"
                      fontWeight="400"
                      color="white"
                      textAlign="center"
                      border="1px solid #B88746"
                      p="0.937rem"
                    >
                      SMART HOME
                    </Th>
                    <Th
                      fontFamily="veralaRound"
                      fontSize="1.25rem"
                      fontWeight="400"
                      color="white"
                      textAlign="center"
                      border="1px solid #B88746"
                      p="0.937rem"
                    >
                      PRICE
                    </Th>
                    <Th
                      fontFamily="veralaRound"
                      fontSize="1.25rem"
                      fontWeight="400"
                      color="white"
                      textAlign="center"
                      border="1px solid #B88746"
                      p="0.937rem"
                    >
                      RENTAL INCOME
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td
                      textAlign="left"
                      fontFamily="veralaRound"
                      fontSize="1.125rem"
                      border="1px solid #B88746"
                      p="1.25rem"
                    >
                      <Text
                        as="span"
                        fontWeight="bold"
                        fontFamily="avenir"
                        fontSize="1.5rem"
                        pb="0.313rem"
                      >
                        2 BHK
                      </Text>{" "}
                      <br />
                      1085 SQFT.
                    </Td>
                    <Td
                      textAlign="left"
                      fontFamily="veralaRound"
                      fontSize="1.125rem"
                      border="1px solid #B88746"
                      p="1.125rem"
                    >
                      <Text
                        as="span"
                        fontWeight="bold"
                        fontFamily="avenir"
                        fontSize="1.5rem"
                        pb="0.313rem"
                      >
                        Rs. 52 LAKHS
                      </Text>{" "}
                      <br />
                      Fully Furnished With <br />
                      White Goods
                    </Td>
                    <Td
                      textAlign="left"
                      fontFamily="veralaRound"
                      fontSize="1.125rem"
                      border="1px solid #B88746"
                      p="1.25rem"
                    >
                      <Text
                        as="span"
                        fontWeight="bold"
                        fontFamily="avenir"
                        fontSize="1.5rem"
                        pb="0.313rem"
                      >
                        Rs. 32,000
                      </Text>{" "}
                      <br />
                      Per Month
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      textAlign="left"
                      fontFamily="veralaRound"
                      fontSize="1.125rem"
                      border="1px solid #B88746"
                      p="1.25rem"
                    >
                      <Text
                        as="span"
                        fontWeight="bold"
                        fontFamily="avenir"
                        fontSize="1.5rem"
                        pb="0.313rem"
                      >
                        3 BHK
                      </Text>{" "}
                      <br />
                      1787 SQFT.
                    </Td>
                    <Td
                      textAlign="left"
                      fontFamily="veralaRound"
                      fontSize="1.125rem"
                      border="1px solid #B88746"
                      p="1.25rem"
                    >
                      <Text
                        as="span"
                        fontWeight="bold"
                        fontFamily="avenir"
                        fontSize="1.5rem"
                        pb="0.313rem"
                      >
                        Rs. 85 LAKHS
                      </Text>{" "}
                      <br />
                      Fully Furnished With <br /> White Goods
                    </Td>
                    <Td
                      textAlign="left"
                      fontFamily="veralaRound"
                      fontSize="1.125rem"
                      border="1px solid #B88746"
                      p="1.25rem"
                    >
                      <Text
                        as="span"
                        fontWeight="bold"
                        fontFamily="avenir"
                        fontSize="1.5rem"
                        pb="0.313rem"
                      >
                        Rs. 48,000
                      </Text>{" "}
                      <br />
                      Per Month
                    </Td>
                  </Tr>
                </Tbody>
              </Table>{" "}
            </TableContainer>
          </Flex>
          <Heading
            opacity={isInView ? "1" : "0"}
            transition="all 2s 6s"
            fontFamily="avenir"
            fontSize="1.25rem"
            mb="1.562rem"
          >
            ASSURED RENTAL INCOME FOR 3 YEARS!
          </Heading>
          <Button
            opacity={isInView ? "1" : "0"}
            transition="all 2s 6s"
            w="9.125"
            h="3.187rem"
            fontSize="1rem"
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
  );
};

export default TenthSec;
