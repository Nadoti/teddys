import axios from "axios";




export const api = axios.create({
  baseURL: "https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies"
})