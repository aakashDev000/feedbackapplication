// import dotenv from "dotenv";
import axios from "axios";
// dotenv.config();

const requestUrl = process.env.API_URL || "http://localhost:9000/api/";

export const feedbackSubmitAction = ({ data }) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${requestUrl}/feedback/submit`, { data })
      .then((res) => {
        if (res?.status === 201) {
          resolve(res);
        }
      })
      .catch((err) => {
        console.log("err*********", err.response);
        reject(err.response.data);
      });
  });
};
