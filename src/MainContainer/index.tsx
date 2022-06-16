import React from "react";
import ScoreContainer from "../ScoreContainer";
import SequenceContainer from "../SequenceContainer";
import TargetContainer from "../TargetContainer";
import "./main-container.css";

const generateTestBeat = () => {
  const test_keys = ["a", "s", "d", "f", "g"];
  const generated_array = [];
  for (let index = 0; index < 10; index++) {
    generated_array.push(...test_keys);
  }
  return generated_array;
};

const target_keys: string[] = generateTestBeat();

const MainContainer = () => {
  const [current_index, setCurrentIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);

  const onKeyPress = (pressed_key: string) => {
    if (
      pressed_key === target_keys[current_index] &&
      current_index + 1 < target_keys.length
    ) {
      setCurrentIndex(current_index + 1);
      setScore(score + 1);
    } else if (current_index + 1 >= target_keys.length) {
      alert("Game is complete!");
    } else {
      setScore(score - 1);
    }
  };

  return (
    <div className="main-container">
      <ScoreContainer score={score} />
      <SequenceContainer
        current_index={current_index}
        target_keys={target_keys}
      />
      <TargetContainer onKeyPress={onKeyPress} />
    </div>
  );
};

export default MainContainer;
