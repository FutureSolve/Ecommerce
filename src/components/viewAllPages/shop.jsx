import React from "react";
import  Product  from "./product";
import "./ViewAll.css";
import { useLocation } from 'react-router-dom';

 const ViewALL = ({productItems,addToCart}) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  console.log(category)
  return (
    <div >
      <div className="shopTitle1">
        <h1>{category}</h1>
      </div>

      <div className="products1">
       
          <Product productItems={productItems} addToCart={addToCart} data={category} />
      </div>
    </div>
  );
};
export default ViewALL;
