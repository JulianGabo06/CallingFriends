import * as React from "react";
import { AppBar, Avatar, Box, IconButton, Link, Toolbar, Typography } from "@mui/material";
import PaidIcon from '@mui/icons-material/Paid';
import LogoutIcon from '@mui/icons-material/Logout';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const imageStyle = {
  padding:"0",
  height:"70px"
}

const iconButton = {
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  color:"white",
  gap:"10px",
  padding:"6px 8px"
  
}

const fontTypografy ={
    fontFamily:"avenir !important",
    fontSize:"1rem",
    fontWeight:"600",
    color:"white",
    borderRadius:"20px",
    letterSpacing:"1.1px"
}

export default function NavBar() {


  return (
    <Box sx={{flexGrow: 1, }} >
      <AppBar position="static" sx={{
        color:"white",
        width:"100%",
        bgcolor:"#169AD7",
        
      }}>
        <Toolbar sx={{
          height:"74px",
          justifyContent:"space-between",
          boxShadow:"rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;"
        }}>
          <Link href="#" underline="none" sx={{padding:"0"}}>
            <img src="https://callingfriends.com/assets/main.webp" alt="" style={imageStyle} />
          </Link>
          <Box sx={{
            display:"flex",
            alignItems:"center",
          }}>
            <Link href="#" underline="none" style={iconButton}>
              <PaidIcon /> <Typography style={fontTypografy}>APUESTAS</Typography> 
            </Link>
            <Link href="#" underline="none" style={iconButton} >
              <LogoutIcon /> <Typography style={fontTypografy}>SALIR</Typography> 
            </Link>
            <Link href="#" underline="none" style={iconButton}>
              <img src="https://api-callingfriends.cmc-software.com/src/assets/images/1695345895676pf86002300.webp" alt="" style={{border:"2px solid white",borderRadius:"100%", width:"30px", height:"30px", }} /> <Typography style={fontTypografy}>MI PERFIL</Typography> 
            </Link>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
