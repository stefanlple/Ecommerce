import React from "react";

const AllUsers = () => {
  return (
    <>
      <h1>Users</h1>
      <table className="w-full border-collapse border border-black">
        <tr>
          <th className="border-collapse border border-black">Name</th>
          <th className="border-collapse border border-black">Email</th>
          <th className="border-collapse border border-black">Role</th>
          <th className="border-collapse border border-black">Info</th>
        </tr>
        <tr>
          <td className="border-collapse border border-black">Bob</td>
          <td className="border-collapse border border-black">bob@bob.de</td>
          <td className="border-collapse border border-black">Admin</td>
          <td className="border-collapse border border-black">
            <button className="small-standard-button ml-auto mr-auto">
              View Details
            </button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default AllUsers;
