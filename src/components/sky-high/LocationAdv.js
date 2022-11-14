/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useRef } from "react";
import {
  Flex,
  Heading,
  Text,
  Button,
  Divider,
  Box,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ImLocation } from "react-icons/im";

const MtnTxt = motion(Text);
const MtnHd = motion(Heading);
const MtnFlx = motion(Flex);
const MtnBtn = motion(Button);
const MtnDvd = motion(Divider);

const NinethSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateY = useAnimation();
  const animateX = useAnimation();
  const animateFade = useAnimation();
  const animateScale = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateY.start({
        y: 0,
        opacity: 1,
      });
      animateX.start({
        x: 0,
        opacity: 1,
      });
      animateFade.start({
        opacity: 1,
      });
      animateScale.start({
        scale: 1,
      });
    }
  }, [isInView, animateY, animateX, animateFade, animateScale]);
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      px="100px"
      pt="50px"
      pb="50px"
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
        lineHeight="48px"
        textTransform="uppercase"
      >
        LOCATION ADVANTAGE
      </MtnTxt>
      <MtnHd
        initial={{ y: 50, opacity: 0 }}
        animate={animateY}
        transition={{ delay: 1.5, duration: 2, type: "just" }}
        fontFamily="avenir"
        fontSize="34px"
        lineHeight="48px"
        pt="25px"
        pb="50px"
      >
        PONNERI - A SMART CITY BY JICA
      </MtnHd>
      <Flex w="100%" h="100%" align="flex-start" justify="flex-start">
        <Flex
          direction="column"
          w="100%"
          h="100%"
          align="center"
          justify="center"
        >
          <MtnFlx
            initial={{ scale: 0.6 }}
            animate={animateScale}
            transition={{ delay: 3, duration: 2, type: "just" }}
            w="100%"
            h="100%"
            mb="15px"
          >
            <iframe
              class="gmap_iframe"
              width="662"
              height="458"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=918&amp;height=700&amp;hl=en&amp;q=Prime lifespace&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </MtnFlx>
          <Flex w="100%" h="100%" mb="20px">
            icons
          </Flex>
          <Flex w="100%" h="100%">
            <MtnBtn
              initial={{ opacity: 0 }}
              animate={animateFade}
              transition={{ delay: 10.5, duration: 2, type: "just" }}
              w="100%"
              h="51px"
              fontSize="16px"
              fontFamily="avenir"
              fontWeight="bold"
              bgGradient="linear(to-b, #B88746 ,#DFBD69)"
              color="white"
              _hover={{
                bgGradient: "linear(to-b, #DFBD69, #B88746)",
              }}
              _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
            >
              <ImLocation size="30px" /> SHOW LOCATION ON GOOGLE MAPS
            </MtnBtn>
          </Flex>
        </Flex>
        <Flex w="100%" h="100%" align="center" direction="column">
          <Flex
            w="100%"
            h="100%"
            alignSelf="flex-start"
            justify="space-between"
          >
            <MtnFlx
              initial={{ y: -50, opacity: 0 }}
              animate={animateY}
              transition={{ delay: 3, duration: 2, type: "just" }}
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
              px="25px"
            >
              <Divider
                h="50px"
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
              <MtnDvd
                initial={{ y: -50, opacity: 0 }}
                animate={animateY}
                transition={{ delay: 4.5, duration: 2, type: "just" }}
                h="50px"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </MtnFlx>
            <MtnFlx
              initial={{ x: -50, opacity: 0 }}
              animate={animateX}
              transition={{ delay: 3, duration: 2, type: "just" }}
              w="100%"
            >
              <Heading
                alignSelf="center"
                fontFamily="avenir"
                fontSize="20px"
                mr="25px"
              >
                5 Mins
              </Heading>
              <UnorderedList
                alignSelf="center"
                textTransform="uppercase"
                fontFamily="veralaRound"
                fontSize="16px"
              >
                <ListItem pb="10px">
                  Walk to Velammal International School{" "}
                </ListItem>
                <ListItem pb="10px">DRIVE TO Origin by Mahindra </ListItem>
                <ListItem pb="10px">DRIVE TO Ponneri Railway Station</ListItem>
              </UnorderedList>
            </MtnFlx>
          </Flex>
          <Flex
            w="100%"
            h="100%"
            alignSelf="flex-start"
            justify="space-between"
          >
            {" "}
            <MtnFlx
              initial={{ y: -50, opacity: 0 }}
              animate={animateY}
              transition={{ delay: 4.5, duration: 2, type: "just" }}
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
              px="25px"
            >
              <Divider
                h="50px"
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
              <MtnDvd
                initial={{ y: -50, opacity: 0 }}
                animate={animateY}
                transition={{ delay: 6, duration: 2, type: "just" }}
                h="50px"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </MtnFlx>
            <MtnFlx
              initial={{ x: -50, opacity: 0 }}
              animate={animateX}
              transition={{ delay: 4.5, duration: 2, type: "just" }}
              w="100%"
            >
              <Heading
                w="fit-content"
                display="flex"
                alignSelf="center"
                fontFamily="avenir"
                fontSize="20px"
                mr="25px"
              >
                10 Mins
              </Heading>
              <UnorderedList
                textTransform="uppercase"
                alignSelf="center"
                fontFamily="veralaRound"
                fontSize="16px"
              >
                <ListItem pb="10px">CONNECT TO Outer Ring Road</ListItem>
                <ListItem pb="10px">
                  DRIVE TO Siruvapuri Murugan Temple{" "}
                </ListItem>
                <ListItem pb="10px">VELS Medical Hospital</ListItem>
              </UnorderedList>
            </MtnFlx>
          </Flex>
          <Flex h="100%" alignSelf="flex-start" justify="center">
            {" "}
            <MtnFlx
              initial={{ y: -50, opacity: 0 }}
              animate={animateY}
              transition={{ delay: 6, duration: 2, type: "just" }}
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
              px="25px"
            >
              <Divider
                h="50px"
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
              <MtnDvd
                initial={{ y: -50, opacity: 0 }}
                animate={animateY}
                transition={{ delay: 7.5, duration: 2, type: "just" }}
                h="50px"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </MtnFlx>
            <MtnFlx
              initial={{ x: -50, opacity: 0 }}
              animate={animateX}
              transition={{ delay: 6, duration: 2, type: "just" }}
              w="100%"
            >
              <Heading
                alignSelf="center"
                fontFamily="avenir"
                fontSize="20px"
                mr="25px"
              >
                20 Mins
              </Heading>
              <Flex alignSelf="center">
                <UnorderedList
                  textTransform="uppercase"
                  fontFamily="veralaRound"
                  fontSize="16px"
                >
                  <ListItem pb="10px">DRIVE TO REDHILLS</ListItem>
                  <ListItem pb="10px">PULICAT LAKE </ListItem>
                  <ListItem pb="10px">DRIVE TO GUMMIDIPOONDI SIPCOT</ListItem>
                </UnorderedList>
              </Flex>
            </MtnFlx>
          </Flex>
          <Flex h="100%" alignSelf="flex-start" justify="center">
            {" "}
            <MtnFlx
              initial={{ y: -50, opacity: 0 }}
              animate={animateY}
              transition={{ delay: 7.5, duration: 2, type: "just" }}
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
              px="25px"
            >
              <Divider
                h="50px"
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
              <MtnDvd
                initial={{ y: -50, opacity: 0 }}
                animate={animateY}
                transition={{ delay: 9, duration: 2, type: "just" }}
                h="50px"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </MtnFlx>
            <MtnFlx
              w="100%"
              initial={{ x: -50, opacity: 0 }}
              animate={animateX}
              transition={{ delay: 7.5, duration: 2, type: "just" }}
            >
              <Heading
                alignSelf="center"
                fontFamily="avenir"
                fontSize="20px"
                mr="25px"
              >
                30 Mins
              </Heading>
              <Flex alignSelf="center">
                <UnorderedList
                  textTransform="uppercase"
                  fontFamily="veralaRound"
                  fontSize="16px"
                >
                  <ListItem pb="10px">DRIVE TO SRI CITY</ListItem>
                  <ListItem pb="10px">DRIVE TO ADANI PORT</ListItem>
                  <ListItem pb="10px">
                    DRIVE TO Ponneri Railway Station
                  </ListItem>
                </UnorderedList>
              </Flex>
            </MtnFlx>
          </Flex>
          <Flex h="100%" alignSelf="flex-start" justify="center">
            {" "}
            <MtnFlx
              h="100%"
              initial={{ y: -50, opacity: 0 }}
              animate={animateY}
              transition={{ delay: 9, duration: 2, type: "just" }}
              direction="column"
              justify="flex-start"
              align="center"
              px="25px"
            >
              <Divider
                // h="20px"
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
              <MtnDvd
                initial={{ y: -50, opacity: 0 }}
                animate={animateY}
                transition={{ delay: 10.5, duration: 2, type: "just" }}
                // h="50px"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </MtnFlx>
            <MtnFlx
              w="100%"
              initial={{ x: -50, opacity: 0 }}
              animate={animateX}
              transition={{ delay: 9, duration: 2, type: "just" }}
            >
              <Heading
                alignSelf="center"
                fontFamily="avenir"
                fontSize="20px"
                mr="25px"
              >
                40 Mins
              </Heading>
              <Flex alignSelf="center">
                <UnorderedList
                  textTransform="uppercase"
                  fontFamily="veralaRound"
                  fontSize="16px"
                >
                  <ListItem pb="10px">DRIVE TO CHENNAI AIRPORT</ListItem>
                </UnorderedList>
              </Flex>
            </MtnFlx>
          </Flex>
          <Flex h="100%" alignSelf="flex-start" justify="center">
            {" "}
            <MtnFlx
              initial={{ y: -50, opacity: 0 }}
              animate={animateY}
              transition={{ delay: 10.5, duration: 2, type: "just" }}
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
              px="25px"
            >
              <Divider
                h="10px"
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
              w="100%"
              initial={{ x: -50, opacity: 0 }}
              animate={animateX}
              transition={{ delay: 10.5, duration: 2, type: "just" }}
            >
              <Heading
                alignSelf="center"
                fontFamily="avenir"
                fontSize="20px"
                mr="25px"
              >
                2 Hours
              </Heading>
              <Flex alignSelf="center">
                <UnorderedList
                  textTransform="uppercase"
                  fontFamily="veralaRound"
                  fontSize="16px"
                >
                  <ListItem pb="10px">DRIVE TO TIRUPATI</ListItem>
                </UnorderedList>
              </Flex>
            </MtnFlx>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NinethSec;