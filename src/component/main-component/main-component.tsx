import { Box } from "@mui/material";
import SiderComponent from "../sider-component";
import NavBarComponent from "../nav-bar.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../../page/home/home.page";
import LivrePage from "../../page/livre/list.page";
import ListEmpruntPage from "../../page/emprunt/list.page";
import { useEffect, useState } from "react";
import LoginPage from "../../page/auth/login.page";
import { useSelector } from "react-redux";
import CategoriePage from "../../page/categorie/categorie.page";
import PreloaderComponent from "../preloader.component";
import LoaderComponent from "./loader.component";
export default function MainComponent({ setToken }) {
  const [isAuth, setIsAuth] = useState(false);
  const user = useSelector((state: any) => state.user);
  const [isLoad, setIsLoad] = useState();
  useEffect(() => {
    if (user.data.access_token) {
      setToken(user.data.access_token);
      setIsAuth(true);
    }
  }, [user]);
  return (
    <Box height={"100%"} width={"100%"}>
      <BrowserRouter>
        {isAuth ? (
          isLoad ? (
            <Box display={"flex"} height={"100%"}>
              <Box height={"100%"}>
                <SiderComponent></SiderComponent>
              </Box>
              <Box display={"flex"} flexDirection={"column"} flex={1}>
                <NavBarComponent></NavBarComponent>

                <Routes>
                  <Route path={"/"} element={<HomePage></HomePage>}></Route>
                  <Route>
                    <Route
                      path="livre"
                      element={<LivrePage></LivrePage>}
                    ></Route>
                  </Route>
                  <Route>
                    <Route
                      path="emprunt"
                      element={<ListEmpruntPage></ListEmpruntPage>}
                    ></Route>
                  </Route>
                  <Route>
                    <Route
                      path="categorie"
                      element={<CategoriePage></CategoriePage>}
                    ></Route>
                  </Route>
                </Routes>
              </Box>
            </Box>
          ) : (
            <>
              <PreloaderComponent></PreloaderComponent>
              <LoaderComponent setIsLoad={setIsLoad}></LoaderComponent>
            </>
          )
        ) : (
          <LoginPage></LoginPage>
        )}
      </BrowserRouter>
    </Box>
  );
}
