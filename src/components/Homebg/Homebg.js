import React from "react";
import "./Homebg.css";
const Homebg = () => {
  return (
    <div>
      <div
        className="mb-10 relative home-bg"
        style={{
          backgroundImage:
            "url(" +
            "https://cdn.pixabay.com/photo/2022/02/02/10/56/questions-6988157__340.png" +
            ")",
          backgroundPosition: "6px -208px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="intro absolute top-[35%] left-[40%]">
          <h2 className="text-5xl font-bold text-purple-700">
            Know the Unknown
          </h2>
          <p className="text-2xl font-semibold mt-3 text-yellow-300">
            Best site for Developing Skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homebg;
