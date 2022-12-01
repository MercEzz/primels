import { Flex, Text, Avatar, Stack, Box } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

const ImgCarousel = (props) => {
  const { testimonial } = props;
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Flex w="100%" h="100%">
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

        <Slider {...settings} style={{ display: "flex" }}>
          {testimonial.map((tes) => (
            <Flex
              align="flex-start"
              justify="space-between"
              flexDirection="column"
              w="100%"
              pr="1.563rem"
              py="0.313rem"
              mt="3.125rem"
              key={tes.name}
              height={"100%"}
              position="relative"
            >
              <Text fontSize="1rem" fontFamily="veralaRound">
                {tes.text}
              </Text>
              <Flex
                w="100%"
                pt="1.563rem"
                align="center"
                justify="flex-start"
                alignSelf="flex-end"
              >
                <Avatar
                  h="5rem"
                  w="5rem"
                  mr="0.625rem"
                  src={tes.avtr}
                  alt={tes.name}
                />
                <Stack spacing={-1}>
                  <Text
                    fontSize="1.125rem"
                    fontFamily="veralaRound"
                    fontWeight={400}
                  >
                    {tes.name}
                  </Text>
                  <Text
                    fontFamily="veralaRound"
                    fontWeight={400}
                    fontSize="1rem"
                    color="black"
                  >
                    {tes.title}
                  </Text>
                </Stack>
              </Flex>
            </Flex>
          ))}
        </Slider>
      </Box>
    </Flex>
  );
};

export default ImgCarousel;
