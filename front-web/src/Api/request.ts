import axios, { Method } from "axios";
import qs from 'qs';

export const CLIENT_ID = 'movieflix';
export const CLIENT_SECRET = 'movieflix123';

type RequestParams = {
  method?: Method;
  url: string;
  data?: object | string;
  params?: object;
  headers?: object;
};

type LoginData={
  username: string;
  password: string;
}

const BASE_URL= 'http://localhost:8080'

export function makeRequest({method = "GET", url, data, params, headers,}: RequestParams){
  return axios({
    method,
    url: `${BASE_URL}${url}`,
    data,
    params,
    headers
  })
}

export function makeLogin(loginData: LoginData){
  const token = `${CLIENT_ID}:${CLIENT_SECRET}`;

  const headers= {
    Authorization: `Basic ${window.btoa(token)}`,
    "Content-Type": "application/x-www-form-urlencoded",
  }

  const payload = qs.stringify({...loginData, grant_type:'password'})

  return makeRequest({
    url: '/oauth/token',
    data: payload,
    method: "POST",
    headers,
  })
}