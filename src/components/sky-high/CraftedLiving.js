import { Flex, Image, Text, Box, Divider, Heading } from "@chakra-ui/react";
//import { motion, useAnimation, useInView } from "framer-motion";
import React from "react";
import { useEffect } from "react";
//import { useRef } from "react";
import { useInView } from "react-intersection-observer";

const FourthSec = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "50px",
  });
  //const ref = useRef(null);
  /*const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });*/

  return (
    <Flex
      ref={ref}
      w="100%"
      h="70%"
      p="6.25rem"
      direction="column"
      align="center"
      justify="center"
    >
      <Text
        transform={inView ? "none" : "translateY(-50px)"}
        opacity={inView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
        textAlign="center"
        mb="3.2rem"
      >
        CRAFTED LIVING OF SKY HIGH LIFE AND AMENITIES
      </Text>
      <Flex w="100%" h="100%" direction="column">
        {/* first-left-sec */}
        <Flex w="100%" h="100%" align="flex-start" justify="center">
          <Flex w="100%" h="100%" pr="1.5rem">
            <Image
              w="46rem"
              h="23rem"
              opacity={inView ? "1" : "0"}
              transition="all 2s 4s"
              src="/images/sky-high/DECK1.jpg"
              boxShadow="0px 0px 0px 3px #B88746 opacity(25) blur"
            />
          </Flex>
          <Flex w="100%" h="100%" align="flex-start" justify="center">
            <Flex
              transform={inView ? "none" : "translateY(-50px)"}
              opacity={inView ? "1" : "0"}
              transition="all 2s 2s"
              direction="column"
              align="center"
              pr="1.5rem"
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
              py="5.1rem"
              w="100%"
              h="100%"
              direction="column"
              justify="center"
            >
              <Heading
                opacity={inView ? "1" : "0"}
                transition="all 2s 2s"
                fontFamily="avenir"
                fontSize="2.125rem"
                mb="0.9rem"
              >
                3 SKY DECKS
              </Heading>
              <Text
                opacity={inView ? "1" : "0"}
                transition="all 2s 2s"
                fontFamily="veralaRound"
                fontSize="1rem"
                mb="1.5rem"
              >
                Enjoy the panoramic sky views from different levels of the
                tower.
              </Text>
              <Heading
                opacity={inView ? "1" : "0"}
                transition="all 2s 4s"
                fontFamily="avenir"
                fontSize="1.25rem"
                mb="0.9rem"
              >
                CAFE DECK
              </Heading>
              <Heading
                opacity={inView ? "1" : "0"}
                transition="all 2s 6s"
                fontFamily="avenir"
                fontSize="1.25rem"
                mb="0.9rem"
              >
                KIDS AREA DECK
              </Heading>
              <Heading
                opacity={inView ? "1" : "0"}
                transition="all 2s 8s"
                fontFamily="avenir"
                fontSize="1.25rem"
              >
                LOUNGE DECK
              </Heading>
            </Flex>{" "}
          </Flex>
        </Flex>
        {/* first-right-sec */}
        <Flex w="100%" h="100%" align="center" justify="center">
          <Flex
            opacity={inView ? "1" : "0"}
            transition="all 2s 6s"
            w="100%"
            h="100%"
            my="1.5rem"
            pr="1.5rem"
          >
            <Image
              w="46rem"
              h="23rem"
              src="/images/sky-high/DECK2.jpg"
              boxShadow="dark-lg"
            />
          </Flex>
          <Flex
            opacity={inView ? "1" : "0"}
            transition="all 2s 8s"
            w="100%"
            h="100%"
            my="1.5rem"
          >
            <Image
              w="46rem"
              h="23rem"
              src="/images/sky-high/DECK3.jpg"
              boxShadow="dark-lg"
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex ref={ref} w="100%" h="100%" align="flex-start" justify="center">
        <Flex h="100%" direction="column" alignSelf="center">
          <Heading fontFamily="avenir" fontSize="2.125rem" mb="0.9rem">
            SKY TERRACE AVENUE
          </Heading>
          <Text fontFamily="veralaRound" fontSize="1rem">
            The perfect spot to rediscover a forgotten time of the day: Golden
            Sunrises.
          </Text>
        </Flex>
        <Flex
          transform={inView ? "none" : "translateY(-50px)"}
          opacity={inView ? "1" : "0"}
          transition="all 2s 2s"
          direction="column"
          align="center"
          
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
            boxShadow="0px 0px 0px 3px #B88746 opacity(25) blur"
            borderRadius="50%"
          />
        </Flex>
        <Flex position="relative" w="100%">
          <Image
            position="absolute"
            right="0rem"
            w="46rem"
            h="23rem"
            src="/images/sky-high/TERRACE.jpg"
            boxShadow="dark-lg"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FourthSec;
