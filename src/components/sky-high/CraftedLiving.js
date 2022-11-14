import { Flex, Image, Text, Box, Divider, Heading } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const FourthSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      p="100px"
      direction="column"
      align="center"
      justify="center"
    >
      <Text
        transform={isInView ? "none" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="40px"
        textAlign="center"
        mb="50px"
      >
        CRAFTED LIVING OF SKY HIGH LIFE AND AMENITIES
      </Text>
      <Flex w="100%" h="100%" direction="column">
        {/* first-left-sec */}
        <Flex w="100%" h="100%" align="flex-start" justify="center">
          <Flex w="100%" h="100%" pr="25px">
            <Image
              opacity={isInView ? "1" : "0"}
              transition="all 2s 4s"
              src="/images/sky-high/DECK1.jpg"
              boxShadow="dark-lg"
            />
          </Flex>
          <Flex w="100%" h="100%" align="flex-start" justify="center">
            <Flex
              transform={isInView ? "none" : "translateY(-50px)"}
              opacity={isInView ? "1" : "0"}
              transition="all 2s 2s"
              direction="column"
              align="center"
              pr="25px"
            >
              <Divider
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
                h="84px"
              />{" "}
              <Box
                height="30px"
                width="30px"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
              />
            </Flex>{" "}
            <Flex
              py="50px"
              w="100%"
              h="100%"
              direction="column"
              justify="center"
            >
              <Heading
                opacity={isInView ? "1" : "0"}
                transition="all 2s 2s"
                fontFamily="avenir"
                fontSize="34px"
                mb="15px"
              >
                3 SKY DECKS
              </Heading>
              <Text
                opacity={isInView ? "1" : "0"}
                transition="all 2s 2s"
                fontFamily="veralaRound"
                fontSize="16px"
                mb="25px"
              >
                Enjoy the panoramic sky views from different levels of the
                tower.
              </Text>
              <Heading
                opacity={isInView ? "1" : "0"}
                transition="all 2s 4s"
                fontFamily="avenir"
                fontSize="20px"
                mb="15px"
              >
                CAFE DECK
              </Heading>
              <Heading
                opacity={isInView ? "1" : "0"}
                transition="all 2s 6s"
                fontFamily="avenir"
                fontSize="20px"
                mb="15px"
              >
                KIDS AREA DECK
              </Heading>
              <Heading
                opacity={isInView ? "1" : "0"}
                transition="all 2s 8s"
                fontFamily="avenir"
                fontSize="20px"
              >
                LOUNGE DECK
              </Heading>
            </Flex>{" "}
          </Flex>
        </Flex>
        {/* first-right-sec */}
        <Flex w="100%" h="100%" align="center" justify="center">
          <Flex
            opacity={isInView ? "1" : "0"}
            transition="all 2s 6s"
            w="100%"
            h="100%"
            my="25px"
            pr="25px"
          >
            <Image src="/images/sky-high/DECK2.jpg" boxShadow="dark-lg" />
          </Flex>
          <Flex
            opacity={isInView ? "1" : "0"}
            transition="all 2s 8s"
            w="100%"
            h="100%"
            my="25px"
          >
            <Image src="/images/sky-high/DECK3.jpg" boxShadow="dark-lg" />
          </Flex>
        </Flex>
      </Flex>
      <Flex ref={ref} w="100%" h="100%" align="flex-start" justify="center">
        <Flex h="100%" direction="column" alignSelf="center">
          <Heading fontFamily="avenir" fontSize="34px" mb="15px">
            SKY TERRACE AVENUE
          </Heading>
          <Text fontFamily="veralaRound" fontSize="18px">
            The perfect spot to rediscover a forgotten time of the day: Golden
            Sunrises.
          </Text>
        </Flex>
        <Flex
          transform={isInView ? "none" : "translateY(-50px)"}
          opacity={isInView ? "1" : "0"}
          transition="all 2s 2s"
          direction="column"
          align="center"
          px="25px"
        >
          <Divider
            orientation="vertical"
            border="3px solid"
            borderColor="#DFBD69"
            bgColor="#DFBD69"
            h="84px"
          />{" "}
          <Box
            height="30px"
            width="30px"
            backgroundColor="#DFBD69"
            border="3px solid white"
            boxShadow="0px 0px 0px 3px #B88746"
            borderRadius="50%"
          />
        </Flex>
        <Flex w="100%">
          <Image src="/images/sky-high/TERRACE.jpg" boxShadow="dark-lg" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FourthSec;
