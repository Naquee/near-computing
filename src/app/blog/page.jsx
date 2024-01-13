"use client";
import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import hsc1 from "../../assets/blogBg.jpg";
import hsc11 from "../../assets/hsc11.jpg";
import pc1 from "../../assets/pc1.jpg";
import pc2 from "../../assets/pc2.jpg";
import dataRecovery from "../../assets/repair-service/data-recovery.jpg";
import softwareUpdate from "../../assets/repair-service/softwareUpdate.jpg";

import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Counter from "../components/Counter";
import Navbar from "../components/Navbar";
import TopHeading from "../components/TopHeading";
import Footer from "../components/Footer";
const Blog = () => {
  const [text] = useTypewriter({
    words: ["Please", "Wait", "a", "Blog"],
    loop: {},
    typeSpeed: 200,
    delaySpeed: 40,
  });
  return (
    <>
      <Navbar />
      {/* <Box
        zIndex="-100"
        position="fixed"
        width="100%"
        height="70vh"
        mt="7rem"
      >
        <Image
          src={hsc1}
          alt="Near Computing"
          layout="fill"
          objectFit="cover"
        />
      </Box> */}
      {/* <Heading textAlign="center" color="white">
        {text}
      </Heading> */}
      {/* <Counter duration={4 * 24 * 60 * 60 * 1000} /> */}
      <Box m="auto" mt={["5rem","7rem"]} width={["100%", "90%"]}>
        <HStack width={["100%", "65%"]} m="auto">
          <TopHeading headings="Welcome to Near Computing: Redefining Tech with Refurbished Excellence" />
        </HStack>
        <Text
          width={["95%", "65%"]}
          m="auto"
          mt="1rem"
          fontWeight="400"
          color="gray.600"
          fontStyle="italic"
        >
          At Near Computing, we believe in the power of technology to transform
          lives. We've made it our mission to bring you high-quality, reliable,
          and affordable computing solutions through our extensive collection of
          refurbished laptops, desktops, and monitors. Embrace a new era of
          sustainable tech with us, where cutting-edge performance meets
          responsible consumption.
        </Text>
        <SimpleGrid mt={["1rem", "2rem"]} columns={[2, null, 3]} spacing="40px">
          <Box>
            <Image src={hsc11} alt="Near Computing" />
          </Box>
          <Box>
            <Image src={hsc1} alt="Near Computing" />
          </Box>
          <Box>
            <Image src={pc1} alt="Near Computing" />
          </Box>
          <Box>
            <Image src={pc2} alt="Near Computing" />
          </Box>
          <Box>
            <Image src={dataRecovery} alt="Near Computing" />
          </Box>
          <Box>
            <Image src={softwareUpdate} alt="Near Computing" />
          </Box>
          <Box>
            <Image src={hsc11} alt="Near Computing" />
          </Box>
          <Box>
            <Image src={hsc11} alt="Near Computing" />
          </Box>
          <Box>
            <Image src={hsc11} alt="Near Computing" />
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  );
};
export default Blog;
