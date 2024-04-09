import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_USER_URL, HttpMethod } from '../const';

export interface UserData {
  username?: string,
  login: string,
  password: string,
}

export interface ResponseWithJWT {
  accessToken: string,
}

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_USER_URL,
  }),
  tagTypes: ['User'],
  endpoints: (build) => ({
    login: build.mutation<ResponseWithJWT, UserData>({
      query: (loginData) => ({
        url: '/user/login',
        method: HttpMethod.Post,
        body: {
          ...loginData,
          username: loginData.login,
        },
      }),
    }),
    register: build.mutation<UserData, UserData>({
      query: (registerData) => ({
        url: '/user/register',
        method: HttpMethod.Post,
        body: {
          email: registerData.login,
          password: registerData.password,
          username: registerData.login,
        },
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = userAPI;
