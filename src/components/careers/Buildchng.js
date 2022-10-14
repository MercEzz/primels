import { Flex, Heading, Image, Text, Divider, Box } from "@chakra-ui/react";
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
      m="4rem auto"
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
        <Flex w="100%">
          <MtnImg
            initial={{ scale: 0.5 }}
            animate={animationImg}
            transition={{ delay: 1, duration: 2, type: "just" }}
            w="813px"
            h="568px"
            src="/images/careers/problem solving.jpg"
          />
        </Flex>
        <Flex
          direction="column"
          px="35px"
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

          <Flex
            direction="row"
            align="center"
            justify="center"
            px="2"
            py="25px"
          >
            <MtnHead
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
              <Text fontSize="20px" fontFamily="veralaRound">
                We believe to nurture problem solvers, who lead better.
              </Text>
            </MtnFlx>
          </Flex>
          <Flex
            direction="row"
            align="center"
            justify="center"
            px="2"
            pb="25px"
          >
            <MtnHead
              initial={{ opacity: 0, x: -50 }}
              animate={animationLtr}
              transition={{ delay: 1, duration: 2, type: "just" }}
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
              transition={{ delay: 1, duration: 2, type: "just" }}
              direction="column"
            >
              <Heading fontSize="20px" pb="10px" fontFamily="avenir">
                RELIABILITY
              </Heading>
              <Text fontSize="20px" fontFamily="veralaRound">
                We believe transperancy is the first step to any beginning.
              </Text>
            </MtnFlx>
          </Flex>
          <Flex
            direction="row"
            align="center"
            justify="center"
            px="2"
            pb="25px"
          >
            <MtnHead
              initial={{ opacity: 0, x: -50 }}
              animate={animationLtr}
              transition={{ delay: 1, duration: 2, type: "just" }}
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
              transition={{ delay: 1, duration: 2, type: "just" }}
              direction="column"
            >
              <Heading fontSize="20px" pb="10px" fontFamily="avenir">
                INNOVATIVE THINKING
              </Heading>
              <Text fontSize="20px" fontFamily="veralaRound">
                We encourage innovative ideas and improvising new things.
              </Text>
            </MtnFlx>
          </Flex>
          <Flex direction="row" align="center" justify="center" pb="25px">
            <MtnHead
              initial={{ opacity: 0, x: -50 }}
              animate={animationLtr}
              transition={{ delay: 1, duration: 2, type: "just" }}
              fontSize="110px"
              fontWeight="400"
              fontFamily="goudy"
              lineHeight="132px"
              color="#D9D9D9"
              pr="20px"
            >
              M
            </MtnHead>
            <MtnFlx
              initial={{ opacity: 0, x: 50 }}
              animate={animationRightTxt}
              transition={{ delay: 1, duration: 2, type: "just" }}
              direction="column"
            >
              <Heading fontSize="20px" pb="10px" fontFamily="avenir">
                MANAGEMENT SKILLS
              </Heading>
              <Text fontSize="20px" fontFamily="veralaRound">
                We believe transperancy is the first step to any beginning.
              </Text>
            </MtnFlx>
          </Flex>
          <Flex direction="row" align="center" justify="center" px="2">
            <MtnHead
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
              E
            </MtnHead>
            <MtnFlx
              initial={{ opacity: 0, x: 50 }}
              animate={animationRightTxt}
              transition={{ delay: 1, duration: 2, type: "just" }}
              direction="column"
            >
              <Heading fontSize="20px" pb="10px" fontFamily="avenir">
                ENGAGEMENT
              </Heading>
              <Text fontSize="20px" fontFamily="veralaRound">
                Team work is the secret to achieve uncommon results.
              </Text>
            </MtnFlx>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Buildchng;
