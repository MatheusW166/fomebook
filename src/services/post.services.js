import client from "./api.client.js";

async function getUserPosts({ userId }) {
  const res = await client.get(`/post/${userId}`);
  return res.data;
}

async function createPost({ photo, description }) {
  const res = await client.post("/post", { photo, description });
  return res.data;
}

export { getUserPosts, createPost };
