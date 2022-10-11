import { Flex, Heading, Image, Text } from "@chakra-ui/react";

const FirstSec = () => {
  return (
    <Flex w="100%" h="100%">
      <Flex w="60%">
        <Image h="668px" w="918px" src="/images/careers/career-stock.png" />
      </Flex>

      <Flex
        align="center"
        justify="center"
        direction="column"
        textAlign="center"
        w="40%"
        pl="27px"
        pr="100px"
      >
        <Heading fontSize="48px" fontFamily="avenir" pb="25px" px="6">
          JOIN OUR TRIBE
        </Heading>
        <Text fontSize="20px" fontFamily="veralaRound">
          Let’s join our efforts towards building the unshakable foundation for
          a better tomorrow.
        </Text>
      </Flex>
    </Flex>
  );
};

export default FirstSec;
