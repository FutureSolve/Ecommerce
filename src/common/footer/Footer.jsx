import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#0f3460",
    color: "#fff",
    padding: theme.spacing(4, 0),
  },
  box: {
    marginBottom: theme.spacing(4),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3} className={classes.box}>
            <Typography variant="h6" color='#e94560' gutterBottom>
              Hambka
            </Typography>
            <Typography variant="body2" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
            </Typography>
            <div className={classes.icon}>
              <i className="fab fa-google-play"></i>
              <span>Google Play</span>
            </div>
            <div className={classes.icon}>
              <i className="fab fa-app-store-ios"></i>
              <span>App Store</span>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.box}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" gutterBottom>
              <ul>
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.box}>
            <Typography variant="h6" gutterBottom>
              Customer Care
            </Typography>
            <Typography variant="body2" gutterBottom>
              <ul>
                <li>Help Center</li>
                <li>How to Buy</li>
                <li>Track Your Order</li>
                <li>Corporate & Bulk Purchasing</li>
                <li>Returns & Refunds</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.box}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" gutterBottom>
              <ul>
                <li>70 Washington Square South, New York, NY 10012, United States</li>
                <li>Email: <Link href="mailto:uilib.help@gmail.com">uilib.help@gmail.com</Link></li>
                <li>Phone: +1 1123 456 780</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
