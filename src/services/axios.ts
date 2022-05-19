import axios from "axios";
import { GetServerSidePropsContext, PreviewData } from "next";
import { parseCookies } from "nookies";
import { ParsedUrlQuery } from "querystring";

export const getApiClient = (ctx?: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
  const api = axios.create({
    baseURL: "http://localhost:4000",
  });
  const { "next-token": token } = parseCookies(ctx);

  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  return api;
};
