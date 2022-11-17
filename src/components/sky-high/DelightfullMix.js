import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
//import { useInView } from "framer-motion";
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

const EightSec = () => {
  //const ref = useRef(null);
  //const isInView = useInView(ref, { once: true });
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "50px",
  });
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      px="6.25rem"
      pt="6.25rem"
      pb="3.125rem"
      direction="column"
      align="center"
      justify="center"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
    >
      <Text
        transform={inView ? "none" : "translateY(-50px)"}
        opacity={inView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
        lineHeight="3rem"
        textTransform="uppercase"
      >
        A delightful mix of sky residences
      </Text>
      <Heading
        opacity={inView ? "1" : "0"}
        transition="all 2s 1s"
        fontFamily="avenir"
        fontSize="2.125rem"
        lineHeight="3rem"
        py="1.562rem"
      >
        FOR CO-LIVING, STUDENT HOUSING & SERVICED APARTMENTS
      </Heading>
      <Text
        opacity={inView ? "1" : "0"}
        transition="all 2s 1s"
        fontFamily="veralaRound"
        fontSize="1rem"
        pb="1.562rem"
      >
        An unique collection of flexi-design 2 BHK sky residences, well-planned
        with convertible option, for you to customize your home & needs. The 5
        different design innovations allow variations in private or shared
        rooms, more bedrooms or spacious living, one or more bathrooms etc.
        Making it possible to fit up to 5 beds in every apartment.
      </Text>
      <Flex w="100%" h="100%" align="center" justify="center">
        <Flex mr="0.937rem">
          <Image
            transform={inView ? "none" : "translateX(-100px)"}
            opacity={inView ? "1" : "0"}
            transition="all 2s 2s"
            w="100%"
            src="/images/sky-high/FLOOR PLAN1.jpg"
          />
        </Flex>
        <Flex>
          <Image
            transform={inView ? "none" : "translateX(100px)"}
            opacity={inView ? "1" : "0"}
            transition="all 2s 2s"
            w="100%"
            src="/images/sky-high/FLOOR PLAN2.jpg"
          />
        </Flex>
      </Flex>
      <Flex
        opacity={inView ? "1" : "0"}
        transition="all 2s 3s"
        w="100%"
        h="100%"
        align="center"
        justify="space-between"
        mt="0.937rem"
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
                    fontSize="1.25rem"
                    fontWeight="400"
                    color="white"
                    textAlign="center"
                    border="1px solid #B88746"
                    p="0.937rem"
                  >
                    Configuration
                  </Th>
                  <Th
                    fontFamily="veralaRound"
                    fontSize="1.25rem"
                    fontWeight="400"
                    color="white"
                    textAlign="center"
                    border="1px solid #B88746"
                    p="0.937rem"
                  >
                    Saleable Area
                  </Th>
                  <Th
                    fontFamily="veralaRound"
                    fontSize="1.25rem"
                    fontWeight="400"
                    color="white"
                    textAlign="center"
                    border="1px solid #B88746"
                    p="0.937rem"
                  >
                    Net Usable Area
                  </Th>
                  <Th
                    fontFamily="veralaRound"
                    fontSize="1.25rem"
                    fontWeight="400"
                    color="white"
                    textAlign="center"
                    border="1px solid #B88746"
                    p="0.937rem"
                  >
                    Rera Carpet Area
                  </Th>
                </Tr>
              </Thead>
              <Tbody textTransform="uppercase">
                <Tr>
                  <Td
                    fontFamily="avenir"
                    fontSize="1.25rem"
                    fontWeight="bold"
                    textAlign="center"
                    border="1px solid #B88746"
                    p="0.937rem"
                  >
                    SMART 2 BHK
                  </Td>
                  <Td
                    fontFamily="avenir"
                    fontSize="1.25rem"
                    fontWeight="bold"
                    textAlign="center"
                    p="0.937rem"
                    border="1px solid #B88746"
                  >
                    690
                  </Td>
                  <Td
                    fontFamily="avenir"
                    fontSize="1.25rem"
                    fontWeight="bold"
                    border="1px solid #B88746"
                    textAlign="center"
                    p="0.937rem"
                  >
                    452
                  </Td>
                  <Td
                    fontFamily="avenir"
                    fontSize="1.25rem"
                    fontWeight="bold"
                    textAlign="center"
                    border="1px solid #B88746"
                    p="0.937rem"
                  >
                    447
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
        <Button
          opacity={inView ? "1" : "0"}
          transition="all 2s 3s"
          w="9.437rem"
          h="3.187rem"
          fontSize="1rem"
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
      </Flex>
    </Flex>
  );
};

export default EightSec;
