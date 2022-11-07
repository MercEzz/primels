import { Flex, Image, Text, Box, Divider, Heading } from "@chakra-ui/react";
import React from "react";

const FourthSec = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      p="100px"
      direction="column"
      align="center"
      justify="center"
    >
      <Text fontFamily="goudy" fontSize="40px" textAlign="center" mb="50px">
        CRAFTED LIVING OF SKY HIGH LIFE AND AMENITIES
      </Text>
      <Flex w="100%" h="100%" direction="column">
        {/* first-left-sec */}
        <Flex w="100%" h="100%" align="flex-start" justify="center">
          <Flex w="100%" h="100%" pr="25px">
            <Image src="/images/sky-high/DECK1.jpg" boxShadow="dark-lg" />
          </Flex>
          <Flex w="100%" h="100%" align="flex-start" justify="center">
            <Flex
              // initial={{ opacity: 0, y: -100 }}
              // animate={animateY}
              // transition={{ delay: 1.5, duration: 2, type: "just" }}
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
            <Flex h="100%" direction="column" alignSelf="center">
              <Heading fontFamily="avenir" fontSize="34px" mb="15px">
                3 SKY DECKS
              </Heading>
              <Text fontFamily="veralaRound" fontSize="16px" mb="25px">
                Enjoy the panoramic sky views from different levels of the
                tower.
              </Text>
              <Heading fontFamily="avenir" fontSize="20px" mb="15px">
                CAFE DECK
              </Heading>
              <Heading fontFamily="avenir" fontSize="20px" mb="15px">
                KIDS AREA DECK
              </Heading>
              <Heading fontFamily="avenir" fontSize="20px">
                LOUNGE DECK
              </Heading>
            </Flex>{" "}
          </Flex>
        </Flex>
        {/* first-right-sec */}
        <Flex w="100%" h="100%" align="center" justify="center">
          <Flex w="100%" h="100%" my="25px">
            <Image src="/images/sky-high/DECK2.jpg" boxShadow="dark-lg" />
          </Flex>
          <Flex w="100%" h="100%" my="25px">
            <Image src="/images/sky-high/DECK3.jpg" boxShadow="dark-lg" />
          </Flex>
        </Flex>
      </Flex>
      <Flex w="100%" h="100%" align="flex-start" justify="center">
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
          // initial={{ opacity: 0, y: -100 }}
          // animate={animateY}
          // transition={{ delay: 1.5, duration: 2, type: "just" }}
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
          <Image src="/images/sky-high/DECK3.jpg" boxShadow="dark-lg" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FourthSec;
