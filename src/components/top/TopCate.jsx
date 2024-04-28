import React, { useState, useEffect } from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import axios from "axios"; // Import axios for making HTTP requests
import Tdata from "./Tdata";

const useStyles = makeStyles((theme) => ({
  background: {
    background: "#ffffff",
  },
  container: {
    padding: theme.spacing(5),
  },
  heading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topCartBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  img: {
    width: "95%",
    maxWidth: "45rem",
    maxHeight: "15rem",
  },
}));

const TopCate = () => {
  const classes = useStyles();
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

  return (
    <Grid container className={`${classes.background} ${classes.container}`}>
      <Grid item xs={12}>
        <div className={classes.heading}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src='https://img.icons8.com/windows/32/fa314a/gift.png' alt='gift-icon' />
            <Typography sx={{padding:3,color:"black"}} variant="h5">Top Offers</Typography>
          </Box>
        </div>
      </Grid>
      <Grid item xs={12}>
        <TopCart offers={offers} /> {/* Correctly pass offers as props */}
      </Grid>
    </Grid>
  );
};

const TopCart = ({ offers }) => { // Receive offers as props
  const classes = useStyles();

  return (
    <Carousel>
      {offers.map((value, index) => (
        <div className={classes.topCartBox} key={index}>
          <Typography variant="body1" className={classes.nametop}>
            {value.para}
          </Typography>
          <img src={value.cover} alt="" className={classes.img} />
        </div>
      ))}
    </Carousel>
  );
};

export default TopCate;
