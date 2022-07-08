import React from "react";
import { playSound } from "../../Helpers/sounds";
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

type RecordItem = {
  key: string;
  time: number;
};

type MainContainerProps = {
  is_recording: boolean;
  is_playing_back: boolean;
  has_game_started: boolean;
  stopPlayback: () => void;
};

const MainContainer = ({
  is_recording,
  is_playing_back,
  has_game_started,
  stopPlayback,
}: MainContainerProps) => {
  const [current_index, setCurrentIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [recordArray, setRecordArray] = React.useState<RecordItem[]>([]);
  const [startTime, setStartTime] = React.useState<number>(0);
  const [active_key, setActiveKey] = React.useState<string>();

  React.useEffect(() => {
    setCurrentIndex(0);
    setScore(0);
  }, [has_game_started]);

  React.useEffect(() => {
    if (is_recording) {
      setRecordArray([]);
      setStartTime(Date.now());
    }
  }, [is_recording]);

  React.useEffect(() => {
    if (is_playing_back) {
      const promises: Promise<void>[] = [];

      for (let i = 0; i < recordArray.length; i++) {
        const item = recordArray[i];
        promises.push(playRecordedItem(item));
      }

      Promise.all(promises).then(stopPlayback);
    }
  }, [is_playing_back, recordArray]);

  const playRecordedItem = (record_item: RecordItem) => {
    return new Promise<void>((resolve) => {
      setTimeout(async () => {
        setActiveKey(record_item.key);
        await playSound(record_item.key);
        setActiveKey(undefined);

        resolve();
      }, record_item.time);
    });
  };

  const onKeyPress = (pressed_key: string) => {
    setActiveKey(pressed_key);

    if (!has_game_started && !is_recording) return;

    if (is_recording) {
      setRecordArray([
        ...recordArray,
        { key: pressed_key, time: Date.now() - startTime },
      ]);
    } else {
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
    }
  };

  return (
    <div className="main-container">
      <ScoreContainer score={score} />
      <SequenceContainer
        current_index={current_index}
        target_keys={target_keys}
      />
      <TargetContainer
        active_key={active_key}
        setActiveKey={setActiveKey}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default MainContainer;
