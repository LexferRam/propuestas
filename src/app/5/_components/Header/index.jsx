import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import ShieldIcon from '@mui/icons-material/Shield';
import Link from 'next/link';

const navItems = [
  { name: 'Beneficios', href: '#beneficios' },
  { name: 'Testimoniales', href: '#testimoniales' },
  { name: 'Clínicas', href: '#clinicas' },
  { name: 'Precios', href: '#precios' },
  { name: 'Pagos', href: '#pagos' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerBg, setHeaderBg] = useState('rgba(47, 156, 224, 0.95)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderBg('rgba(33, 81, 212, 0.45)');
      } else {
        setHeaderBg('rgba(47, 156, 224, 0.95)');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="fixed" sx={{ background: headerBg, transition: 'background-color 0.3s ease' }}>
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ShieldIcon sx={{ mr: 1, fontSize: '2rem', color: 'secondary.main' }} />
          <Typography variant="h6" noWrap sx={{ fontWeight: 'bold' }}>
            Kubrelo
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
          {navItems.map((item) => (
            
              <Typography 
                component="a" 
                sx={{ color: 'white', textDecoration: 'none', fontWeight: 500, '&:hover': { color: 'secondary.main' } }} 
                href={item.href}
                key={item.name} >
                {item.name}
              </Typography>
            
          ))}
          <Link href="#contacto" passHref>
            <Button variant="contained" sx={{ padding: '0.7rem 1.5rem' }}>
              Contacto
            </Button>
          </Link>
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      
      {mobileOpen && (
        <Box sx={{ display: { md: 'none' }, background: '#000', py: 2, transition: '0.3s', boxShadow: '0 10px 27px rgba(255, 215, 0, 0.3)' }}>
          {navItems.map((item) => (
            
              <Typography component="a"  href={item.href}  onClick={handleDrawerToggle} sx={{ display: 'block', color: 'white', textDecoration: 'none', py: 1, px: 2, '&:hover': { color: 'secondary.main' } }}  key={item.name}>
                {item.name}
              </Typography>
            
          ))}
          <Link href="#contacto" passHref>
            <Button variant="contained" fullWidth sx={{ mt: 2, mx: 2, padding: '0.7rem 1.5rem' }}>
              Contacto
            </Button>
          </Link>
        </Box>
      )}
    </AppBar>
  );
}