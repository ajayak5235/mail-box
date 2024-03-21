import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';



export default function Navbar(props) {
  return (
    <Grid container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0} position="static" sx={{ top: "0", zIndex: "2", backgroundColor: "gray", minHeight: "4vw", minWidth: "100vw", paddingTop: "7px", paddingRight: "30px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={2}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton  color="inherit" aria-label="menu" sx={{ mr: " -2.5vw", color: "#3C3C3" }}>
                 <MenuIcon></MenuIcon>
                </IconButton>
                <img style={{ width: "2.3vw" }}  />
                <Typography sx={{ color: "#3C", marginLeft: "1vw", fontSize: "1.8vw" }} variant="h6" component="div">
                  Mail
                </Typography>
              </div>
            </Grid>
            <Grid item xs={8}>
            <div style={{ marginLeft: "9vw", display: "flex", alignItems: "center", borderRadius: "20px", backgroundColor: "#E4EFFA", width: "40vw", height: "3vw" }}>
            <IconButton>
                <SearchIcon />
             </IconButton>
            <input placeholder='Search mail' style={{ marginLeft: "1vw", height: "3vw", width: "28vw", backgroundColor: "#E4EFFA", border: "none", outline: "none" }} />
</div>
            </Grid>
            <Grid container item xs={2} justifyContent="flex-end" alignItems="center">
         <Avatar style={{width:'30px', height:'30px'}}></Avatar>
            </Grid>
          </div>
        </AppBar>
      </Box>
    </Grid>
  );
}