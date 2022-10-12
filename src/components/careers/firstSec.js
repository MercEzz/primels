import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotnHead = motion(Heading);
const MotnTxt = motion(Text);
const MotnFlx = motion(Flex);

const variants = {
  hidden: { opacity: 0, y: -100 },
  enter: { opacity: 1, y: 0 },
};

const txtvariants = {
  hidden: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0 },
};

const FirstSec = () => {
  return (
    <Flex w="100%" h="100%">
      <MotnFlx
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, type: "just" }}
        w="60%"
      >
        <Image h="668px" w="918px" src="/images/careers/career-stock.png" />
      </MotnFlx>

      <Flex
        align="center"
        justify="center"
        direction="column"
        textAlign="center"
        w="40%"
        pl="27px"
        pr="100px"
      >
        <MotnHead
          variants={variants}
          initial="hidden"
          animate="enter"
          transition={{ duration: 2, type: "just" }}
          fontSize="48px"
          fontFamily="avenir"
          pb="25px"
          px="6"
        >
          JOIN OUR TRIBE
        </MotnHead>
        <MotnTxt
          variants={txtvariants}
          initial="hidden"
          animate="enter"
          transition={{ duration: 2, type: "just" }}
          fontSize="20px"
          fontFamily="veralaRound"
        >
          Let’s join our efforts towards building the unshakable foundation for
          a better tomorrow.
        </MotnTxt>
      </Flex>
    </Flex>
  );
};

export default FirstSec;
