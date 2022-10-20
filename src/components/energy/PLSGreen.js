import { Box, Flex, Image, Divider, Heading, Text } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const MtnImg = motion(Image);
const MtnFlx = motion(Flex);

const PLSGreen = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateImg = useAnimation();
  const animateFlx = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateImg.start({ opacity: 1, x: 0 });
      animateFlx.start({ opacity: 1, y: 0 });
    }
  }, [isInView, animateImg, animateFlx]);

  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      pb="550px"
      // pos="relative"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
    >
      <Flex w="100%" direction="column" pos="relative">
        <MtnImg
          initial={{ opacity: 0, x: 200 }}
          animate={animateImg}
          transition={{ duration: 2, type: "just" }}
          src="/images/energy/ourPro1.jpeg"
          h="500px"
          w="813px"
          pos="absolute"
        />
        <MtnImg
          initial={{ opacity: 0 }}
          animate={animateImg}
          transition={{ delay: 1.5, duration: 2, type: "just" }}
          src="/images/energy/ourPro2.jpeg"
          h="500px"
          w="813px"
          pos="absolute"
          left="25%"
          top="120%"
        />
      </Flex>
      <MtnFlx
        initial={{ opacity: 0, y: -100 }}
        animate={animateFlx}
        transition={{ duration: 2, type: "just" }}
        direction="column"
        align="center"
        px="42px"
      >
        <Divider
          orientation="vertical"
          h="92px"
          border="3px solid"
          borderColor="#DFBD69"
        />
        <Box
          height="30px"
          width="30px"
          backgroundColor="#DFBD69"
          border="5px solid white"
          boxShadow="0px 0px 0px 3px #B88746"
          borderRadius="50%"
          my="1"
          // _hover={{
          //   width: "25px",
          //   height: "25px",
          // }}
          // transition="all .5s"
        />
      </MtnFlx>
      <MtnFlx
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, type: "just" }}
        direction="column"
        mt="100px"
      >
        <Heading
          fontFamily="goudy"
          fontSize="40px"
          lineHeight="58px"
          fontWeight="400"
          pb="15px"
        >
          OUR PROJECT
        </Heading>
        <Text
          fontFamily="veralaRound"
          fontSize="16px"
          lineHeight="24px"
          mr="100px"
        >
          Execution of a solar power plant of 5 MegaWatt at Telangana, Mothkur
          Village, Nalagonda.
        </Text>
      </MtnFlx>
    </Flex>
  );
};

export default PLSGreen;
