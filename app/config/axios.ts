import baseAxios, { AxiosRequestConfig } from 'axios';

const instance = baseAxios.create({
  baseURL: 'https://api.unsplash.com/photos/',
  params: {
    client_id: '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043',
  },
});

export function api() {
  return instance;
}

export function setupApi(config: AxiosRequestConfig) {
  instance.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${config.headers?.Authorization}`;
}

export function getApiConfig() {
  return { ...instance.defaults };
}

export const axios = instance;
