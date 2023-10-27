export interface PopUpNotification{
    title?: string;
    content:string;
    button1:string;
    button2?:string;
    action1?:Function
    action2?:Function,
    params1?:Object | Array<any>
    params2?:Object | Array<any>,
    cancleble?:boolean
}