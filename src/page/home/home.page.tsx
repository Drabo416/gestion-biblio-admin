import { Box, Button, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      flex={1}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box py={5} px={5} boxShadow={'rgba(149, 157, 165, 0.1) 0px 8px 24px;'} >
        <Typography>
          Bienvenue sur votre plateforme de gestion de bibliothèque
        </Typography>
        <Box display={'flex'} mt={5} justifyContent={'space-between'} >
          <Button  variant='contained'>Enregistrer un livre</Button>
          <Button variant='contained' >Gérer les emprunts</Button>
        </Box>
      </Box>
    </Box>
  );
}
