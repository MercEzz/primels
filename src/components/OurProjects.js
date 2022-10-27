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
const MtnFlx = motion(Flex);

const OurProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animateX = useAnimation();
  const animateY = useAnimation();
  const animateFade = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateX.start({
        x: 0,
        opacity: 1,
      });
      animateY.start({
        y: 0,
        opacity: 1,
      });
      animateFade.start({
        opacity: 1,
      });
    }
  }, [isInView, animateX, animateY, animateFade]);

  return (
    <Flex
      ref={ref}
      w="100%"
      h="100vh"
      direction="column"
      align="center"
      justify="center"
      py="50px"
      px="50px"
    >
      <Flex w="100%" align="center" justify="center">
        <Flex w="100%" align="center" justify="center">
          <MtnDvdr
            initial={{ opacity: 0, x: 100 }}
            animate={animateX}
            transition={{ duration: 2, type: "just" }}
            w="23%"
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
      </Flex>
      <Flex w="100%" h="100%">
        <MtnFlx
          initial={{ x: -500 }}
          animate={animateX}
          transition={{ duration: 2, type: "just" }}
          direction="column"
          justify="center"
          w="25%"
          h="100%"
          px="6"
        >
          <Heading
            pb="15px"
            fontFamily="avenir"
            fontSize="34px"
            w="100%"
            textAlign="left"
          >
            ARETE <br /> HOMES
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
        </MtnFlx>
        <MtnFlx
          initial={{ y: -100 }}
          animate={animateY}
          transition={{ duration: 2, type: "just" }}
          w="5%"
          h="35%"
          direction="column"
          align="center"
          pt="25px"
        >
          <Divider
            orientation="vertical"
            border="3px solid"
            borderColor="#DFBD69"
            bgColor="#DFBD69"
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
        </MtnFlx>
        <Flex w="70%" direction="column" pt="25px" pl="40px" pr="50px">
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateX}
            transition={{ duration: 1, type: "just" }}
          >
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
          </MtnFlx>
          <MtnFlx
            initial={{ x: 1000 }}
            animate={animateX}
            transition={{ duration: 2, type: "just" }}
            pos="relative"
            w="100%"
            h="100%"
          >
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
          </MtnFlx>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OurProjects;
