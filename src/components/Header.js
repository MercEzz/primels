import React from "react";
import { Button, Flex, Heading, Image, Link } from "@chakra-ui/react";
import { HiMenuAlt1 } from "react-icons/hi";

const Header = () => {
  return (
    <Flex
      pos="fixed"
      top="0"
      zIndex="3"
      w="100%"
      bgColor="transparent"
      align="center"
      justify="center"
    >
      <Flex w="100%"></Flex>
      <Flex alignItems={"center"} w="100%" justifyContent={"center"}>
        <Heading as="span" fontSize="20px" px="3">
          <Link>EXPERTISE</Link>
        </Heading>
        <Heading as="span" fontSize="20px" px="3">
          <Link>PROJECTS</Link>
        </Heading>
        <Flex h="90px" px="3" align="center">
          {/* <Image src="/images/logo.png" /> */}
          logo
        </Flex>
        <Heading as="span" fontSize="20px" px="3">
          <Link>INVEST</Link>
        </Heading>
        <Heading as="span" fontSize="20px" px="3">
          <Link>HOUSING</Link>
        </Heading>
      </Flex>
      <Flex w="100%" fontWeight="700" pr="10" align="center" justify="flex-end">
        <Heading as="span">
          <Button
            my="4"
            w="160px"
            h="60px"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize="24px"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
          >
            ENQUIRE
          </Button>
        </Heading>
        <Link fontSize="60px">
          <HiMenuAlt1 w="100%" h="100%" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
