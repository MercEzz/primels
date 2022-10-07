import { Flex, Heading, Image, Divider, Box, Button } from "@chakra-ui/react";
import React from "react";

const Ponneri = () => {
  return (
    <Flex w="100%" py="10">
      <Flex direction="column" w="100%">
        <Flex w="100%" align="center" pl="8" py="6" justify="flex-end">
          <Heading fontSize="50px" w="100%" fontWeight="400" fontFamily="goudy">
            PONNERI GYMKHANA CLUB
          </Heading>
          <Divider
            w="30%"
            orientation="horizontal"
            border="3px solid"
            bgColor="#DFBD69"
            borderColor="#DFBD69"
          />
        </Flex>
        <Image src="/images/gymkhana.png" />
      </Flex>
      <Flex w="40%" direction="column" align="flex-start" px="12">
        <Flex h="23rem" direction="column" align="center" pt="7.5rem">
          <Divider
            orientation="vertical"
            border="3px solid"
            borderColor="#DFBD69"
            bgColor="#DFBD69"
          />
          <Box
            height="30px"
            width="25px"
            backgroundColor="#DFBD69"
            border="3px solid white"
            boxShadow="0px 0px 0px 3px #B88746"
            borderRadius="50%"
            my="1"
          />
        </Flex>
        <Heading fontSize="40px" fontFamily="avenir" my="10">
          ONE CLUB -MANY FACETS
        </Heading>
        <Button
          px="6"
          py="8"
          bgGradient="linear(to-b, #B88746 ,#DFBD69)"
          color="white"
          fontSize="24px"
          fontFamily="avenir"
          _hover={{
            bgGradient: "linear(to-b, #DFBD69, #B88746)",
          }}
        >
          BECOME A MEMBER
        </Button>
      </Flex>
    </Flex>
  );
};

export default Ponneri;
