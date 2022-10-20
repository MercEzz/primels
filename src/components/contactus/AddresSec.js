/* eslint-disable jsx-a11y/iframe-has-title */
import {
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { ImLocation } from "react-icons/im";
import { HiMail, HiPhone } from "react-icons/hi";
import { motion, useAnimation, useInView } from "framer-motion";

const MtnFlx = motion(Flex);
const MtnHead = motion(Heading);
const MtnStk = motion(VStack);

const AddresSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateFlx = useAnimation();
  const animateFade = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateFlx.start({ opacity: 1, scale: 1 });
      animateFade.start({ opacity: 1 });
    }
  }, [isInView, animateFlx, animateFade]);

  return (
    <Flex ref={ref} w="100%" h="100%">
      <Flex w="40%" h="100%" direction="column" align="center" justify="center">
        <MtnFlx
          initial={{ opacity: 0, scale: 0.5 }}
          animate={animateFlx}
          transition={{ duration: 2, type: "just" }}
          direction="column"
          w="522px"
          h="350px"
          color="white"
          mb="50px"
          // py="25px"
          // pl="100px"
          // pr="50px"
          align="center"
          justify="center"
          pl="100px"
          pr="50px"
          bgGradient="linear(to-b, #B88746, #DFBD69)"
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
            CORPORATE OFFICE
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
          initial={{ opacity: 0, scale: 0.5 }}
          animate={animateFlx}
          transition={{ duration: 2, type: "just" }}
          direction="column"
          w="522px"
          h="350px"
          align="center"
          justify="center"
          pl="100px"
          pr="50px"
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
      >
        <Box w="918px" h="700px">
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
        </Box>
      </MtnFlx>
    </Flex>
  );
};

export default AddresSec;
