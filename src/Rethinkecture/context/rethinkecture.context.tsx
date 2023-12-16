import { createContext } from "react";
import { RethinkectureInterface } from "../interface/rethinkecture-props.interface";

export const RethinkectureContext = createContext<RethinkectureInterface>(null);
