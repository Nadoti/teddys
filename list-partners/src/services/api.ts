import axios from "axios";


export const apiPartner = axios.create({
  baseURL: "https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners"
})