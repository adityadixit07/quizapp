import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FetchButton from "./FetchButton";

function FinalScreen() {
  const score = useSelector((state) => state.score);
  const dispatch = useDispatch();
  const replay = () => {
    dispatch({
      type: "SET_INDEX",
      index: 0,
    });
    dispatch({
      type: "SET_SCORE",
      score: 0,
    });
  };
  const settings = () => {
    dispatch({
      type: "SET_QUESTIONS",
      questions: [],
    });
    dispatch({
      type: "SET_SCORE",
      score: 0,
    });
  };
  return (
    <div>
      {/* <h3>Final Score: {score}</h3> */}
      <span>Good Luck 👍 Score is {score}</span>
      <button onClick={replay}>Try again</button>
      <FetchButton text="Answer new questions" />
      <button onClick={settings}>Back to Home</button>
    </div>
  );
}
export default FinalScreen;
