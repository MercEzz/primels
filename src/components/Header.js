import React, { useState } from "react";
import { Button, Flex, Heading, Image, Link } from "@chakra-ui/react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <Flex
      pos="fixed"
      top="0"
      zIndex="3"
      w="100%"
      h="100px"
      bgColor={navbar ? "#fff" : "transparent"}
      transition="all 2s"
      align="center"
      justify="center"
    >
      {" "}
      <Flex w="25%"></Flex>
      <Flex alignItems={"center"} w="50%" justifyContent={"center"}>
        <Heading as="span" fontSize="16px" fontFamily="avenir" px="3">
          <Link>EXPERTISE</Link>
        </Heading>
        <Heading as="span" fontSize="16px" fontFamily="avenir" px="3">
          <Link>PROJECTS</Link>
        </Heading>
        <Flex minW="350px" maxH="78px" px="3" align="center">
          <Image w="100%" h="100%" src="/images/logo.png" />
        </Flex>
        <Heading as="span" fontSize="16px" fontFamily="avenir" px="3">
          <Link>INVEST</Link>
        </Heading>
        <Heading as="span" fontSize="16px" fontFamily="avenir" px="3">
          <Link>HOUSING</Link>
        </Heading>
      </Flex>
      <Flex w="25%" justify="flex-end" align="center">
        <Heading as="span" fontFamily="avenir">
          <Button
            my="4"
            p="6"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize="16px"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
          >
            ENQUIRE
          </Button>
        </Heading>
        <Link fontSize="60px" px="4">
          <HiOutlineMenuAlt1 w="100%" h="100%" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
