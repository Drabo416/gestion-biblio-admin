import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { colors } from "../theme/color.theme";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BookIcon from "@mui/icons-material/Book";
import ApprovalIcon from "@mui/icons-material/Approval";

export default function SiderComponent() {
  return (
    <Box minHeight={"100%"} width={250} bgcolor={colors.primary[500]}>
      <List component="div" disablePadding>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <DashboardIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Tableau de bord" sx={{ color: "white" }} />
        </ListItemButton>
        <List>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <BookIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Livres" sx={{ color: "white" }} />
          </ListItemButton>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <ApprovalIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Emprunts" sx={{ color: "white" }} />
          </ListItemButton>
        </List>
      </List>
    </Box>
  );
}
