import {
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
//import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

/*
const Heading = motion(Heading);
const Flex = motion(Flex);
const VStack = motion(VStack);
*/
const ProSites = () => {
  const ref = useRef(null);
  /*
  const isInView = useInView(ref, { });
  const animateHd = useAnimation();
  const animateFade = useAnimation();
  useEffect(() => {
    if (isInView) {
      animateHd.start({
        opacity: 1,
        y: 0,
      });
      animateFade.start({
        opacity: 1,
      });
    }
  }, [isInView, animateHd, animateFade]);
  */
  return (
    <Flex
      overflow="hidden"
      ref={ref}
      direction="column"
      w="100%"
      h="100%"
      pt="5rem"

      px="6.25rem"
      align="center"
      justify="center"
      pos="relative"
    >
      <Heading
        className="serv-text-up reveal"
        fontFamily="goudy"
        fontWeight="400"
        fontSize="2.5rem"
        lineHeight="3.625rem"
      >
        OUR PROJECT SITES
      </Heading>
      <Flex
        className="fadein reveal"
        w="100%"
        mt="1.875rem"
        mb="3.125rem"
        // px="6.25rem"
        justify="center"
      >
        <Flex
          direction="column"
          w="100%"
          align="center"
          h="100%"
          textAlign="center"
        >
          <Image
            h="6.25rem"
            mb="0.938rem"
            w="18.75rem"
            src="/images/contactus/Asset-1.png"
          />
          <Text fontFamily="veralaRound" fontSize="1rem">
            V no.76, Peruncheri, Ponneri <br /> Opposite Velammal International{" "}
            <br />
            School,
            <br />
            North Chennai - 601204
          </Text>
        </Flex>
        <Flex
          direction="column"
          w="100%"
          align="center"
          h="100%"
          textAlign="center"
        >
          <Image
            h="6.25rem"
            mb="0.938rem"
            w="18.75rem"
            src="/images/contactus/Asset-2.png"
          />
          <Text fontFamily="veralaRound" fontSize="1rem">
            V. No. 76 , Thatchoor 1,
            <br /> Perucheri, Ponneri,
            <br /> Taluk, Thiruvallur District, <br />
            Chennai- 6001 204
          </Text>
        </Flex>
        <Flex
          direction="column"
          w="100%"
          align="center"
          h="100%"
          textAlign="center"
        >
          <Image
            h="6.25rem"
            mb="0.938rem"
            w="18.75rem"
            src="/images/contactus/Asset-3.png"
          />
          <Text fontFamily="veralaRound" fontSize="1rem">
            Next To Arete Homes <br /> V no.76, Peruncheri, Ponneri <br />
            North Chennai - 601204
          </Text>
        </Flex>
      </Flex>
      <VStack
        className="fadein reveal"
        mb="1.875rem"
      >
        <Text fontFamily="veralaRound" fontSize="1.25rem" lineHeight="1.5rem">
          For consultancy related queries, email us at
        </Text>
        <Heading fontFamily="avenir" fontSize="1.5rem" lineHeight="41px">
          info@primelifespace.com
        </Heading>
      </VStack>
      <VStack
        mb="3.125rem"
        className="fadein reveal"
      >
        <Text fontFamily="veralaRound" fontSize="1.25rem" lineHeight="1.5rem">
          For procurement related queries, email us at
        </Text>
        <Heading fontFamily="avenir" fontSize="1.5rem" lineHeight="2.563rem">
          purchase@primelifespace.com
        </Heading>
      </VStack>
    </Flex>
  );
};

export default ProSites;
