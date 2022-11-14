import { Flex, Heading, Image, Text, Divider, Box } from "@chakra-ui/react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const MtnFlx = motion(Flex);
const MtnImg = motion(Image);
const MtnHead = motion(Heading);

const Buildchng = () => {
  const [currImg,setCurrImg] = useState(null);
  const [currSrc,setCurrSrc] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const pRef = useRef(null);
  const pIsInView = useInView(pRef, { once: true });
  const rRef = useRef(null);
  const rIsInView = useInView(rRef, { once: true });
  const iRef = useRef(null);
  const iIsInView = useInView(iRef, { once: true });
  const mRef = useRef(null);
  const mIsInView = useInView(mRef, { once: true });
  const eRef = useRef(null);
  const eIsInView = useInView(eRef, { once: true });
  const animationImg = useAnimation();
  const imgData=[
    {src:"/images/careers/problem solving.jpg"},
    {src:"/images/careers/reliability.jpg"},
    {src:"/images/careers/innovation.jpg"},
    {src:"/images/careers/management.jpg"},
    {src:"/images/careers/engagement.jpg"},
    ]
  const animationHead = useAnimation();
  const animationDvd = useAnimation();
  const animationLtr = useAnimation();
  const animationRightTxt = useAnimation();
  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      animationHead.start({ opacity: 1, y: 0 });
      animationDvd.start({ opacity: 1, y: 0 });
      animationLtr.start({ opacity: 1, x: 0 });
      animationRightTxt.start({ opacity: 1, x: 0 });
    }

  }, [
    isInView,
  ]);
  useEffect(() => {
    animationImg.start({ scale: 1, opacity: 1 });
  }, [
    currImg,
  ]);
  useEffect(() => {
    if (pIsInView) {
      console.log('p is visible')
      setCurrImg(0);
      setCurrSrc(imgData[0].src);
    }
  }, [
    pIsInView,
  ]);
  useEffect(() => {
    if (rIsInView) {
      console.log('r is visible')
      setCurrImg(1);
      setCurrSrc(imgData[1].src);
    }
  }, [
    rIsInView,
  ]);
  useEffect(() => {
    if (iIsInView) {
      console.log('i is visible')
      setCurrImg(2);
      setCurrSrc(imgData[2].src);
    }
  }, [
    iIsInView,
  ]);
  useEffect(() => {
    if (mIsInView) {
      console.log('m is visible')
      setCurrImg(3);
      setCurrSrc(imgData[3].src);
    }
  }, [
    mIsInView,
  ]);
  useEffect(() => {
    if (eIsInView) {
      console.log('e is visible')
      
      setCurrImg(4);
      setCurrSrc(imgData[4].src);
    }
  }, [
    eIsInView,
  ]);

  return (
    <AnimatePresence>
      <Flex
        ref={ref}
        direction="column"
        w="100%"
        h="100%"
        align="center"
        justify="center"
        overflow="hidden">
        <MtnHead
          initial={{ opacity: 0, y: -50 }}
          animate={animationHead}
          transition={{ duration: 2, type: "just" }}
          fontSize="40px"
          fontWeight="400"
          fontFamily="goudy"
        >
          BUILDING CHANGE
        </MtnHead>
        <Flex
          align="center"
          mt="50px"
          justify="center"
          w="100%"
          h="100%"
          pos="relative"
        >
          <Flex w="60%" h="100%" direction="column" align="center">
            {currImg?<MtnImg
              initial={{scale: 0.5, opacity: 0}}
              animate={animationImg}
              transition={{duration: 2, type: "just" }}
              w="500px"
              h="500px"
              top="30rem"
              left="1rem"
              right="1rem"
              src={currSrc}
              objectFit="cover"
            />:<img />}
          </Flex>
          <Flex
            direction="column"
            w="40%"
            h="100%"
            align="flex-start"
            pr="100px"
          >
            <MtnFlx
              initial={{ opacity: 0, y: -100 }}
              animate={animationDvd}
              transition={{ delay: 1, duration: 2, type: "just" }}
              direction="column"
              align="center"
              pl="1.3rem"
            >
              <Divider
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
                h="84px"
              />{" "}
              <Box
                height="30px"
                width="30px"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
              />
            </MtnFlx>

            <Flex direction="row" align="center" justify="center" py="25px">
              <MtnHead
                ref={pRef}
                initial={{ opacity: 0, x: -50 }}
                animate={animationLtr}
                transition={{ delay: 1, duration: 2, type: "just" }}
                fontSize="110px"
                fontWeight="400"
                fontFamily="goudy"
                lineHeight="132px"
                color="#D9D9D9"
                pr="45px"
              >
                P
              </MtnHead>
              <MtnFlx
                initial={{ opacity: 0, x: 50 }}
                animate={animationRightTxt}
                transition={{ delay: 1, duration: 2, type: "just" }}
                direction="column"
              >
                <Heading fontSize="20px" pb="10px" fontFamily="avenir">
                  PROBLEM SOLVING SKILLS
                </Heading>
                <Text
                  fontSize="16px"
                  lineHeight="24px"
                  fontFamily="veralaRound"
                >
                  We believe to nurture problem solvers, who lead better.
                </Text>
              </MtnFlx>
            </Flex>
            <Flex direction="row" align="center" justify="center" pb="25px">
              <MtnHead
                ref={rRef}
                initial={{ opacity: 0, x: -50 }}
                animate={animationLtr}
                transition={{ delay: 3.5, duration: 2, type: "just" }}
                fontSize="110px"
                fontWeight="400"
                fontFamily="goudy"
                lineHeight="132px"
                color="#D9D9D9"
                pr="32px"
              >
                R
              </MtnHead>
              <MtnFlx
                initial={{ opacity: 0, x: 50 }}
                animate={animationRightTxt}
                transition={{ delay: 3.5, duration: 2, type: "just" }}
                direction="column"
              >
                <Heading fontSize="20px" pb="10px" fontFamily="avenir">
                  RELIABILITY
                </Heading>
                <Text fontSize="16px" fontFamily="veralaRound">
                  We believe transperancy is the first step to any beginning.
                </Text>
              </MtnFlx>
            </Flex>
            <Flex direction="row" align="center" justify="center" pb="25px">
              <MtnHead
                ref={iRef}
                initial={{ opacity: 0, x: -50 }}
                animate={animationLtr}
                transition={{ delay: 5, duration: 2, type: "just" }}
                fontSize="110px"
                fontWeight="400"
                fontFamily="goudy"
                lineHeight="132px"
                color="#D9D9D9"
                pr="55px"
                pl="15px"
              >
                I
              </MtnHead>
              <MtnFlx
                initial={{ opacity: 0, x: 50 }}
                animate={animationRightTxt}
                transition={{ delay: 5, duration: 2, type: "just" }}
                direction="column"
              >
                <Heading fontSize="20px" pb="10px" fontFamily="avenir">
                  INNOVATIVE THINKING
                </Heading>
                <Text fontSize="16px" fontFamily="veralaRound">
                  We encourage innovative ideas and improvising new things.
                </Text>
              </MtnFlx>
            </Flex>
            <Flex direction="row" align="center" justify="center" pb="25px">
              <MtnHead
                ref={mRef}
                initial={{ opacity: 0, x: -50 }}
                animate={animationLtr}
                transition={{ delay: 7.5, duration: 2, type: "just" }}
                fontSize="110px"
                fontWeight="400"
                fontFamily="goudy"
                lineHeight="132px"
                color="#D9D9D9"
                pr="22px"
                ml="-12px"
              >
                M
              </MtnHead>
              <MtnFlx
                initial={{ opacity: 0, x: 50 }}
                animate={animationRightTxt}
                transition={{ delay: 7.5, duration: 2, type: "just" }}
                direction="column"
              >
                <Heading fontSize="20px" pb="10px" fontFamily="avenir">
                  MANAGEMENT SKILLS
                </Heading>
                <Text fontSize="16px" fontFamily="veralaRound">
                  We believe transperancy is the first step to any beginning.
                </Text>
              </MtnFlx>
            </Flex>
            <Flex direction="row" align="center" justify="center">
              <MtnHead
                ref={eRef}
                initial={{ opacity: 0, x: -50 }}
                animate={animationLtr}
                transition={{ delay: 10, duration: 2, type: "just" }}
                fontSize="110px"
                fontWeight="400"
                fontFamily="goudy"
                lineHeight="132px"
                color="#D9D9D9"
                pr="42px"
              >
                E
              </MtnHead>
              <MtnFlx
                initial={{ opacity: 0, x: 50 }}
                animate={animationRightTxt}
                transition={{ delay: 10, duration: 2, type: "just" }}
                direction="column"
              >
                <Heading fontSize="20px" pb="10px" fontFamily="avenir">
                  ENGAGEMENT
                </Heading>
                <Text fontSize="16px" fontFamily="veralaRound">
                  Team work is the secret to achieve uncommon results.
                </Text>
              </MtnFlx>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </AnimatePresence>
  );
};

export default Buildchng;
