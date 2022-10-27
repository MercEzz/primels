import { Box, Flex, Image, Divider, Heading, Text } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const MtnImg = motion(Image);
const MtnFlx = motion(Flex);
const MtnTxt = motion(Text);
const MtnHd = motion(Heading);

const PLSGreen = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animateImg = useAnimation();
  const animateFlx = useAnimation();
  const animateHd = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateImg.start({ opacity: 1, x: 0 });
      animateFlx.start({ opacity: 1, y: 0 });
      animateHd.start({ opacity: 1 });
    }
  }, [isInView, animateImg, animateFlx, animateHd]);

  return (
    <>
      <Flex
        ref={ref}
        w="100%"
        h="100%"
        direction="column"
        px="100px"
        py="100px"
        pos="relative"
        bgColor="white"
        zIndex="10"
      >
        <MtnHd
          initial={{ opacity: 0 }}
          animate={animateHd}
          transition={{ duration: 2, type: "just" }}
          pb="25px"
          fontFamily="goudy"
          fontWeight="400"
          fontSize="40px"
          lineHeight="58px"
          textAlign="center"
        >
          PLS GREEN POWER PVT LTD
        </MtnHd>
        <MtnTxt
          initial={{ opacity: 0 }}
          animate={animateHd}
          transition={{ duration: 2, type: "just" }}
          pb="15px"
          fontFamily="veralaRound"
          fontSize="16px"
          lineHeight="24px"
        >
          We provide solutions in the power sector including conventional and
          non conventional energy sector. We are committed for more than 2
          decades to provide technically best and cost effective solutions to
          our esteemed customers. We are enriched with the experience of
          configuring and devising plant preventive maintenance.
        </MtnTxt>
        <MtnTxt
          initial={{ opacity: 0 }}
          animate={animateHd}
          transition={{ duration: 2, type: "just" }}
          fontFamily="veralaRound"
          fontSize="16px"
          lineHeight="24px"
        >
          Establishing IMS System for major power sector including ISO 9001,
          14001, 18001, ISO 17025 for laboratory Accreditation & safety norms.
          We also have our expertise in customization & development of ABT
          systems for operation of the plant in ABT regime and reduction in
          penalties like UI charges etc.
        </MtnTxt>
      </Flex>
      <Flex
        ref={ref}
        w="100%"
        h="100vh"
        bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
        pos="relative"
        align="center"
        justify="center"
      >
        <Flex w="100%" h="100%" pos="absolute" direction="column" left="0">
          <MtnImg
            boxShadow="dark-lg"
            initial={{ opacity: 1, x: 400 }}
            // animate={animateImg}
            transition={{ duration: 2, type: "just" }}
            src="/images/energy/ourPro1.jpeg"
            objectSize="cover"
            h="70%"
            w="60%"
          />
          <MtnImg
            boxShadow="dark-lg"
            initial={{ opacity: 0 }}
            animate={animateImg}
            transition={{ delay: 1.5, duration: 2, type: "just" }}
            src="/images/energy/ourPro2.jpeg"
            h="66%"
            w="60%"
            pos="absolute"
            left="18%"
            bottom="0"
          />{" "}
          <Flex w="100%" h="100%" pos="absolute" right="10%" justify="flex-end">
            <MtnFlx
              h="100%"
              px="12"
              initial={{ opacity: 1, y: -100 }}
              // animate={animateFlx}
              transition={{ duration: 2, type: "just" }}
              direction="column"
              align="center"
            >
              <Divider
                orientation="vertical"
                h="10%"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="30px"
                width="30px"
                backgroundColor="#DFBD69"
                border="4px solid rgba(255, 255, 255, .7)"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="0.5"
                // _hover={{
                //   width: "25px",
                //   height: "25px",
                // }}
                // transition="all .5s"
              />
            </MtnFlx>
            <MtnFlx
              h="100%"
              initial={{ opacity: 1, x: -200 }}
              // animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, type: "just" }}
              direction="column"
              pt="5%"
              zIndex="10"
            >
              <Heading
                fontFamily="goudy"
                fontSize="40px"
                lineHeight="58px"
                fontWeight="400"
                pb="15px"
              >
                OUR PROJECT
              </Heading>
              <Text
                fontFamily="veralaRound"
                fontSize="16px"
                lineHeight="24px"
                mr="6"
              >
                Execution of a solar power plant of 5 <br />
                MegaWatt at Telangana, Mothkur <br />
                Village, Nalagonda.
              </Text>
            </MtnFlx>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default PLSGreen;
