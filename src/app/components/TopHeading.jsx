import { Center, Heading, keyframes,Divider } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { COLORS } from "@/constants/colors";

const TopHeading = ({ headings,color }) => {
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
        color={COLORS.Navi || color}
      >
        <Heading size={{ base: "md", md: "xl" }} letterSpacing="1px">
          {headings}
        </Heading>
      </Center>
      <Divider p={["0","1rem"]}/>
    </motion.div>
  );
};

export default TopHeading;
