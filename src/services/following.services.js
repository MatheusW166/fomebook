import client from "./api.client.js";

async function getFollowing({ userId }) {
	const res = await client.get(`/following/${userId}`);
	return res.data;
}

async function follow({ followedId }) {
	const res = await client.post(`/following/${followedId}`);
	return res.data;
}

async function checkIsFollowing({ followedId }) {
	const res = await client.get(`/following/${followedId}/check`);
	return res.data;
}

export { getFollowing, follow, checkIsFollowing };
