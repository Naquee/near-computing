"use client";
import Footer from "@/app/components/Footer";
import LaptoRentalCard from "@/app/components/LaptopRentalCard";
import { Box } from "@chakra-ui/react";
import React from "react";
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";

const RentalService = () => {
  return (
    <Box>
      <Navbar />
      <Seo title="Laptop Rental" description="Welcome to our Near Computing , if you are Rental Laptop you can connect with us we are provide all types of laptop,desktop in afforable price" />
     <Box mt={["10rem", "10rem"]}>
      <LaptoRentalCard />
     </Box>
      <Footer />
    </Box>
  );
};

export default RentalService;
