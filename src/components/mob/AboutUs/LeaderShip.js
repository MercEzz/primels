import { Box, Center, Divider, Flex, Heading, Icon,Image, Text } from "@chakra-ui/react";
import React from "react";
import { GrLinkedinOption } from "react-icons/gr";

import krunal from "./KRUNAL SHAH.JPG"
import johny from "./JOHNY.JPG"
import pramod from "./PRAMOD.JPG"
import ravi from "./RAVI.JPG"

const LeaderShip =()=>{
    const leaders =[
        {img:krunal, name:"MR. KRUNAL SHAH",team:"Financial Head"},
        {img:pramod, name:"MR. PRAMOD KUMAR",team:"Project Head"},
        {img:johny, name:"MR. JOHNY RAMAN",team:"Technical Head"},
        {img:ravi, name:"MR. RAVI",team:"Design Head"},
    ];
    return (<>
        <Flex direction="column" h="100%" overflow="hidden"  px="1rem">
        <Center pb="3.125rem" textAlign="center" className="slidein-top revealOnce" fontFamily="goudy" fontSize="2.5rem">LEADERSHIP TEAM</Center>
        <Flex direction="column" gap="1rem" mb="5rem">
            {leaders.map((leader)=>(
            <Flex p="1rem" _hover={{boxShadow:"xl"}}
            bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover">
                <Image w="160px" h="164px" src={leader.img}/>
            <Flex direction="column" w="160px">
                <Text pb="1rem" fontFamily="avenir" fontWeight="bold" textAlign="center" fontSize="1.125rem">{leader.name}</Text>
                <Text pb="1rem" fontFamily="varela" textAlign="center" fontSize="1rem">{leader.team}</Text>
                <Icon
                  h="3.125rem"
                  w="3.125rem"
                  alignSelf="center"
                  bgColor="#0A66C2"
                  color="#fff"
                  p="0.313rem"
                  as={GrLinkedinOption}
                />
                </Flex>
            </Flex>))
            }
        </Flex>
        </Flex>
    </>); 
}
export default LeaderShip;