import { Box, Breadcrumbs, IconButton, Link, Typography } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
export default function NavBarComponent() {
  return (
    <Box
      width={"100%"}
      height={60}
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Breadcrumbs sx={{ ml: 5 }} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
      <IconButton sx={{ mr: 5 }}>
        <PowerSettingsNewIcon sx={{ color: "red" }}></PowerSettingsNewIcon>
      </IconButton>
    </Box>
  );
}
