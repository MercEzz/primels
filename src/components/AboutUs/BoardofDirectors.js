import { Box, Center, Divider, Flex, Heading, Icon,Image, Text } from "@chakra-ui/react";
import React from "react";
const BoardofDirectors =()=>{

    return (<>
        <Flex direction="column" h="120vh">
        <Center className="serv-text-up revealOnce" fontFamily="goudy" fontSize="2.5rem">BOARD OF DIRECTORS</Center>
        <Flex>
            <Flex direction="column" w="50%">
            <Heading fontFamily="goudy" fontSize="1.5rem">MR. RAJEEV AJMERA</Heading>
            <Heading fontFamily="avenir" fontSize="1.125rem">CHAIRMAN & MANAGING DIRECTOR</Heading>
            <Text fontFamily="varela round" fontSize="1rem">A Civil Engineer and MBA with over 30 Years of 
                Experience in real estate marketing, strategic alliances, 
                construction, development and advisory Services. He has 
                been instrumental in procuring over 400 apartments for the 
                L&T employees. His leadership ensures maintenance of the 
                highest level of management and financial integrity, keeping 
                with international best practices in the property services 
                business.</Text>
            </Flex>
            <Image bgColor="red" w="600px" h="400px" alt="IMAGE"/>
        </Flex>
        <Flex gap="15px">
            <Flex direction="column">
                <Image bgColor="red" w="400px" h="350px"/>
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
            <Flex direction="column">
                <Image bgColor="red" w="400px" h="350px"/>
                <Heading fontFamily="avenir" fontSize="1.5rem">MR. ARVINND AGARWAL</Heading>
                <Heading fontFamily="varela round" fontSize="1.125rem">Director</Heading>
                <Text fontFamily="varela round" fontSize="1rem">
                Chartered accountant with expertise in commercial & 
                Financial practices. He has been associated with 
                leading corporate brands such as Welspun, Birla 
                Group of companies etc at the top management level.
                </Text>
            </Flex>
            <Flex direction="column">
                <Image bgColor="red" w="400px" h="350px"/>
                <Heading fontFamily="avenir" fontSize="1.5rem">MR. RAJESH MANGHNANI</Heading>
                <Heading fontFamily="varela round" fontSize="1.125rem">Director</Heading>
                <Text fontFamily="varela round" fontSize="1rem">
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