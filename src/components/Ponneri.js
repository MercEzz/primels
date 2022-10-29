import { Flex, Heading, Image, Divider, Box, Button } from "@chakra-ui/react";
import React from "react";

const Ponneri = () => {
  return (
    <Flex w="100%" h="100vh" py="50px" my="50px">
      <Flex w="100%" h="100%" direction="column">
        <Flex w="100%" align="center" justify="flex-start" pb="50px">
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
        <Flex w="100%" h="100%">
          <Flex w="100%" h="100%">
            <Image w="100%" h="100%" src="/images/gymkhana.png" />{" "}
          </Flex>
          <Flex align="flex-start" pr="100px">
            <Flex h="100%" direction="column" align="center" px="40px">
              <Divider
                h="170px"
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
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="flex-start"
              justify="center"
            >
              <Heading fontSize="34px" fontFamily="avenir" mb="25px">
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
                _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
              >
                BECOME A MEMBER
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Ponneri;
