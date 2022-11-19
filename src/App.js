import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Flex, Text } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeSc from "./screens/HomeSc";
import CareersSc from "./screens/CareersSc";
import Contact from "./screens/Contact";
import EnergySc from "./screens/EnergySc";
import ChannelPartner from "./screens/ChannelPartner";
import SkyHighSc from "./screens/SkyHighSc";
import NewsMediaSc from "./screens/NewsMediaSc";
import AreteHomes from "./screens/AreteHomes";
import ReferAndEarn from "./screens/ReferAndEarn";
import CommercialProperties from "./screens/CommercialProperties";
import ServicedApartSc from "./screens/ServicedApartSc";
import BlogSc from "./screens/BlogSc";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Flex
        as="main"
        direction="column"
        w="100%"
        minH="xl"
        bgColor="white"
        color="black"
        overflowX="hidden"
        align="center"
        justify="center"
      >
        <Routes>
          <Route path="/" element={<HomeSc />} />
          <Route path="/careers" element={<CareersSc />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/energy-get-in-touch-with-us" element={<EnergySc />} />
          <Route path="/channel-partner" element={<ChannelPartner />} />
          <Route path="/sky-high" element={<SkyHighSc />} />
          <Route path="/arete-homes" element={<AreteHomes />} />
          <Route path="/news-and-media" element={<NewsMediaSc />} />
          <Route path="/refer-and-earn" element={<ReferAndEarn />} />
          <Route
            path="/commercial-properties"
            element={<CommercialProperties />}
          />
          <Route path="/serviced-apartments" element={<ServicedApartSc />} />
          <Route path="/blog" element={<BlogSc />} />
        </Routes>
      </Flex>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
