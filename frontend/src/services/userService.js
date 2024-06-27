import { axios } from "../utils/axios";

const baseUrl = process.env.REACT_APP_API_HOST;

export const getUsers = async () => {
	let jsonData;
	try {
		let res;
		res = await axios.get(`${baseUrl}/api/users`);
		jsonData = res;
	} catch (error) {
		console.error('There was an error fetching the users!', error)
	}
	return jsonData;
};
