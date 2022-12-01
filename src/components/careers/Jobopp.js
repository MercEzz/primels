import {
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
  VStack,
  Image,
  Link,
} from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { MdLocationOn, MdBusinessCenter } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import ResForm from "./ResForm";

const MtnHead = motion(Heading);
const MtnTxt = motion(Text);
const MtnFlx = motion(Flex);
const MtnStk = motion(VStack);

const Jobopp = () => {
  const ref = useRef(null);
  const refforForm = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationHead = useAnimation();
  const animationLftHd = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationHead.start({ opacity: 1, y: 0 });
      animationLftHd.start({ opacity: 1 });
    }
  }, [isInView, animationHead, animationLftHd]);

  const clickHandler = (e) => {
    e.preventDefault();
    refforForm.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Flex
        ref={ref}
        direction="column"
        w="100%"
        h="100%"
        align="center"
        pt="5rem"
        px="6.25rem"
        pb="3.125rem"
      >
        <MtnHead
          initial={{ opacity: 0, y: -100 }}
          animate={animationHead}
          transition={{ duration: 2, type: "just" }}
          fontFamily="goudy"
          fontSize="2.5rem"
          fontWeight="400"
          mb="1.875rem"
        >
          JOB OPPORTUNITIES
        </MtnHead>
        <Flex w="100%" h="100%">
          <Flex
            direction="column"
            w="100%"
            h="100%"
            py="4.688rem"
            mr="0.938rem"
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
              fontSize="1.5rem"
              py="1.563rem"
              px="6.25rem"
            >
              FOLLOW US ON LINKEDIN
            </MtnHead>
            <MtnTxt
              initial={{ opacity: 0 }}
              animate={animationLftHd}
              transition={{ delay: 1, duration: 2, type: "just" }}
              fontFamily="veralaRound"
              fontSize="1rem"
              px="5.313rem"
              pb="0.938rem"
            >
              The best way to stay updated on Job Opportunities at Prime
              Lifespace is to follow us on Linkedin.
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
              <Link
                href="https://www.linkedin.com/company/prime-lifespace-consultancy-pvt-ltd/"
                isExternal
              >
                <Icon h="5rem" w="5rem" color="#0A66C2" as={AiFillLinkedin} />
              </Link>
              <Image w="50%" h="50%" pt="0.938rem" src="/images/logo.png" />
            </MtnFlx>
          </Flex>
          <Flex w="100%">
            <Grid
              w="100%"
              h="100%"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(2, 1fr)"
              gap="0.938rem"
            >
              <Flex
                as={Link}
                direction="column"
                align="center"
                justify="center"
                w="100%"
                h="100%"
                py="1.563rem"
                bgGradient="linear(to-b, #DFBD69, #B88746)"
                textAlign="center"
                color="white"
                _hover={{
                  textDecoration: "none",
                  bgGradient: "linear(to-b,  #B88746, #DFBD69)",
                }}
                onClick={clickHandler}
                cursor="pointer"
              >
                <MtnHead
                  initial={{ opacity: 0 }}
                  animate={animationLftHd}
                  transition={{ delay: 1, duration: 2, type: "just" }}
                  fontSize="1.25rem"
                  fontFamily="avenir"
                  pb="0.938rem"
                >
                  SALES MANAGER
                </MtnHead>
                <MtnStk
                  initial={{ opacity: 0 }}
                  animate={animationLftHd}
                  transition={{ delay: 1, duration: 2, type: "just" }}
                  align="flex-start"
                  fontFamily="veralaRound"
                  fontSize="1rem"
                >
                  <Flex align="center" justify="flex-start">
                    <Icon as={MdLocationOn} w="6" h="6" mx="0.438rem" />
                    <Text>Chennai</Text>
                  </Flex>
                  <Flex align="center" justify="flex-start">
                    <Icon as={FaBusinessTime} w="6" h="6" mx="0.438rem" />
                    <Text>5-7 years</Text>
                  </Flex>
                  <Flex align="center" justify="flex-start">
                    <Icon as={MdBusinessCenter} w="6" h="6" mx="0.438rem" />
                    <Text>Full-time</Text>
                  </Flex>
                </MtnStk>
              </Flex>
              <Flex
                as={Link}
                direction="column"
                align="center"
                justify="center"
                w="100%"
                h="100%"
                py="1.563rem"
                bgGradient="linear(to-b, #DFBD69, #B88746)"
                textAlign="center"
                color="white"
                _hover={{
                  textDecoration: "none",
                  bgGradient: "linear(to-b,  #B88746, #DFBD69)",
                }}
                onClick={clickHandler}
              >
                <MtnHead
                  initial={{ opacity: 0 }}
                  animate={animationLftHd}
                  transition={{ delay: 1, duration: 2, type: "just" }}
                  fontSize="1.25rem"
                  fontFamily="avenir"
                  pb="0.938rem"
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
                  fontSize="1rem"
                >
                  <Flex align="center" justify="flex-start">
                    <Icon as={MdLocationOn} w="6" h="6" mx="0.438rem" />
                    <Text>Chennai</Text>
                  </Flex>
                  <Flex align="center" justify="flex-start">
                    <Icon as={FaBusinessTime} w="6" h="6" mx="0.438rem" />
                    <Text>5-7 years</Text>
                  </Flex>
                  <Flex align="center" justify="flex-start">
                    <Icon as={MdBusinessCenter} w="6" h="6" mx="0.438rem" />
                    <Text>Full-time</Text>
                  </Flex>
                </MtnStk>
              </Flex>
              <Flex
                as={Link}
                direction="column"
                align="center"
                justify="center"
                w="100%"
                py="1.563rem"
                bgGradient="linear(to-t, #DFBD69, #B88746)"
                textAlign="center"
                color="white"
                _hover={{
                  textDecoration: "none",
                  bgGradient: "linear(to-t,  #B88746, #DFBD69)",
                }}
                onClick={clickHandler}
              >
                <MtnHead
                  initial={{ opacity: 0 }}
                  animate={animationLftHd}
                  transition={{ delay: 1, duration: 2, type: "just" }}
                  fontSize="1.25rem"
                  fontFamily="avenir"
                  pb="0.938rem"
                >
                  GRAPHIC DESIGNER
                </MtnHead>
                <MtnStk
                  initial={{ opacity: 0 }}
                  animate={animationLftHd}
                  transition={{ delay: 1, duration: 2, type: "just" }}
                  align="flex-start"
                  fontFamily="veralaRound"
                  fontSize="1rem"
                >
                  <Flex align="center" justify="flex-start">
                    <Icon as={MdLocationOn} w="6" h="6" mx="0.438rem" />
                    <Text>Mumbai</Text>
                  </Flex>
                  <Flex align="center" justify="flex-start">
                    <Icon as={FaBusinessTime} w="6" h="6" mx="0.438rem" />
                    <Text>1-2 years</Text>
                  </Flex>
                  <Flex align="center" justify="flex-start">
                    <Icon as={MdBusinessCenter} w="6" h="6" mx="0.438rem" />
                    <Text>Internship</Text>
                  </Flex>
                </MtnStk>
              </Flex>
              <Flex
                as={Link}
                direction="column"
                align="center"
                justify="center"
                w="100%"
                h="100%"
                py="1.563rem"
                bgGradient="linear(to-t, #DFBD69, #B88746)"
                textAlign="center"
                color="white"
                _hover={{
                  textDecoration: "none",
                  bgGradient: "linear(to-t,  #B88746, #DFBD69)",
                }}
                onClick={clickHandler}
              >
                <MtnHead
                  initial={{ opacity: 0 }}
                  animate={animationLftHd}
                  transition={{ delay: 1, duration: 2, type: "just" }}
                  fontSize="1.25rem"
                  fontFamily="avenir"
                  pb="0.938rem"
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
                  fontSize="1rem"
                >
                  <Flex align="center" justify="flex-start">
                    <Icon as={MdLocationOn} w="6" h="6" mx="0.438rem" />
                    <Text>Mumbai</Text>
                  </Flex>
                  <Flex align="center" justify="flex-start">
                    <Icon as={FaBusinessTime} w="6" h="6" mx="0.438rem" />
                    <Text>1-2 years</Text>
                  </Flex>
                  <Flex align="center" justify="flex-start">
                    <Icon as={MdBusinessCenter} w="6" h="6" mx="0.438rem" />
                    <Text>Full-time</Text>
                  </Flex>
                </MtnStk>
              </Flex>
            </Grid>
          </Flex>
        </Flex>
      </Flex>
      <Flex ref={refforForm} w="100%" h="100%">
        <ResForm />
      </Flex>
    </>
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
