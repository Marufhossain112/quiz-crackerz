import React from "react";
const Homedetails = ({
  item
}) => {
  const {
    id,
    name,
    logo,total
  } = item;
  return (
    <div>
    <h5 className="font-bold text-3xl">{name}</h5>
    <img src={logo} />
    <p>
Total : {total}
    </p>
  </div>
);
};

export default Homedetails;