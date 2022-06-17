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
    if (current_index + 1 <= target_keys.length) {
      if (pressed_key === target_keys[current_index]) {
        setScore(score + 1);
        setCurrentIndex(current_index + 1);
      } else {
        setScore(score - 1);
      }
    }

    if (current_index + 1 >= target_keys.length) {
      alert("Game is complete!");
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
