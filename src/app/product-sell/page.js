"use client";
import {
  Box,
  Card,
  CardBody,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import TopHeading from "../components/TopHeading";
import { CPU, laptopsell, Monitor } from "../services/api";
import Image from "next/image";
import { COLORS } from "@/constants/colors";
import UsedLaptop from "../components/UsedLaptop";
import Footer from "../components/Footer";
import dataRecovery from "../../assets/hsc11.jpg";
import pc1 from "../../assets/pc1.jpg";
import pc2 from "../../assets/pc2.jpg";
import { MdCheckCircle } from "react-icons/md";
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";

const ProductShell = () => {
  return (
    <>
      <Navbar />

      <Box w={["95%", "95%"]} m="auto" mt={["5rem", "8rem"]}>

        <Seo title="Refurbished Laptop" description="Welcome to our Near Computing , if you are looking for Refurbished laptop ,second laptop,refurbished laptop,second hand laptop, buy second hand laptop, second hand laptop insurance, second hand laptop store near me, second hand laptop near me s,econd hand laptop price, second hand laptop for sale" />
        <UsedLaptop />
        <Box w="100%">
          <TopHeading headings="Build Your PC" />
          <Box
            width={["90%", "60%"]}
            m="auto"
            p={["0", "2rem"]}
            textAlign="start"
          >
            <Text fontSize="18px">
              Welcome to the world of limitless possibilities and unparalleled
              performance – the realm of custom PC building. Whether you're a
              seasoned enthusiast or a first-time builder, creating your own PC
              offers a unique and rewarding experience. In this guide, we'll walk
              you through the essential steps to help you build a high-performance
              PC tailored to your needs.
            </Text>
          </Box>
          <Flex>
            <Box w="50%">
              <Image src={pc1} alt="Near Computing" />
            </Box>
            <Box w="50%">
              <Image src={pc2} alt="Near Computing" />
            </Box>
          </Flex>

          <Flex
            gap={10}
            width="100%"
            p={["20px 0 0 0"]}
            flexDirection={["column", "row"]}
          >
            <Box width={["100%", "50%"]} p={["1rem 0 0 1rem", "1rem 0 0 1rem"]}>
              <List spacing={3}>
                <Heading as="h4" size="md">
                  1. Define Your Purpose:
                </Heading>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Before diving into the components, determine the primary purpose
                  of your PC. Are you building a gaming rig, a content creation
                  powerhouse, or an all-around workhorse? Understanding your needs
                  will guide component selection.
                </ListItem>
                <ListItem>
                  <Heading as="h4" size="md">
                    2. Define Your Purpose:
                  </Heading>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <strong>a. Processor (CPU)</strong>: The brain of your system.
                  Choose from leading brands like Intel and AMD, considering
                  factors such as core count, clock speed, and intended use.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <strong>b. Graphics Card (GPU)</strong>: Crucial for gaming and
                  graphics-intensive tasks. NVIDIA and AMD offer a range of
                  options, from budget-friendly to top-of-the-line models.
                </ListItem>

                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <strong>c. Motherboard</strong>: Connects all components. Ensure
                  compatibility with your chosen CPU and GPU. Brands like ASUS,
                  MSI, and Gigabyte are renowned for their quality.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <strong>d. Memory (RAM):</strong> Faster RAM enhances
                  performance. Aim for at least 16GB, with higher capacities for
                  demanding tasks.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <strong>e. Storage</strong>: SSDs for speed (install the OS and
                  frequently used programs) and HDDs for storage (games, files).
                  Consider M.2 NVMe SSDs for lightning-fast load times.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <strong>f. Power Supply (PSU)</strong>: Choose a reliable,
                  high-efficiency PSU with enough wattage for your components.
                  Brands like Corsair, EVGA, and Seasonic are trusted options.
                </ListItem>
                <Heading as="h4" size="md">
                  3. Cooling Solutions::
                </Heading>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <strong>a. CPU Cooler</strong>: Air or liquid cooling. Brands
                  like Noctua, Corsair, and NZXT offer effective solutions.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <strong>b. Case Fans</strong>: Ensure proper airflow with
                  quality case fans
                </ListItem>
              </List>
            </Box>
            <Box width={["100%", "50%"]} p={["1rem 0 0 1rem", "1rem 0 0 1rem"]}>
              <List spacing={3}>
                <Heading as="h4" size="md">
                  4. Assembly and Installation:
                </Heading>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <strong>a. Prepare Your Workspace</strong>: Clear, well-lit, and
                  static-free.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <strong>b. Install CPU and RAM</strong>: Follow the motherboard
                  manual for precise instructions.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <strong>c. Mounting the Motherboard</strong>: Align and secure
                  it in the case.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <strong>d. Installing GPU, Storage, and PSU</strong>: Connect
                  components and manage cables for optimal airflow.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <strong>e. Cable Management</strong>: Keep cables tidy for
                  better aesthetics and airflow.
                </ListItem>

                <Heading as="h4" size="md">
                  5. BIOS Configuration and OS Installation:
                </Heading>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <strong>a. Access BIOS/UEFI</strong>: Configure settings like
                  boot order and XMP profiles.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <strong>b. Install Operating System</strong>:Use a bootable USB
                  drive to install Windows, Linux, or your preferred OS.
                </ListItem>

                <Heading as="h4" size="md">
                  6. Driver and Software Installation:
                </Heading>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <strong>a. Update Drivers</strong>: Download the latest drivers
                  for your components.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <strong>b. Install Essential Software</strong>: Antivirus,
                  productivity tools, and GPU-related applications.
                </ListItem>

                <Heading as="h4" size="md">
                  7. Testing and Optimization:
                </Heading>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <strong>a. Run Stress Tests</strong>: Ensure stability and check
                  temperatures.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <strong>b. Optimize Settings</strong>:Fine-tune GPU and CPU
                  settings for optimal performance.
                </ListItem>

                <Heading as="h4" size="md">
                  8. Final Touches:
                </Heading>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <strong>a. Cable Management</strong>: Double-check for any loose
                  cables.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  <strong>b. Aesthetics</strong>:Add LED strips or RGB components
                  for a personalized touch.
                </ListItem>
              </List>
            </Box>
          </Flex>
        </Box>

        <Box w="100%">
          <TopHeading headings="Sell Refurbished Laptop" />
          <HStack p="1rem">
            <Text fontSize="25px" color="gray">
              Available Brands
            </Text>
          </HStack>

          <SimpleGrid columns={[2, null, 4]} spacing={5}>
            {laptopsell?.map((item, index) => {
              return (
                <Box key={index}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.7 }}
                    key={item.id}
                  >
                    <Card _hover={{ bgColor: COLORS.Aqua }}>
                      <CardBody>
                        <Center>
                          <Image
                            src={item.imgUrl}
                            alt="Near Computing"
                            borderRadius="lg"
                            width={100}
                            height={100}
                          />
                        </Center>
                        <Center mt="6" spacing="3">
                          <Heading size="md">{item.title}</Heading>
                        </Center>
                      </CardBody>
                    </Card>
                  </motion.div>
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>

        <Box w="100%">
          <TopHeading headings="Sell Refurbished Monitors" />
          <HStack p="1rem">
            <Text fontSize="25px" color="gray">
              Available Brands
            </Text>
          </HStack>

          <SimpleGrid columns={[2, null, 4]} spacing={5}>
            {Monitor?.map((item, index) => {
              return (
                <Box key={index}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.7 }}
                    key={item.id}
                  >
                    <Card _hover={{ bgColor: COLORS.Aqua }}>
                      <CardBody>
                        <Center>
                          <Image
                            src={item.imgUrl}
                            alt="Near Computing"
                            borderRadius="lg"
                            width={100}
                            height={100}
                          />
                        </Center>
                        <Center mt="6" spacing="3">
                          <Heading size="md">{item.title}</Heading>
                        </Center>
                      </CardBody>
                    </Card>
                  </motion.div>
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default ProductShell;
