import React from 'react'
import {Heading , Box , } from "@chakra-ui/react"
export default function Header() {
  return (
    <div>
        <Box pl={"10px"} textAlign={{  base : "left" , md : "center" ,  lg: "center"}} bg="#6B46C1" pt="90px" pb="100px" color={"white"}>
        <Heading  mb={"10px"} >
        Simple pricing for your business
        </Heading>
        <text   >  Plans that are carefully crafted to suit your business.</text>
        </Box>


    </div>
  )
}
