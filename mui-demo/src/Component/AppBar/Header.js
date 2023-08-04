import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import './Haeder.css';


const pages = ['Home', 'About Us', 'Portfolio', 'Blog', 'Elements'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    color:"#ffffff",
    padding: "10px 46px",
    backgroundColor: "#517F58",
    '&:hover': {
      backgroundColor: "#F9E9AF",
      color:"#000000",
      boxShadow:'none',
      transition: '1s'
    },
  }));
  

  const [active, setActive] = useState('Home');

  return (
    <AppBar className='Header' position="static">
      <Container max-width="xl">
        <Toolbar className='Bar' disableGutters>
         <Box>
            <a href='Home'>
                 <img src='/Images/Logo.png' width={150} alt='Logo'/>
            </a>
         </Box>
          <Box className='Navbar'>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu}  color="inherit" >
                <MenuIcon/>
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{  vertical: 'bottom', horizontal: 'left',  }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              className='appbar-btn'
              open={Boolean(anchorElNav)} 
              onClose={handleCloseNavMenu} >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography  textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <ColorButton  variant="contained">Login</ColorButton>
              </MenuItem>
            </Menu>
          </Box>
          
          <Box  className='Nav-btn' mr={5}>
            {pages.map((page) => (
              <Link underline="none" className={`link ${ page === active ? "activeLink" : "" }`} 
              key = {page} 
              onClick={() => setActive(page)}
              >
                {page}
              </Link>
            ))}
          </Box>
          <Box className="Login">
            <ColorButton className='Login-Btn' variant="contained">Login</ColorButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;