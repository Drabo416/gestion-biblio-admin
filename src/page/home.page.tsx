import { Box, Typography } from "@mui/material";
import home from "../assets/home.jpg";
import LivreComponent from "../component/livre.component";
import HeaderComponent from "../component/header.component";
import { colors } from "../theme/color.theme";
export default function HomePage() {
  return (
    <Box width={"100%"}>
      <HeaderComponent></HeaderComponent>
      <Box mt={5} ml={5} display={"flex"} alignItems={"center"}>
        <Typography fontSize={20} fontWeight={"bold"}>
          BIENVENUE DANS VOTRE BILIOTHEQUE
        </Typography>
        <Box py={3} bgcolor={colors.black[100]} ml={5} width={"60%"}>
          <Typography mx={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eius
            unde, placeat earum commodi harum? Explicabo omnis ad ea ullam unde
            iure doloribus cupiditate deleniti animi dignissimos, alias illo
            deserunt.
          </Typography>
        </Box>
      </Box>
      <Box
        width={"90%"}
        py={2}
        bgcolor={colors.primary[500]}
        mx={"auto"}
        mt={5}
      >
        <Typography color={"white"} fontSize={16} ml={3}>
          Catégorie 1
        </Typography>
      </Box>
      <Box
        justifyContent={"center"}
        display={"flex"}
        flexWrap={"wrap"}
        mx={"auto"}
        mt={5}
      >
        {Array.from(Array(5).keys()).map((item) => (
          <LivreComponent></LivreComponent>
        ))}
      </Box>
      <Box
        width={"90%"}
        py={2}
        bgcolor={colors.primary[500]}
        mx={"auto"}
        mt={5}
      >
        <Typography color={"white"} fontSize={16} ml={3}>
          Catégorie 2
        </Typography>
      </Box>
      <Box
        justifyContent={"center"}
        display={"flex"}
        flexWrap={"wrap"}
        mx={"auto"}
        mt={5}
      >
        {Array.from(Array(5).keys()).map((item) => (
          <LivreComponent></LivreComponent>
        ))}
      </Box>
    </Box>
  );
}
