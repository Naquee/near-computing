import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Counter = ({ duration }) => {
  const [time, setTime] = useState(duration);

  const getFormatatedTime = (milisecond) => {
    let totalSeconds = parseInt(Math.floor(milisecond / 1000));
    let totalminutes = parseInt(Math.floor(totalSeconds / 60));
    let totalHours = parseInt(Math.floor(totalminutes / 60));
    let days = parseInt(Math.floor(totalHours / 24));

    let seconds = parseInt(totalSeconds % 60);
    let minutes = parseInt(totalminutes % 60);
    let hours = parseInt(totalHours % 24);

    return `${days}: ${hours}: ${minutes}: ${seconds}`;
  };

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  return (
    <Box width="50%" m="auto" boxSizing="border-box">
    <br />
      <Heading mt='10rem'>Blog Page is Coming Soon...</Heading>
      <br />
      <br />
      <Heading ml='5rem'>{getFormatatedTime(time)}</Heading>
    </Box>
  );
};

export default Counter;
