import React from "react";

const LInk = ({ route }) => {
  return (
      <li className="mr-12">
        <a href={route.path}>{route.name}</a>
      </li>
  );
};

export default LInk;
