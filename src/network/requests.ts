import axios from "axios";
import { ICounter } from "./types";

// Counter
export const fetchCounter = () => {
  return axios.request({
    method: 'GET',
    url: process.env.REACT_APP_API + '/counter'
  });
};
export const incrementCounter = (data: ICounter) => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve(axios.request({
        method: 'POST',
        url: process.env.REACT_APP_API + '/counter',
        data
      }));
    }, 1000);
  });
};
export const decrementCounter = (data: ICounter) => {
  return axios.request({
    method: 'POST',
    url: process.env.REACT_APP_API + '/counter',
    data
  });
};