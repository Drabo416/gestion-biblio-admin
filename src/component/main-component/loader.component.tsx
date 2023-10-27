import { Box, CircularProgress } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useRequest } from "../../Rethinktecture/hook/fetch-data.hook";
import {
  CREATE_RESOURCE_REQUEST,
  GET_RESOURCE_REQUEST,
} from "../../Store/reducers/action";
import { ReducerEnum } from "../../enum/reducer.enum";

export default function LoaderComponent({ setIsLoad }) {
  const { fetchData } = useRequest();
  const fetchRequest = useCallback(async (uri: string, stateName?: string) => {
    const { data, error } = await fetchData({
      type: GET_RESOURCE_REQUEST,
      uri: uri,
      stateName,
    });
    if (error.code == -1) return data;
  }, []);
  useEffect(() => {
    (async () => {
      await Promise.all([
        fetchRequest("categorie", ReducerEnum.Categorie),
        fetchRequest("livre", ReducerEnum.Livre),
      ]);
      setIsLoad(true);
    })();
  }, []);
  return null;
}
