import { Center, Flex, Text, Icon, Image, SimpleGrid, HStack, Heading, GridItem, Box, Divider } from "@chakra-ui/react";
import React from "react";
const Passionatwork =()=>{
      return (<>
        <Flex direction="column" h="150vh" overflow="hidden">
        <Heading fontFamily="goudy" fontSize="2.5rem" textAlign="center">PASSION AT WORK</Heading>
        <Flex>
            <Image w="600px" h="468px" alt="IMAGE"/>
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
            <Text pt="5.50rem" fontSize="1rem" textAlign="left">
                Prime LifeSpace group luxuriates the highest brand esteem 
                in Mumbai & chennai for its fusion of luxuries & affordability 
                in the projects of exceptional quality with a passion for 
                delivering finest homes.<br/>
                Our projects are stategized acccording to the market demand &
                executed with the new requirements of the home buyers providing
                them with beautiful holistic living.<br/>
                Our team stands by the motto to deliver timely, as promised &
                will continue doing so. Being technically capable & equipped with
                right resources we set gold standards for customer centric design,
                quality and safety"
            </Text>
        </Flex>
        <Flex>
           <Flex direction="column"  w="50%">
                <Center><Heading fontFamily="avenir" fontSize="2.5rem">KEY SERVICES</Heading></Center>
                <Flex gap="2%">
                    <Flex direction="column" w="49%">
                        <Flex gap="0.938rem"><Icon/><Heading fontFamily="avenir" fontSize="1.5rem">CONSULTING</Heading></Flex>
                    </Flex>
                    <Flex direction="column" w="49%">
                        <Flex gap="0.938rem"><Icon/><Heading fontFamily="avenir" fontSize="1.5rem">REAL ESTATE<br/>DEVELOPMENTS</Heading></Flex>
                    </Flex>
                </Flex>
                <Flex  gap="2%">
                    <Flex direction="column" w="49%">
                        <Flex gap="0.938rem"><Icon/><Heading fontFamily="avenir" fontSize="1.5rem">FINANCE</Heading></Flex>
                    </Flex>
                    <Flex direction="column" w="49%">
                        <Flex gap="0.938rem"><Icon/><Heading fontFamily="avenir" fontSize="1.5rem">RENEWABLE ENERGY<br/>DEVELOPMENTS</Heading></Flex>
                    </Flex>
                </Flex>
           </Flex>
           <Flex direction="column" w="50%">
                <Center><Heading fontFamily="avenir" fontSize="2.5rem">OUR CORE STRENGTHS</Heading></Center>
                <SimpleGrid
                        columns={3}
                        w="660px"
                        h="350px"
                        spacing="0.938rem">
                            <GridItem pos="relative" w="200px" h="248px" bgColor="red" rowSpan={2}>
                            <Box
                                w="100%"
                                h="100%"
                                pos="absolute"
                                top="0"
                                bottom="0"
                                left="0"
                                right="0"
                                opacity="0"
                                bgColor="rgba(0,0,0,0.6)"
                                transition="all .3s"
                                _hover={{ opacity: "1" }}
                                >
                                <Image
                                    alt="IMAGE"
                                    pos="absolute"
                                    bottom="40%"
                                    left="50%"
                                    transform="translate(-50%)"
                                />
                                <Heading
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="1.562rem"
                                    left="50%"
                                    transform="translate(-50%)"
                                    fontSize="1.25rem"
                                    color="#DFBD69"
                                >
                                    LEGACY
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem pos="relative" w="426px" h="119px" bgColor="red" colSpan={2}>
                            <Box
                                w="100%"
                                h="100%"
                                pos="absolute"
                                top="0"
                                bottom="0"
                                left="0"
                                right="0"
                                opacity="0"
                                bgColor="rgba(0,0,0,0.6)"
                                transition="all .3s"
                                _hover={{ opacity: "1" }}
                                >
                                <Image
                                    alt="IMAGE"
                                    pos="absolute"
                                    bottom="40%"
                                    left="50%"
                                    transform="translate(-50%)"
                                />
                                <Heading
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="1.562rem"
                                    left="50%"
                                    transform="translate(-50%)"
                                    fontSize="1.25rem"
                                    color="#DFBD69"
                                >
                                    MARKETING TEAM
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem pos="relative" w="200px" h="119px" bgColor="red">
                            <Box
                                w="100%"
                                h="100%"
                                pos="absolute"
                                top="0"
                                bottom="0"
                                left="0"
                                right="0"
                                opacity="0"
                                bgColor="rgba(0,0,0,0.6)"
                                transition="all .3s"
                                _hover={{ opacity: "1" }}
                                >
                                <Image
                                    alt="IMAGE"
                                    pos="absolute"
                                    bottom="40%"
                                    left="50%"
                                    transform="translate(-50%)"
                                />
                                <Heading
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="1.562rem"
                                    left="50%"
                                    transform="translate(-50%)"
                                    fontSize="1.25rem"
                                    color="#DFBD69"
                                >
                                    SALES SERVICE
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem pos="relative" w="200px" h="248px" bgColor="red"  rowSpan={2}>
                            <Box
                                w="100%"
                                h="100%"
                                pos="absolute"
                                top="0"
                                bottom="0"
                                left="0"
                                right="0"
                                opacity="0"
                                bgColor="rgba(0,0,0,0.6)"
                                transition="all .3s"
                                _hover={{ opacity: "1" }}
                                >
                                <Image
                                    alt="IMAGE"
                                    pos="absolute"
                                    bottom="40%"
                                    left="50%"
                                    transform="translate(-50%)"
                                />
                                <Heading
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="1.562rem"
                                    left="50%"
                                    transform="translate(-50%)"
                                    fontSize="1.25rem"
                                    color="#DFBD69"
                                >
                                    BUSINESS DEVELOPMENT
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem pos="relative" w="426px" h="119px" bgColor="red" colSpan={2}>
                            <Box
                                w="100%"
                                h="100%"
                                pos="absolute"
                                top="0"
                                bottom="0"
                                left="0"
                                right="0"
                                opacity="0"
                                bgColor="rgba(0,0,0,0.6)"
                                transition="all .3s"
                                _hover={{ opacity: "1" }}
                                >
                                <Image
                                    alt="IMAGE"
                                    pos="absolute"
                                    bottom="40%"
                                    left="50%"
                                    transform="translate(-50%)"
                                />
                                <Heading
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="1.562rem"
                                    left="50%"
                                    transform="translate(-50%)"
                                    fontSize="1.25rem"
                                    color="#DFBD69"
                                >
                                    STRONG NETWORK
                                </Heading>
                                </Box>
                            </GridItem>
                        </SimpleGrid>
           </Flex>
        </Flex>
        </Flex>
      </>)
}
export default Passionatwork;