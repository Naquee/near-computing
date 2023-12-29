import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import TopHeading from "./TopHeading";
import { productsell } from "../services/api";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'

const UsedLaptop = () => {
  const Router = useRouter();
  return (
    <Box w={["60%", "90%"]} m="auto">
      <TopHeading headings="SELL OLD PRODUCTS" />
      <SimpleGrid columns={[1, 2, 3]} spacing={10} mt={["0", "1rem"]}>
        {productsell?.map((item, index) => {
          return (
            <Box key={item.id}>
              <motion.div whileHover={{ scale: 1.1 }} key={item.id}>
                <Card maxW="100%" onClick={() => Router.push("/product-sell")} cursor="pointer">
                  <CardBody>
                    <Image
                      src={item.imgUrl}
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{item.title}</Heading>
                      <Text>{item.description}</Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button variant="solid" colorScheme="blue">
                        More Details
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </motion.div>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default UsedLaptop;
