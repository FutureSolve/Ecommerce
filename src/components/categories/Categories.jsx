import { Box } from "@mui/material"
import React from "react"

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
      cateImg: "./images/category/cat3.png",
      cateName: "Cars",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Gifts",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Music",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Health & Beauty",
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
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Books",
    },
  ]

  return (
    <>
      <Box sx={{m:"40px", width:"100%",backgroundColor:" #fff",padding: "15px",}} className='category'>
        {data.map((value, index) => {
          return (
            <Box>
            <Box sx={{ width: "30px",
              height: "30px",
              mt: "10px",
              fit: "contain",
              p:"4px"
              }}  key={index}>
              <img src={value.cateImg} alt='' />
            </Box>
            <span>{value.cateName}</span>
            </Box>
          )
        })}
      </Box>
    </>
  )
}

export default Categories
