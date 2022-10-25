import { Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MtnHd = motion(Heading);

const EnergyMain = () => {
  return (
    <>
      <Flex
        w="100%"
        h="93.5vh"
        alignItems="center"
        justifyContent="center"
        pos="relative"
        // overflow="hidden"
      >
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            minHeight: "100%",
            minWidth: "100%",
            // zIndex: -1,
          }}
        >
          <source src="/images/energy/energy-hero.mp4" type="video/mp4" />
        </video>
        <Flex direction="column" pos="absolute">
          <MtnHd
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, type: "just" }}
            fontFamily="avenir"
            fontSize="40px"
            lineHeight="58px"
            color="white"
            textAlign="center"
          >
            SUSTAINABILITY
          </MtnHd>
          <MtnHd
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 2, type: "just" }}
            fontFamily="avenir"
            fontSize="40px"
            lineHeight="58px"
            color="white"
            textAlign="center"
          >
            IS VALUABLE!
          </MtnHd>
        </Flex>
      </Flex>
    </>
  );
};

export default EnergyMain;
