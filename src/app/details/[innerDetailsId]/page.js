"use client";
import Footer from "@/app/components/Footer";
import TopHeading from "@/app/components/TopHeading";
import { rent } from "@/app/services/api";
import { Box, Card, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useMemo } from "react";

const InnerDetails = () => {
  const { innerDetailsId } = useParams();

  console.log("InnerId", innerDetailsId);

  const [innterDetails] = useMemo(
    () => rent.filter((innerElm) => innerElm.id === Number(innerDetailsId)),
    [innerDetailsId]
  );

  console.log("innterDetails", innterDetails);
  return (
    <Box mt="6rem">
      <Box mt="6rem" w="80%" m="auto">
        <TopHeading headings={innterDetails.name} />
        <Flex mt="1rem" justifyContent="center">
          <Image
            src={innterDetails?.ImageUrl}
            alt={innterDetails?.id}
            objectFit={"cover"}
            //   w={{ base: "100%", md: "60%" }}
          />
        </Flex>
        <Box mt="1rem">
          <Card
            p="1rem"
            bg="whitesmoke"
            w={{ base: "100%", md: "80%" }}
            m="auto"
          >
            <Text fontSize={{base:"20px" ,md:"25px"}} fontWeight="800">
              {innterDetails?.heading1}
            </Text>
          </Card>

          <Box
            mt="1rem"
            color="GrayText"
            dangerouslySetInnerHTML={{ __html: innterDetails?.description1 }}
          ></Box>
        </Box>
        <Box mt="1rem">
        <Card
            p="1rem"
            bg="whitesmoke"
            w={{ base: "100%", md: "80%" }}
            m="auto"
          >
          <Text fontSize={{base:"20px" ,md:"25px"}} fontWeight="800">{innterDetails?.heading2}</Text>
          </Card>
          <Box
          color="GrayText"
            dangerouslySetInnerHTML={{ __html: innterDetails?.description2 }}
          ></Box>
        </Box>
      </Box>
      <Footer/>

   
    </Box>
  );
};

export default InnerDetails;
