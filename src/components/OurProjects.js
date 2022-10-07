import {
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  Image,
  Box,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";

const OurProjects = () => {
  return (
    <Flex w="100%" direction="column" align="center" justify="center" py="10">
      <Flex w="100%" h="60px" align="center" justify="center">
        <Flex w="73%" />
        <Flex w="100%" align="center">
          <Divider
            w="150px"
            orientation="horizontal"
            border="3px solid"
            bgColor="#DFBD69"
            borderColor="#DFBD69"
          />
          <Text w="100%" px="2" fontFamily="goudy" fontSize="50px">
            OUR PROJECTS
          </Text>
        </Flex>
        <Flex w="100%" />
      </Flex>
      <Flex>
        <Flex direction="column" justify="center" w="35%" mx="10">
          <Heading py="2" fontFamily="avenir" fontSize="40px">
            ARETE HOMES
          </Heading>
          <UnorderedList>
            <ListItem>
              <Text py="2" fontFamily="veralaRound" fontSize="24px">
                6 Towers
              </Text>
            </ListItem>
            <ListItem>
              <Text py="2" fontFamily="veralaRound" fontSize="24px">
                2, 2.5, 3 BHK Smart Residencies
              </Text>
            </ListItem>
            <ListItem>
              <Text py="2" fontFamily="veralaRound" fontSize="24px">
                70% Open Space
              </Text>
            </ListItem>
          </UnorderedList>
          <Button
            my="4"
            w="270px"
            h="75px"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize="30px"
            fontFamily="avenir"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
          >
            VIEW PROJECT
          </Button>
        </Flex>
        <Flex h="15rem" direction="column" align="center" pt="5rem">
          <Divider
            orientation="vertical"
            border="3px solid"
            borderColor="#DFBD69"
          />{" "}
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
        <Flex direction="column" p="10">
          <Flex>
            <Text
              fontSize="24px"
              px="2"
              py="1"
              color="white"
              fontFamily="avenir"
              bgGradient="linear(to-r, #B88746 ,#DFBD69)"
              textTransform="uppercase"
            >
              Ready to move in
            </Text>
          </Flex>
          <Image src="/images/pro1.png" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OurProjects;
