import axios from "axios";

function getCsrfToken(document) {
  const tokenElement = document.querySelector("meta[name='csrf-token']");
  return tokenElement.getAttribute("content") || "";
}

export const configureAxios = (document) => {
  axios.defaults.headers.common["cache-control"] = "no-cache";
  axios.defaults.headers.common["anti-csrftoken-a2z"] = getCsrfToken(document);
};
