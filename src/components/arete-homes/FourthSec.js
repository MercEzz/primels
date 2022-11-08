import { Flex, Image } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect } from "react";
import { useRef } from "react";

const MtnImg = motion(Image);

const FourthSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  const animateX = useAnimation();
  const animateScale = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateX.start({
        x: 0,
        opacity: 1,
      });
      animateScale.start({
        scale: 1,
      });
    }
  });
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100vh"
      align="center"
      justify="center"
      pos="relative"
    >
      <MtnImg
        initial={{ scale: 0.6 }}
        animate={animateScale}
        transition={{ duration: 2, type: "just" }}
        w="100%"
        h="100%"
        src="/images/ARETE HOMES/3RD SECTION.jpg"
        objectPosition="30% 30%"
        bgRepeat="no-repeat"
        objectFit="cover"
      />
      <MtnImg
        initial={{ x: 100, opacity: 0 }}
        animate={animateX}
        transition={{ duration: 2, type: "just" }}
        h="100px"
        src="/images/ARETE HOMES/Asset.png"
        pos="absolute"
        bottom="80px"
        right="39%"
        transform={"translateX(-50%)"}
      />
    </Flex>
  );
};

export default FourthSec;
