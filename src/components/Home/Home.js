import React from "react";
import "./Home.css";
import Homedetails from "../Homedetails/Homedetails";
import { useLoaderData } from "react-router-dom";
import Homebg from "../Homebg/Homebg";
const Home = () => {
  const data = useLoaderData().data;
  // console.log(data);
  return (
    <div>
      <Homebg></Homebg>
      <div className="courses-container">
        {data.map((item) => (
          <Homedetails key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
