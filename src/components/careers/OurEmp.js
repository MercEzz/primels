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
      w="100%"
      h="100vh"
      px="6"
      py="6"
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
        pb="50px"
      >
        OUR HAPPY EMPLOYEES
      </MtnHead>

      <MtnFlx
        h="100%"
        w="100%"
        initial={{ opacity: 0, y: 100 }}
        animate={animationTest}
        transition={{ delay: 1, duration: 2, type: "just" }}
        pos="relative"
        align="center"
        justify="center"
      >
        {" "}
        <Icon
          pos="absolute"
          left="0"
          top="15%"
          ml="4"
          w="70px"
          h="50px"
          as={ImQuotesLeft}
          color="#DFBD69"
        />
        {testimonial.map((tes) => (
          <Flex
            align={"flex-start"}
            justify="center"
            w="100%"
            direction={"column"}
            key={tes.name}
          >
            <Text px="25px" fontSize="16px" pb="12" fontFamily="veralaRound">
              {tes.text}
            </Text>
            <Flex align="center" pt="25px" pl="1.5rem">
              <Avatar h="80px" w="80px" src={tes.avtr} alt={tes.name} />
              <Stack spacing={-1}>
                <Text
                  px="2"
                  fontSize="18px"
                  fontFamily="veralaRound"
                  fontWeight={400}
                  pb="10px"
                >
                  {tes.name}
                </Text>
                <Text
                  px="2"
                  fontFamily="veralaRound"
                  fontWeight={400}
                  fontSize="16px"
                  color="black"
                >
                  {tes.title}
                </Text>
              </Stack>
            </Flex>
          </Flex>
        ))}{" "}
        <Icon
          mr="4"
          color="#DFBD69"
          pos="absolute"
          right="0"
          bottom="35%"
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
