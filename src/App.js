import { Flex, Text } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeSc from "./components/HomeSc";

function App() {
  return (
    <>
      <Header />
      <Flex
        as="main"
        direction="column"
        w="100%"
        minH="xl"
        bgColor="white"
        color="black"
      >
        <HomeSc />
      </Flex>
      <Footer />
    </>
  );
}

export default App;
