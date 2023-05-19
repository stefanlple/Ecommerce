import React from "react";

const AllOrders = () => {
  return (
    <>
      <h1>Orders</h1>
      <section className="flex flex-col gap-1">
        <h5 className="font-extrabold">24. Febuary 2023</h5>
        <div className="flex flex-col items-center border border-black p-1">
          <h5>ORDER: A234324234</h5>
          <h6>USER: Bob</h6>
          <div>24 Febuary 2023 | € 234.40 | 1 item</div>
          <button className="small-standard-button">View Details</button>
        </div>
        <div className="flex flex-col items-center border border-black p-1">
          <h5>ORDER: A234324234</h5>
          <h6>USER: Bob</h6>
          <div>24 Febuary 2023 | € 234.40 | 1 item</div>
          <button className="small-standard-button">View Details</button>
        </div>
      </section>
    </>
  );
};

export default AllOrders;
