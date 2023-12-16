import { ErrorEnumType } from "../../enum/error-type.enum";

export const RequestDefaultMessage = {
  [ErrorEnumType.BAD_REQUEST]:
    "Erreur :La requête que vous avez envoyée est incorrecte. Veuillez vérifier les informations que vous avez entrées et réessayer.",
  [ErrorEnumType.UNAUTHORIZED_HTTP]:
    "Erreur :Vous n'avez pas la permission d'accéder à cette ressource. Veuillez vous connecter avec un compte autorisé.",
  [ErrorEnumType.FORBIDDEN]:
    "Erreur :La ressource que vous avez demandée n'existe pas. Veuillez vérifier l'URL que vous avez entrée.",
  [ErrorEnumType.NOT_FOUND_HTTP]:
    "Erreur :La méthode HTTP utilisée n'est pas autorisée pour cette ressource.",
  [ErrorEnumType.CONFLICT]:
    "Erreur :Une opération a été tentée sur une ressource en conflit avec son état actuel.",
  [ErrorEnumType.INTERNAL_SERVER_ERROR]:
    "Erreur :Une erreur s'est produite lors du traitement de votre demande.",
  [ErrorEnumType.UNAUTHORIZED]:
    "Erreur :Vous n'avez pas la permission d'accéder à cette ressource.",
  [ErrorEnumType.ERR_NETWORK]:
    "Erreur :Connexion au serveur impossible. Veuillez vérifier votre connexion internet ou réessayez plus tard.",
  [ErrorEnumType.ERR_INTERNET_DISCONNECTED]:
    "Erreur :Impossible de contacter le serveur. Veuillez vérifier votre connexion internet.",
};
