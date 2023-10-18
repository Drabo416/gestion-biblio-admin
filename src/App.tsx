import { useState } from "react";
import HomePage from "./page/home.page";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./theme/color.theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box minHeight={"100vh"} width={"100vw"}>
        <HomePage></HomePage>
      </Box>
    </ThemeProvider>
  );
}

export default App;
