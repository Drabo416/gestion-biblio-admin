import { UrlInterface } from "../interface/url.interface";
import { objectIsEmpty } from "../utils/function/object.function";

export function formatUrl(data: UrlInterface) {
  const { id, baseUrl, query, uri } = data;
  let url = `${baseUrl}${uri}`;
  if (id) {
    url = `${url}/${id}`;
  }
  if (!objectIsEmpty(query)) {
    url = `${url}?`;
  }
  for (let i in query) {
    url = `${url}${i}=${query[i]}&`;
  }
  return url;
}
