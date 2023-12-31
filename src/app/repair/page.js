"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Footer from "@/app/components/Footer";
import RepairCard from "@/app/components/RepairCard";
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";

const Repair = () => {
  const router = useRouter();
  return (
    <Box>
      <Navbar />
      <Box mt={["5rem", "8rem"]}></Box>
      <Seo
        title="Near Computing"
        description="Welcome to our Near Computing , "
      />
      <RepairCard />
      <Footer />
    </Box>
  );
};

export default Repair;
