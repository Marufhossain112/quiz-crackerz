import React, { useState } from "react";
import Quizoption from "../Quizoption/Quizoption";

const Quizdetails = ({ quiz }) => {
  //   const [count, setCount] = useState(1);
  //   console.log(quiz);
  const { correctAnswer, id, question, options } = quiz;
  console.log(quiz);

  return (
    <div>
      <h3 className="text-xl m-5">{question}</h3>
      <div>
        {options.map((option) => (
          <Quizoption option={option}></Quizoption>
        ))}
      </div>
    </div>
  );
};

export default Quizdetails;
