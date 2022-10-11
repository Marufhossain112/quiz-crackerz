import React, { useState } from "react";
// import Quizoption from "../Quizoption/Quizoption";

const Quizdetails = ({ quiz }) => {
  //   const [count, setCount] = useState(1);
  //   console.log(quiz);
  const { correctAnswer, id, question, options } = quiz;
  // console.log(quiz);
  // console.log(options);
  // console.log("Answer:", correctAnswer);
  const getValueFromQuiz = (e) => {
    const element = e.target;
    const quizText = element.innerText;
    if (quizText === correctAnswer) {
      console.log("Right");
      return true;
    } else {
      console.log("Wrong");
      return false;
    }
    // console.log(quizText);
  };
  return (
    <div className="bg-violet-50">
      <h3 className="text-xl m-5 font-bold pt-5">{question}</h3>
      <div className="pb-5">
        {options.map((option) => (
          <div className="flex justify-center">
            <p
              onClick={getValueFromQuiz}
              className="border border-zinc-600 rounded-lg p-5 w-1/2 my-2 "
            >
              {option}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quizdetails;
