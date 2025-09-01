// theme.js
import { createTheme } from '@mui/material/styles';

const themeThree = createTheme({
  palette: {
    primary: {
      main: '#2F9CE0', 
    },
    secondary: {
      main: '#2FD4E0', 
    },
    action: {
      main: '#2F64E0', 
    },
    text: {
      primary: '#333',
      secondary: '#666',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.8rem',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '1.6rem',
      fontWeight: 'bold',
    },
    subtitle1: {
      fontSize: '1.3rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          fontWeight: 'bold',
          padding: '1rem 2.5rem',
          textTransform: 'none',
        },
        contained: {
          background: 'linear-gradient(135deg, #2FD4E0, #2F64E0)',
          color: '#fff',
          boxShadow: '0 6px 20px rgba(47, 156, 224, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #2F64E0, #2F9CE0)',
            transform: 'translateY(-3px)',
            boxShadow: '0 8px 25px rgba(47, 156, 224, 0.6)',
          },
        },
        outlined: {
          color: '#2FD4E0',
          borderColor: '#2FD4E0',
          '&:hover': {
            background: '#2FD4E0',
            color: '#fff',
            transform: 'translateY(-3px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          transition: 'all 0.4s ease',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(47, 156, 224, 0.95)',
          boxShadow: '0 2px 20px rgba(47, 156, 224, 0.3)',
          backdropFilter: 'blur(10px)',
          transition: 'background-color 0.3s ease',
        },
      },
    },
  },
});

export default themeThree;
