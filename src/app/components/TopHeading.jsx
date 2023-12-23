import { Center, Heading, keyframes } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const TopHeading = ({ headings }) => {
  const animationKeyframes = keyframes`
  10% { transform: scale(2); }
  100% { transform: scale(1); }`;

  const animation = `${animationKeyframes} 1.5s ease-in-out 1`;
  return (
    <motion.div
      // animate={{ x: 10,y:10 }}
      animate={animation}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <Center
        width={{ base: "95%", md: "100%" }}
        m="auto"
        p="1rem"
        bg="#5b5bbf"
        color="#ffffff"
        shadow="md"
        rounded="lg"
      >
        <Heading size={{ base: "md", md: "xl" }} letterSpacing="1px">
          {headings}
        </Heading>
      </Center>
    </motion.div>
  );
};

export default TopHeading;
