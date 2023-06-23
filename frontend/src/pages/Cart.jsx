import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { getProduct } from "../features/products/productService";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { deleteProductFromCart } from "../features/cart/cartService";
import { toast } from "react-toastify";
import { getCart } from "../features/cart/cartSlice";

function Cart() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { cart, isLoading, isError, message } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    const fetchCart = async () => {
      dispatch(getCart(user.token));
    };

    fetchCart();
  }, [dispatch, isError, message, user]);

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

  if (isLoading) {
    return <Spinner />;
  }

  const handleRemoveFromCart = async (productId, size, color) => {
    const data = {
      productId,
      color,
      size,
    };
    await deleteProductFromCart(user.token, data);
    dispatch(getCart(user.token));
  };

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
            <TableHead name="quantity" />
            <TableHead name="price" />
            <TableHead name="total" />
          </tr>
        </thead>
        <tbody>
          {cart.length !== 0 && products.length !== 0 && (
            <CartItem
              cart={cart}
              products={products}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          )}
        </tbody>
      </table>
      <div className="float-right">
        <div>
          <span>SUBTOTAL (VAT INCLUDED): </span>
          <span>
            {products.reduce(
              (total, product, index) =>
                total + product.price * cart[index]?.sizes.quantity,
              0
            )}{" "}
            €
          </span>
        </div>
        <button className="float-right border-[1px] border-black bg-black py-2 px-6 text-white hover:bg-white hover:text-black">
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

function CartItem({ cart, products, handleRemoveFromCart }) {
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
                  <button
                    className="mt-4 text-left text-xs"
                    type="submit"
                    onClick={() => {
                      handleRemoveFromCart(
                        products[index]?._id,
                        cartItem.sizes.size,
                        cartItem.color
                      );
                    }}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            </td>
            <td className="border-b-2 border-b-gray-300 py-5 text-right uppercase">
              <Counter
                justifyEnd="true"
                className="flex justify-end"
                value={cartItem.sizes.quantity}
              />
            </td>
            <td className="border-b-2 border-b-gray-300 py-5 text-right uppercase">
              {products[index]?.price} €
            </td>
            <td className="border-b-2 border-b-gray-300 py-5 text-right uppercase">
              {products[index]?.price * cartItem.sizes.quantity} €
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default Cart;
