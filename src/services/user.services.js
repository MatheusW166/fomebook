import client from "./api.client.js";

async function signIn({ email, password }) {
  const res = await client.post("/user/signin", { email, password });
  return res.data;
}

async function signUp({ name, photoUrl, bio, email, password }) {
  const res = await client.post("/user/signup", {
    name,
    photo: photoUrl,
    bio,
    email,
    password,
  });
  return res.data;
}

async function getUserById({ userId }) {
  const res = await client.get(`/user/${userId}`);
  return res.data;
}

async function getLoggedUser() {
  const res = await client.get("/user");
  return res.data;
}

export { signIn, signUp, getUserById, getLoggedUser };
