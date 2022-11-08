/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { ImLocation } from "react-icons/im";

const NinethSec = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      px="100px"
      pt="50px"
      pb="50px"
      direction="column"
      align="center"
      justify="center"
    >
      <Text
        fontFamily="goudy"
        fontSize="40px"
        lineHeight="48px"
        textTransform="uppercase"
      >
        LOCATION ADVANTAGE
      </Text>
      <Heading
        fontFamily="avenir"
        fontSize="34px"
        lineHeight="48px"
        pt="25px"
        pb="50px"
      >
        PONNERI - A SMART CITY BY JICA
      </Heading>
      <Flex w="100%" h="100%" align="center" justify="center">
        <Flex
          direction="column"
          w="100%"
          h="100%"
          align="center"
          justify="center"
        >
          <Flex w="100%" h="100%" mb="15px">
            <iframe
              class="gmap_iframe"
              width="100%"
              height="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=918&amp;height=700&amp;hl=en&amp;q=Prime lifespace&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </Flex>
          <Flex w="100%" h="100%" mb="20px">
            icons
          </Flex>
          <Flex w="100%" h="100%">
            <Button
              w="100%"
              h="51px"
              fontSize="16px"
              fontFamily="avenir"
              fontWeight="bold"
              bgGradient="linear(to-b, #B88746 ,#DFBD69)"
              color="white"
              _hover={{
                bgGradient: "linear(to-b, #DFBD69, #B88746)",
              }}
              _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
            >
              <ImLocation size="30px" /> SHOW LOCATION ON GOOGLE MAPS
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NinethSec;
