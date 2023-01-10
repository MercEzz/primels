import { Center, Flex, Text, Icon, Image, SimpleGrid, HStack, Heading, GridItem, Box, Divider } from "@chakra-ui/react";
import React from "react";
const Passionatwork =()=>{
      return (<>
        <Flex direction="column" h="100%" w="100%" overflow="hidden"  px="1rem" mt="5rem" mb="5rem">
        <Center  className="slidein-top revealOnce" fontFamily="goudy" fontSize="2.5rem" textAlign="center">PASSION AT WORK</Center>
        <Flex wrap="wrap" direction="column" pt="1.5rem">
            <Text className="fadein-2sdelay revealOnce" fontSize="1rem" textAlign="center">
                Prime LifeSpace group luxuriates the highest brand esteem 
                in Mumbai & chennai for its fusion of luxuries & affordability 
                in the projects of exceptional quality with a passion for 
                delivering finest homes.
            </Text>
            <Text className="fadein-2sdelay revealOnce" fontSize="1rem" textAlign="center">
                Our projects are stategized acccording to the market demand &
                executed with the new requirements of the home buyers providing
                them with beautiful holistic living.
            </Text>
            <Text className="fadein-2sdelay revealOnce" fontSize="1rem" textAlign="center">
                Our team stands by the motto to deliver timely, as promised &
                will continue doing so. Being technically capable & equipped with
                right resources we set gold standards for customer centric design,
                quality and safety"
            </Text>
            <Image mt="2rem" className="fadein reveal" bgColor="red" px="1rem" h="300px" alt="IMAGE"/>
        </Flex>
        <Flex direction="column" mt="3.125rem">
           <Flex direction="column"  w="100%" overflow="hidden">
                <Center><Heading mb="2.125rem" className="slidein-top revealOnce" fontFamily="goudy" fontSize="2.5rem">KEY SERVICES</Heading></Center>
                <Flex direction="column" gap="2%">
                    <Flex gap="1rem" mb="2.125rem" align="center" direction="column" w="100%" className="fadein revealOnce">
                        <Heading fontFamily="avenir" fontSize="1.5rem">CONSULTING</Heading>
                        <Icon/>
                        <Flex direction="column" w="100%" align="center">
                            <Flex gap="1rem">
                                <Text fontFamily="varela round"><li>Merger & Acquisition</li></Text>
                                <Text fontFamily="varela round"><li>Contracts</li></Text>
                            </Flex>
                            <Flex gap="1rem">
                                <Text fontFamily="varela round"><li>Art & Architecture</li></Text>
                                <Text fontFamily="varela round"><li>Joint Ventures</li></Text>
                            </Flex>
                            <Flex gap="1rem">
                                <Text fontFamily="varela round"><li>Broking</li></Text>
                                <Text fontFamily="varela round"><li>Structured Transaction</li></Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex gap="1rem" mb="2.125rem" direction="column" align="center" w="100%" className="fadein revealOnce">
                        <Heading textAlign="center" fontFamily="avenir" fontSize="1.5rem">REAL ESTATE DEVELOPMENTS</Heading>
                        <Icon/>
                        <Flex gap="1rem">
                            <Text fontFamily="varela round"><li>Mumbai</li></Text>
                            <Text fontFamily="varela round"><li>Chennai</li></Text>
                            <Text fontFamily="varela round"><li>Pune</li></Text>
                        </Flex>
                        <Text fontFamily="varela round"><li>Indore</li></Text>
                    </Flex>
                </Flex>
                <Flex direction="column" gap="2%" pt="2rem">
                    <Flex mb="2.125rem" gap="1rem" align="center" direction="column" w="100%" className="fadein revealOnce">
                        <Heading fontFamily="avenir" fontSize="1.5rem">FINANCE</Heading>
                        <Icon/>
                        <Text fontFamily="varela round"><li>AIF II Fund</li></Text>
                    </Flex>
                    <Flex gap="1rem" direction="column" align="center" w="100%" className="fadein revealOnce">
                        <Heading fontFamily="avenir" fontSize="1.5rem">RENEWABLE ENERGY<br/>DEVELOPMENTS</Heading>
                        <Icon/>
                        <Text fontFamily="varela round"><li>Solar Power</li></Text>
                    </Flex>
                </Flex>
           </Flex>
           <Flex mt="3.125rem" direction="column" h="100%" w="100%" overflow="hidden">
                <Center><Heading textAlign="center" mb="3.125rem" className="slidein-top revealOnce" fontFamily="goudy" fontSize="2.5rem">OUR CORE STRENGTHS</Heading></Center>
                <SimpleGrid
                        columns={3}
                        w="100%"
                        overflow="hidden"
                        spacing="0.938rem">
                            <GridItem pos="relative" w="106px" h="225px" bgColor="red" rowSpan={2} className="image-slieddown reveal">
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
                            <GridItem pos="relative" w="229px" h="100px" bgColor="red" colSpan={2} className="image-sliedright reveal">
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
                            <GridItem pos="relative" w="105px" h="110px" bgColor="red" className="fadein reveal">
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
                            <GridItem pos="relative" w="106px" h="225px" bgColor="red"  rowSpan={2} className="image-sliedup reveal">
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
                            <GridItem pos="relative" w="229px" h="100px" bgColor="red" colSpan={2} className="image-sliedleft reveal">
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