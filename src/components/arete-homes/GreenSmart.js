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

const SixthSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      px="100px"
    >
      <Text
        ref={ref}
        transform={isInView ? "none" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="40px"
        mb="25px"
        textAlign="center"
      >
        GREEN SMART TOWNSHIP
      </Text>
      <Text
        ref={ref}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="veralaRound"
        fontSize="16px"
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
            ref={ref}
            opacity={isInView ? "1" : "0"}
            transition="all 2s"
            transitionDelay="1.5s"
            fontFamily="veralaRound"
            w="100%"
            h="100%"
            src="/images/arete-homes/IGBC CERTIFICATE.jpeg"
          />
        </Flex>
        <Flex w="100%" h="100%">
          <Flex
            ref={ref}
            transform={isInView ? "none" : "translateY(-50px)"}
            opacity={isInView ? "1" : "0"}
            transition="all 2s"
            transitionDelay="1.5s"
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
          <Flex w="100%" h="100%">
            <SimpleGrid w="100%" columns={{ base: 1, md: 2 }} spacing="15px">
              <Box pos="relative">
                <Image
                  ref={ref}
                  opacity={isInView ? "1" : "0"}
                  transition="all 2s"
                  transitionDelay="1.5s"
                  h="150px"
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
                    bottom="25px"
                    left="50%"
                    transform="translate(-50%)"
                    fontSize="20px"
                    color="#DFBD69"
                  >
                    GREENERY
                  </Heading>
                </Box>
              </Box>
              <Box pos="relative">
                <Image
                  ref={ref}
                  opacity={isInView ? "1" : "0"}
                  transition="all 2s"
                  transitionDelay="1.5s"
                  h="150px"
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
                    bottom="25px"
                    left="50%"
                    transform="translate(-50%)"
                    fontSize="20px"
                    color="#DFBD69"
                  >
                    PAINTING
                  </Heading>
                </Box>
              </Box>
              <Box pos="relative">
                <Image
                  ref={ref}
                  opacity={isInView ? "1" : "0"}
                  transition="all 2s"
                  transitionDelay="3s"
                  h="150px"
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
                    bottom="25px"
                    left="50%"
                    transform="translate(-50%)"
                    fontSize="20px"
                    color="#DFBD69"
                  >
                    VENTILATION
                  </Heading>
                </Box>
              </Box>
              <Box pos="relative">
                <Image
                  ref={ref}
                  opacity={isInView ? "1" : "0"}
                  transition="all 2s"
                  transitionDelay="3s"
                  h="150px"
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
                    bottom="25px"
                    left="50%"
                    transform="translate(-50%)"
                    fontSize="20px"
                    color="#DFBD69"
                  >
                    stp plant by daiki
                  </Heading>
                </Box>
              </Box>
              <Box pos="relative">
                <Image
                  ref={ref}
                  opacity={isInView ? "1" : "0"}
                  transition="all 2s"
                  transitionDelay="4.5s"
                  h="150px"
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
                    bottom="25px"
                    left="50%"
                    transform="translate(-50%)"
                    fontSize="20px"
                    color="#DFBD69"
                  >
                    GARBAGE SCHUTE
                  </Heading>
                </Box>
              </Box>
              <Box pos="relative">
                <Image
                  ref={ref}
                  opacity={isInView ? "1" : "0"}
                  transition="all 2s"
                  transitionDelay="4.5s"
                  h="150px"
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
                    bottom="60%"
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
                    bottom="25px"
                    left="50%"
                    transform="translate(-50%)"
                    fontSize="20px"
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
