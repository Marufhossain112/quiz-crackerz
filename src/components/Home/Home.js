import React from "react";
import Homedetails from "../Homedetails/Homedetails"
import {
  useLoaderData
} from "react-router-dom";
const Home = () => {
  const data = useLoaderData().data;
  // console.log(data);
  return (
    <div>
        <div className = "courses-container">
      {data.map(item=><Homedetails key={item.id} item={item} />
    )}
    </div>
    </div>


  );
};

export default Home;