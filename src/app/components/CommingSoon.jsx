import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";

const CommingSoon = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const targetDate = new Date(now);
    targetDate.setDate(now.getDate() + 3);
    targetDate.setHours(0, 0, 0, 0);

    const timeDifference = targetDate.getTime() - now.getTime();

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }
  const finalRef = React.useRef(null);
  const [close, setClose] = useState(true);
  console.log("close", close);
  const handleOpen = () => {
    setClose(!close);
  };

  return (
    <>
      {close ? (
        <Box
          pos="fixed"
          top={{ base: "5rem", md: "2rem" }}
          w="100%"
          zIndex="10"
          transitionDuration="200ms"
        >
          <Box
            width={{ base: "100%", md: "100%" }}
            m="auto"
            background="rgba(0, 136, 255, 0.5)"
            h="100vh"
          >
            <Box>
              <Box
                pos="relative"
                top={{ base: "-17rem", md: "-35rem" }}
                float="right"
              >
                <IconButton variant="outline" icon={<CloseIcon />}></IconButton>
              </Box>
            </Box>
            <Center pt="5rem">
              <Heading
                as="h3"
                size={{ base: "md", md: "2xl" }}
                noOfLines={1}
                p="2rem"
                color="white"
              >
                Our Website Coming soon...
              </Heading>
            </Center>
            <Center>
              <Heading
                as="h3"
                size={{ base: "md", md: "2xl" }}
                noOfLines={1}
                p="2rem"
                color="white"
              >{`${timeRemaining.days} days, ${timeRemaining.hours} hours, ${timeRemaining.minutes} minutes, ${timeRemaining.seconds} seconds`}</Heading>
            </Center>
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default CommingSoon;
