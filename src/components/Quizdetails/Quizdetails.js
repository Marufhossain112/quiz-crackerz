import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Quizoption from "../Quizoption/Quizoption";

const Quizdetails = ({ quiz }) => {
  const { correctAnswer, id, question, options } = quiz;

  const getValueFromQuiz = (e) => {
    const element = e.target;
    const quizText = element.innerText;
    if (quizText === correctAnswer) {
      toast("Congratulations! You are right.");
    } else {
      toast("Sorry, your answer is wrong.");
    }
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
            <ToastContainer></ToastContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quizdetails;
