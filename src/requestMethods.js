import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjJkZDZmMzQwNzIxM2JjZmFhZTI2MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDY0NjUwNSwiZXhwIjoxNjUwNzMyOTA1fQ.Qoc0bA6G2EozRU6og_tmJWOavt1ffrugH74BQNVUD0k";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
