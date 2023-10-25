import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/color.theme";
import MainComponent from "./component/main-component/main-component";
import { Provider } from "react-redux";
import Store from "./Store/configStore";

function App() {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <div style={{ height: "100vh", width: "100vw" }}>
          <MainComponent></MainComponent>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
