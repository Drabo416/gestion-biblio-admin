import { Box } from "@mui/material";
import SiderComponent from "../sider-component";
import NavBarComponent from "../nav-bar.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouteName } from "../../utils/constant/route-name";
import HomePage from "../../page/home/home.page";
import LivrePage from "../../page/livre/list.page";
import ListEmpruntPage from "../../page/emprunt/list.page";
import { useEffect, useState } from "react";
import LoginPage from "../../page/auth/login.page";
import { BaseUrl } from "../../api/base-url";
import { useDispatch, useSelector } from "react-redux";
import { ReducerEnum } from "../../enum/reducer.enum";
import { addResource } from "../../Store/reducers/action";
export default function MainComponent() {
  const [isAuth, setIsAuth] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addResource(ReducerEnum.RequestConfig, { baseUrl: BaseUrl }));
  }, []);
  return (
    <Box height={"100%"} width={"100%"}>
      <BrowserRouter>
        {isAuth ? (
          <Box display={"flex"} height={"100%"}>
            <Box height={"100%"}>
              <SiderComponent></SiderComponent>
            </Box>
            <Box display={"flex"} flexDirection={"column"} flex={1}>
              <NavBarComponent></NavBarComponent>

              <Routes>
                <Route path={"/"} element={<HomePage></HomePage>}></Route>
                <Route>
                  <Route path="livre" element={<LivrePage></LivrePage>}></Route>
                </Route>
                <Route>
                  <Route
                    path="emprunt"
                    element={<ListEmpruntPage></ListEmpruntPage>}
                  ></Route>
                </Route>
              </Routes>
            </Box>
          </Box>
        ) : (
          <LoginPage></LoginPage>
        )}
      </BrowserRouter>
    </Box>
  );
}
