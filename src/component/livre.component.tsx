import { Box, Typography } from "@mui/material";

export default function LivreComponent() {
  return (
    <Box
      width={250}
      m={2}
      borderRadius={2}
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"}
      height={300}
    >
      <Box
        sx={{
          backgroundImage:
            "url(https://cdn.franceloisirs.ch/2735154-1733319-thickbox/l-art-subtil-de-s-en-foutre.jpg)",
          height: "60%",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          mx: "auto",
        }}
      ></Box>
      <Typography mt={2} ml={1} fontSize={18} fontWeight={"bold"}>
        Lorem ipsum, dolor
      </Typography>
      <Typography ml={1}>Auteur: Lorem lorem</Typography>
      <Typography ml={1}>Date de sortie: 20-10-2023</Typography>
      <Typography ml={1}>Categorie: Lorem lorem</Typography>
    </Box>
  );
}
