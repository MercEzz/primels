import { Button, Flex, Heading, Text, Divider, Box } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const MtnHead = motion(Heading);
const MtnTxt = motion(Text);
const MtnFlx = motion(Flex);
const MtnBtn = motion(Button);

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateHead = useAnimation();
  const animateLeft = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateHead.start({
        opacity: 1,
        y: 0,
      });
      animateLeft.start({
        opacity: 1,
        x: 0,
      });
    }
  }, [isInView, animateHead, animateLeft]);

  return (
    <Flex
      ref={ref}
      justify="center"
      w="100%"
      h="100%"
      align="center"
      bgColor="gray.900"
      color="white"
      pt="100px"
      direction="column"
    >
      <Flex w="100%" direction="column" px="100px" align="center">
        <MtnHead
          initial={{ y: -50, opacity: 0 }}
          animate={animateHead}
          transition={{ duration: 2, type: "just" }}
          fontFamily="goudy"
          fontWeight="400"
          fontSize="40px"
        >
          ABOUT US
        </MtnHead>
        <Flex w="100%" align="center" direction="column">
          <MtnHead
            initial={{ opacity: 0 }}
            animate={animateHead}
            transition={{ duration: 2, type: "just" }}
            pt="25px"
            pb="2"
            fontSize="34px"
            fontFamily="avenir"
          >
            BRIGHT IDEAS-SMART SOLUTIONS
          </MtnHead>
          <MtnTxt
            initial={{ opacity: 0 }}
            animate={animateHead}
            transition={{ delay: 1.5, duration: 2, type: "just" }}
            pt="15px"
            fontSize="16px"
            fontFamily="veralaRound"
          >
            Prime LifeSpace is a brand built on trust, transparency & quality in
            real estate industry. It has established its credentials in
            development of residential integrated townships & consulting
            services. Both these segments are equally important to us. Prime
            LifeSpace group luxuriates the highest brand esteem in Mumbai &
            Chennai for its fusion of luxuries & affordability in the projects
            of exceptional quality with a passion for delivering finest homes.
          </MtnTxt>
          <MtnTxt
            initial={{ opacity: 0 }}
            animate={animateHead}
            transition={{ delay: 3, duration: 2, type: "just" }}
            pt="15px"
            fontSize="16px"
            fontFamily="veralaRound"
          >
            Prime LifeSpace consultancy firm offers an end-to-end solution in
            the Real Estate Space. The team has excelled in providing deep
            expertise to biggest corporates like Blackstone for Chandigarh
            Elante Mall, L&T for Seawood Project, Sunteck for Naigaon Project
            etc. Also, structured various eminent Joint Ventures, Mergers like
            L&T GeoTech with Sharaf Foundation.
          </MtnTxt>
          <MtnTxt
            initial={{ opacity: 0 }}
            animate={animateHead}
            transition={{ delay: 4.5, duration: 2, type: "just" }}
            pt="15px"
            fontSize="16px"
            fontFamily="veralaRound"
          >
            Prime LifeSpace developers are renowned creators of smart integrated
            townships that provide more than just spaces to live in. The
            townships resemble improvement in quality of living, empowerment of
            communities and valuable experience of lifetime. Our properties are
            now fetching highest rental returns in the country. An investment
            choice for right value of money for the investors.
          </MtnTxt>
        </Flex>
        <Flex w="100%" pt="15px">
          <Flex direction="column" w="25%">
            <MtnFlx
              initial={{ opacity: 0, x: -100 }}
              animate={animateLeft}
              transition={{ delay: 6, duration: 2, type: "just" }}
              align="center"
            >
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="30px"
                width="85px"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </MtnFlx>
            <MtnFlx
              initial={{ opacity: 0, x: -100 }}
              animate={animateLeft}
              transition={{ delay: 6, duration: 2, type: "just" }}
              direction="column"
              pt="15px"
            >
              <Heading fontSize="34px" fontFamily="avenir">
                30+ years
              </Heading>
              <MtnFlx
                initial={{ opacity: 0, x: -100 }}
                animate={animateLeft}
                transition={{ delay: 7.5, duration: 2, type: "just" }}
                fontSize="18px"
                fontFamily="veralaRound"
              >
                Of Building Trust
              </MtnFlx>
            </MtnFlx>
          </Flex>
          <Flex direction="column" w="50%">
            <MtnFlx
              initial={{ opacity: 0, x: -100 }}
              animate={animateLeft}
              transition={{ delay: 9, duration: 2, type: "just" }}
              align="center"
            >
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="30px"
                width="55px"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </MtnFlx>
            <Flex direction="column" pt="15px" w="100%" align="center">
              <Flex direction="column" align="flex-start">
                <MtnHead
                  initial={{ opacity: 0, x: -100 }}
                  animate={animateLeft}
                  transition={{ delay: 9, duration: 2, type: "just" }}
                  fontSize="34px"
                  fontFamily="avenir"
                  textAlign="left"
                >
                  approx. 1 Million sqft.{" "}
                </MtnHead>
                <MtnTxt
                  initial={{ opacity: 0, x: -100 }}
                  animate={animateLeft}
                  transition={{ delay: 10.5, duration: 2, type: "just" }}
                  fontSize="18px"
                  textAlign="left"
                  fontFamily="veralaRound"
                >
                  Development
                </MtnTxt>
              </Flex>
            </Flex>
          </Flex>
          <Flex direction="column" w="25%">
            <MtnFlx
              initial={{ opacity: 0, x: -100 }}
              animate={animateLeft}
              transition={{ delay: 12, duration: 2, type: "just" }}
              align="center"
            >
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="30px"
                width="65px"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </MtnFlx>
            <Flex direction="column" pt="15px">
              <MtnHead
                initial={{ opacity: 0, x: -100 }}
                animate={animateLeft}
                transition={{ delay: 12, duration: 2, type: "just" }}
                fontSize="34px"
                fontFamily="avenir"
              >
                100+
              </MtnHead>
              <MtnTxt
                initial={{ opacity: 0, x: -100 }}
                animate={animateLeft}
                transition={{ delay: 13.5, duration: 2, type: "just" }}
                fontSize="18px"
                fontFamily="veralaRound"
              >
                Happy Consultancy Clients
              </MtnTxt>
            </Flex>
          </Flex>
        </Flex>
        <MtnBtn
          initial={{ opacity: 0, y: 50 }}
          animate={animateHead}
          transition={{ delay: 14, duration: 2, type: "just" }}
          mt="25px"
          mb="50px"
          w="146px"
          p="16px"
          h="51px"
          fontFamily="avenir"
          bgGradient="linear(to-b, #B88746 ,#DFBD69)"
          color="white"
          fontSize="16px"
          textTransform="uppercase"
          _hover={{
            bgGradient: "linear(to-b, #DFBD69, #B88746)",
          }}
        >
          Know More
        </MtnBtn>
      </Flex>
    </Flex>
  );
};

export default AboutUs;
