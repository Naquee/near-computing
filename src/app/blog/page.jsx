import { Box,Text } from "@chakra-ui/react";
import React from "react";
import hsc1 from "../../assets/hsc1.jpg"
import Image from "next/image";

const Blog = ({children}) => {
    return (
        <>
        <Box>
            <Text>Blog</Text>
             <Box
      backgroundImage={`url(${hsc1})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      height="500px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      fontSize="2xl"
    >
      {children}
    </Box>
            {/* <Image src={hsc1} alt="Near Computing"/> */}
        </Box>
        </>
    )
}
export default Blog