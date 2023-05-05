import React from "react";

const OrderDetails = () => {
  return (
    <>
      <h1>OrderDetails</h1>
      <div>
        <div>
          <h2>Camera</h2>
          <h4>Quantity</h4>
          <p>123</p>
          <h4>Price:</h4>
        </div>
        <div>
          <h4>Shipping Address</h4>
          <p>Bob Straße 18</p>
          <p>Berlin</p>
          <p>Berlin</p>
          <p>23423</p>
        </div>
      </div>
      <h5>Shipping: 3.99 €</h5>
      <h3>Total: 42 €</h3>
    </>
  );
};

export default OrderDetails;
