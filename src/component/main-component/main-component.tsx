import { Box } from "@mui/material";
import SiderComponent from "../sider-component";
import NavBarComponent from "../nav-bar.component";

export default function MainComponent() {
  return (
    <Box height={"100%"} width={"100%"}>
      <Box display={"flex"} height={"100%"}>
        <Box height={"100%"}>
          <SiderComponent></SiderComponent>
        </Box>
        <Box flex={1}>
          <NavBarComponent></NavBarComponent>
        </Box>
      </Box>
    </Box>
  );
}
