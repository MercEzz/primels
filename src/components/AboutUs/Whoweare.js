import { Box, Center, Divider, Flex, Heading, Icon,Image, Text } from "@chakra-ui/react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import React from "react";
import rajeev from "./rajeev1.jpeg"

const Whoweare =()=>{
      return (<>
      <Flex direction="column" h="100vh" overflow="hidden" px="100px">
        <Center className="slidein-top-2sdelay revealOnce" fontFamily="goudy" fontSize="2.5rem">WHO WE ARE</Center>
        <Center className="fadein-2sdelay revealOnce" fontFamily="varela round" fontSize="1rem">Prime LifeSpace, as the name suggests, is a pre-eminent real estate consultancy & development firm, with 30+ years of experience in the industry.<br/>
            Our brand is built on trust, transparency & quality in the real estate industry. We have established credentials in development of residential integrated townships & consulting services. Both these segments are equally important to us.<br/>
            Our consultancy firm offers an end to end solution in real estate space and development firm is renowned creators of smart integrated townships that provide more than just spaces to live in.</Center>
        <Flex overflow="hidden">
            <Flex direction="column" w="45%" className="fadein-2sdelay revealOnce">
                <Center><Heading fontFamily="goudy" fontSize="1.5rem">MISSION</Heading></Center>
                <Center><Icon/></Center>
                <Flex direction="column">
                    <Heading fontFamily="avenir" fontSize="1.125rem" textAlign="center">
                    BRIGHT IDEAS, SMART SOLUTIONS</Heading><br/>
                    <Text fontFamily="varela round" fontSize="1rem" textAlign="center">
                    We aim to make a positive difference through our work.<br/>
                    with a vision of creating self-reliant townships where<br/>
                    people experience excellence and happiness.
                    </Text>
                </Flex>
            </Flex>
            <Flex
            className="slidein-top reveal"
            transition="all 2s 2s"
            direction="column"
            align="center"
            px="1.562rem"
          >
            <Divider
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
              h="5.50rem"
            />{" "}
            <Box
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
            />
          </Flex>
            <Flex className="fadein-2sdelay revealOnce" direction="column" w="45%">
                <Center><Heading fontFamily="goudy" fontSize="1.5rem">VISION</Heading></Center>
                <Center><Icon></Icon></Center>
                <Flex direction="column">
                    <Heading fontFamily="avenir" fontSize="1.125rem" textAlign="center">INDIA'S MOST ADMIRED & IMPACTFUL<br/>
                    REAL ESTATE COMPANY.</Heading><br/>
                    <Text fontFamily="varela round" fontSize="1rem" textAlign="center">
                    We aim to make a positive difference through our work,<br/>
                    with a vision of creating self-reliant townships where<br/>
                    people experience excellence and happiness.
                    </Text>
                </Flex>
            </Flex>
        </Flex>
        <Flex>
            <Flex direction="column" className="fadein-2sdelay revealOnce" w="55%">
            <Heading  pt="5rem" fontFamily="goudy" fontSize="1.5rem" textAlign="center">MR. RAJEEV AJMERA</Heading>
            <Heading fontFamily="avenir" fontSize="1.125rem" textAlign="center">CHAIRMAN & MANAGING DIRECTOR</Heading>
                    
                    <Text pos="relative" fontSize="1rem" textAlign="center" >
                    <Icon
                        pos="absolute"
                        left="0"
                        top="-25%"
                        as={ImQuotesLeft}
                        w="4.375rem"
                        h="3.125rem"
                        color="#DFBD69" />
                    We EXCEL in boosting livability quotient,<br/>
                    attract global fund & investors & create<br/>
                    positive impact on society that endeavors
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
            <Image align="right" className="image-sliedright reveal" src={rajeev} w="448px" h="404px" alt="IMAGE"/>
        </Flex>
        </Flex>
      </>)
}
export default Whoweare;