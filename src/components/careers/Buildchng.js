import {
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  Divider,
  Box,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const MtnFlx = motion(Flex);
const MtnImg = motion(Image);
const MtnHead = motion(Heading);

const Buildchng = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationImg = useAnimation();
  const animationHead = useAnimation();
  const animationDvd = useAnimation();
  const animationLtr = useAnimation();
  const animationRightTxt = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationHead.start({ opacity: 1, y: 0 });
      animationImg.start({ scale: 1 });
      animationDvd.start({ opacity: 1, y: 0 });
      animationLtr.start({ opacity: 1, x: 0 });
      animationRightTxt.start({ opacity: 1, x: 0 });
    }
  }, [
    isInView,
    animationHead,
    animationImg,
    animationDvd,
    animationLtr,
    animationRightTxt,
  ]);
  return (
    <Flex
      ref={ref}
      direction="column"
      w="100%"
      h="100%"
      align="center"
      justify="center"
      mt="100px"
      pr="100px"
    >
      <MtnHead
        initial={{ opacity: 0, y: -50 }}
        animate={animationHead}
        transition={{ duration: 2, type: "just" }}
        fontSize="48px"
        fontWeight="400"
        fontFamily="goudy"
      >
        BUILDING CHANGE
      </MtnHead>
      <Flex align="flex-start" mt="75px" justify="center" w="100%">
        <Flex w="60%">
          <MtnImg
            initial={{ scale: 0.5 }}
            animate={animationImg}
            transition={{ delay: 1, duration: 2, type: "just" }}
            w="813px"
            h="610px"
            src="/images/careers/bldchng.png"
          />
        </Flex>
        <Flex w="5%" mx="35px" direction="column" h="100%" align="center">
          <MtnFlx
            initial={{ opacity: 0, y: -100 }}
            animate={animationDvd}
            transition={{ delay: 1, duration: 2, type: "just" }}
            direction="column"
            align="center"
          >
            <Divider
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
              h="84px"
            />{" "}
            <Box
              height="25px"
              width="25px"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
            />
          </MtnFlx>
          <MtnFlx
            initial={{ opacity: 0, x: -50 }}
            animate={animationLtr}
            transition={{ delay: 1, duration: 2, type: "just" }}
            direction="column"
          >
            {txt.map((letter) => (
              <Heading
                fontSize="110px"
                fontWeight="400"
                fontFamily="goudy"
                lineHeight="132px"
                py="30px"
                color="#D9D9D9"
                css={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                {letter}
              </Heading>
            ))}
          </MtnFlx>
        </Flex>
        <MtnFlx
          initial={{ opacity: 0, x: 100 }}
          animate={animationRightTxt}
          transition={{ delay: 1, duration: 2, type: "just" }}
          direction="column"
          pr="8"
          w="35%"
          h="100%"
          mt="160px"
          align="center"
          justify="center"
        >
          <VStack align="flex-start">
            <Flex direction="column">
              <Heading fontSize="24px" pb="15px" fontFamily="avenir">
                PROBLEM SOLVING SKILLS
              </Heading>
              <Text fontSize="20px" pb="70px" fontFamily="veralaRound">
                We believe to nurture problem solvers, who lead better.
              </Text>
            </Flex>
            <Flex direction="column">
              <Heading fontSize="24px" pb="15px" fontFamily="avenir">
                RELIABILITY
              </Heading>
              <Text fontSize="20px" pb="70px" fontFamily="veralaRound">
                We believe transperancy is the first step to any beginning.
              </Text>
            </Flex>
            <Flex direction="column">
              <Heading fontSize="24px" pb="15px" fontFamily="avenir">
                INNOVATIVE THINKING
              </Heading>
              <Text fontSize="20px" pb="70px" fontFamily="veralaRound">
                We encourage innovative ideas and improvising new things.
              </Text>
            </Flex>
            <Flex direction="column">
              <Heading fontSize="24px" pb="15px" fontFamily="avenir">
                MANAGEMENT SKILLS
              </Heading>
              <Text fontSize="20px" pb="70px" fontFamily="veralaRound">
                We thrive on good communication and motivation.
              </Text>
            </Flex>
            <Flex direction="column">
              <Heading fontSize="24px" pb="15px" fontFamily="avenir">
                ENGAGEMENT
              </Heading>
              <Text fontSize="20px" pb="70px" fontFamily="veralaRound">
                Team work is the secret to achieve uncommon results.
              </Text>
            </Flex>
          </VStack>
        </MtnFlx>
      </Flex>
    </Flex>
  );
};

export default Buildchng;

const txt = ["P", "R", "I", "M", "E"];
