import React, { useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  const [cartItems, setCartItems] = useState(CartItem);
  const history = useHistory();
  const totalPrices = CartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  const removeAllAndSendToBackend = () => {
    const storedToken = localStorage.getItem("authToken");
    const isLoggedIn = storedToken; // Replace this with your actual authentication logic
    if (!isLoggedIn) {
      // If not logged in, redirect to /SignIn
      history.push("/SignIn");
      return;
    }

    const totalPrice = totalPrices;
    console.log(totalPrice);

    // Structure the data to match the endpoint format
    const formattedData = {
      totalPrice,
      products: cartItems.map((item) => ({
        productId: item.id,
        quantity: item.qty,
      })),
    };
    console.log(formattedData);

    // Replace 'YOUR_AUTH_TOKEN' with your actual authorization token
    const authToken = `Bearer ${storedToken}`;
    console.log(authToken);
    //'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5KYW1lc0BleGFtcGxlLmNvbSIsInVzZXJJZCI6MSwidXNlclR5cGUiOiJjdXN0b21lciIsImlhdCI6MTcwNDExNjk4NSwiZXhwIjoxNzA2NzA4OTg1fQ.TAh5UUAUbKLB4vqHsWXv9kXvoTduMyVRwZqZGcBRfFs';

    // Sending data as POST request to the backend
    fetch("http://localhost:5000/api/v1/order/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
        Authorization: authToken,
      },
      body: JSON.stringify(formattedData),
    })
      .then((response) => {
        if (response.ok) {
          setCartItems([]);
          window.location.reload();
          console.log("Order placed successfully");
          // You can also navigate to a thank-you page or display a success message
        } else {
          // Handle response errors
          console.log("Order not create");
          throw new Error("Failed to place order");
        }
      })
      .catch((error) => {
        // Handle fetch errors or response errors
        console.error("Error:", error.message);
        // You can display an error message to the user or retry the request
      });
  };

  // prodcut qty total
  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">
            {CartItem.length === 0 && (
              <h1 className="no-items product">No Items are add in Cart</h1>
            )}

            {CartItem.map((item) => {
              const productQty = item.price * item.qty;

              return (
                <div className="cart-list product d_flex" key={item.id}>
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button className="removeCart">
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className="cartControl d_flex">
                      <button
                        className="incCart"
                        onClick={() => addToCart(item)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <button
                        className="desCart"
                        onClick={() => decreaseQty(item)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>

          <div className="cart-total product">
            <h2>Cart Summary</h2>
            <div className=" d_flex">
              <h4>Total Price :</h4>
              <h3>${totalPrices}.00</h3>
            </div>
          </div>
          <div className=" d_flex">
            {/* Button to remove all data and send to backend */}
            <button className="pink-button" onClick={removeAllAndSendToBackend}>
              Get Order
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
