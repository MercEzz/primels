import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const SmartLiving = () => {
  return (
    <Flex direction="column" w="100%" py="6" px="6" align="center">
      <Heading>SMART LIVING</Heading>
      <Flex px="4" py="4">
        <Flex direction="column" w="100%">
          <Flex>
            <Image src="/images/smartliving.png" />
          </Flex>
          <Flex>
            icon<Heading>SERVICED HOUSING</Heading>
            <Text>Premium serviced appartments in small township living</Text>
          </Flex>
          <Flex>
            <Image src="/images/smartliving3.png" />
          </Flex>
        </Flex>
        <Flex px="2">center section</Flex>

        <Flex direction="column" w="100%">
          <Flex direction="column">
            icon <Heading>RENTAL HOUSING</Heading>
            <Text>Your home away from home.</Text>
          </Flex>
          <Flex>
            <Image src="/images/smartliving2.png" />
          </Flex>
          <Flex direction="column">
            icon <Heading>STUDENT HOUSING</Heading>
            <Text>
              Modern student housing, co-living for professionals and serviced
              apartments.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SmartLiving;
