import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import * as yup from "yup";
import { useRequest } from "../Rethinkecture/hooks/use-request.hook";
import { ReducerEnum } from "../enum/reducer.enum";
export default function AddLivreComponent({ setOpen }) {
  const { postRequest } = useRequest();
  const submit = useCallback(async (value: any) => {
    const { data, error } = await postRequest({
      uri: "livre",
      payload: value,
      stateName: ReducerEnum.Livre,
    });
    if (error.code == -1) {
      setOpen(false);
    } else {
      alert("Veuillez réessayer");
    }
  }, []);
  const categorie = useSelector((state: any) => state.categorie);
  const [defaultValue, setDefaultValue] = useState({});
  const schema = useMemo(() => {
    return yup.object().shape({
      auteur: yup.string().required("L'auteur est obligatoire"),
      description: yup.string().required("La description est obligatoire"),
      categorieId: yup.string().required("La cartegorie est obligatoire"),
      titre: yup.string().required("Le titre est obligatoire"),
      imageUrl: yup.string().required("L'image est obligatoire"),
    });
  }, []);
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
            <TextField
              onChange={handleChange("titre")}
              onBlur={handleBlur("titre")}
              value={values.titre}
              label="Titre"
            >
              {" "}
            </TextField>
          </FormControl>
          <FormControl sx={{ my: 1 }} fullWidth>
            <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
            <Select
              onChange={handleChange("categorieId")}
              onBlur={handleBlur("categorieId")}
              value={values.categorieId}
              placeholder="Categorie"
            >
              {categorie.data.map((item) => (
                <MenuItem value={item.id}>{item.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ my: 1 }} fullWidth>
            <TextField
              onChange={handleChange("auteur")}
              onBlur={handleBlur("auteur")}
              value={values.auteur}
              label="Auteur"
            >
              {" "}
            </TextField>
          </FormControl>
          <FormControl sx={{ my: 1 }} fullWidth>
            <TextField
              onChange={handleChange("imageUrl")}
              onBlur={handleBlur("imageUrl")}
              value={values.imageUrl}
              label="Lien de l'image"
            >
              {" "}
            </TextField>
          </FormControl>
          <FormControl sx={{ my: 1 }} fullWidth>
            <TextField
              onChange={handleChange("description")}
              onBlur={handleBlur("description")}
              value={values.description}
              multiline
              minRows={4}
              label="Description"
            >
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
            <Button onClick={handleSubmit} variant="contained">
              Enregistrer
            </Button>
          </Box>
        </Box>
      )}
    </Formik>
  );
}
