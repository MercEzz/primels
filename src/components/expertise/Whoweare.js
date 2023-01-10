import { Box, Center, Divider, Flex, Heading, Icon,Image, Spacer, Text } from "@chakra-ui/react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import React from "react";
import rajeev from "./rajeev1.jpeg"

const Whoweare =()=>{
      return (
      <>
      <Flex direction="column" bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover">
      <Flex><Image opacity="0" h="2.5rem" w="100%"/></Flex>
      <Flex direction="column" overflow="hidden" px="100px" pt="2.5rem">
        <Flex h="344px" pos="relative" pb="5rem">
            <Flex direction="column" className="fadein-2sdelay revealOnce" w="55%">
            <Heading  pt="5rem" pb="1.125rem" fontFamily="goudy" fontSize="1.5rem" textAlign="center">MR. RAJEEV AJMERA</Heading>
            <Heading pb="1.125rem" fontFamily="avenir" fontSize="1.125rem" textAlign="center">CHAIRMAN & MANAGING DIRECTOR</Heading>
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
                        bottom="-25%"
                        color="#DFBD69"
                        w="4.375rem"
                        h="3.125rem"
                        as={ImQuotesRight} />
                    </Text>
            </Flex>
        </Flex>
        </Flex>
        </Flex>
      </>)
}
export default Whoweare;