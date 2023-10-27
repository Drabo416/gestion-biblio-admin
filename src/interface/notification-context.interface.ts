import { LoarderParamsInterface } from "./loarder-params.interface";
import { PopUpNotification } from "./pop-up-notification.interface";
import { StackNotificationParams } from "./stack-notification-params.interface";

export interface NotificationContextInterface{
    createLoader:(params:LoarderParamsInterface)=>{},
    hideLoader:Function,
    setCreateLoader:Function,
    setHideLoader:Function,
    createSnackbarNotification:(params:StackNotificationParams)=>{},
    setCreateSnackbarNotification:Function,
    createPopUpNotification:(notification:PopUpNotification)=>{},
    setPopUpNotification:Function
}