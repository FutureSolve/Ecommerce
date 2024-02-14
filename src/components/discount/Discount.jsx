import React from "react";
import { Grid, Container, Box, Typography, IconButton } from "@mui/material";
import Dcard from "./Dcard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Discount = () => {
  return (

        <Grid container spacing={2}>
          <Grid  item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: "#f6f9fc", }}>
              <Box sx={{ display: 'flex', padding:3,alignItems: 'center' }}>
                <img src='https://img.icons8.com/windows/32/fa314a/gift.png' alt='gift-icon' />
                <Typography sx={{color:"black"}} variant="h5">Big Discounts</Typography>
              </Box>
            
                {/* <IconButton>
                <Typography variant="span">View all</Typography>
                  <ArrowForwardIcon />
                </IconButton> */}
             
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Dcard />
          </Grid>
        </Grid>
  );
};

export default Discount;
