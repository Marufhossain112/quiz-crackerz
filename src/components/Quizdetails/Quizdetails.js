import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import icon from "./icon/eye.svg";

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
    <div className="bg-violet-50 relative">
      <h3 className="text-xl m-[15px] font-bold pt-5">{question}</h3>
      <img className="absolute left-[85%] top-[7%]" src={icon} alt="" />
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
