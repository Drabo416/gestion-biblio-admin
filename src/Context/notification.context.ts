import { createContext } from "react";
import { NotificationContextInterface } from "../interface/notification-context.interface";
let data: NotificationContextInterface;
export const NotificationContext = createContext(data);
