// components/Header/NavMenu.js
import { Box, List, ListItem, Button, Drawer, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';

export default function NavMenu({ mobileOpen, handleDrawerToggle }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const navItems = [
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Clínicas', href: '#clinicas' },
    { label: 'Precios', href: '#precios' },
    { label: 'Pagos', href: '#pagos' },
    { label: 'Contacto', href: '#contacto', isButton: true },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', py: 2 }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.href} sx={{ justifyContent: 'center' }}>
            {item.isButton ? (
              <Button
                variant="contained"
                href={item.href}
                sx={{
                  background: 'linear-gradient(135deg, #c23848, #db8aa8)',
                  color: '#fff',
                  borderRadius: '25px',
                  px: 3,
                  py: 1,
                  fontWeight: 'bold',
                }}
              >
                {item.label}
              </Button>
            ) : (
              <Link href={item.href} passHref>
                <Button
                  sx={{
                    color: '#93152e',
                    fontWeight: 500,
                    '&:hover': {
                      color: '#36040e',
                    },
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '100%',
              backgroundColor: '#000',
              color: '#fff',
            },
          }}
        >
          {drawer}
        </Drawer>
      ) : (
        <Box component="nav">
          <List sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <ListItem key={item.href} disablePadding>
                {item.isButton ? (
                  <Button
                    variant="contained"
                    href={item.href}
                    sx={{
                      background: 'linear-gradient(135deg, #c23848, #db8aa8)',
                      color: '#fff',
                      borderRadius: '25px',
                      px: 3,
                      py: 1,
                      fontWeight: 'bold',
                      boxShadow: '0 4px 15px rgba(194, 56, 72, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #db8aa8, #e1adbb)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(194, 56, 72, 0.4)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Link href={item.href} passHref>
                    <Button
                      sx={{
                        color: '#93152e',
                        fontWeight: 500,
                        position: 'relative',
                        '&:hover': {
                          color: '#36040e',
                          '&::after': {
                            width: '100%',
                          },
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          width: 0,
                          height: '2px',
                          bottom: '-5px',
                          left: 0,
                          backgroundColor: '#e1adbb',
                          transition: 'width 0.3s ease',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </Link>
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </>
  );
}