"use client";
import themeThree from "../../components/ThemeRegistry/themeOptionThree";
import { ThemeProvider, CssBaseline } from "@mui/material";

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={themeThree}>
          <CssBaseline />
          {children}
        </ThemeProvider>
  );
}
