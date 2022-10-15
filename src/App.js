import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Flex, Text } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeSc from "./screens/HomeSc";
import CareersSc from "./screens/CareersSc";
import Contact from "./screens/Contact";
import EnergySc from "./screens/EnergySc";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Flex
        mt="100px"
        as="main"
        direction="column"
        w="100%"
        minH="xl"
        bgColor="white"
        color="black"
        overflowX="hidden"
      >
        <Routes>
          <Route path="/" element={<HomeSc />} />
          <Route path="/careers" element={<CareersSc />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/energy-get-in-touch-with-us" element={<EnergySc />} />
        </Routes>
      </Flex>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
