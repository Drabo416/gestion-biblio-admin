import { objectIsEmpty } from "../functions/object.function";
import { FormatUrl } from "../interface/format-url.interface";

export function formatUrl(data: FormatUrl) {
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
