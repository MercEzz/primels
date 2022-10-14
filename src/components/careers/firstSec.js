import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotnHead = motion(Heading);
const MotnTxt = motion(Text);
const MotnImg = motion(Image);

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
    <Flex w="100%" h="100%" mb="4rem" align="center" justify="center">
      <Flex w="100%" h="100%" align="center" justify="center">
        <MotnImg
          w="918px"
          h="668px"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, type: "just" }}
          src="/images/careers/first section.jpg"
        />
      </Flex>

      <Flex
        w="40%"
        align="center"
        justify="flex-end"
        direction="column"
        textAlign="center"
        m="0 30px"
      >
        <MotnHead
          variants={variants}
          initial="hidden"
          animate="enter"
          transition={{ duration: 2, type: "just" }}
          fontSize="48px"
          fontFamily="avenir"
          px="25px"
          pb="27px"
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
