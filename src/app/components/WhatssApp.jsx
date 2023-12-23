import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import whatsapp from "../../assets/whatsapp.svg"

const WhatssApp = ({bgColor}) => {
  return (
    <Box bg={bgColor}>
    <Card maxW='sm'>
  <CardBody>
    <Stack mt='0' spacing='3'>
      <Heading size='md'>Quick Response</Heading>
      <Text>
        If You need Quick response please click whatsapp button
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter cursor="pointer">
      <Image src={whatsapp} alt='whatsapp'/>
  </CardFooter>
</Card>
        
    </Box>
  )
}

export default WhatssApp