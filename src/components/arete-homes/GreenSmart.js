import {
  Flex,
  Image,
  Text,
  Divider,
  Box,
  Grid,
  GridItem,
  VStack,
  SimpleGrid,
  Icon,
  Heading,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import igbCert from "../arete-homes imgs/IGBC CERTIFICATE.jpeg";

const SixthSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      px="6.25rem"
    >
      <Text
        transform={isInView ? "none" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
        mb="1.562rem"
        textAlign="center"
      >
        GREEN SMART TOWNSHIP
      </Text>
      <Text
        opacity={isInView ? "1" : "0"}
        transition="all 2s 1s"
        fontFamily="veralaRound"
        fontSize="1rem"
        mb="1.562rem"
      >
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
            opacity={isInView ? "1" : "0"}
            transition="all 2s 1s"
            fontFamily="veralaRound"
            w="100%"
            h="30rem"
            src={igbCert}
          />
        </Flex>
        <Flex w="100%" h="100%">
          <Flex
            transform={isInView ? "none" : "translateY(-50px)"}
            opacity={isInView ? "1" : "0"}
            transition="all 2s 1s"
            direction="column"
            align="center"
            px="1.562rem"
          >
            <Divider
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
              h="5.25rem"
            />{" "}
            <Box
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
            />
          </Flex>
          <Flex w="100%" h="100%">
            <SimpleGrid
              w="100%"
              columns={{ base: 1, md: 2 }}
              spacing="0.938rem"
            >
              <Box pos="relative">
                <Image
                  opacity={isInView ? "1" : "0"}
                  transition="all 2s 1s"
                  h="9.375rem"
                  w="100%"
                  objectFit="cover"
                  objectPosition="center bottom"
                  src="/images/arete-homes/open exercise area.jpg"
                />
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Image
                    pos="absolute"
                    bottom="40%"
                    left="50%"
                    transform="translate(-50%)"
                    src="/images/arete-homes/GREENERY ICON.svg"
                  />
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    bottom="1.562rem"
                    left="50%"
                    transform="translate(-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    GREENERY
                  </Heading>
                </Box>
              </Box>
              <Box pos="relative">
                <Image
                  opacity={isInView ? "1" : "0"}
                  transition="all 2s 1s"
                  h="9.375rem"
                  w="100%"
                  objectFit="cover"
                  objectPosition="center bottom"
                  src="/images/arete-homes/TEXTURED PAINTING.jpg"
                />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Image
                    pos="absolute"
                    bottom="40%"
                    left="50%"
                    transform="translate(-50%)"
                    src="/images/arete-homes/PAINTING.svg"
                  />
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    bottom="1.562rem"
                    left="50%"
                    transform="translate(-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    PAINTING
                  </Heading>
                </Box>
              </Box>
              <Box pos="relative">
                <Image
                  opacity={isInView ? "1" : "0"}
                  transition="all 2s 2s"
                  h="9.375rem"
                  w="100%"
                  objectFit="cover"
                  objectPosition="center bottom"
                  src="/images/arete-homes/VENTILATION.jpg"
                />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Image
                    pos="absolute"
                    bottom="40%"
                    left="50%"
                    transform="translate(-50%)"
                    src="/images/arete-homes/VENTILATION.svg"
                  />
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    bottom="1.562rem"
                    left="50%"
                    transform="translate(-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    VENTILATION
                  </Heading>
                </Box>
              </Box>
              <Box pos="relative">
                <Image
                  opacity={isInView ? "1" : "0"}
                  transition="all 2s 2s"
                  h="9.375rem"
                  w="100%"
                  objectFit="cover"
                  objectPosition="center bottom"
                  src="/images/arete-homes/STP PLANT.webp"
                />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Image
                    pos="absolute"
                    bottom="40%"
                    left="50%"
                    transform="translate(-50%)"
                    src="/images/arete-homes/STP PLANT.svg"
                  />
                  <Heading
                    w="100%"
                    textAlign="center"
                    textTransform="uppercase"
                    pos="absolute"
                    fontFamily="avenir"
                    bottom="1.562rem"
                    left="50%"
                    transform="translate(-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    stp plant by daiki
                  </Heading>
                </Box>
              </Box>
              <Box pos="relative">
                <Image
                  opacity={isInView ? "1" : "0"}
                  transition="all 2s 3s"
                  h="9.375rem"
                  w="100%"
                  objectFit="cover"
                  objectPosition="center bottom"
                  src="/images/arete-homes/GARBAGE SCHUTE.jpeg"
                />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Image
                    pos="absolute"
                    bottom="40%"
                    left="50%"
                    transform="translate(-50%)"
                    src="/images/arete-homes/GARBAGE SCHUTE.svg"
                  />
                  <Heading
                    w="100%"
                    textAlign="center"
                    textTransform="uppercase"
                    pos="absolute"
                    fontFamily="avenir"
                    bottom="1.562rem"
                    left="50%"
                    transform="translate(-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    GARBAGE SCHUTE
                  </Heading>
                </Box>
              </Box>
              <Box pos="relative">
                <Image
                  opacity={isInView ? "1" : "0"}
                  transition="all 2s 3s"
                  h="9.375rem"
                  w="100%"
                  objectFit="cover"
                  objectPosition="center bottom"
                  src="/images/arete-homes/SOLAR POWER HEATER.jpg"
                />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Image
                    pos="absolute"
                    bottom="50%"
                    left="50%"
                    transform="translate(-50%)"
                    src="/images/arete-homes/SOLAR POWER HEATER.svg"
                  />
                  <Heading
                    w="100%"
                    textAlign="center"
                    textTransform="uppercase"
                    pos="absolute"
                    fontFamily="avenir"
                    bottom="1.25rem"
                    left="50%"
                    transform="translate(-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    SOLAR POWER
                    <br /> HEATER
                  </Heading>
                </Box>
              </Box>
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SixthSec;
