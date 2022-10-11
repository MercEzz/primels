import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Flex, Text } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeSc from "./screens/HomeSc";
import CareersSc from "./screens/CareersSc";
import Contact from "./screens/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Flex
        pt="85px"
        as="main"
        direction="column"
        w="100%"
        minH="xl"
        bgColor="white"
        color="black"
      >
        <Routes>
          <Route path="/" element={<HomeSc />} />
          <Route path="careers" element={<CareersSc />} />
          <Route path="contact-us" element={<Contact />} />
        </Routes>
      </Flex>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
