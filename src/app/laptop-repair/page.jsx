"use client";
import Paragraph from "@/app/components/Paragraph";
import Subheading from "@/app/components/Subheading";
import TopHeading from "@/app/components/TopHeading";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import laptop from "../../assets/repair-service/laptop-repair.jpg";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
const parag =
  "At our laptop service center, we understand the importance of your laptop in your daily life, whether it's for work, study, or entertainment. Our team of highly skilled technicians is dedicated to providing top-notch laptop services to keep your device running smoothly.";

let lapiservice = [
  {
    head: "Diagnostic Services",
    title:
      "can identify and address any hardware or software issues your laptop may be experiencing",
  },
  {
    head: "Hardware Repairs:",
    title:
      "From a malfunctioning keyboard to a faulty power supply, our technicians are experienced in repairing a wide range of hardware issues. We use high-quality replacement parts to ensure the longevity of your laptop.",
  },
  {
    head: "Software Troubleshooting:",
    title:
      "Slow performance, software crashes, or virus infections? Our experts can efficiently troubleshoot and resolve any software-related problems, ensuring your laptop operates at its best.",
  },

  {
    head: "Upgrades:",
    title:
      "Keep your laptop up-to-date and enhance its performance with our upgrade services. Whether it's upgrading your RAM, hard drive, or installing the latest software, we've got you covered.",
  },
  {
    head: "Data Recovery:",
    title:
      "Accidentally deleted important files or experiencing data loss? Our data recovery specialists can help retrieve your valuable data, ensuring you don't lose precious memories or critical work files.",
  },
  {
    head: "Screen Replacement:",
    title:
      "Cracked or malfunctioning display? Our technicians can replace your laptop screen with precision, using high-quality replacement parts to restore vibrant and clear visuals.",
  },

  {
    head: "Virus and Malware Removal:",
    title:
      "Is your laptop infected with viruses or malware? Our thorough virus and malware removal services will clean your system and implement security measures to prevent future infections.",
  },
];

const MobileReapir = () => {
  return (
    <>
      <Navbar />
      <Box mt={["5rem","8rem"]}>
        <Seo
          title="Laptop repair"
          description="Welcome to our Near Computing ,we are provoide repair service like laptop reapair , mobile repair, monitor repair, pc repair "
        />
        <TopHeading headings="Laptop Repair Services" />
        <Box width={{ base: "100%", md: "80%" }} m="auto">
          <Subheading subheading="Welcome to Our Expert Laptop Service Center!" />
          <Flex justifyContent="center">
            <Paragraph width={{ base: "95%", md: "90%" }} para={parag} />
          </Flex>

          <TopHeading headings="Our Services:" />
          <Image
            src={laptop}
            alt="Near Computing"
            width="100%"
            style={{ objectFit: "cover" }}
          />

          {lapiservice.map((item, index) => {
            return (
              <Box key={index} p="1rem">
                <Heading p="0.25rem" as="h4" size="md">
                  {item.head}
                </Heading>
                <Text fontSize="18px">{item.title}</Text>
              </Box>
            );
          })}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default MobileReapir;
