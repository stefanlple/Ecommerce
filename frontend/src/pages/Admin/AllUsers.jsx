import React from "react";

const AllUsers = () => {
  return (
    <>
      <h1>Users</h1>
      <table className="w-full border border-black border-collapse">
        <tr>
          <th className="border border-black border-collapse">Name</th>
          <th className="border border-black border-collapse">Email</th>
          <th className="border border-black border-collapse">Role</th>
          <th className="border border-black border-collapse">Info</th>
        </tr>
        <tr>
          <td className="border border-black border-collapse">Bob</td>
          <td className="border border-black border-collapse">bob@bob.de</td>
          <td className="border border-black border-collapse">Admin</td>
          <td className="border border-black border-collapse">
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
