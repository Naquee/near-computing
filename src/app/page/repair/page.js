"use client";
import React from "react";
// import {laptop} from ".../../../src/assets/laptop.jpg"
// import repair from ".../../../public/repair.jpg";
// import repair from "../../../assets/repair.jpg";

import {
  Box,
  Card,
  Heading,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Divider,
  ButtonGroup,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import TopHeading from "@/app/components/TopHeading";
import Image from "next/image";
import { MdMobileOff } from "react-icons/md";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import mobilerepair from "./repairPhoto/mobile.jpg";
import laptoRepair from "./repairPhoto/laptop.jpg";
import software from "./repairPhoto/software.jpg";
import Footer from "@/app/components/Footer";
import RepairCard from "@/app/components/RepairCard";



const Repair = () => {
  const router = useRouter();

  return (
    <Box mt="5rem">
      <RepairCard/>
      <Footer/>
    </Box>
  );
};

export default Repair;
