import React from "react";
import { useLoaderData } from "react-router-dom";
import Quizdetails from "../Quizdetails/Quizdetails";
const Quiz = () => {
  const quiz = useLoaderData().data;
  const quizQuestions = useLoaderData().data.questions;
  // console.log(quiz);
  // console.log(quizQuestions);
  return (
    <div>
      <h2 className="text-3xl font-bold text-cyan-500 my-5">
        Quiz of {quiz.name}
      </h2>
      <div>
        {quizQuestions.map((quiz) => (
          <Quizdetails key={quiz.id} quiz={quiz}></Quizdetails>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
