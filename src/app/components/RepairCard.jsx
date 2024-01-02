
"use client";
import React from "react";
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
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import dataRecovery from "../../assets/repair-service/data-recovery.jpg";
import laptoRepair from "../../assets/repairPhoto/laptop.jpg";
import software from "../../assets/repairPhoto/software.jpg";

const serverice = [
  {
    id: 1,
    name: "Latop Repairing",
    //   image: laptop,
    ImageUrl: laptoRepair,
    deescription: "  At our laptop service center, we understand the importance of your laptop in your daily life,",
    link: "laptop-repair",
  },
  {
    id: 2,
    name: "Data Recovery",
    ImageUrl: dataRecovery,
    deescription: "  We specialize in professional data recovery services for individuals, businesses, and organizations.",
    link: "data-recovery",
  },

  {
    id: 3,
    name: "SoftWare Update and Formate",
    //   image: laptop,
    ImageUrl: software,
    deescription: " we recognize the significance of keeping your devices updated and operating at their best,",
    link: "softWare-update-and-formate",
  },
];

const RepairCard = () => {
  const router = useRouter();

  return (
    <Box mt={["1rem","5rem"]}>
      <TopHeading headings="REPAIRING SERVICES" />
      <SimpleGrid
        columns={[1, 2, 3]}
        spacing="20px"
        justifyContent="center"
        w={["95%","85%"]}
        m="auto"
      >
        {serverice?.map((item) => {
          return (
            <motion.div
              whileHover={{ scale: 1.03 }}
              // whileTap={{ scale: 0.7 }}
              key={item.id}
            >
              <Card
                mt="2rem"
                maxW="100%"
                shadow="lg"
                rounded="lg"
                boxShadow="outline"
                p="6"
                cursor="pointer"
                borderRadius="xl"
                onClick={() => router.push(`/${item.link}`)}
              >
                <CardBody>
                  <Image
                    src={item.ImageUrl}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                    width="100px"
                    height="100px"
                  />
                  <Text fontSize="40px">{item.img}</Text>
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{item.name}</Heading>
                    <Text>{item.deescription}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button
                      variant="solid"
                      colorScheme="blue"
                    >
                      Read More...
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default RepairCard;
