import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const MtnHead = motion(Heading);
const MotnTxt = motion(Text);
const MtnFlx = motion(Flex);

const Lifeatls = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationHead = useAnimation();
  const animationText = useAnimation();
  const animationImg = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationHead.start({ opacity: 1, y: 0 });
      animationText.start({ opacity: 1 });
      animationImg.start({ opacity: 1, x: 0 });
    }
  }, [isInView, animationHead, animationText, animationImg]);

  return (
    <Flex
      ref={ref}
      w="100%"
      minh="100%"
      direction="column"
      // m="4rem auto"
      pt="40px"
      textAlign="center"
      px="5rem"
    >
      <MtnHead
        initial={{ opacity: 0, y: -100 }}
        animate={animationHead}
        transition={{ duration: 2, type: "just" }}
        fontSize="48px"
        fontFamily="goudy"
        fontWeight="400"
        pb="25px"
      >
        LIFE AT PRIME LIFESPACE
      </MtnHead>
      <MotnTxt
        initial={{ opacity: 0 }}
        animate={animationText}
        transition={{ delay: 1, duration: 2, type: "just" }}
        fontSize="20px"
        fontFamily="veralaRound"
        px="150px"
        pb="15px"
      >
        We believe when everyone is moving forward together then success takes
        care of itself. Here is a glimpse of what’s it’s like to be a member of
        the Prime Lifespace Team.
      </MotnTxt>
      <Flex w="100%" h="100%" py="2" align="flex-start">
        <MtnFlx
          initial={{ opacity: 0, x: -500 }}
          animate={animationImg}
          transition={{ delay: 1, duration: 2, type: "just" }}
          maxW="818px"
          maxH="612px"
        >
          <Image src="/images/careers/career-life.png" />
        </MtnFlx>
        <MtnFlx
          initial={{ opacity: 0, x: 500 }}
          animate={animationImg}
          transition={{ delay: 1, duration: 2, type: "just" }}
          maxW="397px"
          maxH="514px"
          pl="25px"
        >
          <Image src="/images/careers/career-life2.png" />
        </MtnFlx>
      </Flex>
    </Flex>
  );
};

export default Lifeatls;
