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
import { useState } from "react";
import { useSelector } from "react-redux";
import PopUpComponent from "../../component/pop-up.component";
import AddCategorieComponent from "../../component/add-categorie.component";
import EmpruntComponent from "../../component/emprunt.component";
import moment from "moment";

export default function ListEmpruntPage() {
  const [open, setOpen] = useState(false);
  const emprunt = useSelector((state: any) => state.emprunt);
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
                <TableCell>Date empurnt</TableCell>
                <TableCell>Date retour</TableCell>
                <TableCell>Livre</TableCell>
                <TableCell>Code exemplaire</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {emprunt?.data?.map((row: any, index: number) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>
                    {moment(row.dateEmprunt).format("DD-MM-YYYY à HH:MM")}
                  </TableCell>
                  <TableCell>
                    {row.dateRetour &&
                      moment(row.dateRetour).format("DD-MM-YYYY à HH:MM")}
                  </TableCell>
                  <TableCell>{row.exemplaire?.livre?.titre}</TableCell>
                  <TableCell>{row.exemplaire?.code}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <PopUpComponent open={open} setOpen={setOpen}>
          <Box width={600}>
            <EmpruntComponent setOpen={setOpen}></EmpruntComponent>
          </Box>
        </PopUpComponent>
      </Box>
    </Box>
  );
}
