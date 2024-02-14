import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";


const useStyles = makeStyles((theme) => ({
  cartItems: {
    background: "#f6f9fc",
    height: "auto",
    padding: "50px",
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  cartDetails: {
    width: "70%",
  },
  cartTotal: {
    width: "30%",
    marginTop: "30px",
    marginLeft: "30px",
    height: "130px",
  },
  cartList: {
    background: "white",
    marginTop: "30px",
  },
  imgContainer: {
    width: "150px",
    height: "150px",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  cartDetailsH3: {
    fontSize: "20px",
    fontWeight: 500,
    marginTop: "20px",
  },
  cartDetailsH4: {
    fontSize: "15px",
    fontWeight: 400,
    marginTop: "50px",
    color: "grey",
  },
  cartDetailsH4Span: {
    color: "#e94560",
    marginLeft: "20px",
    fontWeight: 500,
  },
  removeCart: {
    background: "none",
    fontSize: "25px",
    textAlign: "right",
    marginRight: "10px",
  },
  cartControl: {
    marginTop: "50px",
  },
  controlButton: {
    width: "40px",
    height: "40px",
    margin: "10px",
    borderRadius: "5px",
    fontSize: "20px",
  },
  incCart: {
    background: "none",
    border: `1px solid ${theme.palette.grey[300]}`,
    color: "#e94560",
  },
  desCart: {
    background: "#f6f9fc",
  },
  cartTotalH4: {
    fontSize: "15px",
    fontWeight: 400,
  },
  cartTotalH3: {
    fontSize: "20px",
    fontWeight: 500,
    color: "#e94560",
  },
  cartTotalH2: {
    fontSize: "18px",
    marginBottom: "20px",
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    paddingBottom: "10px",
    color: "#e94560",
  },
  noItems: {
    color: "#e94560",
    fontSize: "18px",
    marginTop: "30px",
    height: "130px",
  },
  pinkButton: {
    backgroundColor: "#ffffff",
    color: "#e94560",
    fontSize: "20px",
  },
}));
const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  const [cartItems, setCartItems] = useState(CartItem);
  const history = useHistory();
  const classes = useStyles();
  const totalPrices = CartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  const handleRemoveItem = (itemToRemove) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemToRemove.id);
    setCartItems(updatedCart);
  };

  const removeAllAndSendToBackend = () => {
    const storedToken = localStorage.getItem("authToken");
    const isLoggedIn = storedToken;

    if (!isLoggedIn) {
      history.push("/SignIn");
      return;
    }

    const totalPrice = totalPrices;

    const formattedData = {
      totalPrice,
      products: cartItems.map((item) => ({
        productId: item.id,
        quantity: item.qty,
      })),
    };

    const authToken = `Bearer ${storedToken}`;

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
        } else {
          console.log("Order not create");
          throw new Error("Failed to place order");
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  return (
    <Container className={classes.cartItems}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} className={classes.cartDetails}>
          {CartItem.length === 0 && (
            <Typography variant="h5" className={`${classes.noItems} product`}>
              No Items are added in Cart
            </Typography>
          )}

          {CartItem.map((item) => (
            <Grid
              container
              key={item.id}
              className={`${classes.cartList} product d_flex`}
            >
              <Grid item xs={4} md={3} className={classes.imgContainer}>
                <img src={item.cover} alt={item.name} className={classes.img} />
              </Grid>
              <Grid item xs={8} md={9} className={classes.cartDetails}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="subtitle1">
                  ${item.price}.00 * {item.qty}{" "}
                  <span>${item.price * item.qty}.00</span>
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.cartItemsFunction}>
                <IconButton
                  onClick={() => {} /* handleRemoveItem */}
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
                <div className={classes.cartControl}>
                  <IconButton
                    className={classes.controlButton}
                    onClick={() => addToCart(item)}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    className={classes.controlButton}
                    onClick={() => decreaseQty(item)}
                  >
                    <RemoveIcon />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          ))}
        </Grid>

        <Grid item xs={12} md={4} className={classes.cartTotal}>
          <Typography variant="h4">Cart Summary</Typography>
          <div className={`d_flex ${classes.totalPriceContainer}`}>
            <Typography variant="subtitle1" className={classes.cartTotalH4}>
              Total Price :
            </Typography>
            <Typography variant="h5" className={classes.cartTotalH3}>
              ${totalPrices}.00
            </Typography>
          </div>
          <Button
            variant="contained"
            className={classes.pinkButton}
            onClick={removeAllAndSendToBackend}
          >
            Get Order
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
