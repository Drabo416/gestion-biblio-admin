import { Box, Button, Input, TextField } from "@mui/material";
import { colors } from "../theme/color.theme";

export default function HeaderComponent() {
  return (
    <Box width={"100vw"} display={"flex"} alignItems={"center"} height={60}>
      <Button variant="link">Accueil</Button>
      <Button variant="link">Bibliothème numéirique</Button>
      <Box>
        <TextField></TextField>
      </Box>
    </Box>
  );
}
