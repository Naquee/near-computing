import { Text,Box } from '@chakra-ui/react'
import React from 'react'

const Subheading = ({subheading}) => {
  return (
    <Box w={{base:"100%",md:"100%"}} m="auto" p={{base:"1rem",md:"1rem"}}>
      <Text textAlign="center" fontSize={{base:"16px",md:"26px"}} color="blue" fontWeight="900">{subheading}</Text>
    </Box>
  )
}

export default Subheading