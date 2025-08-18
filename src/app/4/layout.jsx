"use client";
import themeOne from "../../components/ThemeRegistry/themeOptionOne";
import { ThemeProvider, CssBaseline } from "@mui/material";


export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={themeOne}>
          <CssBaseline />
          {children}
        </ThemeProvider>
    
    
  );
}
