import React from 'react'
import {Box, Flex  , Text , Heading , Button , HStack , Icon} from "@chakra-ui/react"
import CheckMarkIcon from "./CheckMarkIcon"
export default function Pricing() {
  return <>
<Box boxShadow={"0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"}   maxW={"950px"} ml={{base:"10px" , md:"10px" , lg: "auto"}} mr={{base:"10px" , md:"10px" , lg: "auto"}} mt={"-80px"} >
    <Flex  direction={{base: "column" , md: "column" , lg: "row"}}>
<Box shadow={"box-shadow: 0px 20px 25px -5px #0000001A;"} borderTopLeftRadius={"12px"}  borderBottomLeftRadius={"12px"} p={"60px"} textAlign="center" bg={"#dedae5"}>
<Text fontWeight={"bold"} fontSize="24pxs">Premium PRO</Text>
<Heading fontSize={"60px"}> $329</Heading>
<Text>billed just once</Text>
<Button bg={"#805AD5"} mt={"20px"} w={"280px"} lineHeight={"24px"} fontSize="16px" >Get Started</Button>
</Box >

<Box  shadow={"box-shadow: 0px 20px 25px -5px #0000001A;"} borderTopRightRadius={"12px"}   borderBottomRightRadius={"12px"} bg={"white"} color={"Black"} pt={"50px"} pl="25px">
<Text>Access these features when you get this pricing package for your business.</Text>

<HStack mt={"15px"}>
<Icon as={ CheckMarkIcon}></Icon>
<Text>International calling and messaging API</Text>
</HStack>
<HStack mt={"15px"}>
<Icon as={CheckMarkIcon}></Icon>
<Text>Additional phone numbers</Text>
</HStack>
<HStack mt={"15px"}>
<Icon as={CheckMarkIcon}></Icon>
<Text>Automated messages via Zapier</Text>
</HStack>
<HStack mt={"15px"}>
<CheckMarkIcon />
<Text>24/7 support and consulting</Text>
</HStack>
</Box>
</Flex>
</Box>
  
  </>
    
  
}
