import React from "react";
import { Container, Grid, Typography, Box, Paper } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

const Wrapper = () => {
  const data = [
    {
      cover: <LocalShippingIcon fontSize="large" />,
      title: "Worldwide Delivery",
      desc: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <PaymentIcon fontSize="large" />,
      title: "Safe Payment",
      desc: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <VerifiedUserIcon fontSize="large" />,
      title: "Shop With Confidence",
      desc: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <HeadsetMicIcon fontSize="large" />,
      title: "24/7 Support",
      desc: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];

  return (
    <Box component="section" className="wrapper background">
      <Container>
        <Grid container spacing={4}>
          {data.map((val, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper elevation={3} className="product">
                <Box className="img icon-circle">{val.cover}</Box>
                <Typography variant="h5">{val.title}</Typography>
                <Typography variant="body2">{val.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Wrapper;
