import "../App.css";
import React, { useState, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";

export default function Quiz() {
  const { score, setScore, gameState, setGameState } = useContext(QuizContext);

  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    alert(score);
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  return (
    <>
      <div className="Quiz">
        <h1> {Questions[currQuestion].prompt} </h1>
        <div className="options">
          <button onClick={() => setOptionChosen("A")}>
            {Questions[currQuestion].optionA}
          </button>
          <button onClick={() => setOptionChosen("B")}>
            {Questions[currQuestion].optionB}
          </button>
          <button onClick={() => setOptionChosen("C")}>
            {Questions[currQuestion].optionC}
          </button>
          <button onClick={() => setOptionChosen("D")}>
            {Questions[currQuestion].optionD}
          </button>
        </div>
        {currQuestion == Questions.length - 1 ? (
          <button onClick={finishQuiz}>Finish Quiz</button>
        ) : (
          <button onClick={nextQuestion}>Next Question</button>
        )}
      </div>
    </>
  );
}
