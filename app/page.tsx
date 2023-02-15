// pages/_app.js
"use client"
import Header from './Header'
import { ChakraProvider } from '@chakra-ui/react'
import Pricing from './Pricing'
import Features from './Features'

export default function MyApp() {
  return (
    <ChakraProvider>
    <Header />
    <Pricing />
    <Features/>
      
    </ChakraProvider>
  )
}

