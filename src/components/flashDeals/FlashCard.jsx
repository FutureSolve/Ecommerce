import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

const FlashCard = ({ headingText, addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/${headingText}`);
        if (response.status === 200) {
          setProducts(response.data.data);
        } else {
          throw new Error("Failed to fetch products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {products.map((product) => (
          <div className="box" key={product.id}>
            <div className="product mtop">
              <div className="img">
                <span className="discount">{product.discount}% Off</span>
                <img src={product.cover} alt="" />
                <div className="product-like">
                  <label>{count}</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <div className="rate">
                  {[...Array(5)].map((_, i) => (
                    <i className="fa fa-star" key={i}></i>
                  ))}
                </div>
                <div className="price">
                  <h4>${product.price}.00 </h4>
                  <button onClick={() => addToCart(product)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default FlashCard;
