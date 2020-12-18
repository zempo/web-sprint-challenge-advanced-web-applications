import { axiosWithAuth } from "./auth/axiosWithAuth";

export const fetchColors = () => {
  return axiosWithAuth()
    .get("/colors")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
