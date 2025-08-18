"use client";
import themeTwo from "../../components/ThemeRegistry/themeOptionTwo";
import { ThemeProvider, CssBaseline } from "@mui/material";


export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={themeTwo}>
          <CssBaseline />
          {children}
        </ThemeProvider>
    
    
  );
}
