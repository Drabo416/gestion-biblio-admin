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

export default function LivrePage() {
  const [open, setOpen] = useState(false);
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box alignSelf={"flex-end"} mt={3} mr={3}>
        <Button onClick={()=>setOpen(true)} variant="contained">Ajouter</Button>
      </Box>
      <Box width={"90%"} mt={3} alignSelf={"center"}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>N°</TableCell>
                <TableCell align="right">Titre</TableCell>
                <TableCell align="right">Catégorie</TableCell>
                <TableCell align="right">Auteur</TableCell>
                <TableCell align="right">Nombre examlaire</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[].map((row: any) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <PopUpComponent open={open} setOpen={setOpen}>
          <Box width={600}>
            <Typography color={'blackwœ'} textAlign={'center'} fontSize={20} fontWeight={'bold'} >Ajouter un livre</Typography>
            <Box mt={3}>

            </Box>
          </Box>
        </PopUpComponent>
      </Box>
    </Box>
  );
}
