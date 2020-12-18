import { axiosWithAuth } from "./axiosWithAuth";

export const fetchColors = () => {
  return axiosWithAuth()
    .get("/api/colors")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
