// src/components/Header.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useScrollTrigger, Slide } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const NavBrand = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    marginRight: 'auto',
    '& i': {
        marginRight: theme.spacing(0.5),
        fontSize: '1.8rem',
    },
}));

const NavLink = styled(Link)(({ theme }) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.3s ease',
    '&:hover': {
        color: theme.palette.primary.main,
    },
}));

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Header = (props) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerList = (
        <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            sx={{ width: 250, background: '#000', height: '100%' }}
        >
            <List>
                {['Beneficios', 'Clínicas', 'Precios', 'Pagos', 'Contacto'].map((text) => (
                    <ListItem button key={text} component={Link} href={`#${text.toLowerCase()}`}>
                        <ListItemText primary={text} sx={{ color: '#fff' }} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <HideOnScroll {...props}>
            <AppBar position="fixed" sx={{ background: '#000', boxShadow: '0 2px 10px rgba(255, 215, 0, 0.3)' }}>
                <Toolbar component="nav" sx={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
                    <NavBrand>
                        <FontAwesomeIcon icon={faShieldAlt} size="2x" />
                        <Typography variant="h6" component="span" sx={{ ml: 1 }}>
                            PinPumPam
                        </Typography>
                    </NavBrand>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
                        <NavLink href="#beneficios">Beneficios</NavLink>
                        <NavLink href="#clinicas">Clínicas</NavLink>
                        <NavLink href="#precios">Precios</NavLink>
                        <NavLink href="#pagos">Pagos</NavLink>
                        <Button
                            variant="contained"
                            color="primary"
                            href="#contacto"
                            sx={{
                                color: 'primary.contrastText',
                                borderRadius: 25,
                                fontWeight: 'bold',
                                '&:hover': {
                                    background: '#FFC107',
                                },
                            }}
                        >
                            Contacto
                        </Button>
                    </Box>

                    {/* Mobile Menu Button */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            sx={{ color: '#FFD700' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
                
                {/* Mobile Drawer */}
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                    PaperProps={{
                        sx: { background: 'rgba(0, 0, 0, 0.95)', color: '#fff' }
                    }}
                >
                    {drawerList}
                </Drawer>
            </AppBar>
        </HideOnScroll>
    );
};

export default Header;