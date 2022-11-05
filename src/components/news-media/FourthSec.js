import { Flex, Text, Divider, Box } from "@chakra-ui/react";
import React from "react";

const FourthSec = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      px="100px"
      py="50px"
      direction="column"
      align="center"
      justify="center"
    >
      {" "}
      <Text fontFamily="goudy" fontSize="40px" lineHeight="48px">
        PRIME TALKS
      </Text>
      <Flex w="100%" h="100%" align="flex-start" justify="flex-start" pt="50px">
        <Flex w="100%" h="100%" flex="3" pr="25px">
          <iframe
            width="770"
            height="568"
            src="https://www.youtube.com/embed/Psmw1t_S6-c"
            title="The Economic Times | Best Realty Brands 2021 - Prime LifeSpace Developers"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Flex>
        <Flex h="100%" direction="column" justify="flex-start" align="center">
          <Divider
            h="25px"
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
        <Flex>
          <Flex
            flex="1"
            direction="column"
            fontFamily="veralaRound"
            fontSize="20px"
          >
            <Text py="25px" pl="25px">
              Best Realty Brand 2021 The Economic Times
            </Text>
            <Text py="25px" pl="25px">
              The Future Of Real Estate
            </Text>
            <Text py="25px" pl="25px">
              Best Real Estate Investment 8% Guaranteed Rental Return At Arete
              Homes
            </Text>
            <Text py="25px" pl="25px">
              Sky High Tower Launch Event
            </Text>
            <Text py="25px" pl="25px">
              Dr. Janani Rex Talks About Arete Homes Sky High Towers
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FourthSec;
