import React from "react";
import Counter from "../components/Counter";

function Cart() {
  return (
    <>
      <h1 className="text-left">Cart (2)</h1>
      <table className="mb-3 w-full border-collapse ">
        <thead>
          <tr>
            <th
              colspan="2"
              scope="col"
              className="border-b-2 border-b-gray-300 py-5 text-left uppercase"
            >
              product
            </th>
            <th
              scope="col"
              className="border-b-2 border-b-gray-300 py-5 text-right uppercase"
            >
              quantity
            </th>
            <th
              scope="col"
              className="border-b-2 border-b-gray-300 py-5 text-right uppercase"
            >
              price
            </th>
            <th
              scope="col"
              className="border-b-2 border-b-gray-300 py-5 text-right uppercase"
            >
              total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              colspan="2"
              className="border-b-2 border-b-gray-300 py-5 text-left uppercase"
            >
              <div className="flex">
                <a>
                  <img
                    src="./red.jpeg"
                    alt=""
                    className="aspect-square w-full max-w-full overflow-hidden object-cover"
                  />
                </a>
                <div className="relative flex flex-col">
                  <a href="">Camera</a>
                  <p>XXL</p>
                  <a href="" className="mt-auto">
                    REMOVE
                  </a>
                </div>
              </div>
            </td>
            <td className="border-b-2 border-b-gray-300 py-5 text-right uppercase">
              <Counter justifyEnd="true" className="flex justify-end" />
            </td>
            <td className="border-b-2 border-b-gray-300 py-5 text-right uppercase">
              200 €
            </td>
            <td className="border-b-2 border-b-gray-300 py-5 text-right uppercase">
              400 €
            </td>
          </tr>
          <tr>
            <td
              colspan="2"
              className="border-b-2 border-b-gray-300 py-5 text-left uppercase"
            >
              <div className="flex">
                <a>
                  <img
                    src="./red.jpeg"
                    alt=""
                    className="aspect-square w-full max-w-full overflow-hidden object-cover"
                  />
                </a>
                <div className="relative flex flex-col">
                  <a href="">Camera</a>
                  <p>XXL</p>
                  <a href="" className="mt-auto">
                    REMOVE
                  </a>
                </div>
              </div>
            </td>
            <td className="border-b-2 border-b-gray-300 py-5 text-right uppercase">
              <Counter justifyEnd="true" className="flex justify-end" />
            </td>
            <td className="border-b-2 border-b-gray-300 py-5 text-right uppercase">
              200 €
            </td>
            <td className="border-b-2 border-b-gray-300 py-5 text-right uppercase">
              400 €
            </td>
          </tr>
        </tbody>
      </table>
      <div className="float-right">
        <div>
          <span>SUBTOTAL (VAT INCLUDED): </span>
          <span>600 €</span>
        </div>
        <button className="float-right border-[1px] border-black bg-black py-2 px-6 text-white hover:bg-white hover:text-black">
          CHECKOUT
        </button>
      </div>
    </>
  );
}

export default Cart;
