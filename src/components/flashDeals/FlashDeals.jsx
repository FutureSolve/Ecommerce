import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"
import { Link } from "react-router-dom";

const FlashDeals = ({ productItems, addToCart ,headingText}) => {
  let api=`api/v1/Product/getAllByCategory/${headingText}?category=picurl`
  let to = `/${headingText}`
  console.log(headingText)
  return (
    <>
      <section className='flash'>
        <div className='container'>
        <div className='heading d_flex'>
          <div className='heading-left row  f_flex'>
            <h1>{headingText}</h1>
          </div>
          <div className='heading-right row '>
              <Link to={`/view-all?category=${headingText}`}>
              <span>View all</span>
            </Link>
              
                <i className='fa-solid fa-caret-right'></i>
              </div>
              </div>
          <FlashCard productItems={productItems} addToCart={addToCart} headingText={api} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
