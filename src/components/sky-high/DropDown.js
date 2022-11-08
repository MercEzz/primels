import {
  Button,
  Flex,
  Text,
  Accordion,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionItem,
} from "@chakra-ui/react";
import React from "react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import { AiOutlineDownCircle } from "react-icons/ai";

const DropDown = () => {
  return (
    <Accordion
      // px="84px"
      allowToggle
      color="white"
      w="100%"
      borderColor="#B88746"
    >
      <Flex h="100%" w="100%" px="84px" bgColor="#B88746">
        <AccordionItem p="0">
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                MORE INFORMATION
              </Box>
              <AiOutlineDownCircle size="40px" />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Section 2 title
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </AccordionPanel>
        </AccordionItem>
      </Flex>
    </Accordion>
  );
};

export default DropDown;
