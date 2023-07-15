import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { getProduct } from "../features/products/productService";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

function CartForAdmin() {
  const { cartId } = useParams();

  const [user, setUser] = useState("");

  const [cart, setCart] = useState([]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.post("/api/cart/get-cart-by-id", {
          id: cartId,
        });
        const products = response.data.products;
        setCart(products);
        setUser(response.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCart();
  }, [cartId]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productPromises = cart.map(async (item) => {
        const response = await getProduct(item.productId);
        return response;
      });

      Promise.all(productPromises).then((fetchedProducts) => {
        setProducts(fetchedProducts);
      });
    };

    if (cart.length !== 0) {
      fetchProducts();
    }
  }, [cart]);

  const TableHead = ({ name, colSpanProp }) => {
    return (
      <th
        colSpan={colSpanProp ? colSpanProp : undefined}
        scope="col"
        className="border-b-2 border-b-gray-300 py-5 text-right uppercase"
      >
        {name}
      </th>
    );
  };

  return (
    <div className="mx-5">
      <h1 className="text-left">User {user}</h1>
      <h1 className="text-left">Cart ({cart.length})</h1>
      <table className="mb-3 w-full border-collapse">
        <thead>
          <tr>
            <th
              colSpan="2"
              scope="col"
              className="border-b-2 border-b-gray-300 py-5 text-left uppercase"
            >
              product
            </th>
            <TableHead name="price" />
            <TableHead name="total" />
          </tr>
        </thead>
        <tbody>
          {cart.length !== 0 && products.length !== 0 && (
            <CartItem cart={cart} products={products} />
          )}
        </tbody>
      </table>
      <div className="float-right">
        <div>
          <span>Total: </span>
          <span>
            {products
              .reduce(
                (total, product, index) =>
                  total + product.price * cart[index]?.sizes.quantity,
                0
              )
              .toFixed(2)}{" "}
            €
          </span>
        </div>
      </div>
    </div>
  );
}

function CartItem({ cart, products }) {
  return (
    <>
      {cart.map((cartItem, index) => {
        return (
          <tr key={index}>
            <td
              colSpan="2"
              className="border-b-2 border-b-gray-300 py-5 text-left uppercase"
            >
              <div className="flex">
                <Link to="#">
                  <img
                    src={"../images/" + products[index]?.imageUrls[0]}
                    alt=""
                    className="aspect-square h-24 w-24 overflow-hidden object-cover"
                  />
                </Link>
                <div className="relative ml-5 flex flex-col">
                  <Link to="#">{products[index]?.name}</Link>
                  <p className="text-sm">
                    {cartItem.color} - {cartItem.sizes.size}
                  </p>
                </div>
              </div>
            </td>
            <td className="border-b-2 border-b-gray-300 py-5 text-right uppercase">
              {products[index]?.price.toFixed(2)} €
            </td>
            <td className="border-b-2 border-b-gray-300 py-5 text-right uppercase">
              {(products[index]?.price * cartItem.sizes.quantity).toFixed(2)} €
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default CartForAdmin;
