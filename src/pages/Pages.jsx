import React from "react"
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import TopCate from "../components/top/TopCate"
import Discount from "../components/discount/Discount"
import Shop from "../components/shops/Shop"
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/wrapper/Wrapper"
const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <TopCate />
      <Discount />
      <FlashDeals productItems={productItems} addToCart={addToCart} headingText="covers" />
      <FlashDeals productItems={productItems} addToCart={addToCart} headingText="screens" />
      <FlashDeals productItems={productItems} addToCart={addToCart} headingText="chargers" />
      <FlashDeals productItems={productItems} addToCart={addToCart} headingText="cables" />
      {/* <NewArrivals /> */}
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Wrapper/>
    </>
  )
}

export default Pages
