import { createTheme } from "@mui/material";
export const colors = {
  primary: {
    100: "#dfceec",
    200: "#c09ed9",
    300: "#a06dc5",
    400: "#813db2",
    500: "#610c9f",
    600: "#4e0a7f",
    700: "#3a075f",
    800: "#270540",
    900: "#130220",
  },
  secondary: {
    100: "#ffe6e6",
    200: "#ffcccc",
    300: "#ffb3b3",
    400: "#ff9999",
    500: "#ff8080",
    600: "#cc6666",
    700: "#994d4d",
    800: "#663333",
    900: "#331a1a",
  },
  black: {
    100: "#e6e6e6",
    200: "#cccccc",
    300: "#b3b3b3",
    400: "#999999",
    500: "#808080",
    600: "#666666",
    700: "#4d4d4d",
    800: "#333333",
    900: "#1a1a1a",
  },
};

const themeSetting = {
  palette: {
    primary: {
      main: colors.primary[500],
    },
    neutral: {
      main: colors.primary[500],
    },
  },
  typography: {
    fontFamilly: ["Source Sans Pro", "sans-serif"].join(","),
    h1: {
      fontFamilly: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 48,
    },
    h2: {
      fontFamilly: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamilly: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamilly: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamilly: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamilly: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
};

export const theme = createTheme(themeSetting);
