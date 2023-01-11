import { Box, Center, Divider, Flex, Heading, Icon,Image, Text } from "@chakra-ui/react";
import React from "react";

import rajeev from "./rajeev2.jpeg"
import punit from "./punit-chopraa.jpg"
import arvinnd from "./arvinnd-agarwal.jpg"
import rajesh from "./rajesh-manghnani.jpg"

const BoardofDirectors =()=>{

    return (<>
        <Flex direction="column" h="100%"overflow="hidden"  px="100px" mb="5rem">
        <Center pb="3.125rem" className="slidein-top revealOnce" fontFamily="avenir" fontSize="2.5rem">OUR CLIENTS</Center>
        <Flex >
        <Image  className="fadein reveal" bgColor="red" w="50%" h="400px" alt="IMAGE"/>
            <Flex direction="column" w="50%">
            <Heading fontFamily="avenir" pb="1rem" fontSize="1.5rem" className="fadein-2sdelay revealOnce">“With our mantra : Analyze, Identify, Advise, Execute, we thrive on sharing the knowledge to help you make a success story”</Heading>
            <Text fontFamily="varela round" fontSize="1rem" className="fadein-2sdelay revealOnce">A Civil Engineer and MBA with over 30 Years of 
            The team has excelled in providing deep expertise to biggest corporates like Blackstone for Chandigarh Elante Mall, Larsen & Toubro for Seawood Project, Sunteck for Naigaon Project etc. Also, the group has structured various eminent Joint Ventures, Mergers like L&T Ge Tech with Sharaf Foundation.
            </Text>
            </Flex>
        </Flex>
        <Flex gap="15px" overflow="hidden" pt="2.125rem">
            <Flex direction="column" w="33%">
                <Image src={punit} w="400px" h="350px" className="image-slieddown reveal"/>
                <Heading fontFamily="avenir" pb="1rem" fontSize="1.5rem">MR. PUNIT CHOPRA</Heading>
                <Heading fontFamily="varela round" pb="1rem" fontSize="1.125rem">Director</Heading>
                <Text fontFamily="varela round" fontSize="1rem">
                A Civil Engineer and MBA with over 30 Years of 
                BE, MBA (USA) has worked in India & USA in a 
                responsible position for Software & technological 
                development. He was regional head at multinational 
                I.T company. Possesses excellent networking skills 
                & presently engaged in business development for 
                large corporates & State / Central Governments.
                </Text>
            </Flex>
            <Flex direction="column" w="33%">
                <Image src={arvinnd} w="400px" h="350px" className="image-slieddown reveal"/>
                <Heading fontFamily="avenir" pb="1rem" fontSize="1.5rem">MR. ARVINND AGARWAL</Heading>
                <Heading fontFamily="varela round" pb="1rem" fontSize="1.125rem">Director</Heading>
                <Text fontFamily="varela round" fontSize="1rem">
                Chartered accountant with expertise in commercial & 
                Financial practices. He has been associated with 
                leading corporate brands such as Welspun, Birla 
                Group of companies etc at the top management level.
                </Text>
            </Flex>
            <Flex direction="column" w="33%">
                <Image src={rajesh} w="400px" h="350px" className="image-slieddown reveal"/>
                <Heading className="fadein-2sdelay revealOnce" pb="1rem" fontFamily="avenir" fontSize="1.5rem">MR. RAJESH MANGHNANI</Heading>
                <Heading className="fadein-2sdelay revealOnce" pb="1rem" fontFamily="varela round" fontSize="1.125rem">Director</Heading>
                <Text className="fadein-2sdelay revealOnce" fontFamily="varela round" fontSize="1rem">
                Commerce Graduate with years of experience in real 
                estate transaction in domestic market and middle 
                east. Since 2005 actively associated with Dubai real 
                estate.
                </Text>
            </Flex>
        </Flex>
        </Flex>
    </>); 
}
export default BoardofDirectors;