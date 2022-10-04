import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { HiMenuAlt1 } from "react-icons/hi";

const Header = () => {
  return (
    <Flex
      pos="fixed"
      top="0"
      zIndex="3"
      w="100%"
      alignItems={"center"}
      justifyContent={"flex-end"}
    >
      <Flex alignItems={"center"} w="60%" justifyContent={"space-between"}>
        <Flex h="90px">
          <Image src="/images/logo.png" />
        </Flex>
        <Flex pr="16" direction="row">
          <Flex fontSize="24px" fontWeight="700">
            <Heading as="span">
              <Link>INQUIRE</Link>
            </Heading>
            <Link fontSize="45px">
              <HiMenuAlt1 w="100%" h="100%" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
