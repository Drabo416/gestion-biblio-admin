import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { ReducerEnum } from "../enum/reducer.enum";
import { useRequest } from "../Rethinkecture/hooks/use-request.hook";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { useResourceAction } from "../Rethinkecture/hooks/resource-action.hook";
export default function AddExemplaireComponent({ setOpen }) {
  const { postRequest } = useRequest();
  const { updateResource } = useResourceAction();
  const livre = useSelector((state: any) => state.livre);
  const [defaultValue, setDefaultValue] = useState({});
  const schema = useMemo(() => {
    return yup.object().shape({
      livreId: yup.string().required("Le livre est obligatoire"),
      code: yup.string().required("Le code  est obligatoire"),
    });
  }, []);
  const submit = useCallback(
    async (value: any) => {
      const { data, error } = await postRequest({
        payload: value,
        uri: "livre/exemplaire",
      });
      if (error.code == -1) {
        const currentLivreArray = livre.data.filter(
          (item) => item.id == value.livreId
        );
        const currentLivre = currentLivreArray[0];
        const exemplaire = [...currentLivre.exemplaire, data];
        updateResource(ReducerEnum.Livre, { ...currentLivre, exemplaire });
        setOpen(false);
      } else {
        alert("Veuillez réessayer");
      }
    },
    [livre]
  );
  return (
    <Formik
      initialValues={defaultValue}
      enableReinitialize
      validationSchema={schema}
      onSubmit={submit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setValues,
        setTouched,
      }) => (
        <Box mx="auto" width={"80%"} py={2}>
          <FormControl sx={{ my: 1 }} fullWidth>
            <InputLabel id="demo-simple-select-label">Livre</InputLabel>
            <Select
              onChange={handleChange("livreId")}
              onBlur={handleBlur("livreId")}
              value={values.livreId}
              placeholder="Categorie"
            >
              {livre.data.map((item) => (
                <MenuItem value={item.id}>{item.titre}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <TextField
              onChange={handleChange("code")}
              onBlur={handleBlur("code")}
              value={values.code}
              label="Code exemplaire"
            ></TextField>
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
            <Button onClick={handleSubmit} variant="contained">
              Enregistrer
            </Button>
          </Box>
        </Box>
      )}
    </Formik>
  );
}
