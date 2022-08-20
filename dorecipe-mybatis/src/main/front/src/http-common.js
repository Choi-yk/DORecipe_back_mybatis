import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:9000/notice",
  headers: {
    "Content-type": "application/json",
  },
});
