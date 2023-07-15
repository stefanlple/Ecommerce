import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { getAllProducts } from "../features/products/productService";

function Admin() {
  const [curr, setCurr] = useState("Dashboard");

  return (
    <>
      <nav className="flex justify-between ">
        <Link
          className={`${
            curr === "Dashboard" ? "bg-black text-white" : "bg-gray-100"
          } w-full border-collapse border border-gray-900 hover:text-gray-500`}
          onClick={() => {
            setCurr("Dashboard");
          }}
        >
          Dashboard
        </Link>
        <Link
          className={`${
            curr === "Orders" ? "bg-black text-white" : "bg-gray-100"
          } w-full border-collapse border border-gray-900 hover:text-gray-500`}
          onClick={() => {
            setCurr("Orders");
          }}
        >
          Orders
        </Link>
        <Link
          className={`${
            curr === "Products" ? "bg-black text-white" : "bg-gray-100"
          } w-full border-collapse border border-gray-900 hover:text-gray-500`}
          onClick={() => {
            setCurr("Products");
          }}
        >
          Products
        </Link>
        <Link
          className={`${
            curr === "Users" ? "bg-black text-white" : "bg-gray-100"
          } w-full border-collapse border border-gray-900 hover:text-gray-500`}
          onClick={() => {
            setCurr("Users");
          }}
        >
          Users
        </Link>
      </nav>
      <div>
        {(() => {
          switch (curr) {
            case "Orders":
              return <AllOrders />;

            case "Products":
              return <AllProducts />;

            case "Users":
              return <AllUsers />;

            default:
              return <h1>Dashboard</h1>;
          }
        })()}
      </div>
    </>
  );
}

function formatDate(dateString) {
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
}

function AllOrders() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        const response = await axios.get("/api/cart/get-all-carts");
        setCarts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCarts();
  }, []);

  return (
    <>
      <h1>Orders</h1>
      <section className="flex flex-col gap-1">
        {carts.map((order, index) => (
          <div
            key={index}
            className="flex flex-col items-center border border-black p-1"
          >
            {console.log(order)}
            <h5>ORDER: {order._id}</h5>
            <h6>USER: {order.user}</h6>
            <div>
              {formatDate(order.updatedAt)}{" "}
              {/* | €{" "}
              {order.products.reduce(
                (total, product) =>
                  total + product.price * product.sizes.quantity,
                0
              )}{" "} */}
              | {order.products.length} item
            </div>
            <Link
              to={`/cart/${order._id}`}
              className="small-standard-button my-0.5 px-1"
            >
              View Details
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      // Remove the deleted product from the state
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Products</h1>

      <Link
        className="ml-auto rounded-xl border border-black bg-black px-2 text-lg text-white hover:bg-white hover:text-black "
        to="/productupload"
      >
        Upload Product
      </Link>

      <table className="mt-2 w-full border-collapse border border-black">
        <thead>
          <tr>
            <th className="border-collapse border border-black">Name</th>
            <th className="border-collapse border border-black">Price</th>
            <th className="border-collapse border border-black">Quantity</th>
            <th className="border-collapse border border-black">Status</th>
            <th className="border-collapse border border-black">Edit</th>
            <th className="border-collapse border border-black">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="border-collapse border border-black">
                {product.name}
              </td>
              <td className="border-collapse border border-black">
                {product.price.toFixed(2)}€
              </td>
              <td className="border-collapse border border-black">
                {product.options.map((option) => (
                  <ul key={option._id}>
                    {option.sizes.map((size) => (
                      <li key={size._id}>
                        {option.color.colorname}: {size.size} - {size.quantity}
                      </li>
                    ))}
                  </ul>
                ))}
              </td>
              <td className="border-collapse border border-black">Active</td>
              <td className="border-collapse border border-black">
                <div className="flex justify-center">
                  <Link to={`/editproduct/${product._id}`}>
                    <FaEdit />
                  </Link>
                </div>
              </td>
              <td className="border-collapse border border-black">
                <button
                  type="button"
                  onClick={() => deleteProduct(product._id)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users/get-all-users");
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <h1>Users</h1>
      <table className="w-full border-collapse border border-black">
        <thead>
          <tr>
            <th className="border-collapse border border-black">Name</th>
            <th className="border-collapse border border-black">Email</th>
            <th className="border-collapse border border-black">Role</th>
            <th className="border-collapse border border-black">Info</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border-collapse border border-black">
                {user.name}
              </td>
              <td className="border-collapse border border-black">
                {user.email}
              </td>
              <td className="border-collapse border border-black">
                {user.role === "ROLE_ADMIN" ? "Admin" : "User"}
              </td>
              <td className="border-collapse border border-black">
                <button className="small-standard-button ml-auto mr-auto">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Admin;
