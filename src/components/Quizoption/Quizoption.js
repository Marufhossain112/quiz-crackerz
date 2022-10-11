import React from "react";

const Quizoption = ({ option }) => {
  return (
    <div className="flex justify-center">
      <h2 className="border rounded-lg p-5 w-1/2 my-2">{option}</h2>
    </div>
  );
};

export default Quizoption;
