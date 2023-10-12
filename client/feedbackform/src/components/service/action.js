// import dotenv from "dotenv";
import axios from "axios";
// dotenv.config();

const requestUrl = process.env.REACT_APP_API_URL || "http://localhost:9000";

export const feedbackSubmitAction = ({ data }) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${requestUrl}/api/feedback/submit`, { data })
      .then((res) => {
        if (res?.status === 201) {
          resolve(res?.data?.data);
        }
      })
      .catch((err) => {
        console.log("err*********", err.response);
        reject(err.response?.data);
      });
  });
};

export const feedbackViewAction = ({ feedbackid }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${requestUrl}/api/feedback/view`, { params: { feedbackid } })
      .then((res) => {
        if (res?.status === 201) {
          resolve(res?.data?.data);
        }
      })
      .catch((err) => {
        console.log("err*********", err.response);
        reject(err.response?.data);
      });
  });
};
