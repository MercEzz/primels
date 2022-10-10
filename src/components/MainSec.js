import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import Carousel from "./Carousel";

const MotnHead = motion(Heading);

const variants = {
  hidden: { opacity: 0, x: 0, y: -150 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const MainSec = () => {
  return (
    <Flex
      h="100vh"
      bgImage={"/images/bg.png"}
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify="center"
    >
      <Flex w="80%" h="100%" align="center">
        <Flex direction="column" w="100%" pl="5">
          <MotnHead
            pt="4"
            fontSize="50px"
            fontFamily="avenir"
            letterSpacing="wide"
            initial={{ x: 460, y: 350 }}
            transition={{ delay: 3, duration: 5, type: "just" }}
            animate={{
              x: [460, 460, 460, 460, 0],
              y: [350, 250, 250, 250, 0],
            }}
            zIndex="4"
          >
            THE LARGEST{" "}
          </MotnHead>
          <MotnHead
            fontSize="50px"
            fontFamily="avenir"
            letterSpacing="wide"
            initial={{ opacity: 0, x: [375, 375, 375], y: [350, 250, 250] }}
            transition={{ delay: 3, duration: 5, type: "just" }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            zIndex="4"
          >
            SMART TOWNSHIP
          </MotnHead>
          {/* <MotnHead
            pb="4"
            fontSize="50px"
            fontFamily="avenir"
            letterSpacing="wide"
            initial={{ opacity: 0, x: [450, 400], y: [450, 250] }}
            transition={{ delay: 3, duration: 5, type: "just" }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            zIndex="4"
          >
            {" "}
            OF NORTH CHENNAI
          </MotnHead> */}
          <Text
            pt="2"
            pb="4"
            pr="4"
            fontWeight="400"
            fontFamily="veralaRound"
            lineHeight="36px"
            fontSize="30px"
          >
            Carefully crafted Living of high Life and Aminities.
          </Text>
          <Button
            my="2"
            w="270px"
            h="75px"
            fontSize="24px"
            fontFamily="avenir"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
          >
            EXPLORE NOW
          </Button>
        </Flex>
      </Flex>
      <Flex w="100%" h="100%" align="flex-end" justify="flex-end">
        <Carousel />
      </Flex>
    </Flex>
  );
};

export default MainSec;
