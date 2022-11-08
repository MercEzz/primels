import {
  Flex,
  Image,
  Text,
  Divider,
  Box,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const SixthSec = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      px="100px"
    >
      <Text fontFamily="goudy" fontSize="40px" mb="25px" textAlign="center">
        GREEN SMART TOWNSHIP
      </Text>
      <Text fontFamily="veralaRound" fontSize="16px">
        A well planned gated community & is pre-certified Platinum Rated by
        IGBC, that ensures better energy management. With 74% open area, huge
        landscaping & excessive greenery ventilation is assured. Texture
        painting in external walls helps to reduce internal temperature thus
        saving on electricity bills. STP Plant by Daiki has provision to re-use
        the water in landscaping and flush. Garbage Schute, Solar water heater
        and softener systems are also provided.
      </Text>
      <Flex w="100%" h="100%">
        <Flex w="100%" h="100%">
          <Image
            w="100%"
            h="100%"
            src="/images/ARETE HOMES/IGBC CERTIFICATE.jpeg"
          />
        </Flex>
        <Flex w="100%" h="100%">
          <Flex direction="column" align="center" px="25px">
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
          <Flex w="100%" h="100%">
            <Flex w="100%">
              <VStack>
                <Image
                  h="150px"
                  src="/images/ARETE HOMES/TEXTURED PAINTING.jpg"
                />
              </VStack>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SixthSec;
