import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import whatsapp from "../../assets/whatsapp.svg"

const WhatssApp = ({bgColor}) => {
  const handleButtonClick = () => {
    const phoneNumber = '7050800356'; // Replace with the desired phone number
    const message = 'Hey i have query'; // Replace with your default message
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
};
  return (
    <Box>
    <Card maxW='sm' backgroundColor={bgColor}>
  <CardBody>
    <Stack mt='0' spacing='3'>
      <Heading size='md'>Quick Response</Heading>
      <Text>
        If You need Quick response please click whatsapp button
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter cursor="pointer" onClick={handleButtonClick}>
      <Image src={whatsapp} alt='whatsapp'/>
  </CardFooter>
</Card>
        
    </Box>
  )
}

export default WhatssApp