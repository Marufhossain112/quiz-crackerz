import React from "react";

const Quizoption = ({ option }) => {
  // console.log(option);
  return (
    <div className="flex justify-center">
      <button className="border border-zinc-600 rounded-lg p-5 w-1/2 my-2 ">
        {option}
      </button>
    </div>
  );
};

// export default Quizoption;
