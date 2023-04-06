import React from "react";
import Counter from "../components/Counter";

function Cart() {
  return (
    <>
      <h1 className="text-left">Cart (2)</h1>
      <table className="w-full mb-3 border-collapse ">
        <thead>
          <tr>
            <th
              colspan="2"
              scope="col"
              className="uppercase text-left pb-5 border-b-2 border-b-gray-300"
            >
              product
            </th>
            <th
              scope="col"
              className="uppercase text-right pb-5 border-b-2 border-b-gray-300"
            >
              quantity
            </th>
            <th
              scope="col"
              className="uppercase text-right pb-5 border-b-2 border-b-gray-300"
            >
              price
            </th>
            <th
              scope="col"
              className="uppercase text-right pb-5 border-b-2 border-b-gray-300"
            >
              total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              colspan="2"
              className="uppercase text-left pb-5 border-b-2 border-b-gray-300"
            >
              <div className="flex">
                <a>
                  <img
                    src="./red.jpeg"
                    alt=""
                    className="w-full max-w-full aspect-square object-cover overflow-hidden"
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
            <td className="uppercase text-right pb-5 border-b-2 border-b-gray-300">
              <Counter justifyEnd="true" className="flex justify-end" />
            </td>
            <td className="uppercase text-right pb-5 border-b-2 border-b-gray-300">
              200 €
            </td>
            <td className="uppercase text-right pb-5 border-b-2 border-b-gray-300">
              400 €
            </td>
          </tr>
          <tr>
            <td
              colspan="2"
              className="uppercase text-left pb-5 border-b-2 border-b-gray-300"
            >
              1
            </td>
            <td className="uppercase text-right pb-5 border-b-2 border-b-gray-300">
              <Counter justifyEnd="true" className="flex justify-end" />
            </td>
            <td className="uppercase text-right pb-5 border-b-2 border-b-gray-300">
              200 €
            </td>
            <td className="uppercase text-right pb-5 border-b-2 border-b-gray-300">
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
        <button className="bg-black text-white py-2 px-6 border-[1px] border-black hover:bg-white hover:text-black float-right">
          CHECKOUT
        </button>
      </div>
    </>
  );
}

export default Cart;
