import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import GlobalStyles from "./styles";
import MainLayout from "./layouts";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <MainLayout />
  </ThemeProvider>
);

export default App;
