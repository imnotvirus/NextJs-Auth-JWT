import axios from "axios";
import { GetServerSidePropsContext, PreviewData } from "next";
import { parseCookies } from "nookies";
import { ParsedUrlQuery } from "querystring";

export const getApiClient = (ctx?: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  });
  const { "next-token": token } = parseCookies(ctx);

  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  return api;
};
