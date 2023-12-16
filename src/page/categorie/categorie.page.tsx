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
} from "@mui/material";
import PopUpComponent from "../../component/pop-up.component";
import AddCategorie from "../../component/add-categorie.component";
import AddCategorieComponent from "../../component/add-categorie.component";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function CategoriePage() {
  const [open, setOpen] = useState(false);
  const categorie = useSelector((state: any) => state.categorie);
  useEffect(() => {
    console.log(categorie);
  }, []);
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box alignSelf={"flex-end"} mt={3} mr={3}>
        <Button onClick={() => setOpen(true)} variant="contained">
          Ajouter
        </Button>
      </Box>
      <Box width={"60%"} mt={3} alignSelf={"center"}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>N°</TableCell>
                <TableCell>Libellé</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categorie.data?.map((row: any, index: number) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>{row.label}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <PopUpComponent open={open} setOpen={setOpen}>
          <Box width={600}>
            <AddCategorieComponent setOpen={setOpen}></AddCategorieComponent>
          </Box>
        </PopUpComponent>
      </Box>
    </Box>
  );
}
