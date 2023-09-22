import * as React from "react"
import "./App.css"
import { Box } from "@mui/material"
import NavBar from "./Components/NavBar"
import TopMain from "./Components/TopMain"



export default function App(){
  return(
    <Box>
      <NavBar></NavBar>
      <TopMain></TopMain>
    </Box>
  )
}