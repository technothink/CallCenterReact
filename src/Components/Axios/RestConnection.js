import axios from "axios";

const restConnection = axios.create({
  baseURL: "http://localhost:8080/cc"
});

export default restConnection;
