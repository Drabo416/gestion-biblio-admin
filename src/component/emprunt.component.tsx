import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRequest } from "../Rethinkecture/hooks/use-request.hook";
import { ReducerEnum } from "../enum/reducer.enum";

export default function EmpruntComponent({ setOpen }) {
  const livre = useSelector((state: any) => state.livre);
  const [currentLivre, setCurrentLivre] = useState({});
  const [value, setValue] = useState({});
  const { postRequest } = useRequest();
  const submit = useCallback(async () => {
    const { data, error } = await postRequest({
      uri: "emprunt",
      payload: { exemplaireId: value.exemplaireId },
      stateName: ReducerEnum.Emprunt,
    });
    if (error.code == -1) {
      setOpen(false);
    } else {
      alert("Veuillez réessayer");
    }
  }, [value]);
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography fontSize={20} textAlign={"center"} fontWeight={"bold"}>
        Emprunter un livre
      </Typography>
      <Box alignSelf={"center"} width={"90%"} my={3}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Livre</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //   value={age}
            label="Age"
            onChange={(e) => {
              const index = livre.data.findIndex(
                (item) => item.id == e.target.value
              );
              if (index != -1) {
                setCurrentLivre(livre.data[index]);
                setValue({
                  ...value,
                  livreId: livre.data[index].id,
                });
              }
            }}
          >
            <MenuItem></MenuItem>
            {livre.data.map(
              (item) =>
                item.exemplaire.filter((item) => item.disponible).length && (
                  <MenuItem value={item.id}>{item.titre}</MenuItem>
                )
            )}
          </Select>
        </FormControl>
        <FormControl sx={{ mt: 5 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Exemplaire</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //   value={age}
            label="Age"
            onChange={(e) => {
              const index = currentLivre?.exemplaire?.findIndex(
                (item) => item.id == e.target.value
              );
              if (index != -1) {
                setValue({
                  ...value,
                  exemplaireId: currentLivre?.exemplaire[index].id,
                });
              }
            }}
          >
            <MenuItem></MenuItem>
            {currentLivre?.exemplaire?.map((item) => (
              <MenuItem value={item.id}>{item.code}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Button
        onClick={submit}
        sx={{ alignSelf: "center", mb: 3 }}
        variant="contained"
      >
        Enregistrer
      </Button>
    </Box>
  );
}
