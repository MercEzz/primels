import {
  Flex,
  Heading,
  Image,
  ListItem,
  UnorderedList,
  Divider,
  Box,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const MtnHd = motion(Heading);
const MtnFlx = motion(Flex);
const MtnDvdr = motion(Divider);

const OneStop = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animateHd = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateHd.start({ opacity: 1, y: 0 });
    }
  }, [isInView, animateHd]);

  return (
    <Flex
      ref={ref}
      w="100%"
      minH="100%"
      align="center"
      justify="center"
      pt="100px"
      pb="50px"
      px="100px"
      direction="column"
      pos="relative"
      bgColor="white"
    >
      <MtnHd
        initial={{ opacity: 0, y: -50 }}
        animate={animateHd}
        transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        w="100%"
        fontSize="40px"
        lineHeight="58px"
        fontWeight="400"
        pb="25px"
        textAlign="center"
      >
        ONE STOP SOLUTION FOR POWER SECTOR
      </MtnHd>
      <Flex direction="column" w="100%" h="100%">
        <Flex w="100%" h="100%" align="flex-start" justify="space-between">
          {" "}
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateHd}
            transition={{ delay: 1.5, duration: 2, type: "just" }}
            w="100%"
            direction="column"
            align="flex-start"
            pb="25px"
            pt="25px"
          >
            <Flex w="100%" pb="15px" align="center" justify="center">
              <Image
                w="80px"
                h="80px"
                src="/images/energy-page/financial-and-ppa.svg"
              />
            </Flex>
            <Heading
              fontFamily="avenir"
              fontSize="24px"
              lineHeight="41px"
              textTransform="uppercase"
              mb="15px"
            >
              FINANCIAL & PPA SUPPORT
            </Heading>
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="16px"
              lineHeight="24px"
              fontWeight="400"
            >
              <ListItem pb="10px">Project Financing</ListItem>
              <ListItem>Power Purchase Agreements</ListItem>
            </UnorderedList>
          </MtnFlx>{" "}
          <MtnFlx
            initial={{ opacity: 0, y: -50 }}
            animate={animateHd}
            transition={{ delay: 1.5, duration: 2, type: "just" }}
            direction="column"
            align="center"
            w="100%"
            h="100%"
          >
            <MtnDvdr
              initial={{ opacity: 0, y: -50 }}
              animate={animateHd}
              transition={{ duration: 2, type: "just" }}
              orientation="vertical"
              h="2.5rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
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
            <MtnDvdr
              initial={{ opacity: 0, y: -100 }}
              animate={animateHd}
              transition={{ delay: 2.5, duration: 2, type: "just" }}
              display="flex"
              orientation="vertical"
              h="12.6rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
          </MtnFlx>{" "}
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateHd}
            transition={{ delay: 1.5, duration: 2, type: "just" }}
            w="100%"
            direction="column"
            align="flex-start"
            pb="25px"
            pt="25px"
          >
            <Flex w="100%" pb="15px" align="center" justify="center">
              <Image
                w="80px"
                h="80px"
                src="/images/energy-page/liaisoning.svg"
              />
            </Flex>
            <Heading
              fontFamily="avenir"
              fontSize="24px"
              lineHeight="41px"
              textTransform="uppercase"
              mb="15px"
            >
              LIAISONING & APPROVALS
            </Heading>
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="16px"
              lineHeight="24px"
              fontWeight="400"
            >
              <ListItem>
                Liaisoning for all Govt. Approvals for Project Sanctions
              </ListItem>
            </UnorderedList>
          </MtnFlx>
        </Flex>
        <Flex w="100%" h="100%" align="flex-start" justify="space-between">
          {" "}
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateHd}
            transition={{ delay: 3.5, duration: 2, type: "just" }}
            w="100%"
            direction="column"
            align="flex-start"
            pb="25px"
            pt="25px"
          >
            <Flex w="100%" pb="15px" align="center" justify="center">
              <Image
                w="80px"
                h="80px"
                src="/images/energy-page/engineering-design.svg"
              />
            </Flex>
            <Heading
              fontFamily="avenir"
              fontSize="24px"
              lineHeight="41px"
              textTransform="uppercase"
              mb="15px"
            >
              Engineering, Design & due diligence
            </Heading>
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="16px"
              lineHeight="24px"
              fontWeight="400"
            >
              <ListItem pb="10px">
                Material Procurement and Negotiation on behalf of client
              </ListItem>
              <ListItem pb="10px">Project & Site Management</ListItem>
              <ListItem pb="10px">
                Plant Commissioning & Synchronisation
              </ListItem>
              <ListItem pb="10px">Performance Test</ListItem>
              <ListItem pb="10px">Technology Assessment</ListItem>
              <ListItem>
                Independent Technical & Commercial Due diligence
              </ListItem>
            </UnorderedList>
          </MtnFlx>{" "}
          <MtnFlx
            initial={{ opacity: 0, y: -50 }}
            animate={animateHd}
            transition={{ delay: 3.5, duration: 2, type: "just" }}
            direction="column"
            align="center"
            w="100%"
            h="100%"
          >
            <MtnDvdr
              initial={{ opacity: 0, y: -50 }}
              animate={animateHd}
              transition={{ delay: 1, duration: 2, type: "just" }}
              orientation="vertical"
              h="2.5rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
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
            <MtnDvdr
              initial={{ opacity: 0, y: -50 }}
              animate={animateHd}
              transition={{ delay: 6.5, duration: 2, type: "just" }}
              display="flex"
              orientation="vertical"
              h="26.6rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
          </MtnFlx>{" "}
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateHd}
            transition={{ delay: 3, duration: 2, type: "just" }}
            w="100%"
            direction="column"
            align="flex-start"
            pb="25px"
            pt="25px"
          >
            <Flex w="100%" pb="15px" align="center" justify="center">
              <Image
                w="80px"
                h="80px"
                src="/images/energy-page/feasibility.svg"
              />
            </Flex>
            <Heading
              fontFamily="avenir"
              fontSize="24px"
              lineHeight="41px"
              textTransform="uppercase"
              mb="15px"
            >
              FEASIBILITY STUDY
            </Heading>
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="16px"
              lineHeight="24px"
              fontWeight="400"
            >
              <ListItem pb="10px">Site Selection</ListItem>
              <ListItem pb="10px">Resource Analysis</ListItem>
              <ListItem pb="10px">Technical Review</ListItem>
              <ListItem pb="10px">Environment Impact Analysis</ListItem>
              <ListItem pb="10px">
                Identification & Selection of Technology
              </ListItem>
              <ListItem pb="10px">Site Visits</ListItem>
              <ListItem>Detail Project Reports</ListItem>
            </UnorderedList>
          </MtnFlx>
        </Flex>
        <Flex w="100%" h="100%" align="flex-start" justify="space-between">
          {" "}
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateHd}
            transition={{ delay: 6.5, duration: 2, type: "just" }}
            w="100%"
            direction="column"
            align="flex-start"
            pb="25px"
            pt="25px"
          >
            <Flex w="100%" pb="15px" align="center" justify="center">
              <Image
                w="80px"
                h="80px"
                src="/images/energy-page/financial-and-ppa.svg"
              />
            </Flex>
            <Heading
              fontFamily="avenir"
              fontSize="24px"
              lineHeight="41px"
              textTransform="uppercase"
              mb="15px"
            >
              O & M+ CONSULTANCY
            </Heading>
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="16px"
              lineHeight="24px"
              fontWeight="400"
            >
              <ListItem pb="10px">
                Plant AMC for Operation & Maintenance
              </ListItem>
              <ListItem>Specification and Tender Assessment</ListItem>
            </UnorderedList>
          </MtnFlx>{" "}
          <MtnFlx
            initial={{ opacity: 0, y: -50 }}
            animate={animateHd}
            transition={{ delay: 6.5, duration: 2, type: "just" }}
            direction="column"
            align="center"
            w="100%"
            h="100%"
          >
            <MtnDvdr
              initial={{ opacity: 0, y: -50 }}
              animate={animateHd}
              transition={{ delay: 1.5, duration: 2, type: "just" }}
              orientation="vertical"
              h="2.5rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
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
          </MtnFlx>{" "}
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateHd}
            transition={{ delay: 6.5, duration: 2, type: "just" }}
            w="100%"
            direction="column"
            align="flex-start"
            pb="25px"
            pt="25px"
          >
            <Flex w="100%" pb="15px" align="center" justify="center">
              <Image
                w="80px"
                h="80px"
                src="/images/energy-page/procurement.svg"
              />
            </Flex>
            <Heading
              fontFamily="avenir"
              fontSize="24px"
              lineHeight="41px"
              textTransform="uppercase"
              mb="15px"
            >
              PROCUREMENT & CONSTRUCTION
            </Heading>
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="16px"
              lineHeight="24px"
              fontWeight="400"
            >
              <ListItem pb="10px">Project Design and Optimization</ListItem>
              <ListItem pb="10px">
                Detail Technology Assessment, Selection and Specification
                Preparation
              </ListItem>
              <ListItem>
                Preparation of Layout Drawings, Erection Documents etc
              </ListItem>
            </UnorderedList>
          </MtnFlx>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OneStop;
