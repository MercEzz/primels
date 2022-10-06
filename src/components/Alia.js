import { Flex, Heading, Image, Divider, Box } from "@chakra-ui/react";
import React from "react";

const Allia = () => {
  return (
    <Flex direction="column" align="center" py="10">
      <Flex w="100%" py="6" px="6">
        <Flex w="30%" direction="column">
          <Heading fontSize="50px" fontWeight="400">
            India’s Best Realty Brand
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
              width="30px"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>
        </Flex>
        <Flex w="100%">img</Flex>
      </Flex>
      <Flex direction="column" align="center" justify="center" py="10">
        <Heading fontSize="50px" fontWeight="400" py="6">
          OUR ALLIANCES
        </Heading>
        <Flex w="100%" py="10">
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
