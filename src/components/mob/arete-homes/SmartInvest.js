import {
  Flex,
  Heading,
  Image,
  Text,
  Divider,
  Box,
  Button,
  VStack,
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
        fontSize="1.5rem"
        mb="1.563rem"
      >
        SMART INVEST
      </Text>
      <Heading
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="avenir"
        fontSize="1.125rem"
        textAlign="center"
        mb="1.563rem"
      >
        RETURNS HIGHER THAN YOUR IMAGINATION
      </Heading>
      <Flex w="100%" h="100%" overflow="hidden" direction="column">
        <Flex
          w="100%"
          overflow="hidden"
          pos="relative"
          justify="center"
        >
          <Image
             className="expandcar reveal"
            // pos="absolute"
            
            h="31.25rem"
            w="100%"
            objectPosition="center top"
            objectFit="cover"
            src="/images/arete-homes/SMART INVEST.jpg"
          />
          <Flex w="100%" pos="absolute" justify="center">
            <Heading
              opacity={isInView ? "1" : "0"}
              transition="all 2s 2s"
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
          w="100%"
          px="1rem"
          direction="column"
          align="center"
          justify="center"
        >
          <Heading
            transform={isInView ? "translateX(0)" : "translateX(-100px)"}
            opacity={isInView ? "1" : "0"}
            transition="all 2s"
            w="100%"
            fontSize="1.5rem"
            textAlign="left"
            fontFamily="avenir"
            mb="0.938rem"
          >
            EARN HIGHEST RENTAL INCOME (ROI)
          </Heading>
          <Flex
            w="100%"
            mb="0.938rem"
            alignSelf="flex-start"
            opacity={isInView ? "1" : "0"}
            transition="all 2s"
            direction="column"
          >
            <Flex w="100%" border="1px solid #B88746">
              {" "}
              <Text
                textAlign="center"
                border="1px solid #B88746"
                borderLeft="none"
                borderBottom="none"
                w="30%"
                fontFamiily="veralaRound"
                fontSize="1rem"
                px="0.625rem"
                py="0.938rem"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                color="white"
              >
                SMART HOME
              </Text>{" "}
              <Text
                textAlign="center"
                border="1px solid #B88746"
                borderLeft="none"
                borderBottom="none"
                w="40%"
                fontFamiily="veralaRound"
                fontSize="1rem"
                px="0.625rem"
                py="0.938rem"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                color="white"
              >
                PRICE
              </Text>{" "}
              <Text
                textAlign="center"
                border="1px solid #B88746"
                borderLeft="none"
                borderBottom="none"
                borderRight="none"
                w="30%"
                fontFamiily="veralaRound"
                fontSize="1rem"
                px="0.625rem"
                py="0.938rem"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                color="white"
              >
                RENTAL INCOME
              </Text>
            </Flex>

            <Flex w="100%" borderLeft="1px solid #B88746" borderRight="1px solid #B88746">
              <VStack
                w="30%"
                align="flex-start"
                px="1.25rem"
                py="1.25rem"
                borderRight="1px solid #B88746"
              >
                <Heading fontFamily="avenir" fontSize="1.25rem">
                  2 BHK
                </Heading>
                <Text fontSize="1rem" fontFamily="veralaRound">
                  1085 SQFT.
                </Text>
              </VStack>
              <VStack
                w="40%"
                align="flex-start"
                px="1.25rem"
                py="1.25rem"
                borderRight="1px solid #B88746"
              >
                <Heading fontFamily="avenir" fontSize="1.25rem">
                  Rs. 52 LAKHS
                </Heading>
                <Text fontSize="1rem" fontFamily="veralaRound">
                  Fully Furnished With White Goods
                </Text>
              </VStack>
              <VStack w="30%" align="flex-start" px="1.25rem" py="1.25rem">
                <Heading fontFamily="avenir" fontSize="1.25rem">
                  Rs. 32,000
                </Heading>
                <Text fontSize="1rem" fontFamily="veralaRound">
                  Per Month
                </Text>
              </VStack>
            </Flex>
            <Flex w="100%" borderTop="none" border="1px solid #B88746">
              <VStack
                w="30%"
                align="flex-start"
                px="1.25rem"
                py="1.25rem"
                borderRight="1px solid #B88746"
              >
                <Heading fontFamily="avenir" fontSize="1.25rem">
                  3 BHK
                </Heading>
                <Text fontSize="1rem" fontFamily="veralaRound">
                  1787 SQFT.
                </Text>
              </VStack>
              <VStack
                w="40%"
                align="flex-start"
                px="1.25rem"
                py="1.25rem"
                borderRight="1px solid #B88746"
              >
                <Heading fontFamily="avenir" fontSize="1.25rem">
                  Rs. 85 LAKHS
                </Heading>
                <Text fontSize="1rem" fontFamily="veralaRound">
                  Fully Furnished With White Goods
                </Text>
              </VStack>
              <VStack w="30%" align="flex-start" px="1.25rem" py="1.25rem">
                <Heading fontFamily="avenir" fontSize="1.25rem">
                  Rs. 48,000
                </Heading>
                <Text fontSize="1rem" fontFamily="veralaRound">
                  Per Month
                </Text>
              </VStack>
            </Flex>
          </Flex>
          <Heading
            opacity={isInView ? "1" : "0"}
            transition="all 2s"
            fontFamily="avenir"
            fontSize="1.25rem"
            mb="0.938rem"
          >
            ASSURED RENTAL INCOME FOR 3 YEARS!
          </Heading>
          <Button
            opacity={isInView ? "1" : "0"}
            transition="all 2s"
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
