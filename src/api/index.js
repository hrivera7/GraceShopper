// axios does not need json conversion
// doesn't need .then chaining
import axios from "axios";

export async function getUsers() {
  try {
    const { data } = await axios.get("/api/users");
    return data;
  } catch (error) {
    throw error;
  }
}

// get users by id
/* export async function getUserById(userId) {
    try {
      const { data } = await axios.get(`/api/users/${userId}`);
      return data;
    } catch (error) {
      throw error;
    }
  } */

// get all products > products route
export async function getProducts() {
  try {
    const { data } = await axios.get("/api/products");
    return data;
  } catch (error) {
    throw error;
  }
}
