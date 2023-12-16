import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/color.theme";
import MainComponent from "./component/main-component/main-component";
import RethinkectureProvider from "./Rethinkecture/provider/rethinkecture.provider";
import { BaseUrl } from "./api/base-url";
import { ReducerStoreConstant } from "./constant/reducer-store.constant";
import { useState } from "react";

function App() {
  const [token, setToken] = useState("");
  return (
    <ThemeProvider theme={theme}>
      <RethinkectureProvider
        token={token}
        baseUrl={BaseUrl}
        store={ReducerStoreConstant}
      >
        <div style={{ height: "100vh", width: "100vw" }}>
          <MainComponent setToken={setToken}></MainComponent>
        </div>
      </RethinkectureProvider>
    </ThemeProvider>
  );
}

export default App;
