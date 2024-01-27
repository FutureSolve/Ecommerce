import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = ({ data, addToCart, cartItemCount }) => {
  const [error, setError] = useState(null);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/Product/getAllByCategory/${data}?category=picurl`);
        console.log("Response Data:", response.data);

        const responseData = response.data.data; // Accessing the 'data' property

        if (response.status === 200 && Array.isArray(responseData) && responseData.length > 0) {
          setProductData(responseData);
        } else {
          throw new Error("No valid products received");
        }
      } catch (error) {
        setError(error.message);
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [data]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {productData.map((product) => (
        <div className="product1" key={product.id}>
          <img src={product.cover} alt={`Product: ${product.name}`} />
          <div className="description1">
            <p>
              <b>{product.name}</b>
            </p>
            <p>${product.price}</p>
          </div>
          <button className="addToCartBttn1" onClick={() => addToCart(product)}>
            Add To Cart {cartItemCount > 0 && `(${cartItemCount})`}
          </button>
        </div>
      ))}
    </>
  );
};

export default Product;
