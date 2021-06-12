import axios from "axios";

const rootUrl = "http://localhost:8001/api/v1/";
const signupApi = rootUrl + "signup";

export const signupAPI = (frmDt) => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.post(signupApi, frmDt);

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};