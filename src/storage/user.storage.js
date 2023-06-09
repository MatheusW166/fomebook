const TOKEN_KEY = "token";

function saveToken(token) {
	if (!token) return;
	localStorage.setItem(TOKEN_KEY, token);
}

function getToken() {
	return localStorage.getItem(TOKEN_KEY);
}

function removeToken() {
	localStorage.removeItem(TOKEN_KEY);
}

export { saveToken, getToken, removeToken };
