import React from "react";
import {
  Link
} from "react-router-dom";

const LInk = ({
  route
}) => {
  return (
    <li className="mr-12">
        <Link to={route.path}>{route.name}</Link>
      </li>
  );
};

export default LInk;