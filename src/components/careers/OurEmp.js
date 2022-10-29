import { Flex, Heading, Text, Avatar, Stack, Icon } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const MtnHead = motion(Heading);
const MtnFlx = motion(Flex);

const OurEmp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationHead = useAnimation();
  const animationTest = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationHead.start({ opacity: 1, y: 0 });
      animationTest.start({ opacity: 1, y: 0 });
    }
  }, [isInView, animationHead, animationTest]);

  return (
    <Flex
      ref={ref}
      direction="column"
      mt="90px"
      w="100%"
      h="100%"
      px="100px"
      align="flex-start"
      justify="center"
    >
      <MtnHead
        initial={{ opacity: 0, y: -100 }}
        animate={animationHead}
        transition={{ duration: 2, type: "just" }}
        w="100%"
        textAlign="center"
        fontSize="40px"
        fontFamily="goudy"
        fontWeight="400"
        // pb="25px"
      >
        OUR HAPPY EMPLOYEES
      </MtnHead>

      <MtnFlx
        w="100%"
        h="full"
        initial={{ opacity: 0, y: 100 }}
        animate={animationTest}
        transition={{ delay: 1, duration: 2, type: "just" }}
        pos="relative"
        align="flex-start"
        justify="space-between"
        bgColor="blue"
      >
        {" "}
        <Icon
          pos="absolute"
          left="0"
          top="0"
          ml="4"
          w="70px"
          h="50px"
          as={ImQuotesLeft}
          color="#DFBD69"
        />
        <Flex
          pt="50px"
          align="flex-start"
          justify="space-between"
          w="100%"
          h="100%"
          bgColor="red"
          direction={"column"}
        >
          <Text
            h="100%"
            px="25px"
            fontSize="16px"
            pb="40px"
            fontFamily="veralaRound"
          >
            I have associated with Arete Homes for more than a year. I handle
            sales and marketing for the project and it has been a great journey
            till date. I love working here since I am given complete freedom to
            work as per my comfort, and the management gives me complete
            flexibility to explore avenues . This in turn helps me to evolve in
            my career and it is a great experience.
          </Text>
          <Flex w="100%" h="100%" align="center" pl="25px">
            <Avatar h="80px" w="80px" src="" alt="" />
            <Stack h="100%" spacing={-1}>
              <Text
                px="2"
                fontSize="18px"
                fontFamily="veralaRound"
                fontWeight={400}
                pb="10px"
              >
                Suresh
              </Text>
              <Text
                px="2"
                fontFamily="veralaRound"
                fontWeight={400}
                fontSize="16px"
                color="black"
              >
                Sales Team
              </Text>
            </Stack>
          </Flex>
        </Flex>
        <Flex
          pt="50px"
          align="center"
          justify="space-between"
          w="100%"
          h="100%"
          bgColor="orange"
          direction={"column"}
        >
          <Flex w="100%" h="100%">
            <Text
              h="100%"
              px="25px"
              fontSize="16px"
              pb="40px"
              fontFamily="veralaRound"
            >
              I have been with this company for close to a few years now and
              what this organization brings to my table is a great opportunity
              to explore the various aspects of real estate development. With
              such a visionary project in hand, I can proudly say that such an
              association with Prime Lifespace has been fruitful and full of
              challenges that I enjoy on a day to day basis.
            </Text>
          </Flex>
          <Flex w="100%" h="100%" align="center" pl="25px" bgColor="purple">
            <Avatar h="80px" w="80px" src="" alt="" />
            <Stack h="100%" spacing={-1}>
              <Text
                px="2"
                fontSize="18px"
                fontFamily="veralaRound"
                fontWeight={400}
                pb="10px"
              >
                Shailaja
              </Text>
              <Text
                px="2"
                fontFamily="veralaRound"
                fontWeight={400}
                fontSize="16px"
                color="black"
              >
                Sales and Admin Team
              </Text>
            </Stack>
          </Flex>
        </Flex>
        <Flex
          pt="50px"
          align="flex-end"
          justify="space-between"
          w="100%"
          h="100%"
          bgColor="green"
          direction={"column"}
        >
          <Text
            h="100%"
            px="25px"
            fontSize="16px"
            pb="40px"
            fontFamily="veralaRound"
          >
            I have been associated with this organization since the beginning of
            Arete Homes Project. Even today I am motivated and really amazed to
            see the energy here day in and day out. This is a visionary project
            and the satisfaction I get to serve the needs of our clients is
            immense. The organization has taught me a lot about team spirit, and
            how a quality product never fails.
          </Text>
          <Flex w="100%" h="100%" align="center" pl="25px">
            <Avatar h="80px" w="80px" src="" alt="" />
            <Stack h="100%" spacing={-1}>
              <Text
                px="2"
                fontSize="18px"
                fontFamily="veralaRound"
                fontWeight={400}
                pb="10px"
              >
                Jhonny
              </Text>
              <Text
                px="2"
                fontFamily="veralaRound"
                fontWeight={400}
                fontSize="16px"
                color="black"
              >
                Civil Team
              </Text>
            </Stack>
          </Flex>
        </Flex>
        <Icon
          mr="4"
          color="#DFBD69"
          pos="absolute"
          right="0"
          bottom="25%"
          zIndex="10"
          w="70px"
          h="50px"
          as={ImQuotesRight}
        />
      </MtnFlx>
    </Flex>
  );
};

export default OurEmp;

const testimonial = [
  {
    name: "Suresh",
    title: "Sales Team",
    text: "I have associated with Arete Homes for more than a year. I handle sales and marketing for the project and it has been a great journey till date. I love working here since I am given complete freedom to work as per my comfort, and the management gives me complete flexibility to explore avenues . This in turn helps me to evolve in my career and it is a great experience.",
  },
  {
    name: "Shailaja",
    title: "Sales and Admin Team",
    text: "I have been with this company for close to a few years now and what this organization brings to my table is a great opportunity to explore the various aspects of real estate development. With such a visionary project in hand, I can proudly say that such an association with Prime Lifespace has been fruitful and full of challenges that I enjoy on a day to day basis.",
  },
  {
    name: "Jhonny",
    title: "Civil Team",
    text: "I have been associated with this organization since the beginning of Arete Homes Project. Even today I am motivated and really amazed to see the energy here day in and day out. This is a visionary project and the satisfaction I get to serve the needs of our clients is immense. The organization has taught me a lot about team spirit, and how a quality product never fails.",
  },
];
