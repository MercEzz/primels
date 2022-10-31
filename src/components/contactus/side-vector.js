import React, { useState } from "react";
import { Flex, Divider, Box, Icon, Text, Link } from "@chakra-ui/react";
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiFacebookCircleFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";

const MtnFlx = motion(Flex);
const MtnIcn = motion(Icon);

const SideVector = () => {
  const [dis, setDis] = useState(true);
  const track = () => {
    if (window.scrollY > 1900) {
      setDis(false);
    } else {
      setDis(true);
    }
  };

  window.addEventListener("scroll", track);

  return (
    <AnimatePresence>
      {dis && (
        <MtnFlx
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          display="flex"
          transition="all 2s"
          h="100%"
          w="100%"
          // bgColor="blackAlpha.300"
          zIndex="99"
        >
          <MtnFlx
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, type: "just", ease: "linear" }}
            h="100%"
            direction="column"
            align="center"
            justify="flex-start"
            color="black"
            pos="fixed"
            right="0"
            px="50px"
          >
            <Divider
              h="25vh"
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />{" "}
            <Flex
              h="30px"
              pos="relative"
              align="center"
              justify="center"
              direction="column"
            >
              <Box
                pos="absolute"
                height="30px"
                width="30px"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="0.5"
              />
              <Box
                pos="absolute"
                height="22px"
                width="22px"
                backgroundColor="#DFBD69"
                borderRadius="50%"
                my="0.5"
              />
            </Flex>
            <Flex
              // initial={{ opacity: 1, top: -200 }}
              // animate={{ opacity: 1, top: 0 }}
              // transition={{ ease: "linear", delay: 2, duration: 2 }}
              // pos="absolute"
              direction="column"
              overflow="hidden"
              align="center"
            >
              <Icon
                as={RiInstagramFill}
                h="50px"
                w="50px"
                mt="10px"
                _hover={
                  {
                    //  color: ''
                  }
                }
                transition="linear 200ms"
              />

              <Icon
                as={RiLinkedinBoxFill}
                h="50px"
                w="50px"
                my="10px"
                _hover={{ color: "#0A66C2" }}
                transition="linear 200ms"
              />

              <Icon
                as={RiFacebookCircleFill}
                h="50px"
                w="50px"
                mb="10px"
                borderRadius="50%"
                _hover={{ color: "#3b5998" }}
                transition="linear 200ms"
              />
              <Icon
                as={RiYoutubeFill}
                h="50px"
                w="50px"
                _hover={{ color: "#ff0000" }}
                transition="linear 200ms"
              />
            </Flex>
          </MtnFlx>
        </MtnFlx>
      )}
    </AnimatePresence>
  );
};

export default SideVector;
