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
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const MtnDvdr = motion(Divider);

const OurProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateDvdr = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateDvdr.start({
        x: 0,
        opacity: 1,
      });
    }
  }, [isInView, animateDvdr]);

  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      pt="100px"
      pb="185px"
    >
      <Flex w="100%" h="60px" align="center" justify="center">
        <Flex w="94%" />
        <Flex w="100%" align="center">
          <MtnDvdr
            initial={{ opacity: 0, x: 100 }}
            animate={animateDvdr}
            transition={{ duration: 2, type: "just" }}
            w="175px"
            orientation="horizontal"
            border="3px solid"
            bgColor="#DFBD69"
            borderColor="#DFBD69"
            mr="10px"
          />
          <Text w="290px" fontFamily="goudy" fontSize="40px" textAlign="left">
            OUR PROJECTS
          </Text>
        </Flex>
        <Flex w="100%" />
      </Flex>
      <Flex w="100%" h="100%">
        <Flex
          direction="column"
          justify="center"
          w="35%"
          h="100%"
          ml="100px"
          pt="200px"
        >
          <Heading
            pb="15px"
            fontFamily="avenir"
            fontSize="34px"
            w="100%"
            textAlign="left"
          >
            ARETE HOMES
          </Heading>
          <UnorderedList>
            <ListItem>
              <Text pb="10px" fontFamily="veralaRound" fontSize="18px">
                6 Towers
              </Text>
            </ListItem>
            <ListItem>
              <Text pb="10px" fontFamily="veralaRound" fontSize="18px">
                2, 2.5, 3 BHK Smart Residencies
              </Text>
            </ListItem>
            <ListItem>
              <Text fontFamily="veralaRound" fontSize="18px">
                70% Open Space
              </Text>
            </ListItem>
          </UnorderedList>
          <Button
            mt="25px"
            w="160px"
            h="51px"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize="16px"
            fontFamily="avenir"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
          >
            VIEW PROJECT
          </Button>
        </Flex>
        <Flex h="14.6rem" direction="column" align="center" pt="25px">
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
        <Flex w="100%" direction="column" pt="25px" pl="40px" pr="50px">
          <Flex>
            <Text
              fontSize="14px"
              p="10px"
              color="white"
              fontFamily="avenir"
              bgGradient="linear(to-r, #B88746 ,#DFBD69)"
              textTransform="uppercase"
            >
              Ready to move in
            </Text>
          </Flex>
          <Flex pos="relative" w="100%" h="100%">
            <Image
              zIndex="3"
              pos="absolute"
              w="868px"
              h="500px"
              src="/images/pro1.png"
            />
            <Image
              pos="absolute"
              w="868px"
              h="450px"
              left="100px"
              top="25px"
              opacity=".5"
              src="/images/pro1.png"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OurProjects;
