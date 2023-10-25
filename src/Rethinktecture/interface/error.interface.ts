import { ErrorEnumType } from "../enum/error-type.enum"

export interface ErrorInterface{
    message:string
    code:ErrorEnumType|number
    serveurMessage?:string
}