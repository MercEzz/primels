import {
  Flex,
  Heading,
  Image,
  Text,
  Divider,
  Box,
  Button,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { useInView, useAnimation, motion } from "framer-motion";

const MtnTxt = motion(Text);
const MtnHd = motion(Heading);
const MtnFlx = motion(Flex);

const TenthSec = () => {
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
      my="50px"
      align="center"
      justify="center"
      direction="column"
    >
      <MtnTxt
        initial={{ y: -50, opacity: 0 }}
        animate={animateY}
        transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        fontSize="40px"
        mb="25px"
      >
        SMART INVEST
      </MtnTxt>
      <MtnHd
        initial={{ opacity: 0 }}
        animate={animateFade}
        transition={{ delay: 1.5, duration: 2, type: "just" }}
        fontFamily="avenir"
        fontSize="34px"
        textAlign="center"
        mb="50px"
      >
        AN EXCELLENT INVESTMENT OPPORTUNITY <br /> IN A LIFETIME GROWING ASSET
      </MtnHd>
      <Flex w="100%" h="100%">
        <MtnFlx
          initial={{ x: 50, opacity: 0 }}
          animate={animateX}
          transition={{ delay: 3, duration: 2, type: "just" }}
          w="100%"
          h="100%"
          pos="relative"
        >
          <Image
            // pos="absolute"
            h="568px"
            w="707px"
            objectPosition="center top"
            objectFit="cover"
            src="/images/sky-high/SMART INVEST.jpg"
          />
          <Image
            pos="absolute"
            h="225px"
            bottom="15px"
            right="15px"
            src="/images/sky-high/SMART INVEST ASSET.png"
          />
        </MtnFlx>
        <Flex w="100%">
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
              h="80px"
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
          <Flex direction="column" align="center" justify="center">
            <MtnHd
              initial={{ x: -50, opacity: 0 }}
              animate={animateX}
              transition={{ delay: 3, duration: 2, type: "just" }}
              w="100%"
              fontSize="24px"
              textAlign="left"
              fontFamily="avenir"
              mb="25px"
            >
              EMI = RENT
            </MtnHd>
            <Flex mb="25px" alignSelf="flex-start">
              <TableContainer>
                <Table>
                  <Thead
                    textTransform="uppercase"
                    bgGradient="linear(to-b, #DFBD69, #B88746)"
                  >
                    {" "}
                    <Tr>
                      <Th
                        colSpan="2"
                        fontFamily="veralaRound"
                        fontSize="20px"
                        fontWeight="400"
                        color="white"
                        textAlign="center"
                        border="1px solid #B88746"
                        p="15px"
                      >
                        Smart 2 BHK - 690 sqft.
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td
                        w="100%"
                        textAlign="left"
                        fontFamily="veralaRound"
                        fontSize="18px"
                        border="1px solid #B88746"
                        p="25px"
                      >
                        <Text
                          as="span"
                          fontWeight="bold"
                          fontFamily="avenir"
                          fontSize="24px"
                        >
                          Rs. 34 LAKHS{" "}
                        </Text>
                        <br /> Fully Furnished <br /> With White Goods
                      </Td>
                      <Td
                        w="100%"
                        textAlign="left"
                        fontFamily="veralaRound"
                        fontSize="18px"
                        border="1px solid #B88746"
                        p="25px"
                      >
                        <Text
                          as="span"
                          fontWeight="bold"
                          fontFamily="avenir"
                          fontSize="24px"
                        >
                          Rs. 20,000
                        </Text>{" "}
                        p.m.
                        <br />
                        For 3 Years
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Flex>
            <MtnFlx
              initial={{ opacity: 0 }}
              animate={animateFade}
              transition={{ delay: 4.5, duration: 2, type: "just" }}
              w="100%"
              align="center"
              direction="column"
            >
              <Heading fontFamily="avenir" fontSize="24px" mb="15px">
                2 YEAR DOWNPAYMENT PLAN
              </Heading>
              <Text
                mb="10px"
                textAlign="center"
                textTransform="uppercase"
                fontFamily="veralaRound"
                fontSize="16px"
              >
                Rental income + TAx savings + PMAY Benefits + Appreciation{" "}
              </Text>
              <Text
                textAlign="center"
                fontWeight="bold"
                fontSize="30px"
                mb="10px"
              >
                &#8595;
              </Text>
              <Text fontFamily="veralaRound" fontSize="24px" mb="25px">
                Income growth journey
              </Text>
              <Button
                w="146px"
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
                KNOW MORE
              </Button>
            </MtnFlx>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TenthSec;
