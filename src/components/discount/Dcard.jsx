import React from "react";
import Slider from "react-slick";
import { Container, Typography, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Ddata from "./Ddata";

const Dcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false, // Remove arrows if not needed,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <Container maxWidth={false}>
      <Slider {...settings} >
        {Ddata.map((value, index) => (
          <div className="box product product-discount" key={index} >
            <div className="img">
              <img src={value.cover} alt="" width="100%" />
            </div>
            <Typography variant="body1">{value.name}</Typography>
            <Typography variant="body1">{value.price}</Typography>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Dcard;
