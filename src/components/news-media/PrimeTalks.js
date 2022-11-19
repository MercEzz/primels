import { Flex, Text, Divider, Box } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";

const FourthSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      px="6.25rem"
      py="3.125rem"
      direction="column"
      align="center"
      justify="center"
      mb="5rem"
    >
      {" "}
      <Text
        transform={isInView ? "translateY(0)" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
        lineHeight="3rem"
      >
        PRIME TALKS
      </Text>
      <Flex w="100%" h="100%" align="flex-start" justify="flex-start" pt="50px">
        <Flex
          opacity={isInView ? "1" : "0"}
          transition="all 2s 2s"
          w="100%"
          h="100%"
          flex="3"
          pr="1.562rem"
        ><div style={{height:"35.5rem",width:"41.875rem"}}>
          <embed
            height="100%"
            width="100%"
            src="https://www.youtube.com/embed/Psmw1t_S6-c"
            title="The Economic Times | Best Realty Brands 2021 - Prime LifeSpace Developers"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></embed>
          </div>
        </Flex>
        <Flex
          transform={isInView ? "translateY(0)" : "translateY(-50px)"}
          opacity={isInView ? "1" : "0"}
          transition="all 2s 2s"
          h="100%"
          direction="column"
          justify="flex-start"
          align="center"
        >
          <Divider
            h="1.562rem"
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
        <Flex>
          <Flex
            opacity={isInView ? "1" : "0"}
            transition="all 2s 2s"
            flex="1"
            direction="column"
            fontFamily="veralaRound"
            fontSize="1.25rem"
          >
            <Text py="1.562rem" pl="1.562rem">
              Best Realty Brand 2021 The Economic Times
            </Text>
            <Text py="1.562rem" pl="1.562rem">
              The Future Of Real Estate
            </Text>
            <Text py="1.562rem" pl="1.562rem">
              Best Real Estate Investment 8% Guaranteed Rental Return At Arete
              Homes
            </Text>
            <Text py="1.562rem" pl="1.562rem">
              Sky High Tower Launch Event
            </Text>
            <Text py="1.562rem" pl="1.562rem">
              Dr. Janani Rex Talks About Arete Homes Sky High Towers
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FourthSec;
