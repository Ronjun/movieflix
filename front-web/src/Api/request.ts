import axios, { Method } from "axios";
import qs from "qs";
import { getSessionData } from "./auth";

export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? "movieflix";
export const CLIENT_SECRET =
  process.env.REACT_APP_CLIENT_SECRET ?? "movieflix123";

type RequestParams = {
  method?: Method;
  url: string;
  data?: object | string;
  params?: object;
  headers?: object;
};

type LoginData = {
  username: string;
  password: string;
};

const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";

export function makeRequest({
  method = "GET",
  url,
  data,
  params,
  headers,
}: RequestParams) {
  return axios({
    method,
    url: `${BASE_URL}${url}`,
    data,
    params,
    headers,
  });
}

export const makePrivateRequest = ({
  method = "GET",
  url,
  data,
  params,
}: RequestParams) => {
  const sessionData = getSessionData();

  const headers = {
    Authorization: `Bearer ${sessionData.access_token}`,
  };

  return makeRequest({ method, url, data, params, headers });
};

export const makeLogin = (loginData: LoginData) => {
  const token = `${CLIENT_ID}:${CLIENT_SECRET}`;

  const headers = {
    Authorization: `Basic ${window.btoa(token)}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const payload = qs.stringify({ ...loginData, grant_type: "password" });

  return makeRequest({
    url: "/oauth/token",
    data: payload,
    method: "POST",
    headers,
  });
};
