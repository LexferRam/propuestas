// components/Header/Header.js
import { AppBar, Toolbar, Box, IconButton, useScrollTrigger, Slide } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavMenu from './NavMenu';
import Image from 'next/image';
import { useState } from 'react';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          sx={{ 
            backgroundColor: 'rgba(240, 231, 226, 0.85)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 2px 20px rgba(147, 21, 46, 0.3)',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Image 
                src="/propuesta1/logo1_250.png" 
                alt="PinPamPum" 
                width={150} 
                height={50} 
                style={{ objectFit: 'contain' }}
              />
            </Box>
            
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <NavMenu />
            </Box>
            
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: '#93152e' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      
    </>
  );
}