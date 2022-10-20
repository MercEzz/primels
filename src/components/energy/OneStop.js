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
      h="100%"
      align="flex-start"
      justify="center"
      pt="100px"
      pb="15px"
      px="100px"
      direction="column"
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
      <Flex>
        <Flex
          w="45%"
          h="100%"
          pt="50px"
          direction="column"
          align="flex-start"
          justify="center"
        >
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateHd}
            transition={{ delay: 1.5, duration: 2, type: "just" }}
            w="100%"
            direction="column"
            align="flex-start"
          >
            <Flex w="100%" align="center" justify="center">
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
              mb="7px"
            >
              FINANCIAL & PPA SUPPORT
            </Heading>
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="16px"
              lineHeight="24px"
              fontWeight="400"
              pl="6"
            >
              <ListItem>Project Financing</ListItem>
              <ListItem>Power Purchase Agreements</ListItem>
            </UnorderedList>
          </MtnFlx>
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateHd}
            transition={{ delay: 3, duration: 2, type: "just" }}
            w="100%"
            direction="column"
            align="flex-start"
          >
            <Flex w="100%" align="center" justify="center">
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
              mb="7px"
            >
              Engineering, Design & due diligence
            </Heading>
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="16px"
              lineHeight="24px"
              fontWeight="400"
              pl="6"
            >
              <ListItem>
                Material Procurement and Negotiation on behalf of client
              </ListItem>
              <ListItem>Project & Site Management</ListItem>
              <ListItem>Plant Commissioning & Synchronisation</ListItem>
              <ListItem>Performance Test</ListItem>
              <ListItem>nology Assessment</ListItem>
              <ListItem>
                Independent Technical & Commercial Due diligence
              </ListItem>
            </UnorderedList>
          </MtnFlx>
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateHd}
            transition={{ delay: 4.5, duration: 2, type: "just" }}
            w="100%"
            direction="column"
            align="flex-start"
          >
            <Flex w="100%" align="center" justify="center">
              <Image
                w="80px"
                h="80px"
                src="/images/energy-page/o-m-consultancy.svg"
              />
            </Flex>
            <Heading
              fontFamily="avenir"
              fontSize="24px"
              lineHeight="41px"
              textTransform="uppercase"
              mb="7px"
            >
              O & M+ CONSULTANCY
            </Heading>
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="16px"
              lineHeight="24px"
              fontWeight="400"
              pl="6"
            >
              <ListItem>Plant AMC for Operation & Maintenance</ListItem>
              <ListItem>Specification and Tender Assessment</ListItem>
            </UnorderedList>
          </MtnFlx>
        </Flex>
        {/* center */}
        <Flex
          w="10%"
          pt="25px"
          px="100px"
          h="100%"
          align="center"
          justify="center"
          direction="column"
        >
          <MtnFlx
            initial={{ opacity: 0, y: -50 }}
            animate={animateHd}
            transition={{ delay: 1.5, duration: 2, type: "just" }}
            direction="column"
            align="center"
          >
            <Divider
              orientation="vertical"
              h="40px"
              border="3px solid"
              borderColor="#DFBD69"
            />
            <Box
              height="30px"
              width="30px"
              backgroundColor="#DFBD69"
              border="5px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </MtnFlx>
          <MtnFlx
            initial={{ opacity: 0, y: -100 }}
            animate={animateHd}
            transition={{ delay: 3, duration: 2, type: "just" }}
            direction="column"
            align="center"
          >
            <Divider
              orientation="vertical"
              h="180px"
              border="3px solid"
              borderColor="#DFBD69"
            />
            <Box
              height="30px"
              width="30px"
              backgroundColor="#DFBD69"
              border="5px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </MtnFlx>
          <MtnFlx
            initial={{ opacity: 0, y: -400 }}
            animate={animateHd}
            transition={{ delay: 4.5, duration: 2, type: "just" }}
            direction="column"
            align="center"
          >
            <Divider
              orientation="vertical"
              h="360px"
              border="3px solid"
              borderColor="#DFBD69"
            />
            <Box
              height="30px"
              width="30px"
              backgroundColor="#DFBD69"
              border="5px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </MtnFlx>
        </Flex>
        <Flex
          w="45%"
          h="100%"
          pt="50px"
          direction="column"
          justify="space-between"
          align="flex-start"
        >
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateHd}
            transition={{ delay: 1.5, duration: 2, type: "just" }}
            w="100%"
            direction="column"
            align="flex-start"
          >
            <Flex w="100%" align="center" justify="center">
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
              mb="7px"
            >
              LIAISONING & APPROVALS
            </Heading>
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="16px"
              lineHeight="24px"
              fontWeight="400"
              pl="6"
            >
              <ListItem>
                Liaisoning for all Govt. Approvals for Project Sanctions
              </ListItem>
            </UnorderedList>
          </MtnFlx>
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateHd}
            transition={{ delay: 3, duration: 2, type: "just" }}
            w="100%"
            direction="column"
            align="flex-start"
          >
            <Flex w="100%" align="center" justify="center">
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
              mb="7px"
            >
              FEASIBILITY STUDY
            </Heading>
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="16px"
              lineHeight="24px"
              fontWeight="400"
              pl="6"
            >
              <ListItem>Site Selection</ListItem>
              <ListItem>Resource Analysis</ListItem>
              <ListItem>Technical Review</ListItem>
              <ListItem>Environment Impact Analysis</ListItem>
              <ListItem>Identification & Selection of Technology</ListItem>
              <ListItem>Site Visits</ListItem>
              <ListItem>Detail Project Reports</ListItem>
            </UnorderedList>
          </MtnFlx>
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateHd}
            transition={{ delay: 4.5, duration: 2, type: "just" }}
            w="100%"
            direction="column"
            align="flex-start"
          >
            <Flex w="100%" align="center" justify="center">
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
              mb="7px"
            >
              PROCUREMENT & CONSTRUCTION
            </Heading>
            <UnorderedList
              fontFamily="veralaRound"
              fontSize="16px"
              lineHeight="24px"
              fontWeight="400"
              pl="6"
            >
              <ListItem>Project Design and Optimization</ListItem>
              <ListItem>
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
