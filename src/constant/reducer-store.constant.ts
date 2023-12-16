import { StoreInterface } from "../Rethinkecture/interface/store.interface";
import { ReducerEnum } from "../enum/reducer.enum";

export const ReducerStoreConstant: StoreInterface = {
  user: {
    defaultValue: {},
    stateName: ReducerEnum.User,
  },
  livre: {
    defaultValue: [],
    stateName: ReducerEnum.Livre,
  },
  categorie: {
    defaultValue: [],
    stateName: ReducerEnum.Categorie,
  },
  emprunt: {
    defaultValue: [],
    stateName: ReducerEnum.Emprunt,
  },
};
