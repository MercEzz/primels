import { Flex, Heading, Image, Divider, Box, Text } from "@chakra-ui/react";
import React from "react";

const Allia = () => {
  return (
    <Flex direction="column" align="center" pt="100px">
      <Flex w="100%" px="100px">
        <Flex w="30%" h="100%" direction="column" pt="20px">
          <Heading fontSize="40px" fontFamily="goudy" fontWeight="400">
            India’s Best <br /> Realty Brand
          </Heading>
          <Flex justify="center" align="center">
            <Divider
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
            <Box
              height="30px"
              width="35px"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>
        </Flex>
        <Flex w="100%" h="100%" align="center" pb="100px">
          <Flex h="100%" direction="column" align="center">
            <Image
              w="100%"
              h="200px"
              pl="15px"
              pb="15px"
              src="/images/award1.png"
            />
            <Text fontFamily="veralaRound" fontSize="16px" textAlign="center">
              Times Realty Icon
              <Text fontSize="18px" pt="10px">
                "The Best <br /> Upcoming Township"
              </Text>
            </Text>
          </Flex>
          <Flex h="100%" direction="column" align="center">
            <Image
              w="100%"
              h="300px"
              px="15px"
              pb="15px"
              src="/images/award2.png"
            />
            <Text fontFamily="veralaRound" fontSize="18px" textAlign="center">
              The Economic Times
              <Text fontSize="20px" pt="10px">
                "Best Realty Brand 2020-21"
              </Text>
            </Text>
          </Flex>
          <Flex h="100%" direction="column" align="center">
            <Image w="100%" h="200px" pb="15px" src="/images/award3.png" />
            <Text fontFamily="veralaRound" fontSize="16px" textAlign="center">
              FICCI
              <Text fontSize="18px" pt="10px">
                "Best Gated Community
                <br /> Of the Year 2021"
              </Text>
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" align="center" justify="center">
        <Heading fontSize="40px" fontFamily="goudy" fontWeight="400">
          OUR ALLIANCES
        </Heading>
        <Flex w="100%" pt="75px" px="100px">
          <Flex>
            <Image src="/images/alliances.png" />
          </Flex>
          <Flex>
            <Image src="/images/alliances2.png" />
          </Flex>
          <Flex>
            <Image src="/images/alliances3.png" />
          </Flex>
          <Flex>
            <Image src="/images/alliances4.png" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Allia;
