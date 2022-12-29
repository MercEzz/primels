import { Box, Center, Divider, Flex, Heading, Icon,Image, Text } from "@chakra-ui/react";
import React from "react";

import rajeev from "./rajeev2.jpeg"
import punit from "./punit-chopraa.jpg"
import arvinnd from "./arvinnd-agarwal.jpg"
import rajesh from "./rajesh-manghnani.jpg"

const BoardofDirectors =()=>{

    return (<>
        <Flex direction="column" h="120vh"overflow="hidden"  px="100px">
        <Center className="slidein-top revealOnce" fontFamily="goudy" fontSize="2.5rem">BOARD OF DIRECTORS</Center>
        <Flex >
            <Flex direction="column" w="50%">
            <Heading fontFamily="goudy" fontSize="1.5rem" className="fadein-2sdelay revealOnce">MR. RAJEEV AJMERA</Heading>
            <Heading fontFamily="avenir" fontSize="1.125rem" className="fadein-2sdelay revealOnce">CHAIRMAN & MANAGING DIRECTOR</Heading>
            <Text fontFamily="varela round" fontSize="1rem" className="fadein-2sdelay revealOnce">A Civil Engineer and MBA with over 30 Years of 
                Experience in real estate marketing, strategic alliances, 
                construction, development and advisory Services. He has 
                been instrumental in procuring over 400 apartments for the 
                L&T employees. His leadership ensures maintenance of the 
                highest level of management and financial integrity, keeping 
                with international best practices in the property services 
                business.</Text>
            </Flex>
            <Image  className="fadein reveal" src={rajeev} w="600px" h="400px" alt="IMAGE"/>
        </Flex>
        <Flex gap="15px" overflow="hidden">
            <Flex direction="column" w="33%">
                <Image src={punit} w="400px" h="350px" className="image-slieddown reveal"/>
                <Heading fontFamily="avenir" fontSize="1.5rem">MR. PUNIT CHOPRA</Heading>
                <Heading fontFamily="varela round" fontSize="1.125rem">Director</Heading>
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
                <Heading fontFamily="avenir" fontSize="1.5rem">MR. ARVINND AGARWAL</Heading>
                <Heading fontFamily="varela round" fontSize="1.125rem">Director</Heading>
                <Text fontFamily="varela round" fontSize="1rem">
                Chartered accountant with expertise in commercial & 
                Financial practices. He has been associated with 
                leading corporate brands such as Welspun, Birla 
                Group of companies etc at the top management level.
                </Text>
            </Flex>
            <Flex direction="column" w="33%">
                <Image src={rajesh} w="400px" h="350px" className="image-slieddown reveal"/>
                <Heading className="fadein-2sdelay revealOnce" fontFamily="avenir" fontSize="1.5rem">MR. RAJESH MANGHNANI</Heading>
                <Heading className="fadein-2sdelay revealOnce" fontFamily="varela round" fontSize="1.125rem">Director</Heading>
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