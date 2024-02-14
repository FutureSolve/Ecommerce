import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
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

  return (
    <Grid container className={`${classes.background} ${classes.container}`}>
      <Grid item xs={12}>
        <div className={classes.heading}>
          <div>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src='https://img.icons8.com/windows/32/fa314a/gift.png' alt='gift-icon' />
            <Typography sx={{padding:3,color:"black"}} variant="h5">Top Offers</Typography>
              </Box>
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <TopCart />
      </Grid>
    </Grid>
  );
};

const TopCart = () => {
  const classes = useStyles();

  return (
    <Carousel>
      {Tdata.map((value, index) => (
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
