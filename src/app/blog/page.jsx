"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import hsc1 from "../../assets/blogBg.jpg";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Counter from "../components/Counter";
import Navbar from "../components/Navbar";
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
      <Box
        zIndex="-100"
        position="fixed"
        width="100%"
        height="100vh"
        // backgroundAttachment="fixed"
        // backgroundPosition="center"
        // backgroundRepeat="no-repeat"
        // backgroundSize="cover"
        // border="1px solid red"
        mt="7rem"
      >
        <Image
          src={hsc1}
          alt="Near Computing"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      {/* <Heading textAlign="center" color="white">
        {text}
      </Heading> */}
      <Counter duration={4 * 24 * 60 * 60 * 1000} />
    </>
  );
};
export default Blog;
