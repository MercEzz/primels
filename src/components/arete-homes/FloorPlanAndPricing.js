import { Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import React from "react";
import towerA3_1 from "../arete-homes imgs/Tower A3-1.jpg";
// import towerA3_2 from "../arete-homes imgs/Tower A3-2.png";
// import towerA3_3 from "../arete-homes imgs/Tower A3-3.jpg";
// import towerA3_4 from "../arete-homes imgs/Tower A3-4.jpg";

const TenthSec = () => {
  return (
    <Flex
      w="100%"
      pt="3.125rem"
      px="6.25rem"
      h="100%"
      direction="column"
      align="center"
      justify="center"
    >
      <Text fontFamily="goudy" fontSize="2.5rem" mb="1.563rem">
        FLOOR PLAN AND PRICING
      </Text>
      <Heading fontFamily="avenir" fontSize="2.125rem" mb="1.563rem">
        SMART HOMES THAT ARE VASTU COMPLIANT
      </Heading>
      <Flex w="100%" h="100%">
        {" "}
        <Button
          borderRadius="none"
          border="1px solid #DFBD69"
          fontSize="1.25rem"
          p="0.937rem"
          fontFamily="avenir"
          mr="0.625rem"
          bgColor="#DFBD69"
          color="black"
          _hover={{
            bgColor: "#B88746",
          }}
          _active={{ bgColor: "#DFBD69" }}
        >
          TOWER A3
        </Button>
        <Button
          borderRadius="none"
          border="1px solid #DFBD69"
          bgColor="white"
          p="0.937rem"
          fontSize="20px"
          fontFamily="avenir"
          mr="0.625rem"
          color="black"
          _hover={{
            bgColor: "#B88746",
          }}
          _active={{ bgColor: "#DFBD69" }}
        >
          TOWER A4
        </Button>
        <Button
          borderRadius="none"
          border="1px solid #DFBD69"
          bgColor="white"
          fontSize="1.25rem"
          p="0.937rem"
          fontFamily="avenir"
          mr="0.625rem"
          color="black"
          _hover={{
            bgColor: "#B88746",
          }}
          _active={{ bgColor: "#DFBD69" }}
        >
          TOWER A5
        </Button>
        <Button
          borderRadius="none"
          border="1px solid #DFBD69"
          bgColor="white"
          p="0.937rem"
          fontSize="1.25rem"
          fontFamily="avenir"
          color="black"
          _hover={{
            bgColor: "#B88746",
          }}
          _active={{ bgColor: "#DFBD69" }}
        >
          TOWER A6
        </Button>
      </Flex>
      <Flex w="100%" h="100%">
        <Image src="" />
      </Flex>
    </Flex>
  );
};

export default TenthSec;

const towers = [
  {
    towerA3: {
      typeOf: "2 BHK(C), 2 BHK(L), 2.5 BHK",
      saleable: "1025-1421 SQFT.",
      floors: "10",
      noOfFlats: "8",
      a3Imgs: [
        towerA3_1,
        "/images/ARETE HOMES/Tower A3-2.png",
        "/images/ARETE HOMES/Tower A3-3.jpg",
        "/images/ARETE HOMES/Tower A3-4.jpg",
      ],
    },
    towerA4: {
      typeOf: "2 BHK(C), 2 BHK(L), 3 BHK",
      saleable: "1025-1787 SQFT.",
      floors: "10",
      noOfFlats: "8",
      a3Imgs: [
        "/images/ARETE HOMES/Tower A4-1.jpg",
        "/images/ARETE HOMES/TOWER A4-2.png",
        "/images/ARETE HOMES/Tower A4-3.jpg",
        "/images/ARETE HOMES/Tower A4-4.jpg",
      ],
    },
    towerA5: {
      typeOf: "2 BHK(C), 2 BHK(L), 3 BHK",
      saleable: "1017-1748 SQFT.",
      floors: "10",
      noOfFlats: "8",
      a3Imgs: [
        "/images/ARETE HOMES/Tower A5-1.jpg",
        "/images/ARETE HOMES/Tower A5-2.png",
        "/images/ARETE HOMES/Tower A5-3.jpg",
        "/images/ARETE HOMES/Tower A5-4.jpg",
      ],
    },
    towerA6: {
      typeOf: "2 BHK(C), 2 BHK(L), 3 BHK",
      saleable: "1008-1748 SQFT.",
      floors: "10",
      noOfFlats: "8",
      a3Imgs: [
        "/images/ARETE HOMES/Tower A6-1.jpg",
        "/images/ARETE HOMES/Tower A6-2.png",
        "/images/ARETE HOMES/Tower A6-3.jpg",
        "/images/ARETE HOMES/Tower A6-4.jpg",
      ],
    },
  },
];
