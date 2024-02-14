// import React, { useState } from "react";
// import { Container, Grid, Typography, InputBase, IconButton, Badge } from "@mui/material";
 import { useHistory, Link } from "react-router-dom";

// const Search = ({ CartItem }) => {
//   const history = useHistory();
//   const [isHovered, setIsHovered] = useState(false);

  // const handleLinkClick = () => {
  //   const storedToken = localStorage.getItem('authToken');
  //   const isLoggedIn = !!storedToken;

  //   if (!isLoggedIn) {
  //     history.push('/SignIn');
  //   } else {
  //     history.push('/Profile');
  //   }
  // };

//   return (
//     <Container>
//       <Grid container alignItems="center" justifyContent="space-between" className="search">
//         <Grid item xs={12} md={2} lg={1}>
//           <Link
//             to="/"
//             style={{maxWidth:20, textDecoration: 'none', color: isHovered ? '#ff014f' : 'inherit' }}
//           
//           >
//             <Typography maxWidth={30} variant="h5">Hambka</Typography>
//           </Link>
//         </Grid>

//         <Grid item xs={12} md={6} lg={7} container alignItems="center" spacing={2}></Grid>

//         <Grid item xs={12} md={2} lg={2} container alignItems="center" justifyContent="flex-end">
//           <Grid item>
//             <Link
//               to="#"
//               onClick={handleLinkClick}
//               style={{ textDecoration: 'none', color: isHovered ? '#ff014f' : 'inherit' }}
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               <IconButton>
//                 <i className="fa fa-user icon-circle"></i>
//               </IconButton>
//             </Link>
//           </Grid>
//           <Grid item>
//             <Link
//               to="/cart"
//               style={{ textDecoration: 'none', color: isHovered ? '#ff014f' : 'inherit' }}
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               <IconButton>
//                 <i className="fa fa-shopping-bag icon-circle"></i>
//                 <Badge badgeContent={CartItem.length} color="ff014f"></Badge>
//               </IconButton>
//             </Link>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Search;
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import {AddShoppingCart} from '@mui/icons-material';
import MoreIcon from '@mui/icons-material/MoreVert';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  Width:1000,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(15),
    
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:'black'
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar
  ({ CartItem }){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const history = useHistory();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleLinkClick = () => {
    const storedToken = localStorage.getItem('authToken');
    const isLoggedIn = !!storedToken;
  
    if (!isLoggedIn) {
      history.push('/SignIn');
    } else {
      history.push('/Profile');
    }
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#f6f9fc', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton>
         
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link
               to="#"
               onClick={handleLinkClick}
               style={{ textDecoration: 'none', color: 'inherit' }}
             >
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="black"
            >
             
              <AccountCircle />
            
            </IconButton>
            </Link>
            <Link
               to="/cart"
               style={{ textDecoration: 'none' }}
             >
            <IconButton
              size="large"
            >
              <Badge badgeContent={CartItem.length} color="warning">
              <AddShoppingCart />
              </Badge>
            </IconButton>
            </Link>
           
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="black"
            >
              <Link
               to="/cart"
               style={{ textDecoration: 'none' }}
             >
            <IconButton
              size="large"
            >
              <Badge badgeContent={CartItem.length} color="warning">
              <AddShoppingCart />
              </Badge>
            </IconButton>
            </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

    </Box>
  );
}
