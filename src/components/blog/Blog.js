import { Text, Flex, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import React from "react";
// images
import banner1 from "../blog imgs/construction-silhouette.jpg";
import banner2 from "../blog imgs/01.jpg";
import banner3 from "../blog imgs/gbxKKSknbsLcPco4c7DY0ZuVuLyKknpc2jQxX_2+3nG4ELLS9EqbFkW7dW+4VH9vgrzx8gzr96H8JiJgGW5cStbzqK4aTqzUsloK8ifacDydK0axPFhWiGZAVcLoHdn+XP8CQgud2V9fnNlK46S0632AgHrrCVyFnFSm3qQfx0kcJCh9NZcy0Ka_g.jpg";
import coinJar from "../blog imgs/towfiqu-barbhuiya-joqWSI9u_XM-unsplash.jpg";

const Blog = () => {
  return (
    <>
      {/* banner sec */}
      <Flex w="100%" h="100vh" pos="relative" overflow="hidden">
        <Image
          w="33%"
          h="100%"
          objectFit="cover"
          objectPosition="40%"
          src={banner1}
        />
        <Image
          w="34%"
          h="100%"
          objectFit="cover"
          objectPosition="70%"
          src={banner2}
        />
        <Image
          w="33%"
          h="100%"
          objectFit="cover"
          objectPosition="60%"
          src={banner3}
        />
        <Heading
          top="50%"
          left="50%"
          transform="translate(-50%,-50%)"
          pos="absolute"
          textAlign="center"
          fontFamily="avenir"
          fontSize="3rem"
        >
          BLOG
        </Heading>
      </Flex>
      {/* banner sec */}
      <Flex w="100%" h="100%" px="6.25rem" pt="1.563rem" gap="1.563rem">
        <Flex w="70%" h="100%">
          <Grid h="100%" templateColumns="repeat(2, 1fr)" gap="1.563rem">
            <GridItem colSpan={2}>
              <Flex w="100%" h="100%" boxShadow="dark-lg">
                <Flex w="100%" h="100%">
                  <Image
                    w="100%"
                    h="29.25rem"
                    objectFit="cover"
                    objectPosition="80%"
                    src={coinJar}
                  />
                </Flex>
                <Flex w="100%" h="100%" align="center" jsutify="center">
                  <Text fontFamily="goudy" fontSize="1.5rem">
                    Why investing in residential property, a must for better
                    future?
                  </Text>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
        <Flex w="30%" h="100%">
          form
        </Flex>
      </Flex>
    </>
  );
};

export default Blog;
