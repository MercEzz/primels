import {
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { MdLocationOn, MdBusinessCenter } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";

const MtnHead = motion(Heading);
const MtnTxt = motion(Text);
const MtnFlx = motion(Flex);
const MtnStk = motion(VStack);

const Jobopp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationHead = useAnimation();
  const animationLftHd = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationHead.start({ opacity: 1, y: 0 });
      animationLftHd.start({ opacity: 1 });
    }
  }, [isInView, animationHead, animationLftHd]);

  return (
    <Flex
      ref={ref}
      direction="column"
      w="100%"
      h="100vh"
      align="center"
      mt="100px"
      px="100px"
      pb="50px"
    >
      <MtnHead
        initial={{ opacity: 0, y: -100 }}
        animate={animationHead}
        transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        fontSize="40px"
        fontWeight="400"
        mb="50px"
      >
        JOB OPPORTUNITIES
      </MtnHead>
      <Flex w="100%" h="100%">
        <Flex
          direction="column"
          w="100%"
          h="100%"
          py="50px"
          mr="15px"
          align="center"
          justify="center"
          textAlign="center"
          bgImage="/images/bg-box.jpg"
        >
          <MtnHead
            initial={{ opacity: 0 }}
            animate={animationLftHd}
            transition={{ delay: 1, duration: 2, type: "just" }}
            fontFamily="avenir"
            fontSize="24px"
            py="25px"
            px="100px"
          >
            FOLLOW US ON LINKEDIN
          </MtnHead>
          <MtnTxt
            initial={{ opacity: 0 }}
            animate={animationLftHd}
            transition={{ delay: 1, duration: 2, type: "just" }}
            fontFamily="veralaRound"
            fontSize="16px"
            px="85px"
            pb="15px"
          >
            The best way to stay updated on Job Opportunities at Prime Lifespace
            is to follow us on Linkedin.
          </MtnTxt>
          <MtnFlx
            w="100%"
            initial={{ opacity: 0 }}
            animate={animationLftHd}
            transition={{ delay: 1, duration: 2, type: "just" }}
            direction="column"
            align="center"
            justify="center"
          >
            <Icon h="80px" w="80px" color="#0A66C2" as={AiFillLinkedin} />
            <Image w="50%" h="50%" pt="15px" src="/images/logo.png" />
          </MtnFlx>
        </Flex>
        <Flex w="100%">
          <Grid
            w="100%"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap="15px"
          >
            <Flex
              direction="column"
              align="center"
              justify="center"
              w="100%"
              h="100%"
              py="15px"
              bgGradient="linear(to-b, #DFBD69, #B88746)"
              textAlign="center"
              color="white"
            >
              <MtnHead
                initial={{ opacity: 0 }}
                animate={animationLftHd}
                transition={{ delay: 1, duration: 2, type: "just" }}
                fontSize="20px"
                fontFamily="avenir"
                pb="15px"
              >
                SALES <br />
                MANAGER
              </MtnHead>
              <MtnStk
                initial={{ opacity: 0 }}
                animate={animationLftHd}
                transition={{ delay: 1, duration: 2, type: "just" }}
                align="flex-start"
                fontFamily="veralaRound"
                fontSize="16px"
              >
                <Flex align="center" justify="flex-start">
                  <Icon as={MdLocationOn} w="6" h="6" mx="7px" />
                  <Text>Chennai</Text>
                </Flex>
                <Flex align="center" justify="flex-start">
                  <Icon as={FaBusinessTime} w="6" h="6" mx="7px" />
                  <Text>5-7 years</Text>
                </Flex>
                <Flex align="center" justify="flex-start">
                  <Icon as={MdBusinessCenter} w="6" h="6" mx="7px" />
                  <Text>Full-time</Text>
                </Flex>
              </MtnStk>
            </Flex>
            <Flex
              direction="column"
              align="center"
              justify="center"
              w="100%"
              h="100%"
              py="15px"
              bgGradient="linear(to-b, #DFBD69, #B88746)"
              textAlign="center"
              color="white"
            >
              <MtnHead
                initial={{ opacity: 0 }}
                animate={animationLftHd}
                transition={{ delay: 1, duration: 2, type: "just" }}
                fontSize="20px"
                fontFamily="avenir"
                pb="15px"
              >
                OPERATIONS <br />
                MANAGER
              </MtnHead>
              <MtnStk
                initial={{ opacity: 0 }}
                animate={animationLftHd}
                transition={{ delay: 1, duration: 2, type: "just" }}
                align="flex-start"
                fontFamily="veralaRound"
                fontSize="16px"
              >
                <Flex align="center" justify="flex-start">
                  <Icon as={MdLocationOn} w="6" h="6" mx="7px" />
                  <Text>Chennai</Text>
                </Flex>
                <Flex align="center" justify="flex-start">
                  <Icon as={FaBusinessTime} w="6" h="6" mx="7px" />
                  <Text>5-7 years</Text>
                </Flex>
                <Flex align="center" justify="flex-start">
                  <Icon as={MdBusinessCenter} w="6" h="6" mx="7px" />
                  <Text>Full-time</Text>
                </Flex>
              </MtnStk>
            </Flex>
            <Flex
              direction="column"
              align="center"
              justify="center"
              w="100%"
              py="15px"
              bgGradient="linear(to-t, #DFBD69, #B88746)"
              textAlign="center"
              color="white"
            >
              <MtnHead
                initial={{ opacity: 0 }}
                animate={animationLftHd}
                transition={{ delay: 1, duration: 2, type: "just" }}
                fontSize="20px"
                fontFamily="avenir"
                pb="15px"
              >
                GRAPHIC <br />
                DESIGNER
              </MtnHead>
              <MtnStk
                initial={{ opacity: 0 }}
                animate={animationLftHd}
                transition={{ delay: 1, duration: 2, type: "just" }}
                align="flex-start"
                fontFamily="veralaRound"
                fontSize="16px"
              >
                <Flex align="center" justify="flex-start">
                  <Icon as={MdLocationOn} w="6" h="6" mx="7px" />
                  <Text>Mumbai</Text>
                </Flex>
                <Flex align="center" justify="flex-start">
                  <Icon as={FaBusinessTime} w="6" h="6" mx="7px" />
                  <Text>1-2 years</Text>
                </Flex>
                <Flex align="center" justify="flex-start">
                  <Icon as={MdBusinessCenter} w="6" h="6" mx="7px" />
                  <Text>Internship</Text>
                </Flex>
              </MtnStk>
            </Flex>
            <Flex
              direction="column"
              align="center"
              justify="center"
              // w="250px"
              // h="200px"
              w="100%"
              h="100%"
              py="15px"
              bgGradient="linear(to-t, #DFBD69, #B88746)"
              textAlign="center"
              color="white"
            >
              <MtnHead
                initial={{ opacity: 0 }}
                animate={animationLftHd}
                transition={{ delay: 1, duration: 2, type: "just" }}
                fontSize="20px"
                fontFamily="avenir"
                pb="15px"
              >
                HOSPITALITY <br />
                MANAGEMENT
              </MtnHead>
              <MtnStk
                initial={{ opacity: 0 }}
                animate={animationLftHd}
                transition={{ delay: 1, duration: 2, type: "just" }}
                align="flex-start"
                fontFamily="veralaRound"
                fontSize="16px"
              >
                <Flex align="center" justify="flex-start">
                  <Icon as={MdLocationOn} w="6" h="6" mx="7px" />
                  <Text>Mumbai</Text>
                </Flex>
                <Flex align="center" justify="flex-start">
                  <Icon as={FaBusinessTime} w="6" h="6" mx="7px" />
                  <Text>1-2 years</Text>
                </Flex>
                <Flex align="center" justify="flex-start">
                  <Icon as={MdBusinessCenter} w="6" h="6" mx="7px" />
                  <Text>Full-time</Text>
                </Flex>
              </MtnStk>
            </Flex>
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Jobopp;

// const joblisting = [
//   {
//     title: "SALES MANAGER",
//     loc: "Chennai",
//     exp: "5-7 years",
//     type: "Full-time",
//   },
//   {
//     title: "OPERATIONS MANAGER",
//     loc: "Chennai",
//     exp: "5-7 years",
//     type: "Full-time",
//   },
//   {
//     title: "GRAPHIC DESIGNER",
//     loc: "Mumbai",
//     exp: "1-2 years",
//     type: "Internship",
//   },
//   {
//     title: "HOSPITALITY MANAGEMENT",
//     loc: "Mumbai",
//     exp: "1-2 years",
//     type: "Full-time",
//   },
// ];
