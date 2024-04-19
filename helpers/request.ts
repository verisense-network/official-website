import { API_ERROR_CODES, BizError, PageError } from "./apiErrorCodes";
import { HttpError } from "./apiErrorCodes";

export const getHost = () => {
  return "http://test-api.redaprotocol.com";
};

export const fetcher = (t: any, api: string, args: any) => {
  return fetch(api, args)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new HttpError(res.status, "network_error");
      }
    })
    .then((value) => {
      if (value.code === 200) {
        return value.data;
      } else {
        throw new BizError(value.code, value.data, value.msg);
      }
    })
    .catch((e) => {
      console.error(api, e, args);
      if (e instanceof TypeError) {
        console.log("type error");
        throw new HttpError(502, t("network_error"));
      }
      if (e instanceof BizError) {
        console.log("biz error");
        throw e;
      }
      throw new PageError(t("page_error"));
    });
};
