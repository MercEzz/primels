import { Flex, Heading, Image, Divider, Box, Button } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Ponneri = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateX = useAnimation();
  const animateY = useAnimation();
  const animateFade = useAnimation();

  const MtnFlx = motion(Flex);
  const MtnHd = motion(Heading);
  const MtnDvdr = motion(Divider);
  const MtnBtn = motion(Button);

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
      animateFade.start({
        opacity: 1,
      });
    }
  }, [isInView, animateX, animateY, animateFade]);

  return (
    <Flex ref={ref} w="100%" h="100vh" py="50px" my="50px">
      <Flex w="100%" h="100%" direction="column">
        <Flex w="100%" align="center" justify="flex-start" pb="50px">
          {/* <Image src="/images/logo.png" /> */}
          <MtnHd
            initial={{ opacity: 0, x: -50 }}
            animate={animateX}
            transition={{ duration: 2, type: "just" }}
            fontSize="40px"
            fontWeight="400"
            fontFamily="goudy"
            pr="10px"
          >
            PONNERI GYMKHANA CLUB
          </MtnHd>
          <MtnDvdr
            initial={{ opacity: 0, x: -50 }}
            animate={animateX}
            transition={{ delay: 1.5, duration: 2, type: "just" }}
            w="28%"
            orientation="horizontal"
            border="3px solid"
            bgColor="#DFBD69"
            borderColor="#DFBD69"
          />
        </Flex>
        <Flex w="100%" h="100%">
          <MtnFlx
            initial={{ opacity: 0, x: 50 }}
            animate={animateX}
            transition={{ delay: 1.5, duration: 2, type: "just" }}
            w="100%"
            h="100%"
          >
            <Image w="100%" h="100%" src="/images/gymkhana.png" />{" "}
          </MtnFlx>
          <Flex align="flex-start" pr="100px">
            <MtnFlx
              initial={{ opacity: 0, y: -50 }}
              animate={animateY}
              transition={{ delay: 1.5, duration: 2, type: "just" }}
              h="100%"
              direction="column"
              align="center"
              px="40px"
            >
              <Divider
                h="170px"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="30px"
                width="30px"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </MtnFlx>
            <MtnFlx
              initial={{ opacity: 0, x: -50 }}
              animate={animateX}
              transition={{ delay: 1.5, duration: 2, type: "just" }}
              w="100%"
              h="100%"
              direction="column"
              align="flex-start"
              justify="center"
            >
              <Heading fontSize="34px" fontFamily="avenir" mb="25px">
                ONE CLUB -<br />
                MANY FACETS
              </Heading>
              <MtnBtn
                initial={{ opacity: 0 }}
                animate={animateFade}
                transition={{ delay: 3, duration: 2, type: "just" }}
                w="206px"
                h="51px"
                p="16px"
                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                color="white"
                fontSize="16px"
                fontFamily="avenir"
                _hover={{
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
                _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
              >
                BECOME A MEMBER
              </MtnBtn>
            </MtnFlx>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Ponneri;
