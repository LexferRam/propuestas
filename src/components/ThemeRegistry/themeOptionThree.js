// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const themeThree = createTheme({
    palette: {
        primary: {
            main: '#FFD700', 
            contrastText: '#000',
        },
        secondary: {
            main: '#000', 
        },
        text: {
            primary: '#fff',
            secondary: '#ccc',
        },
        background: {
            default: '#000',
            paper: '#1a1a1a',
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
            fontSize: '2.5rem',
            fontWeight: 'bold',
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 30,
                    fontWeight: 'bold',
                    textTransform: 'none',
                    padding: '1rem 2rem',
                },
                containedPrimary: {
                    color: '#000',
                    '&:hover': {
                        backgroundColor: '#FFC107',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 5px 15px rgba(255, 215, 0, 0.4)',
                    },
                },
                outlinedPrimary: {
                    color: '#FFD700',
                    borderColor: '#FFD700',
                    '&:hover': {
                        backgroundColor: '#FFD700',
                        color: '#000',
                    },
                },
            },
        },
    },
});

export default themeThree;