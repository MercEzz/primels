import { Flex, Heading, Image, Divider, Box } from "@chakra-ui/react";
import React from "react";

const Allia = () => {
  return (
    <Flex direction="column" align="center" pt="100px">
      <Flex w="100%" pl="100px">
        <Flex w="30%" direction="column">
          <Heading fontSize="40px" fontFamily="goudy" fontWeight="400">
            India’s Best <br /> Realty Brand
          </Heading>
          <Flex justify="center" align="center">
            <Divider
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
            <Box
              height="30px"
              width="35px"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>
        </Flex>
        <Flex w="100%">
          <Image w="" h="" src="/images/pngegg.png" />
          <Image w="" h="" src="" />
          <Image w="" h="" src="" />
        </Flex>
      </Flex>
      <Flex direction="column" align="center" justify="center">
        <Heading fontSize="40px" fontFamily="goudy" fontWeight="400">
          OUR ALLIANCES
        </Heading>
        <Flex w="100%" pt="75px" px="100px">
          <Flex>
            <Image src="/images/alliances.png" />
          </Flex>
          <Flex>
            <Image src="/images/alliances2.png" />
          </Flex>
          <Flex>
            <Image src="/images/alliances3.png" />
          </Flex>
          <Flex>
            <Image src="/images/alliances4.png" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Allia;
