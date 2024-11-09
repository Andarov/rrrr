import axios from "axios";

export const requestInstance = axios.create({
  baseURL: "https://www.course-api.com",
});
