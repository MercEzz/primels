import { Flex, Heading, Image, Text } from "@chakra-ui/react";

const FirstSec = () => {
  return (
    <Flex w="100%" h="89vh">
      <Flex w="65%">
        <Image h="100%" w="100%" src="/images/careers/career-stock.png" />
      </Flex>

      <Flex
        align="center"
        justify="center"
        direction="column"
        textAlign="center"
        w="35%"
        px="16"
      >
        <Heading fontSize="50px" fontFamily="avenir">
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
