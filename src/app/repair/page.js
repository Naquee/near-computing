"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Footer from "@/app/components/Footer";
import RepairCard from "@/app/components/RepairCard";

const Repair = () => {
  const router = useRouter();
  return (
    <Box mt="5rem">
      <RepairCard />
      <Footer />
    </Box>
  );
};

export default Repair;
