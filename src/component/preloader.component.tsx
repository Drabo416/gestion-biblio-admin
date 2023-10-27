import { Box, CircularProgress } from "@mui/material";

export default function PreloaderComponent() {
  return (
    <Box
      flex={1}
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <CircularProgress />
    </Box>
  );
}
