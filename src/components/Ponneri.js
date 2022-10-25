import { Flex, Heading, Image, Divider, Box, Button } from "@chakra-ui/react";
import React from "react";

const Ponneri = () => {
  return (
    <Flex w="100%" h="100vh" py="50px" my="50px">
      <Flex w="70%" h="100%" direction="column">
        <Flex w="100%" align="center" justify="flex-end" pb="50px">
          {/* <Image src="/images/logo.png" /> */}
          <Heading
            fontSize="40px"
            fontWeight="400"
            fontFamily="goudy"
            pr="10px"
          >
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
        <Image w="100%" h="100%" src="/images/gymkhana.png" />
      </Flex>
      <Flex w="30%" direction="column" align="flex-start" pl="40px">
        <Flex h="16rem" direction="column" align="center" pt="5.9rem">
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
        <Heading fontSize="34px" fontFamily="avenir" my="25px">
          ONE CLUB -<br />
          MANY FACETS
        </Heading>
        <Button
          w="206px"
          h="51px"
          p="16px"
          bgGradient="linear(to-b, #B88746 ,#DFBD69)"
          color="white"
          fontSize="16px"
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
