import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavbarStyle } from './NStyle'
import { NavbarData } from './NData'
import { useNavigate, Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
function Navbar(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [title, setTitle] = React.useState(null);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {NavbarData.map((val, key) => (
          <ListItem key={key} onClick={() => { navigate(val.route) }}>
            <ListItemButton>
              <ListItemIcon>
                {val.icon}
              </ListItemIcon>
              <ListItemText primary={val.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {NavbarData.map((val, key) => (
          <ListItem key={key} onClick={() => { navigate(val.route) }}>
            <ListItemButton>
              <ListItemIcon>
                {val.icon}
              </ListItemIcon>
              <ListItemText primary={val.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  React.useEffect(()=>{
    const parsedTitle = location.pathname.replace(/\W/g, ' ');
    setTitle(parsedTitle);
  },[location])


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={NavbarStyle.app}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={NavbarStyle.iconsB}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={NavbarStyle.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={NavbarStyle.box1}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={NavbarStyle.drawer1}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={NavbarStyle.drawer2}
          open
        >
         {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={NavbarStyle.box2}
      >
        <Toolbar />
        <Typography>
          <Header/>
          <Outlet/>
        </Typography>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;