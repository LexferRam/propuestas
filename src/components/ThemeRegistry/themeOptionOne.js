// theme.js
import { createTheme } from '@mui/material/styles';

const themeOne = createTheme({
  palette: {
    primary: {
      main: '#93152e',
      light: '#c23848',
      dark: '#36040e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#e1adbb',
      light: '#db8aa8',
      dark: '#c23848',
      contrastText: '#93152e',
    },
    background: {
      default: '#fff',
      paper: '#f8f9fa',
    },
    text: {
      primary: '#333',
      secondary: '#666',
      disabled: '#ccc',
    },
    trustIndicators: {
      number: '#93152e',
      label: '#666',
    },
    gradients: {
      hero: 'linear-gradient(135deg, #93152e 0%, #c23848 50%, #db8aa8 100%)',
      clinics: 'linear-gradient(135deg, #93152e 0%, #c23848 100%)',
      payment: 'linear-gradient(135deg, #c23848 0%, #db8aa8 100%)',
      footer: 'linear-gradient(135deg, #93152e 0%, #000 100%)',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      lineHeight: 1.2,
      '@media (max-width:900px)': {
        fontSize: '2.5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2.8rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '1rem',
      '@media (max-width:600px)': {
        fontSize: '2.2rem',
      },
    },
    h3: {
      fontSize: '1.6rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    h5: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      marginBottom: '0.8rem',
    },
    subtitle1: {
      fontSize: '1.3rem',
      textAlign: 'center',
      marginBottom: '4rem',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      '@media (max-width:600px)': {
        fontSize: '1.1rem',
      },
    },
    body1: {
      lineHeight: 1.7,
      fontSize: '1.1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          fontWeight: 'bold',
          textTransform: 'none',
          padding: '12px 30px',
          transition: 'all 0.3s ease',
          boxShadow: 'none',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 8px 25px rgba(147, 21, 46, 0.4)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            background: 'linear-gradient(135deg, #e1adbb, #db8aa8)',
            color: '#93152e',
            boxShadow: '0 6px 20px rgba(225, 173, 187, 0.4)',
            '&:hover': {
              background: 'linear-gradient(135deg, #db8aa8, #c23848)',
              color: '#fff',
            },
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            background: 'transparent',
            color: '#e1adbb',
            border: '2px solid #e1adbb',
            '&:hover': {
              background: '#e1adbb',
              color: '#93152e',
            },
          },
        },
        {
          props: { variant: 'contact' },
          style: {
            background: 'linear-gradient(135deg, #c23848, #db8aa8)',
            color: '#fff',
            boxShadow: '0 4px 15px rgba(194, 56, 72, 0.3)',
            '&:hover': {
              background: 'linear-gradient(135deg, #db8aa8, #e1adbb)',
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          transition: 'all 0.4s ease',
          boxShadow: '0 10px 30px rgba(147, 21, 46, 0.1)',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 20px 40px rgba(147, 21, 46, 0.2)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(240, 231, 226, 0.85)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 20px rgba(147, 21, 46, 0.3)',
        },
      },
    },
  },
});

export default themeOne;