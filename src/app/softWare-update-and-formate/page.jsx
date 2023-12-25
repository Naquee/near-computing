"use client";
import Paragraph from "@/app/components/Paragraph";
import Subheading from "@/app/components/Subheading";
import TopHeading from "@/app/components/TopHeading";
import {
  Box,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import software from "../../assets/repair-service/softwareUpdate.jpg";

import Footer from "@/app/components/Footer";
const parag =
  "At Near Computing, we recognize the significance of keeping your devices updated and operating at their best. Our Software Update and Format services are designed to enhance the performance, security, and longevity of your devices.";

let softwareupdate = [
  {
    head: "Our Services",
    title:
      "Ensure your devices are equipped with the latest software versions, maximizing functionality and security. Our services encompass.",
  },
  {
    head: "Operating System Updates:",
    title:
      "Stay ahead with the newest operating system features, security patches, and performance improvements.",
  },
  {
    head: "Application Updates:",
    title:
      " Keep your essential software up-to-date, ensuring compatibility and efficiency.",
  },

  {
    head: "Firmware Updates:",
    title: "Update device firmware for stability and enhanced performance.",
  },
  {
    head: "Operating System Reinstallation",
    title:
      "Resolve system issues and optimize performance by reinstalling the operating system.",
  },
  {
    head: "Device Optimization:",
    title:
      "Configure settings and applications for peak performance and personalized user experience.",
  },
];

const SoftWareUpdate = () => {
  return (
    <Box mt="4rem">
      <TopHeading headings="SoftWare Update and Formate" />
      <Box width={{ base: "100%", md: "70%" }} m="auto">
        <Subheading subheading="Welcome to Near Computing – Empowering Your Devices with Optimized Software and Fresh Starts" />
        <Flex justifyContent="center">
          <Paragraph width={{ base: "95%", md: "90%" }} para={parag} />
        </Flex>

        <TopHeading headings="Our Services:" />
        <Image src={software} alt="laptop" width="full" />
        {/* <img src={""} alt="" /> */}

        {softwareupdate.map((item, index) => {
          return (
            <Box key={index} p="1rem">
              <Heading p="0.25rem" as="h4" size="md">
                {item?.head}
              </Heading>
              <Text fontSize="18px">{item?.title}</Text>
            </Box>
          );
        })}
      </Box>
      <Box p="1rem" w={{ base: "100%", md: "70%" }} m="auto">
        <Heading p="0.25rem" as="h4" size="md" textDecoration="underline">
          Why Choose us
        </Heading>
        <UnorderedList
          color="gray.600"
          mt="1rem"
          fontWeight="400"
          fontSize="20px"
        >
          <ListItem>
            {" "}
            <strong>Expert Technicians:</strong>Our skilled technicians are
            proficient in software updates, formatting, and device optimization
            across various platforms and devices.
          </ListItem>
          <ListItem>
            {" "}
            <strong>Personalized Approach:</strong>We understand that each
            device is unique. Our services are tailored to meet your specific
            requirements.
          </ListItem>
          <ListItem>
            {" "}
            <strong>Thorough Processes:</strong>We ensure meticulous attention
            to detail during updates and formatting, ensuring a seamless
            experience.
          </ListItem>
          <ListItem>
            {" "}
            <strong>Continued Support:</strong> e provide post-service support
            and guidance to ensure your devices maintain peak performance.
          </ListItem>
        </UnorderedList>
      </Box>
      <Footer />
    </Box>
  );
};

export default SoftWareUpdate;
