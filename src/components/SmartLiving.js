import {
  Flex,
  Heading,
  Image,
  Text,
  Divider,
  Box,
  Button,
} from "@chakra-ui/react";
import React from "react";
// import { HiOutlineBuildingOffice2 } from "react-icons/hi";

const SmartLiving = () => {
  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      pt="50px"
      px="100px"
      align="center"
    >
      <Heading fontSize="40px" fontFamily="goudy" fontWeight="400">
        SMART LIVING
      </Heading>
      <Flex pt="50px">
        <Flex direction="column" w="100%" h="100%" px="2" justify="flex-start">
          <Flex>
            <Image w="570px" h="325px" src="/images/smartliving.png" />
          </Flex>
          <Flex py="140px" direction="column">
            <Heading fontSize="24px" fontFamily="avenir">
              MANAGED LIVING
            </Heading>
            <Text fontSize="18px" fontFamily="veralaRound">
              Premium serviced apartments in smart township living.
            </Text>
          </Flex>
          <Flex w="100%" h="100%">
            <Image
              w="570px"
              h="325px"
              // mt="100px"
              src="/images/smartliving3.png"
            />
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

        <Flex direction="column" w="100%" px="2" pt="125px">
          <Flex direction="column" py="10">
            <Heading fontSize="24px" fontFamily="avenir">
              CO-LIVING FOR PROFESSIONALS
            </Heading>
            <Text fontSize="18px" fontFamily="veralaRound">
              Your home away from home.
            </Text>
          </Flex>
          <Flex pt="70px">
            <Image w="570px" h="325px" src="/images/smartliving2.png" />
          </Flex>
          <Flex direction="column" pt="135px">
            <Heading fontSize="24px" fontFamily="avenir">
              STUDENT HOUSING
            </Heading>
            <Text fontSize="18px" fontFamily="veralaRound">
              Modern student housing, co-living for professionals and serviced
              apartments.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" align="center">
        <Divider
          h="25px"
          orientation="vertical"
          border="3px solid"
          borderColor="#DFBD69"
        />
        <Button
          w="162px"
          h="51px"
          P="16px"
          bgGradient="linear(to-b, #B88746 ,#DFBD69)"
          color="white"
          fontSize="16px"
          fontFamily="avenir"
          _hover={{
            bgGradient: "linear(to-b, #DFBD69, #B88746)",
          }}
        >
          EXPLORE NOW
        </Button>
      </Flex>
    </Flex>
  );
};

export default SmartLiving;
