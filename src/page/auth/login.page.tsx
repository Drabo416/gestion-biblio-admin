import { Box, Button, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { colors } from "../../theme/color.theme";
import { useCallback, useState } from "react";
import { ReducerEnum } from "../../enum/reducer.enum";
import { useRequest } from "../../Rethinkecture/hooks/use-request.hook";
import { useSelector } from "react-redux";
export default function LoginPage() {
  const [values, setValues] = useState({});
  const { getRequest, postRequest } = useRequest();
  const [error, setError] = useState("");
  const user = useSelector((state: any) => state.user);
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
    setError("");
    const { data, error } = await postRequest({
      uri: "user/login",
      payload: values,
      stateName: ReducerEnum.User,
    });
    if ([400, 401].includes(error.code)) {
      setError("Le mot de passe ou le mail est incorrect");
    }
  }, [values]);
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
          type="password"
          sx={{ width: "90%", mt: 5 }}
          onChange={inputHandlerOnChange}
        ></TextField>
        <Typography color={"red"}>{error}</Typography>
        <Button onClick={submit} variant="contained" sx={{ mt: 5 }}>
          Se connecter
        </Button>
      </Box>
    </Box>
  );
}
