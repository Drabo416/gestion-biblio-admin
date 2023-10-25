import { Box, Button, TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { colors } from "../../theme/color.theme";
import { useCallback, useState } from "react";
import { useRequest } from "../../Rethinktecture/hook/fetch-data.hook";
import { CREATE_RESOURCE_REQUEST } from "../../Store/reducers/action";
export default function LoginPage() {
  const [values, setValues] = useState({});
  const { fetchData } = useRequest();
  const inputHandlerOnChange = useCallback(
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
    [values]
  );

  const submit = useCallback(async () => {
    const { data, error } = await fetchData({
      type: CREATE_RESOURCE_REQUEST,
      uri: "login",
    });
    console.log(data, error);
  }, [values, fetchData]);
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        width={400}
        height={450}
        boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <AccountCircleIcon
          sx={{ color: colors.primary[500], fontSize: 70, mt: 3 }}
        ></AccountCircleIcon>

        <TextField
          placeholder="Email"
          name="email"
          onChange={inputHandlerOnChange}
          sx={{ width: "90%", mt: 5 }}
        ></TextField>
        <TextField
          placeholder="Mot de passe"
          name="password"
          sx={{ width: "90%", mt: 5 }}
          onChange={inputHandlerOnChange}
        ></TextField>
        <Button onClick={submit} variant="contained" sx={{ mt: 5 }}>
          Se connecter
        </Button>
      </Box>
    </Box>
  );
}
