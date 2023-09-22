import { Box, Fab, Avatar, Link, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import * as react from "react";

export default function TopMain() {
  const home = {
    alignItems: "center",
    backgroundColor: "#fff",
    display: "flex",
    fontFamily: "Avenir",
    height: "auto",
    justifyContent: "center",
    width: "100%",
  };

  const homeContainer = {
    display: "flex",
    flexDirection: "column",
    height: "90%",
    maxWidth: "1151px",
    width: "90%",
  };

  const containerHeader = {
    display: "flex",
    flexDirection: "column",
    height: "400px",
    width: "100%",
  };

  const headerTop = {
    backgroundImage:
      "url(https://api-callingfriends.cmc-software.com/src/assets/banners/1695345844500pf351438938.webp)",
    alignItems: "flex-end",
    backgroundColor: "#b0b0b0",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    height: "85%",
    justifyContent: "flex-end",
    paddingBottom: "70px",
    position: "relative",
    width: "100%",
  };

  const fabButtonTop = {
    position: "absolute",
    right: "5%",
    top: "5%",
  };

  const topAvatar = {
    alignItems: "center",
    bottom: "-12%",
    display: "flex",
    flexDirection: "row",
    left: "8%",
    position: "absolute",
    width: "70%",
  };

  const boxAvatar = {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: "1",
  };

  const avatar = {
    backgroundColor: "#fff",
    border: "4px solid #fff",
    borderRadius: "50%",
    fontSize: "0.5rem",
    height: "190px",
    overflow: "hidden",
    width: "190px",
  };

  const avatarInfo = {
    alignItems: "center",
    background: "linear-gradient(90deg,#fff 51%,rgba(69,9,121,0))",
    display: "flex",
    gap: "25px",
    height: "45px",
    marginLeft: "-20px",
    marginTop: "90px",
    paddingLeft: "40px",
    width: "100%",
  };

  const linkprofile = {
    color: "#169ad7",
    fontSize: "1.5rem",
    fontWeight: "700",
    textDecoration: "none",
  };

  const buttonProfile = {
    padding: "6px 16px",
    letterSpacing: "1.1px",
    backgroundColor: "#F58203",
    color: "white",
    ":hover": {
      backgroundColor: "#0F6B96",
    },
  };

  const topInfoProfile = {
    display: "flex",
    width: "74%",
    flexDirection: "row",
  };

  return (
    //Componente completo
    <Box sx={home}> 
        {/*  */}
      <Box sx={homeContainer}>
        {/*  */}
        <Box sx={containerHeader}>
            {/*  */}
          <Box sx={headerTop}>
            {/*  */}
            <Box sx={fabButtonTop}>
                {/*  */}
              <Fab
                variant="extended"
                size="medium"
                sx={{
                  backgroundColor: "#169AD7",
                  color: "white",
                  ":hover": {
                    backgroundColor: "#0F6B96",
                  },
                }}
              >
                Actualizar Portada
              </Fab>
            </Box>
            {/*  */}
            <Box sx={topAvatar}>
                {/*  */}
              <Box sx={boxAvatar}>
                {/*  */}
                <Fab
                  variant="extended"
                  size="medium"
                  sx={{
                    backgroundColor: "#169AD7",
                    color: "white",
                    ":hover": {
                      backgroundColor: "#0F6B96",
                    },
                  }}
                >
                  Actualizar Avatar
                </Fab>
                {/*  */}
                <Box style={avatar}>
                  <img
                    alt="Remy Sharp"
                    src="https://api-callingfriends.cmc-software.com/src/assets/images/1695345895676pf86002300.webp"
                    style={{
                      height: "100%",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </Box>
              </Box>
              {/*  */}
              <Box sx={avatarInfo}>
                {/*  */}
                <Link href="#" underline="none" style={linkprofile}>
                  {"callingfriends.com/isixmerces"}
                </Link>
                {/*  */}
                <Fab variant="extended" size="small" sx={buttonProfile}>
                  <ShareIcon
                    sx={{
                      marginRight: " 8px",
                      marginLeft: "-4px",
                    }}
                  />
                  Compartir
                </Fab>
                
              </Box>
            </Box>
            {/*  */}
            <Box sx={topInfoProfile}>
                {/*  */}
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    width: "50%",
                    zIndex: "1",
                }}>
                    <Typography sx={{
                        padding: "1px",
                        width: "100%",
                        color:" #fff",
                        fontSize: "2rem",
                        fontWeight:" 700",
                        textShadow: "0 5px 16px rgba(0,0,0,.69)",
                    }}>Isabela Mercedes</Typography>
                    
                    <Typography sx={{
                        display: "flex",
                        color:" #fff",
                        flexDirection: "column",
                        height: "100%",
                        width: "50%",
                        zIndex: "1",
                    }}>@isixmerces</Typography>
                </Box>
                {/*  */}
                <Box>

                </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
