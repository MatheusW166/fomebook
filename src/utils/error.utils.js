export function parseError(axiosError) {
	let details = axiosError.response?.data.error;
	if (Array.isArray(details)) {
		details = Object.values(details.at(0)?.at(0))?.at(0);
	}
	return details ?? axiosError.message;
}
