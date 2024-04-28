import { useHistory, Link } from "react-router-dom";
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {AddShoppingCart} from '@mui/icons-material';
import { useState } from 'react';
import { useEffect } from 'react';
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
  const handleLinkClick = () => {
    const storedToken = localStorage.getItem('authToken');
    const isLoggedIn = !!storedToken;
  
    if (!isLoggedIn) {
      history.push('/SignIn');
    } else {
      history.push('/Profile');
    }
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/Product/{search}?query=${searchQuery}`);
        const data = await response.json();
        console.log(data)
        // Handle the response data here...
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchQuery !== '') {
      fetchData();
    }
  }, [searchQuery]);

 // Function to handle search bar click event
 const handleSearchBarClick = () => {
  history.push('/SearchPage');
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
         
          <Search  onClick={handleSearchBarClick}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
               onChange={handleInputChange}
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