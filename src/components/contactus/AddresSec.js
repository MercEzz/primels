/* eslint-disable jsx-a11y/iframe-has-title */
import {
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
  Box,
  Link,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { ImLocation } from "react-icons/im";
import { HiMail, HiPhone } from "react-icons/hi";
import { motion, useAnimation, useInView } from "framer-motion";

const MtnFlx = motion(Flex);
const MtnHead = motion(Heading);
const MtnStk = motion(VStack);

const AddresSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  const animateFlx = useAnimation();
  const animateFade = useAnimation();

  const [add, setAdd] = useState(true);

  const CorporateAdd =
    "https://maps.google.com/maps?width=918&amp;height=700&amp;hl=en&amp;q=Prime lifespace&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";

  const ChennaiAdd =
    "https://maps.google.com/maps?width=918&amp;height=700&amp;hl=en&amp;q=Prime Expat Infra, chennai&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";

  useEffect(() => {
    if (isInView) {
      animateFlx.start({ opacity: 1, scale: 1 });
      animateFade.start({ opacity: 1 });
    }
  }, [isInView, animateFlx, animateFade]);

  return (
    <Flex ref={ref} w="100%" h="100vh">
      <Flex w="40%" h="100%" direction="column" align="center" justify="center">
        <MtnFlx
          as={Link}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={animateFlx}
          transition={{ duration: 2, type: "just" }}
          direction="column"
          w="100%"
          h="100%"
          py="25px"
          align="center"
          justify="center"
          pl="100px"
          pr="50px"
          bgGradient={add ? "linear(to-b, #B88746, #DFBD69)" : "white"}
          _hover={{ textDecoration: "none" }}
          onClick={(e) => {
            setAdd(true);
          }}
        >
          <MtnHead
            initial={{ opacity: 0 }}
            animate={animateFade}
            transition={{ delay: 1, duration: 2, type: "just" }}
            w="100%"
            fontFamily="avenir"
            fontSize="34px"
            pb="25px"
            lineHeight="41px"
            textAlign="left"
          >
            CORPORATE OFFICE
          </MtnHead>
          <MtnStk
            initial={{ opacity: 0 }}
            animate={animateFade}
            transition={{ delay: 1, duration: 2, type: "just" }}
            w="100%"
            align="flex-start"
          >
            <HStack align="flex-start" mb="7px">
              <Icon as={ImLocation} w="30px" h="40px" mt="-1" />
              <Text fontFamily="veralaRound" fontSize="16px" lineHeight="24px">
                202, Krishna Kunj, above HDFC Bank,30, Navyug Society V.M. Road,
                J.V.P.D. Scheme Vile Parle (West), Mumbai- 400 056
              </Text>
            </HStack>
            <HStack align="center" mb="7px">
              <Icon as={HiMail} w="35px" h="30px" />
              <Text fontFamily="veralaRound" fontSize="16px" lineHeight="24px">
                info@primelifespace.com
              </Text>
            </HStack>
            <HStack align="center">
              <Icon as={HiPhone} w="35px" h="40px" />
              <Text fontFamily="veralaRound" fontSize="16px" lineHeight="24px">
                7338808775
              </Text>
            </HStack>
          </MtnStk>
        </MtnFlx>
        <MtnFlx
          as={Link}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={animateFlx}
          transition={{ duration: 2, type: "just" }}
          direction="column"
          w="100%"
          h="100%"
          align="center"
          justify="center"
          pl="100px"
          pr="50px"
          _hover={{ textDecoration: "none" }}
          bgGradient={add ? "white" : "linear(to-b, #B88746, #DFBD69)"}
          onClick={(e) => {
            setAdd(false);
          }}
        >
          <MtnHead
            initial={{ opacity: 0 }}
            animate={animateFade}
            transition={{ delay: 2, duration: 2, type: "just" }}
            w="100%"
            fontFamily="avenir"
            fontSize="34px"
            pb="25px"
            lineHeight="41px"
            textAlign="left"
          >
            CHENNAI OFFICE
          </MtnHead>
          <MtnStk
            initial={{ opacity: 0 }}
            animate={animateFade}
            transition={{ delay: 2, duration: 2, type: "just" }}
            w="100%"
            align="flex-start"
          >
            <HStack align="flex-start" mb="7px">
              <Icon as={ImLocation} w="30px" h="40px" mt="-1" />
              <Text fontFamily="veralaRound" fontSize="16px" lineHeight="24px">
                Prime Expat Infra No. 33, Mandapam Road, Kilpauk, Chennai -
                600010
              </Text>
            </HStack>
            <HStack align="center" mb="7px">
              <Icon as={HiMail} w="35px" h="30px" />
              <Text fontFamily="veralaRound" fontSize="16px" lineHeight="24px">
                sales@primelifespace.com
              </Text>
            </HStack>
            <HStack align="center">
              <Icon as={HiPhone} w="35px" h="40px" />
              <Text fontFamily="veralaRound" fontSize="16px" lineHeight="24px">
                7338808775
              </Text>
            </HStack>
          </MtnStk>
        </MtnFlx>
      </Flex>
      <MtnFlx
        initial={{ opacity: 0, scale: 0.5 }}
        animate={animateFlx}
        transition={{ duration: 2, type: "just" }}
        h="100%"
        w="60%"
      >
        {add ? (
          <iframe
            class="gmap_iframe"
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=918&amp;height=700&amp;hl=en&amp;q=Prime lifespace&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        ) : (
          <iframe
            class="gmap_iframe"
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=918&amp;height=700&amp;hl=en&amp;q=Prime Expat Infra, chennai&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        )}
      </MtnFlx>
    </Flex>
  );
};

export default AddresSec;
