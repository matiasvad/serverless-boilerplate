import fetch from 'node-fetch';

export function main(context, sendResponse) {

	const getReqres = async () => {
		const url = 'https://reqres.in/api/users?page=2'
		const response = await fetch(url)
		return response.data;
	}

	(async () => {
		try {
			const data = await getReqres();
			sendResponse({
				body: {
					response: data
				}
			});
		} catch (e) {
			sendResponse({
				status: 500,
				response: {
					message: 'There was a problem fetching info',
					error: e.message
				},
			});
		}
	})();
}