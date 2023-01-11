import { Box, Center, Divider, Flex, Heading, Icon,IconButton,Image, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import client1 from "./rajeev2.jpeg"
import client2 from "./punit-chopraa.jpg"
import { useInView } from "framer-motion";

const client = [
    { id: 1, img: client1, clientName:"Board of Directors of Larsen & Tourbo and Infosys", },
    { id: 2, img: client2, clientName:"Board of Directors of Larsen & Tourbo and Carnival", },
];

const logos = [
    "/images/alliances.png",
    "/images/alliances2.png",
    "/images/alliances3.png",
    "/images/alliances4.png",
    "/images/alliances.png",
    "/images/alliances2.png",
    "/images/alliances3.png",
    "/images/alliances4.png",
  ];
  
const LogoSlider = () => {
    const settings = {
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      pauseOnHover: false,
    };
  
    return (
      <Box
        position={"relative"}
        height={"full"}
        width={"full"}
        overflow={"hidden"}
      >
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
  
        <Slider {...settings}>
          {logos.map((icon) => (
            <Flex
              align="flex-start"
              justify="space-between"
              flexDirection="column"
              w="100%"
              key={icon}
              height={"100%"}
              position="relative"
            >
              <Image src={icon} />
            </Flex>
          ))}
        </Slider>
      </Box>
    );
  };

const Ourclients =()=>{
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [slider, setSlider] = useState(null);
  let [currentSlide, setCurrentSlide] = useState(1);
  const settings = {
    draggable: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => {
      setCurrentSlide(currentSlide++);
    },
  };
    return (<>
        <Flex w="100%" ref={ref} direction="column" h="100%"overflow="hidden"  px="100px" mb="5rem">
        <Center pb="3.125rem" className="slidein-top revealOnce" fontFamily="avenir" fontSize="2.5rem">OUR CLIENTS</Center>
        <Flex w="100%">
        <Box
        position={"relative"}
        overflow={"hidden"}
        w="50%"
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
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {client.map((prime) => (
            <Flex
              w="100%"
             key={prime.id}
            direction="column"
            align="center"
            justify="center">
            <Image
              w="100%"
              height="26.875rem"
              px="0.625rem"
              position="relative"
              objectPosition="center"
              backgroundRepeat="no-repeat"
              objectFit="cover"
              src={prime.img}
            />
            <Heading
                  textAlign="center"
                  fontFamily="avenir"
                  fontSize="1.5rem"
                  py="1.563rem"
                >
                {prime.clientName}
              </Heading>
            </Flex>
          ))}
        </Slider>
      </Box>
      <Flex
            className="slidein-top reveal"
            transition="all 2s 2s"
            direction="column"
            align="center"
            px="1.562rem"
          >
            <Divider
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
              h="5.50rem"
            />{" "}
            <Box
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
            />
          </Flex>
            <Flex direction="column" w="50%">
            <Heading fontFamily="avenir" pb="1rem" fontSize="1.5rem" className="fadein-2sdelay revealOnce">“With our mantra : Analyze, Identify, Advise, Execute, we thrive on sharing the knowledge to help you make a success story”</Heading>
            <Text fontFamily="varela round" fontSize="1rem" className="fadein-2sdelay revealOnce">A Civil Engineer and MBA with over 30 Years of 
            The team has excelled in providing deep expertise to biggest corporates like Blackstone for Chandigarh Elante Mall, Larsen & Toubro for Seawood Project, Sunteck for Naigaon Project etc. Also, the group has structured various eminent Joint Ventures, Mergers like L&T Ge Tech with Sharaf Foundation.
            </Text>
            </Flex>
        </Flex>
            <LogoSlider />
        </Flex>
    </>); 
}
export default Ourclients;
  