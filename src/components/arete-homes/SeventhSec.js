import { Flex, Image, Text, Box, IconButton, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const SeventhSec = () => {
  const [slider, setSlider] = useState(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    draggable: true,

    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      py="100px"
      px="25px"
    >
      <Text fontFamily="goudy" fontSize="40px" pb="25px">
        PVT. PONNERI GYMKHANA CLUB
      </Text>
      <Box
        position={"relative"}
        height={"100%"}
        width={"full"}
        overflow={"hidden"}
        pl="75px"
        pr="60px"
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
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {gymclubimgs.map((prime) => (
            <Image
              key={prime}
              w="100%"
              height="247px"
              pr="15px"
              position="relative"
              objectPosition="center"
              backgroundRepeat="no-repeat"
              objectFit="fill"
              src={prime}
            />
          ))}
        </Slider>
        <IconButton
          aria-label="left-arrow"
          variant="outline"
          borderColor="#B88746"
          borderRadius="full"
          position="absolute"
          top="50%"
          left="0"
          h="50px"
          w="50px"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => {
            slider?.slickPrev();
          }}
        >
          <AiOutlineLeft color="#B88746" size="40px" />
        </IconButton>

        <IconButton
          aria-label="right-arrow"
          borderRadius="full"
          variant="outline"
          borderColor="#B88746"
          position="absolute"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          right="0"
          top="50%"
          h="50px"
          w="50px"
          onClick={() => {
            slider?.slickNext();
          }}
        >
          <AiOutlineRight color="#B88746" size="40px" />
        </IconButton>
      </Box>
      <Button
        w="174px"
        h="51px"
        mt="25px"
        fontSize="16px"
        fontFamily="avenir"
        bgGradient="linear(to-b, #B88746 ,#DFBD69)"
        color="white"
        _hover={{
          bgGradient: "linear(to-b, #DFBD69, #B88746)",
        }}
        _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
      >
        EXPLORE MORE
      </Button>
    </Flex>
  );
};

export default SeventhSec;

const gymclubimgs = [
  "/images/sky-high/16 - Cafeteria High Res.jpg",
  "/images/sky-high/18 - Restaurant High Res.jpg",
  "/images/sky-high/20 - guest rooms.jpg",
  "/images/sky-high/22 - sauna_s.jpg",
  "/images/sky-high/PGC Banquet Hall.jpg",
  "/images/sky-high/PGC Sports Bar.jpg",
  "/images/sky-high/PGC Terrace.jpg",
  "/images/sky-high/PGC Theatre.jpg",
];
