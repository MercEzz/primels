import { Flex, Heading, Image, Divider, Box, Text } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const MtnFlx = motion(Flex);

const Allia = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateX = useAnimation();
  const animateY = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateX.start({
        x: 0,
        opacity: 1,
      });
      animateY.start({
        y: 0,
        opacity: 1,
      });
    }
  }, [isInView, animateX, animateY]);

  return (
    <Flex ref={ref} direction="column" align="center" pt="100px">
      <Flex w="100%" px="100px">
        <MtnFlx
          initial={{ opacity: 0, x: -50 }}
          animate={animateX}
          transition={{ duration: 2, type: "just" }}
          w="30%"
          h="100%"
          direction="column"
          pt="20px"
        >
          <Heading fontSize="40px" fontFamily="goudy" fontWeight="400">
            India’s Best <br /> Realty Brand
          </Heading>
          <Flex justify="center" align="center">
            <Divider
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
            <Box
              height="30px"
              width="35px"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>
        </MtnFlx>
        <MtnFlx
          initial={{ y: 50, opacity: 0 }}
          animate={animateY}
          transition={{ delay: 1.5, duration: 2, type: "just" }}
          w="100%"
          h="100%"
          align="center"
          pb="100px"
        >
          <Flex h="100%" direction="column" align="center">
            <Image
              w="100%"
              h="200px"
              pl="15px"
              pb="15px"
              src="/images/award1.png"
            />
            <Text fontFamily="veralaRound" fontSize="16px" textAlign="center">
              Times Realty Icon
              <Text fontSize="18px" pt="10px">
                "The Best <br /> Upcoming Township"
              </Text>
            </Text>
          </Flex>
          <Flex h="100%" direction="column" align="center">
            <Image
              w="100%"
              h="300px"
              px="15px"
              pb="15px"
              src="/images/award2.png"
            />
            <Text fontFamily="veralaRound" fontSize="18px" textAlign="center">
              The Economic Times
              <Text fontSize="20px" pt="10px">
                "Best Realty Brand 2020-21"
              </Text>
            </Text>
          </Flex>
          <Flex h="100%" direction="column" align="center">
            <Image w="100%" h="200px" pb="15px" src="/images/award3.png" />
            <Text fontFamily="veralaRound" fontSize="16px" textAlign="center">
              FICCI
              <Text fontSize="18px" pt="10px">
                "Best Gated Community
                <br /> Of the Year 2021"
              </Text>
            </Text>
          </Flex>
        </MtnFlx>
      </Flex>
      <Flex direction="column" align="center" justify="center">
        <Heading fontSize="40px" fontFamily="goudy" fontWeight="400">
          OUR ALLIANCES
        </Heading>
        <MtnFlx
          initial={{ x: "100vw", opacity: 0 }}
          animate={animateX}
          transition={{ delay: 3, duration: 2, type: "just" }}
          w="100%"
          pt="75px"
          px="100px"
        >
          <Flex>
            <Image src="/images/alliances.png" />
          </Flex>
          <Flex>
            <Image src="/images/alliances2.png" />
          </Flex>
          <Flex>
            <Image src="/images/alliances3.png" />
          </Flex>
          <Flex>
            <Image src="/images/alliances4.png" />
          </Flex>
        </MtnFlx>
      </Flex>
    </Flex>
  );
};

export default Allia;
