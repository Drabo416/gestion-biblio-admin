import { useCallback, useEffect } from "react";
import { ReducerEnum } from "../../enum/reducer.enum";
import { useRequest } from "../../Rethinkecture/hooks/use-request.hook";

export default function LoaderComponent({ setIsLoad }) {
  const { getRequest } = useRequest();
  const fetchRequest = useCallback(async (uri: string, stateName?: string) => {
    const { data, error } = await getRequest({
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
        fetchRequest("emprunt", ReducerEnum.Emprunt),
      ]);
      setIsLoad(true);
    })();
  }, []);
  return null;
}
