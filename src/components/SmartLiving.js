import {
  Flex,
  Heading,
  Image,
  Text,
  Divider,
  Box,
  Icon,
  Button,
} from "@chakra-ui/react";
import React from "react";
// import { HiOutlineBuildingOffice2 } from "react-icons/hi";

const SmartLiving = () => {
  return (
    <Flex direction="column" w="100%" py="6" px="6" align="center">
      <Heading fontSize="50px" fontWeight="400">
        SMART LIVING
      </Heading>
      <Flex px="4" pt="10">
        <Flex direction="column" w="100%" px="2" justify="flex-start">
          <Flex>
            <Image src="/images/smartliving.png" />
          </Flex>
          <Flex py="10" direction="column">
            <Heading fontSize="30px">SERVICED HOUSING</Heading>
            <Text fontSize="24px">
              Premium serviced appartments in small township living
            </Text>
          </Flex>
          <Flex>
            <Image src="/images/smartliving3.png" />
          </Flex>
        </Flex>
        <Flex px="4" direction="column" align="center">
          <Flex h="100%" direction="column" align="center">
            <Divider
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
            />
            <Box
              height="50px"
              width="25px"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
            <Divider
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
            />
          </Flex>
          <Flex h="100%" direction="column" align="center">
            <Divider
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
            />
            <Box
              height="50px"
              width="25px"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
            <Divider
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
            />
          </Flex>
          <Flex h="100%" direction="column" align="center">
            <Divider
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
            />
            <Box
              height="50px"
              width="25px"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
            <Divider
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
            />
          </Flex>
        </Flex>

        <Flex direction="column" w="100%" px="2" justify="center">
          <Flex direction="column" py="10">
            <Heading fontSize="30px">RENTAL HOUSING</Heading>
            <Text fontSize="24px">Your home away from home.</Text>
          </Flex>
          <Flex py="10">
            <Image src="/images/smartliving2.png" />
          </Flex>
          <Flex direction="column" py="10">
            <Heading fontSize="30px">STUDENT HOUSING</Heading>
            <Text fontSize="24px">
              Modern student housing, co-living for professionals and serviced
              apartments.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" align="center">
        <Divider
          h="30px"
          orientation="vertical"
          border="3px solid"
          borderColor="#DFBD69"
        />
        <Button
          w="270px"
          h="75px"
          bgGradient="linear(to-b, #B88746 ,#DFBD69)"
          color="white"
          fontSize="30px"
          _hover={{
            bgGradient: "linear(to-b, #DFBD69, #B88746)",
          }}
        >
          Explore now
        </Button>
      </Flex>
    </Flex>
  );
};

export default SmartLiving;
