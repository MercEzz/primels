import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Divider,
  Box,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
// import { ImLocation } from "react-icons/im";

const MtnHead = motion(Heading);
const MtnFlx = motion(Flex);

const Invest = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateY = useAnimation();
  const animateX = useAnimation();
  const animateFade = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateY.start({
        opacity: 1,
        y: 0,
      });
      animateX.start({
        opacity: 1,
        x: 0,
      });
      animateFade.start({
        opacity: 1,
      });
    }
  }, [isInView, animateX, animateY, animateFade]);

  return (
    <Flex
      ref={ref}
      w="100%"
      direction="column"
      align="center"
      h="100%"
      justify="center"
      pt="50px"
      px="100px"
    >
      <MtnHead
        initial={{ opacity: 0, y: -50 }}
        animate={animateY}
        transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        fontWeight="400"
        fontSize="40px"
      >
        INVEST IN RENT GENERATING ASSETS
      </MtnHead>
      <Flex w="100%" pt="50px">
        <MtnFlx
          initial={{ opacity: 0, x: 150 }}
          animate={animateX}
          transition={{ delay: 1.5, duration: 2, type: "just" }}
          w="47.5%"
        >
          <Image w="608px" h="500px" src="/images/invest.png" />
        </MtnFlx>
        <MtnFlx
          initial={{ opacity: 0, y: -150 }}
          animate={animateY}
          transition={{ delay: 1.5, duration: 2, type: "just" }}
          h="145px"
          w="5%"
          direction="column"
          align="center"
          px="40px"
        >
          <Divider
            orientation="vertical"
            border="3px solid"
            borderColor="#DFBD69"
          />
          <Box
            height="30px"
            width="25px"
            backgroundColor="#DFBD69"
            border="3px solid white"
            boxShadow="0px 0px 0px 3px #B88746"
            borderRadius="50%"
            my="1"
          />
        </MtnFlx>
        <MtnFlx
          initial={{ opacity: 0 }}
          animate={animateFade}
          transition={{ delay: 3, duration: 2, type: "just" }}
          w="47.5%"
          direction="column"
          justify="center"
          align="flex-start"
        >
          <MtnHead
            initial={{ opacity: 0, x: -150 }}
            animate={animateX}
            transition={{ delay: 1.5, duration: 2, type: "just" }}
            w="100%"
            fontFamily="avenir"
            fontSize="34px"
            textAlign="left"
          >
            8% ROI ON HOMES
          </MtnHead>

          <Flex my="25px" w="100%" justify="space-between">
            <Flex direction="column">
              <Text
                pb="15px"
                fontFamily="veralaRound"
                fontWeight="400"
                fontSize="18px"
              >
                Smart Home
              </Text>
              <Text fontWeight="700" fontFamily="avenir" fontSize="24px">
                2 BHK
              </Text>
              <Text
                pt="10px"
                fontFamily="veralaRound"
                fontSize="16px"
                fontWeight="400"
              >
                1085 sqft.
              </Text>
            </Flex>
            <Flex direction="column" px="25px">
              <Text
                pb="15px"
                fontFamily="veralaRound"
                fontWeight="400"
                fontSize="18px"
              >
                Price
              </Text>
              <Text fontWeight="700" fontFamily="avenir" fontSize="24px">
                Rs. 85 Lakhs
              </Text>
              <Text
                pt="10px"
                fontFamily="veralaRound"
                fontSize="16px"
                fontWeight="400"
              >
                Fully Furnished With <br />
                White Goods
              </Text>
            </Flex>
            <Flex direction="column">
              <Text
                pb="15px"
                fontFamily="veralaRound"
                fontWeight="400"
                fontSize="18px"
              >
                Rental Income
              </Text>
              <Text fontWeight="700" fontFamily="avenir" fontSize="24px">
                Rs. 32,000*
              </Text>
              <Text
                pt="10px"
                fontFamily="veralaRound"
                fontSize="16px"
                fontWeight="400"
              >
                Per Month
              </Text>
            </Flex>
          </Flex>
          <Button
            w="152px"
            h="51px"
            fontSize="16px"
            fontFamily="avenir"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
          >
            VIEW DETAILS
          </Button>
        </MtnFlx>
      </Flex>
    </Flex>
  );
};

export default Invest;
