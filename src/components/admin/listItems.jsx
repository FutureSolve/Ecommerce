import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {ArrowRightTwoTone} from '@mui/icons-material';
import {MoreTime} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';

export const MainListItems = () => {
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);
  const [openProduct, setOpenProduct] = React.useState(true);
  const navigate = useNavigate();
  const handleClickProduct = () => {
    setOpenProduct(!openProduct);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  return (
    <React.Fragment>
      <ListItemButton onClick={() => navigate('/')}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>


      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItemButton>

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={() => navigate('/Orders')}>
            <ListItemIcon>
            <ArrowRightTwoTone/>
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItemButton>


          <ListItemButton sx={{ pl: 4 }} onClick={() => navigate('/Orders')}>
            <ListItemIcon>
              <ArrowRightTwoTone/>
            </ListItemIcon>
            <ListItemText primary="New Orders" />
          </ListItemButton>
          
        </List>
      </Collapse>

      

      <ListItemButton onClick={handleClick1}>
        <ListItemIcon>
        <MoreTime /> 
        </ListItemIcon>
        <ListItemText primary="Offers" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}
           onClick={() => navigate('/AddOffer')}
          >
          <ListItemIcon>
              <ArrowRightTwoTone/>
            </ListItemIcon>
            <ListItemText primary="Add Offers" />
          </ListItemButton>


          <ListItemButton sx={{ pl: 4 }} onClick={() => navigate('/UpdateOffer')}>
          <ListItemIcon>
              <ArrowRightTwoTone/>
            </ListItemIcon>
            <ListItemText primary="Update Offers" />
          </ListItemButton>
          
        </List>
      </Collapse>


      <ListItemButton onClick={handleClickProduct}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Product" />
        {openProduct ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openProduct} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}
           onClick={() => navigate('/AddProduct')}
          >
          <ListItemIcon>
              <ArrowRightTwoTone/>
            </ListItemIcon>
            <ListItemText primary="Add Product" />
          </ListItemButton>


          <ListItemButton sx={{ pl: 4 }}
            onClick={() => navigate('/UpdateProduct')}
          >
          <ListItemIcon>
              <ArrowRightTwoTone/>
            </ListItemIcon>
            <ListItemText primary="Update Product" />
          </ListItemButton>

          
          <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
              <ArrowRightTwoTone/>
            </ListItemIcon>
            <ListItemText primary="Delete Product" />
          </ListItemButton>
          
        </List>
      </Collapse>

    </React.Fragment>
  );
};

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>




    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
