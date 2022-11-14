import React, { useRef, useEffect } from "react";
import { useInView, useAnimation, animate, motion } from "framer-motion";
import {
  Flex,
  Heading,
  Text,
  Image,
  TableContainer,
  Table,
  Button,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";

const MtnTxt = motion(Text);
const MtnHd = motion(Heading);
const MtnFlx = motion(Flex);
const MtnImg = motion(Image);

const EightSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateY = useAnimation();
  const animateX = useAnimation();
  const animateFade = useAnimation();

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
    }
  }, [isInView, animateY, animateX, animateFade]);

  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      px="100px"
      pt="100px"
      pb="50px"
      direction="column"
      align="center"
      justify="center"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
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
        A delightful mix of sky residences
      </MtnTxt>
      <MtnHd
        initial={{ opacity: 0 }}
        animate={animateFade}
        transition={{ delay: 1.5, duration: 2, type: "just" }}
        fontFamily="avenir"
        fontSize="34px"
        lineHeight="48px"
        py="25px"
      >
        FOR CO-LIVING, STUDENT HOUSING & SERVICED APARTMENTS
      </MtnHd>
      <MtnTxt
        initial={{ opacity: 0 }}
        animate={animateFade}
        transition={{ delay: 1.5, duration: 2, type: "just" }}
        fontFamily="veralaRound"
        fontSize="16px"
        pb="25px"
      >
        An unique collection of flexi-design 2 BHK sky residences, well-planned
        with convertible option, for you to customize your home & needs. The 5
        different design innovations allow variations in private or shared
        rooms, more bedrooms or spacious living, one or more bathrooms etc.
        Making it possible to fit up to 5 beds in every apartment.
      </MtnTxt>
      <Flex w="100%" h="100%" align="center" justify="center">
        <Flex mr="15px">
          <MtnImg
            initial={{ opacity: 0, x: -100 }}
            animate={animateX}
            transition={{ delay: 3, duration: 2, type: "just" }}
            w="100%"
            src="/images/sky-high/FLOOR PLAN1.jpg"
          />
        </Flex>
        <Flex>
          <MtnImg
            initial={{ opacity: 0, x: 100 }}
            animate={animateX}
            transition={{ delay: 3, duration: 2, type: "just" }}
            w="100%"
            src="/images/sky-high/FLOOR PLAN2.jpg"
          />
        </Flex>
      </Flex>
      <MtnFlx
        initial={{ opacity: 0 }}
        animate={animateFade}
        transition={{ delay: 4.5, duration: 2, type: "just" }}
        w="100%"
        h="100%"
        align="center"
        justify="space-between"
        mt="15px"
      >
        <Flex>
          <TableContainer>
            <Table variant="unstyled">
              <Thead
                textTransform="uppercase"
                bgGradient="linear(to-b, #DFBD69, #B88746)"
              >
                <Tr>
                  <Th
                    fontFamily="veralaRound"
                    fontSize="20px"
                    fontWeight="400"
                    color="white"
                    textAlign="center"
                    border="1px solid #B88746"
                    p="15px"
                  >
                    Configuration
                  </Th>
                  <Th
                    fontFamily="veralaRound"
                    fontSize="20px"
                    fontWeight="400"
                    color="white"
                    textAlign="center"
                    border="1px solid #B88746"
                    p="15px"
                  >
                    Saleable Area
                  </Th>
                  <Th
                    fontFamily="veralaRound"
                    fontSize="20px"
                    fontWeight="400"
                    color="white"
                    textAlign="center"
                    border="1px solid #B88746"
                    p="15px"
                  >
                    Net Usable Area
                  </Th>
                  <Th
                    fontFamily="veralaRound"
                    fontSize="20px"
                    fontWeight="400"
                    color="white"
                    textAlign="center"
                    border="1px solid #B88746"
                    p="15px"
                  >
                    Rera Carpet Area
                  </Th>
                </Tr>
              </Thead>
              <Tbody textTransform="uppercase">
                <Tr>
                  <Td
                    fontFamily="avenir"
                    fontSize="20px"
                    fontWeight="bold"
                    textAlign="center"
                    border="1px solid #B88746"
                    p="15px"
                  >
                    SMART 2 BHK
                  </Td>
                  <Td
                    fontFamily="avenir"
                    fontSize="20px"
                    fontWeight="bold"
                    textAlign="center"
                    p="15px"
                    border="1px solid #B88746"
                  >
                    690
                  </Td>
                  <Td
                    fontFamily="avenir"
                    fontSize="20px"
                    fontWeight="bold"
                    border="1px solid #B88746"
                    textAlign="center"
                    p="15px"
                  >
                    452
                  </Td>
                  <Td
                    fontFamily="avenir"
                    fontSize="20px"
                    fontWeight="bold"
                    textAlign="center"
                    border="1px solid #B88746"
                    p="15px"
                  >
                    447
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
        <Button
          w="151px"
          h="51px"
          fontSize="16px"
          fontFamily="avenir"
          bgGradient="linear(to-b, #B88746 ,#DFBD69)"
          color="white"
          _hover={{
            bgGradient: "linear(to-b, #DFBD69, #B88746)",
          }}
          _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
        >
          CHECK PRICE
        </Button>
      </MtnFlx>
    </Flex>
  );
};

export default EightSec;