import { useState } from "react";
import HomePage from "./page/home.page";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./theme/color.theme";
import LivrePage from "./page/livre.page";
import LoginPage from "./page/login.page";
import MainComponent from "./component/main-component/main-component";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: "100vh", width: "100vw" }}>
        <MainComponent></MainComponent>
      </div>
    </ThemeProvider>
  );
}

export default App;
