import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios"; // Import Axios

const SlideCard = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/offer/getAll");
        if (response.status === 200) {
          setOffers(response.data.data); // Set the fetched offers in the state
        } else {
          throw new Error("Failed to fetch offers");
        }
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };


  return (
    <>
      <Slider {...settings}>
        {offers.map((value, index) => {
          return (
            <>
              <div className='box d_flex top' key={index}>
                <div className='left'>
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className='btn-primary'>Visit Collections</button>
                </div>
                <div className='right'>
                  <img src={value.cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
