import React from "react";
const Homedetails = ({ item }) => {
  const { id, name, logo, total } = item;
  return (
    <div className="border rounded-md p-5">
      <h5 className="font-bold text-3xl">{name}</h5>
      <img style={{ height: "200px", width: "200px" }} className="mx-auto" src={logo} />
      <p className="font-bold mt-1">Total : {total}</p>
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-2">
        Explore
      </button>
    </div>
  );
};

export default Homedetails;
