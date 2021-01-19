// axios does not need json conversion
// doesn't need .then chaining
import axios from "axios";

const axiosWithAuth = () => {
  const token = `Bearer ${localStorage.getItem("token")}`;
  console.log("this is the token: ", token);
  return axios.create({ headers: { Authorization: token } });
};

export async function getUsers() {
  try {
    const { data } = await axiosWithAuth().get("/api/users");
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

// get product by id > products/productId route
export async function getProductById(productId) {
  try {
    const { data } = await axios.get(`/api/products/${productId}`);
    return data;
  } catch (error) {
    throw error;
  }
}

// grabs cart for user
export async function getCart() {
  try {
    const { data } = await axiosWithAuth().get(`/api/cart`);
    return data;
  } catch (error) {
    throw error;
  }
}

// adds product to cart
export async function addToCart(userId, productId) {
  const dataToSend = {
    userId,
    productId,
  };
  console.log("data send", dataToSend);
  try {
    if (dataToSend.userId && dataToSend.productId.length > 0) {
      /* console.log(dataToSend.userId, dataToSend.productId.length); */
      const { data } = await axiosWithAuth().patch(`/api/cart`, dataToSend);
      return data;
    }
  } catch (error) {
    throw error;
  }
}

// creates user > register route/endpoint
// user object fields required
export async function createUser(username, email, role, password) {
  const dataToSend = { username, email, role, password };
  try {
    if (
      dataToSend.username.length > 0 &&
      dataToSend.email.length > 0 &&
      dataToSend.role.length > 0 &&
      dataToSend.password.length > 0
    ) {
      const { data } = await axios.post(`/api/register`, dataToSend);
      return data;
    }
  } catch (error) {
    throw error;
  }
}

// user login
export async function loginUser(username, password) {
  const dataToSend = { username, password };
  try {
    if (dataToSend.username.length > 0 && dataToSend.password.length > 0) {
      const { data } = await axios.post(`/api/login`, dataToSend);
      return data;
    }
  } catch (error) {
    throw error;
  }
}

// update user
// user object fields required
export async function updateUser(username, email, password, userId) {
  const dataToSend = { username, email, password, userId };
  try {
    if (
      dataToSend.username.length > 0 &&
      dataToSend.email.length > 0 &&
      dataToSend.password.length > 0
    ) {
      const { data } = await axios.patch(
        `/api/users/${userId}/update`,
        dataToSend
      );
      return data;
    }
  } catch (error) {
    throw error;
  }
}

// create product
// fields product object - no id
export async function createProduct(
  name,
  description,
  photoUrl,
  quantity,
  price,
  department,
  inStock
) {
  const dataToSend = {
    name,
    description,
    photoUrl,
    quantity,
    price,
    department,
    inStock,
  };

  try {
    if (
      dataToSend.name.length > 0 &&
      dataToSend.description.length > 0 &&
      dataToSend.photoUrl.length > 0 &&
      dataToSend.quantity.length > 0 &&
      dataToSend.price.length > 0 &&
      dataToSend.department.length > 0 &&
      dataToSend.inStock.length > 0
    ) {
      const { data } = await axios.post(`/api/products`, dataToSend);
      return data;
    }
  } catch (error) {
    throw error;
  }
}
// update product
// fields product object
export async function updateProduct(
  name,
  description,
  photoUrl,
  quantity,
  price,
  department,
  inStock,
  productId
) {
  const dataToSend = {
    name,
    description,
    photoUrl,
    quantity,
    price,
    department,
    inStock,
    productId,
  };

  try {
    if (
      dataToSend.name.length > 0 &&
      dataToSend.description.length > 0 &&
      dataToSend.photoUrl.length > 0 &&
      dataToSend.quantity.length > 0 &&
      dataToSend.price.length > 0 &&
      dataToSend.department.length > 0 &&
      dataToSend.inStock.length > 0 &&
      dataToSend.productId.length > 0
    ) {
      const { data } = await axios.patch(
        `/api/products/${productId}/update`,
        dataToSend
      );
      return data;
    }
  } catch (error) {
    throw error;
  }
}

export async function deleteUser(userId) {
  const dataToSend = { userId };
  try {
    const { data } = await axiosWithAuth().delete(
      `/api/users/${userId}`,
      dataToSend
    );
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteProduct(productId) {
  const dataToSend = { productId };
  try {
    const { data } = await axiosWithAuth().delete(
      `/api/products/${productId}`,
      dataToSend
    );
    return data;
  } catch (error) {
    throw error;
  }
}
