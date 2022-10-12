import { Flex, Heading, Text, Avatar, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const MtnHead = motion(Heading);

const OurEmp = () => {
  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      mt="130px"
      px="80px"
      mb="150px"
      align="center"
    >
      <MtnHead
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, type: "just" }}
        direction="column"
        fontSize="48px"
        fontFamily="goudy"
        fontWeight="400"
        pb="75px"
      >
        OUR HAPPY EMPLOYEES
      </MtnHead>
      <Flex>
        {testimonial.map((tes) => (
          <Flex
            align={"flex-start"}
            justify="center"
            w="100%"
            direction={"column"}
            key={tes.name}
          >
            <Text p="6" fontSize="20px" fontFamily="veralaRound">
              {tes.text}
            </Text>
            <Flex align="center" pt="50px" pl="24px">
              <Avatar src={tes.avtr} alt={tes.name} />
              <Stack spacing={-1}>
                <Text
                  px="2"
                  fontSize="24px"
                  fontFamily="veralaRound"
                  fontWeight={400}
                >
                  {tes.name}
                </Text>
                <Text
                  px="2"
                  fontFamily="veralaRound"
                  fontWeight={400}
                  fontSize="20px"
                  color="black"
                >
                  {tes.title}
                </Text>
              </Stack>
            </Flex>
          </Flex>
        ))}
      </Flex>
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
