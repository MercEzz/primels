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
import React, { useRef } from "react";
import { useInView } from "framer-motion";

const TenthSec = () => {
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
      my="3.125rem"
      align="center"
      justify="center"
      direction="column"
    >
      <Text
        transform={isInView ? "none" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
        mb="1.562rem"
      >
        SMART INVEST
      </Text>
      <Heading
        opacity={isInView ? "1" : "0"}
        transition="all 2s 1s"
        fontFamily="avenir"
        fontSize="2.125rem"
        textAlign="center"
        mb="3.125rem"
      >
        AN EXCELLENT INVESTMENT OPPORTUNITY <br /> IN A LIFETIME GROWING ASSET
      </Heading>
      <Flex w="100%" h="100%">
        <Flex
          transform={isInView ? "none" : "translateX(50px)"}
          opacity={isInView ? "1" : "0"}
          transition="all 2s 2s"
          w="100%"
          h="100%"
          pos="relative"
        >
          <Image
            // pos="absolute"
            h="35.5rem"
            w="44.187rem"
            objectPosition="center top"
            objectFit="cover"
            src="/images/sky-high/SMART INVEST.jpg"
          />
          <Image
            pos="absolute"
            h="14.062rem"
            bottom="0.937rem"
            right="0.937rem"
            src="/images/sky-high/SMART INVEST ASSET.png"
          />
        </Flex>
        <Flex w="100%">
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
          <Flex direction="column" align="center" justify="center">
            <Heading
              transform={isInView ? "none" : "translateX(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 2s"
              w="100%"
              fontSize="1.5rem"
              textAlign="left"
              fontFamily="avenir"
              mb="1.562rem"
            >
              EMI = RENT
            </Heading>
            <Flex
              opacity={isInView ? "1" : "0"}
              transition="all 2s 2s"
              mb="1.562rem"
              alignSelf="flex-start"
            >
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
                        fontSize="1.25rem"
                        fontWeight="400"
                        color="white"
                        textAlign="center"
                        border="1px solid #B88746"
                        p="0.937rem"
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
                        fontSize="1.125rem"
                        border="1px solid #B88746"
                        p="1.562rem"
                      >
                        <Text
                          as="span"
                          fontWeight="bold"
                          fontFamily="avenir"
                          fontSize="1.5rem"
                        >
                          Rs. 34 LAKHS{" "}
                        </Text>
                        <br /> Fully Furnished <br /> With White Goods
                      </Td>
                      <Td
                        w="100%"
                        textAlign="left"
                        fontFamily="veralaRound"
                        fontSize="1.125rem"
                        border="1px solid #B88746"
                        p="1.562rem"
                      >
                        <Text
                          as="span"
                          fontWeight="bold"
                          fontFamily="avenir"
                          fontSize="1.5rem"
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
            <Flex
              opacity={isInView ? "1" : "0"}
              transition="all 2s 3s"
              w="100%"
              align="center"
              direction="column"
            >
              <Heading fontFamily="avenir" fontSize="1.5rem" mb="0.937rem">
                2 YEAR DOWNPAYMENT PLAN
              </Heading>
              <Text
                mb="0.625rem"
                textAlign="center"
                textTransform="uppercase"
                fontFamily="veralaRound"
                fontSize="1rem"
              >
                Rental income + TAx savings + PMAY Benefits + Appreciation{" "}
              </Text>
              <Text
                textAlign="center"
                fontWeight="bold"
                fontSize="1.875rem"
                mb="0.625rem"
              >
                &#8595;
              </Text>
              <Text fontFamily="veralaRound" fontSize="24px" mb="25px">
                Income growth journey
              </Text>
              <Button
                w="9.125rem"
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
      </Flex>
    </Flex>
  );
};

export default TenthSec;
