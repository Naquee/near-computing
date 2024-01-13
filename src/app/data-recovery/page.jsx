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
import dataRecovery from "../../assets/repair-service/data-recovery.jpg"
import Footer from "@/app/components/Footer";
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
const parag =
  "Losing valuable data can be catastrophic. Whether it's personal memories or crucial business information, accidental deletion, hardware failure, or system crashes can lead to significant distress.We are understand the importance of your data and specialize in professional, reliable data recovery services tailored to meet your needs.";

let datarecovery = [
  {
    head: "Our Services",
    title:
      "We specialize in professional data recovery services for individuals, businesses, and organizations. Our experienced team utilizes cutting-edge technology and proven methods to recover lost data from a variety of devices and situations:",
  },
  {
    head: "Hard Drive Recovery:",
    title:
      "Our experts can retrieve data from damaged, corrupted, or failed hard drives, including both mechanical and solid-state drives (SSDs).",
  },
  {
    head: "RAID Recovery:",
    title:
      "With extensive experience in RAID arrays, we recover data from all RAID levels, minimizing downtime for businesses.",
  },

  {
    head: "SSD Recovery:",
    title:
      "We utilize advanced techniques to extract data from failed or damaged solid-state drives, ensuring maximum recovery success.",
  },
  {
    head: "Data Recovery:",
    title:
      "Accidentally deleted important files or experiencing data loss? Our data recovery specialists can help retrieve your valuable data, ensuring you don't lose precious memories or critical work files.",
  },
  {
    head: "Laptop/Desktop Recovery:",
    title:
      "Whether it's a personal device or a business workstation, we recover lost data from all types of laptops and desktops.",
  },

  {
    head: "External Device Recovery:",
    title:
      "From USB flash drives to external hard disks, our specialists handle data recovery for various storage devices.",
  },
];

const DataRecovery = () => {
  return (
    <><Navbar/>
    <Box mt={["5rem","8rem"]}>
      <Seo title="Data Recovery" description="Welcome to our Near Computing , if you want recover your lost data then you can connect with us and we have Specialized Team" />
      <TopHeading headings="Data recovery" />
      <Box width={{ base: "100%", md: "70%" }} m="auto">
        <Subheading subheading="Welcome to Our Expert Laptop Service Center!" />
        <Flex justifyContent="center">
          <Paragraph width={{ base: "95%", md: "90%" }} para={parag} />
        </Flex>

        <TopHeading headings="Our Services:" />
        <Image src={dataRecovery} alt="Near Computing" width="full" />
        {/* <img src={""} alt="" /> */}

        {datarecovery.map((item, index) => {
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
            <strong>Expert Team:</strong> Our certified data recovery
            professionals have years of experience and access to cutting-edge
            technology, ensuring the highest chances of successful data
            retrieval.
          </ListItem>
          <ListItem>
            {" "}
            <strong>Confidentiality:</strong> We prioritize your privacy and
            maintain strict confidentiality throughout the recovery process,
            ensuring your data remains secure.
          </ListItem>
          <ListItem>
            {" "}
            <strong>Confidentiality:</strong> We understand the urgency of data
            recovery. Our efficient processes aim to deliver your retrieved data
            promptly.
          </ListItem>
          <ListItem>
            {" "}
            <strong>Transparent Pricing:</strong> We offer competitive and
            transparent pricing with no hidden fees. You'll know the cost
            upfront, ensuring peace of mind.
          </ListItem>
        </UnorderedList>

        <Heading p="0.25rem" as="h4" size="md" textDecoration="underline">
          <br></br>Our Process
        </Heading>
        <UnorderedList
          color="gray.600"
          mt="1rem"
          fontWeight="400"
          fontSize="20px"
        >
          <ListItem>
            {" "}
            <strong>Evaluation:</strong> Upon receiving your device, our team
            performs a comprehensive evaluation to assess the extent of data
            loss and provide you with a detailed report.
          </ListItem>
          <ListItem>
            {" "}
            <strong>Recovery:</strong> Using state-of-the-art tools and
            techniques, we initiate the data recovery process, aiming to
            retrieve your lost information efficiently.
          </ListItem>
          <ListItem>
            {" "}
            <strong>Verification:</strong> After successful data retrieval, we
            verify the recovered data to ensure its integrity and completeness.
          </ListItem>
          <ListItem>
            <strong>Delivery:</strong> Your recovered data is securely
            transferred to your preferred storage media, whether it's a new
            drive or cloud storage, and promptly delivered to you.
          </ListItem>
        </UnorderedList>
      </Box>
      <Footer />
    </Box>
    </>
  );
};

export default DataRecovery;
