import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Fashion",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Electronic",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Pets",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Groceries",
    },
  ];

  return (
    <Box sx={{ m: "10px", backgroundColor: "#fff", padding: "15px" }} >
      <Grid container spacing={2}>
        {data.map((value, index) => (
          <Grid item key={index}>
            <Paper sx={{ textAlign: "center", p: 2, display: "flex", flexDirection: "column" }}>
              <Box sx={{ width: "60px", height: "60px", mx: "auto" }}>
                <img src={value.cateImg} alt='' style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </Box>
              <Typography variant="subtitle2">{value.cateName}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;
