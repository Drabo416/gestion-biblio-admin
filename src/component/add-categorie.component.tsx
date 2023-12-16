import { Box, Button, FormControl, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { ReducerEnum } from "../enum/reducer.enum";
import { useRequest } from "../Rethinkecture/hooks/use-request.hook";

export default function AddCategorieComponent({ setOpen }) {
  const [value, setValue] = useState("");
  const { postRequest } = useRequest();
  const submit = useCallback(async () => {
    const { data, error } = await postRequest({
      payload: { label: value },
      stateName: ReducerEnum.Categorie,
      uri: "categorie",
    });
    if (error.code == -1) {
      setOpen(false);
    } else {
      alert("Veuillez réessayer");
    }
  }, [value]);
  return (
    <Box mx="auto" width={"80%"} py={2}>
      <FormControl fullWidth>
        <TextField onChange={(e) => setValue(e.target.value)} label="Libellé">
          {" "}
        </TextField>
      </FormControl>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        width={"80%"}
        mx="auto"
        my={2}
      >
        <Button
          onClick={() => setOpen(false)}
          variant="contained"
          color="error"
        >
          Annuler
        </Button>
        <Button onClick={submit} variant="contained">
          Enregistrer
        </Button>
      </Box>
    </Box>
  );
}
