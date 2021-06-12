import axios from "axios";

const rootUrl = "http://localhost:8001/api/v1/";
const productAPIs = rootUrl + "products";

export const productAPI = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(productAPIs );

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const getAProductAPIBySlugValue = (slug) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(productAPIs+ "/" + slug);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

