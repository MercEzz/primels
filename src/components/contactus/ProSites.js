import {
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const MtnHd = motion(Heading);
const MtnFlx = motion(Flex);
const MtnStk = motion(VStack);

const ProSites = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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

  return (
    <Flex
      ref={ref}
      direction="column"
      w="100%"
      h="100%"
      pt="100px"
      pb="50px"
      px="100px"
      align="center"
      justify="center"
      pos="relative"
    >
      <MtnHd
        initial={{ opacity: 0, y: -50 }}
        animate={animateHd}
        transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        fontWeight="400"
        fontSize="40px"
        lineHeight="58px"
      >
        OUR PROJECT SITES
      </MtnHd>
      <MtnFlx
        initial={{ opacity: 0 }}
        animate={animateFade}
        transition={{ delay: 2, duration: 2, type: "just" }}
        w="100%"
        mt="50px"
        mb="50px"
        // px="100px"
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
            h="100px"
            mb="15px"
            w="300px"
            src="/images/contactus/Asset-1.png"
          />
          <Text fontFamily="veralaRound" fontSize="16px">
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
            h="100px"
            mb="15px"
            w="300px"
            src="/images/contactus/Asset-2.png"
          />
          <Text fontFamily="veralaRound" fontSize="16px">
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
            h="100px"
            mb="15px"
            w="300px"
            src="/images/contactus/Asset-3.png"
          />
          <Text fontFamily="veralaRound" fontSize="16px">
            Next To Arete Homes <br /> V no.76, Peruncheri, Ponneri <br />
            North Chennai - 601204
          </Text>
        </Flex>
      </MtnFlx>
      <MtnStk
        initial={{ opacity: 0 }}
        animate={animateFade}
        transition={{ delay: 2, duration: 2, type: "just" }}
        mb="50px"
      >
        <Text fontFamily="veralaRound" fontSize="20px" lineHeight="24px">
          For consultancy related queries, email us at
        </Text>
        <Heading fontFamily="avenir" fontSize="24px" lineHeight="41px">
          info@primelifespace.com
        </Heading>
      </MtnStk>
      <MtnStk
        initial={{ opacity: 0 }}
        animate={animateFade}
        transition={{ delay: 2, duration: 2, type: "just" }}
      >
        <Text fontFamily="veralaRound" fontSize="20px" lineHeight="24px">
          For procurement related queries, email us at
        </Text>
        <Heading fontFamily="avenir" fontSize="24px" lineHeight="41px">
          purchase@primelifespace.com
        </Heading>
      </MtnStk>
    </Flex>
  );
};

export default ProSites;
