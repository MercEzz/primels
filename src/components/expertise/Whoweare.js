import { Box, Center, Divider, Flex, GridItem, Heading, Icon,Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import React from "react";
import rajeev from "./rajeev1.jpeg"

const Whoweare =()=>{
      return (
      <>
      <Flex direction="column">
      <Flex><Image opacity="0" h="2.5rem" w="100%"/></Flex>
      <Flex direction="column" overflow="hidden" px="100px" pt="5rem">
        <Flex pos="relative" pb="5rem">
            <Flex direction="column" className="fadein-2sdelay revealOnce" w="50%">
                    <Text pos="relative" fontSize="1rem" textAlign="center" >
                    <Icon
                        pos="absolute"
                        left="-3rem"
                        top="-50%"
                        as={ImQuotesLeft}
                        w="4.375rem"
                        h="3.125rem"
                        color="#DFBD69" />
                    We are deal experts who understand how to mitigate risks, maximize value and moderate human capital costs to achieve sustainable value. Hundreds of clients have benefited from our holistic and practical approach to translating people risks into measurable outcomes.
                    <Icon
                        pos="absolute"
                        right="0"
                        bottom="-50%"
                        color="#DFBD69"
                        w="4.375rem"
                        h="3.125rem"
                        as={ImQuotesRight} />
                    </Text>
            </Flex>
            <SimpleGrid pl="6rem" mt="-2rem" gap="2.5rem" columns={2}>
                <Flex direction="column" align="center">
                    <Icon/>
                    <Text w="130px" textAlign="center" fontFamily="avenir">REAL ESTATE CONSULTATION</Text>
                </Flex>
                <Flex direction="column" align="center">
                    <Icon/>
                    <Text w="130px" textAlign="center" fontFamily="avenir">PROJECT DEVELOPMENT</Text>
                </Flex>
                <Flex direction="column" align="center">
                    <Icon/>
                    <Text w="130px" textAlign="center" fontFamily="avenir">PRIME REALTY CAPITAL</Text>
                </Flex>
                <Flex direction="column" align="center">
                    <Icon/>
                    <Text w="130px" textAlign="center" fontFamily="avenir">PRIME ADVISORS</Text>
                </Flex>
            </SimpleGrid>
        </Flex>
        </Flex>
        </Flex>
      </>)
}
export default Whoweare;