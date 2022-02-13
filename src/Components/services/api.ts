import axios, { AxiosRequestConfig } from 'axios';
import { IHttpRequest, IUser } from '../interface';

async function api<T>({
  url,
  headers,
  method = 'GET',
  body = {},
}: IHttpRequest): Promise<T> {
  const options: AxiosRequestConfig<any> = {
    url,
    method,
    headers,
  };

  try {
    if (method === 'POST') {
      options.data = body;
    }
    return (await axios.request(options)).data;
  } catch (error) {
    // @ts-ignore
    throw new Error(error.response.data);
  }
}

const baseUrl = 'http://localhost:3333/';

const loginUrl = baseUrl + 'login';
const headers = {
  'content-type': 'application/json',
};

const getUserUrl = baseUrl + 'user';

export const loginRequest = async (body: any) =>
  (
    await api<{ token: string }>({
      url: loginUrl,
      method: 'POST',
      body,
      headers,
    })
  ).token;

export const getUserDetails = async (token: string) =>
  await api<IUser>({
    url: getUserUrl,
    method: 'GET',
    headers: {
      ...headers,
      authorization: token,
    },
  });
