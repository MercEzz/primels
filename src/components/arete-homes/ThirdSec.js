import { Flex, Text, Image } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const MtnTxt = motion(Text);
const MtnFlx = motion(Flex);

const ThirdSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  const animateY = useAnimation();
  const animateScale = useAnimation();

  useEffect(() => {
    if (useInView) {
      animateY.start({
        y: 0,
        opacity: 1,
      });
      animateScale.start({
        scale: 1,
      });
    }
  }, [isInView, animateY, animateScale]);

  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
    >
      <MtnTxt
        initial={{ y: -50, opacity: 0 }}
        animate={animateY}
        transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        fontSize="40px"
        mb="50px"
      >
        MASTER PLAN
      </MtnTxt>
      <Flex w="100%" h="100%">
        <MtnFlx
          initial={{ scale: 0.6 }}
          animate={animateScale}
          transition={{ duration: 2, type: "just" }}
          w="100%"
          h="100%"
        >
          <Image h="500px" src="/images/arete-homes/MASTER PLAN.jpg" />
        </MtnFlx>
        <MtnFlx
          initial={{ scale: 0.6 }}
          animate={animateScale}
          transition={{ duration: 2, type: "just" }}
          w="100%"
          h="100%"
        ></MtnFlx>
      </Flex>
    </Flex>
  );
};

export default ThirdSec;
