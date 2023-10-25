import { AxiosResponse } from "axios";
import { ErrorEnumType } from "../enum/error-type.enum";
import { ErrorInterface } from "../interface/error.interface";

export function errorInterceptor(response: AxiosResponse): ErrorInterface {
  const error: ErrorInterface = { message: "", code: 0 };
  error.serveurMessage = response.data?.message;
  switch (response.status) {
    case ErrorEnumType.BAD_REQUEST:
      error.code = response.status;
      error.message = "La requête que vous avez envoyée au serveur est incorrecte ou mal formée. Veuillez vérifier les paramètres de votre requête et réessayez.";
      break;
    case ErrorEnumType.UNAUTHORIZED_HTTP:
      error.code = response.status;
      error.message =
        "Non autorisé (HTTP) : vous n'avez pas les droits nécessaires pour accéder à cette ressource";
      break;
    case ErrorEnumType.FORBIDDEN:
      error.code = response.status;
      error.message =
        "Interdit : vous n'êtes pas autorisé à accéder à cette ressource";
      break;
    case ErrorEnumType.NOT_FOUND_HTTP:
      error.code = response.status;
      error.message =
        "Identifiant invalide !";
      break;
    case ErrorEnumType.CONFLICT:
      error.code = response.status;
      error.message =
        "Conflit : une opération a été tentée sur une ressource en conflit avec son état actuel";
      break;
    case ErrorEnumType.INTERNAL_SERVER_ERROR:
      error.code = response.status;
      error.message =
        "Erreur interne du serveur : une erreur s'est produite lors du traitement de votre demande";
      break;
    case ErrorEnumType.INVALID_ARGUMENT:
      error.code = response.status;
      error.message = "L'argument fourni est invalide";
      break;
    case ErrorEnumType.MISSING_ARGUMENT:
      error.code = response.status;
      error.message = "Un argument requis est manquant";
      break;
    case ErrorEnumType.UNAUTHORIZED:
      error.code = response.status;
      error.message =
        "Non autorisé : vous n'avez pas les droits nécessaires pour accéder à cette ressource";
      break;
    case ErrorEnumType.UNAUTHORIZED:
      error.code = response.status;
      error.message = "Introuvable : la ressource demandée est inexistante";
      break;
    case ErrorEnumType.DATABASE_ERROR:
      error.code = response.status;
      error.message =
        "Erreur de base de données : une erreur s'est produite lors du traitement de votre demande";
      break;
    case ErrorEnumType.INTERNAL_ERROR:
      error.code = response.status;
      error.message =
        "Erreur interne : une erreur s'est produite lors du traitement de votre demande";
      break;
    case ErrorEnumType.ERR_NETWORK:
      error.code = response.status;
      error.message =
        "Connexion au serveur impossible. Vérifiez votre connexion internet ou réessayez plus tard.";
      break;
    case ErrorEnumType.ERR_INTERNET_DISCONNECTED:
      error.code = response.status;
      error.message =
        "Impossible de contacter le serveur. Veuillez vérifier votre connexion internet";
      break;
    default:
      error.code = -1;
      return error;
  }
  return error;
}
