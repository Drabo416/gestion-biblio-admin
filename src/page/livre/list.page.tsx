import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import PopUpComponent from "../../component/pop-up.component";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function LivrePage() {
  const [open, setOpen] = useState(false);
  const livre = useSelector((state: any) => state.livre);
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box alignSelf={"flex-end"} mt={3} mr={3}>
        <Button onClick={() => setOpen(true)} variant="contained">
          Ajouter un livre
        </Button>
        <Button
          sx={{ ml: 5 }}
          onClick={() => setOpen(true)}
          variant="contained"
        >
          Ajouter un exemplaire
        </Button>
      </Box>
      <Box width={"90%"} mt={3} alignSelf={"center"}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>N°</TableCell>
                <TableCell>Titre</TableCell>
                <TableCell>Catégorie</TableCell>
                <TableCell>Auteur</TableCell>
                <TableCell>Nombre examlaire</TableCell>
                <TableCell>Disponible</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {livre.data?.map((row: any, index: number) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>{row.titre}</TableCell>
                  <TableCell>{row.categorie?.label}</TableCell>
                  <TableCell>{row.auteur}</TableCell>
                  <TableCell>{row.exemplaire?.length}</TableCell>
                  <TableCell>
                    {row.exemplaire?.filter((item) => item.disponible)?.length}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <PopUpComponent open={open} setOpen={setOpen}>
          <Box width={600}>
            <Typography
              color={"blackwœ"}
              textAlign={"center"}
              fontSize={20}
              fontWeight={"bold"}
            >
              Ajouter un livre
            </Typography>
            <Box mt={3}></Box>
          </Box>
        </PopUpComponent>
      </Box>
    </Box>
  );
}
