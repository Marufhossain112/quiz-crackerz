import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import icon from "./icon/eye.svg";
import "./Quizedetails.css";

const Quizdetails = ({ quiz }) => {
  const [check, setCheck] = useState(true);
  const { correctAnswer, id, question, options } = quiz;
  const getCorrectAns = () => {
    toast(`Correct answer is : ${correctAnswer}`);
  };
  const getValueFromQuiz = (e) => {
    // console.log(e);
    const element = e.target;
    const quizText = element.innerText;
    if (quizText === correctAnswer) {
      toast("Congratulations! You are right.");
      // setCheck(true);
    } else {
      toast("Sorry, your answer is wrong.");
      // setCheck(false);
    }
    // console.log(check);
  };
  return (
    <div className="bg-violet-50 relative">
      <h3 className="text-xl m-[15px] font-bold pt-5">{question}</h3>
      <img
        className="icon absolute left-[85%] top-[7%]"
        src={icon}
        alt=""
        onClick={getCorrectAns}
      />
      <div className="pb-5">
        {options.map((option) => (
          <div className="flex justify-center">
            <p
              onClick={getValueFromQuiz}
              className="border border-zinc-600 rounded-lg p-5 w-1/2 my-2 hover:bg-cyan-200 hover:text-black duration-200"
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
