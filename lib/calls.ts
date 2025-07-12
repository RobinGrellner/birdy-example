import api from "./users_api";

export async function getUsers(limit: Number, skip: Number) {
  let selectFields = "id,firstName,lastName,bank,address,image,age,gender";
  try {
    const res = await api.get(
      `/users?limit=${limit}&skip=${skip}&select=${selectFields}`
    );
    return res.data.users || res.data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
}

export async function getUserById(id: string) {
  try {
    const res = await api.get(`/users/${id}`);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch user details");
  }
}
