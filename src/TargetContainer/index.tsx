import "./target-container.css";
import boom from "../Assets/sounds/boom.wav";
import clap from "../Assets/sounds/clap.wav";
import hi_hat from "../Assets/sounds/hi_hat.wav";
import kick from "../Assets/sounds/kick.wav";
import open_hat from "../Assets/sounds/open_hat.wav";
import ride from "../Assets/sounds/ride.wav";
import snare from "../Assets/sounds/snare.wav";
import tink from "../Assets/sounds/tink.wav";
import tom from "../Assets/sounds/tom.wav";
import React from "react";

const key_config = [
  { id: "clap", key: "a", sound: boom },
  { id: "hi_hat", key: "s", sound: clap },
  { id: "kick", key: "d", sound: hi_hat },
  { id: "open_hat", key: "f", sound: kick },
  { id: "boom", key: "g", sound: open_hat },
  { id: "ride", key: "h", sound: ride },
  { id: "snare", key: "j", sound: snare },
  { id: "tom", key: "k", sound: tink },
  { id: "tink", key: "l", sound: tom },
];

type TargetContainerProps = {
  onKeyPress: (pressed_key: string) => void;
};

const TargetContainer = ({ onKeyPress }: TargetContainerProps) => {
  const [active_key, setActiveKey] = React.useState<typeof key_config[0]>();

  React.useEffect(() => {
    const keydownHandler = (ev: KeyboardEvent) => {
      const active_key = key_config.find((k) => k.key === ev.key);
      if (active_key) {
        setActiveKey(active_key);
        onKeyPress(active_key.key);
      }
    };

    document.addEventListener("keydown", keydownHandler);

    return () => document.removeEventListener("keydown", keydownHandler);
  }, [onKeyPress]);

  React.useEffect(() => {
    if (active_key) {
      const audio = new Audio(active_key.sound);
      audio.play();
      audio.onended = () => {
        setActiveKey(undefined);
      };
    }
  }, [active_key]);

  return (
    <div id="controls" className="control container">
      {key_config.map((item) => (
        <div
          key={item.id}
          className={`card control ${
            active_key?.key === item.key ? "playing" : ""
          }`}
        >
          <div className="label container">{item.key.toUpperCase()}</div>
          <div className="key container">{item.id.replace("_", " ")}</div>
        </div>
      ))}
    </div>
  );
};

export default TargetContainer;
