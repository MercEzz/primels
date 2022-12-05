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
//import { motion, useAnimation, useInView } from "framer-motion";

//const Flex = motion(Flex);
//const Heading = motion(Heading);
//const VStack = motion(VStack);

const AddresSec = () => {
  const ref = useRef(null);
  /*
  const isInView = useInView(ref, {
    margin: "0px 100px -50px 0px",
  });
  const animateFlx = useAnimation();
  const animateFade = useAnimation();
  */
  const [add, setAdd] = useState(true);

  const CorporateAdd =
    "https://maps.google.com/maps?width=918&amp;height=700&amp;hl=en&amp;q=Prime lifespace&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";

  const ChennaiAdd =
    "https://maps.google.com/maps?width=918&amp;height=700&amp;hl=en&amp;q=Prime Expat Infra, chennai&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";

    /*
  useEffect(() => {
    if (isInView) {
      animateFlx.start({ opacity: 1, scale: 1 });
      animateFade.start({ opacity: 1 });
    }
  }, [isInView, animateFlx, animateFade]);
*/
  return (
    <Flex ref={ref} w="100%" h="35.5rem">
      <Flex w="40%" h="100%" direction="column" align="center" justify="center">
        <Flex
          as={Link}
          className="expand reveal"
          direction="column"
          w="100%"
          h="100%"
          py="1.563rem"
          align="center"
          justify="center"
          pl="6.25rem"
          pr="3.125rem"
          bgGradient={add ? "linear(to-b, #B88746, #DFBD69)" : "white"}
          _hover={{ textDecoration: "none" }}
          onClick={(e) => {
            setAdd(true);
          }}
        >
          <Heading
            className="fadein reveal"
            w="100%"
            fontFamily="avenir"
            fontSize="2.125rem"
            pb="1.563rem"
            lineHeight="2.563rem"
            textAlign="left"
          >
            CORPORATE OFFICE
          </Heading>
          <VStack
            className="fadein reveal"
            w="100%"
            align="flex-start"
          >
            <HStack align="flex-start" mb="0.437rem">
              <Icon as={ImLocation} w="1.875rem" h="2.5rem" mt="-1" />
              <Text fontFamily="veralaRound" fontSize="1rem" lineHeight="1.5rem">
                202, Krishna Kunj, above HDFC Bank,30, Navyug Society V.M. Road,
                J.V.P.D. Scheme Vile Parle (West), Mumbai- 400 056
              </Text>
            </HStack>
            <HStack align="center" mb="0.437rem">
              <Icon as={HiMail} w="2.188rem" h="1.875rem" />
              <Text fontFamily="veralaRound" fontSize="1rem" lineHeight="1.5rem">
                info@primelifespace.com
              </Text>
            </HStack>
            <HStack align="center">
              <Icon as={HiPhone} w="2.188rem" h="2.5rem" />
              <Text fontFamily="veralaRound" fontSize="1rem" lineHeight="1.5rem">
                7338808775
              </Text>
            </HStack>
          </VStack>
        </Flex>
        <Flex
          as={Link}
          className="expand reveal"
          direction="column"
          w="100%"
          h="100%"
          align="center"
          justify="center"
          pl="6.25rem"
          pr="3.125rem"
          _hover={{ textDecoration: "none" }}
          bgGradient={add ? "white" : "linear(to-b, #B88746, #DFBD69)"}
          onClick={(e) => {
            setAdd(false);
          }}
        >
          <Heading
            className="fadein reveal"
            w="100%"
            fontFamily="avenir"
            fontSize="2.125rem"
            pb="1.563rem"
            lineHeight="2.563rem"
            textAlign="left"
          >
            CHENNAI OFFICE
          </Heading>
          <VStack
            className="fadein reveal"
            w="100%"
            align="flex-start"
          >
            <HStack align="flex-start" mb="0.437rem">
              <Icon as={ImLocation} w="1.875rem" h="2.5rem" mt="-1" />
              <Text fontFamily="veralaRound" fontSize="1rem" lineHeight="1.5rem">
                Prime Expat Infra No. 33, Mandapam Road, Kilpauk, Chennai -
                600010
              </Text>
            </HStack>
            <HStack align="center" mb="0.437rem">
              <Icon as={HiMail} w="2.188rem" h="1.875rem" />
              <Text fontFamily="veralaRound" fontSize="1rem" lineHeight="1.5rem">
                sales@primelifespace.com
              </Text>
            </HStack>
            <HStack align="center">
              <Icon as={HiPhone} w="2.188rem" h="2.5rem" />
              <Text fontFamily="veralaRound" fontSize="1rem" lineHeight="1.5rem">
                7338808775
              </Text>
            </HStack>
          </VStack>
        </Flex>
      </Flex>
      <Flex
        className="expand reveal"
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
      </Flex>
    </Flex>
  );
};

export default AddresSec;
