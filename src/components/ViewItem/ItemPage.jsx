// import React from "react";
// import { Grid, Typography, Box } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import Carousel from "react-material-ui-carousel";
// import Data from "../Data";

// const useStyles = makeStyles((theme) => ({
//   background: {
//     background: "#ffffff",
//   },
//   container: {
//     padding: theme.spacing(5),
    
//   },
//   heading: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   topCartBox: {
   
//     alignItems: "center",
//     padding: theme.spacing(2),
//   },
//   img: {
//     maxWidth: "100%",
//     height: "100%",
//     display:" block",
//   },
// }));

// const ProductPage = () => {
//   const classes = useStyles();

//   return (
//     <Grid container className={`${classes.background} ${classes.container}`}>
//       <Grid item xs={12}>
//         <ProductCart />
//       </Grid>
//     </Grid>
//   );
// };

// const ProductCart = () => {
//   const classes = useStyles();

//   return (
//     <Carousel>
//       {Data.map((value, index) => (
//         <div className={classes.topCartBox} key={index}>

//           <img src={value.cover} alt="" className={classes.img} />
//         </div>
//       ))}
//     </Carousel>
//   );
// };

// export default ProductPage;
import React from "react";
import { Grid, Container, Box, Typography, IconButton } from "@mui/material";
import Itemcard from "./ItemCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const defaultTheme = createTheme();
const ProductPage = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Itemcard />
          </Grid>
        </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ProductPage;
