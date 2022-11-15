import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
//import { useInView } from "framer-motion";
import { useInView } from "react-intersection-observer";
const LastSec = () => {
  const [slider, setSlider] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "50px",
  });
  //const ref = useRef(null);
  //const isInView = useInView(ref, { once: true });

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      px="100px"
      pt="50px"
      pb="50px"
      direction="column"
      align="center"
      justify="center"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
    >
      <Text
        transform={inView ? "none" : "translateY(-50px)"}
        opacity={inView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="40px"
        textAlign="center"
        mb="50px"
      >
        200+ HAPPY FAMILIES & COUNTING...
      </Text>
      <Box
        transform={inView ? "none" : "translateX(100px)"}
        opacity={inView ? "1" : "0"}
        transition="all 2s 2s"
        position={"relative"}
        height={"100%"}
        width={"100%"}
        overflow={"hidden"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Slider */}{" "}
        <Icon
          pos="absolute"
          left="-1%"
          top="0"
          w="70px"
          h="50px"
          as={ImQuotesLeft}
          color="#DFBD69"
        />
        <Icon
          mr="4"
          color="#DFBD69"
          pos="absolute"
          right="0"
          bottom="25%"
          zIndex="10"
          w="70px"
          h="50px"
          as={ImQuotesRight}
        />
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {testimonial.map((prime) => (
            <Flex w="100%" direction="row">
              <Flex w="100%" pos="relative">
                <Flex
                  direction="column"
                  w="100%"
                  fontFamily="veralaRound"
                  mt="50px"
                >
                  <Text fontSize="16px">{prime.text}</Text>
                  <Text fontSize="20px">{prime.title}</Text>
                  <Text fontSize="20px">{prime.subTitle}</Text>
                </Flex>
              </Flex>
              <Flex w="100%" h="100%">
                Video
              </Flex>
            </Flex>
          ))}
        </Slider>
      </Box>
    </Flex>
  );
};

export default LastSec;

const testimonial = [
  {
    text: "A wonderful project and well-designed especially for sports lovers, Arete homes covers the need of all type of people from Childers to adults also old age people, It fulfilled all requirements of a common man, Fantastically designed & developed sport arena, security, parking facilities, power backup enough space between each blocks, drainage & treatment system, entertainment zones, meditation center, groceries, fitness gym, etc. Excellent club house facilities for great relaxation. Overall Arete homes give us a PEACE OF MIND.",
    title: "MR. SADAGOPAN SATHISH ",
    subTitle: "TOWER a5-808",
  },
  {
    text: "We own a 2BHK lifestyle apartment at Arete homes, a luxury project by Prime Lifespace at Ponneri. The apartment worth every penny and the construction quality is very good. The through bred professional marketing team of Arete homes was very helpful in not only securing home loan but also assisting us throughout the home buying till the end. The ethical work of Arete homes that timely delivery has impressed us immensely. I will surely recommend prospective home buyer to buy homes at Arete homes.",
    title: "MR. MOHAMMED ASATHULLAH",
    subTitle: "TOWER a3-608",
  },
  {
    text: "I feel happy to be a part of Arete Homes. The best project in a beautiful environment but still at an affordable rate in north Chennai. I appreciate the team Arete for their wonderful work very professional proficient and easy to approach.",
    title: "MR. BINDU DILIP ",
    subTitle: "TOWER a5-702",
  },
  {
    text: "We visited the Arete Township and are very much impressed by the development implemented to make living a great experience. the dren planned on top of parking. Spaces for conducting functions and above all a unique meditation hall.",
    title: "MR. NILAKANTAN  ",
    subTitle: "TOWER a3-407 & 408",
  },
  {
    text: "I have been associated with this locality from my childhood, and I must say that I am really elated to see this area develop. This is the 1st township of Ponneri and the quality of the project beyond excellence, combined this with the upcoming future developments this is the best investment destination of Chennai. The customer service provided by the Arete team is warm and welcoming. Really can’t wait to start living here!",
    title: "MR. THIYAGARAJAN ",
    subTitle: "TOWER a3-107",
  },
  {
    text: "We just want to take a moment to express how delighted we are to own at Arete Homes in Ponneri. The apartment is custom designed to meet our needs and lifestyle. And Arete Homes succeeded admirable in meeting that goal. What impressed us is their flexibility in making changes to our plans and were always courteous when we made requests. The finish and workmanship of the construction are very good. Thank you, Mr. Suresh Kumar and Arete Homes.",
    title: "MR. G.KANNAN",
    subTitle: "TOWER a4-105",
  },
  {
    text: "I am glad and proud to be the part of one of the finest project - ARETE HOMES from Prime Lifespace. Finding a home that meets the expectation of all the family was never been possible and my struggle just ended fine once we visited Arete homes. The strategic location, transparency & prompt response from the builder at various stages, quality of construction and accessories used are the key highlights of Arete homes. I am very much happy and satisfied that I invested in Arete Homes",
    title: "MR. MADHAN.K",
    subTitle: "TOWER a4-207",
  },
  {
    text: "I am really satisfied that I have purchased an apartment in this area. The general mindset that north Chennai is not a good investment is false as this area is seeing Huge development and Arete Homes is at the center of all these developments. There is excellent connectivity in terms of NH -5. I am sure once this project is completed it will be landmark for ponneri & wIll stand tall with pride!",
    title: "MR. BINDU DILIP ",
    subTitle: "TOWER a5-702",
  },
  {
    text: "The builder team and staff members are very professional, Willing to help and Assist in every detail. My experience with Arete Homes has been excellent and professionalism they exhibit made the home buying journey pleasant in all aspects of the process, from BEGINNING To END. Special Kudos to and pleasant in every step of Home purchase.",
    title: "MR. SANJITH RAJU",
    subTitle: "",
  },
  {
    text: "I have purchased a flat in Ponneri at Arete Homes. It is my first home and happy to join with Integrate Smart township. I feel it is an excellent investment opportunity and a well designed project with all best facilities. I trust arete homes team as they are ones who care about the customers first. I am very happy.",
    title: "MR. D NARESH",
    subTitle: "",
  },
];
