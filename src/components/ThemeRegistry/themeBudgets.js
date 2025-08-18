import { createTheme } from '@mui/material/styles';
import { red, grey } from "@mui/material/colors"

export const themeB = createTheme({
  palette: {
    primary: {
      main: '#b8314a',
    },
    secondary: {
      main: '#d36a7e',
    },
    white: {
      main: "#ffffff",
      focus: "#ffffff",
    },

    black: {
      light: "#000000",
      main: "#000000",
      focus: "#000000",
    },
    grey: {
      100: "#f8f9fa",
      200: "#f0f2f5",
      300: "#dee2e6",
      400: "#ced4da",
      500: "#adb5bd",
      600: "#6c757d",
      700: "#495057",
      800: "#343a40",
      900: "#212529",
    },
  },
  typography: {
    fontSize: 14,
    h1: {
      fontSize: "1.6em",
      color: "#48c0b6",
      marginTop:"0.45em",
      marginBottom:"0.35em",

      '@media (min-width:600px)': {
        fontSize: "2.10em", 
        marginTop:"0.65em",
        marginBottom:"0.50em"
      },
    },
  },
});