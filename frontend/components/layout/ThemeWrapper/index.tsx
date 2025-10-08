"use client";

import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}