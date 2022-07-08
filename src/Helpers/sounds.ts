import boom from "../Assets/sounds/boom.wav";
import clap from "../Assets/sounds/clap.wav";
import hi_hat from "../Assets/sounds/hi_hat.wav";
import kick from "../Assets/sounds/kick.wav";
import open_hat from "../Assets/sounds/open_hat.wav";
import ride from "../Assets/sounds/ride.wav";
import snare from "../Assets/sounds/snare.wav";
import tink from "../Assets/sounds/tink.wav";
import tom from "../Assets/sounds/tom.wav";

export type KeyConfig = {
  id: string;
  key: string;
  sound: any;
};

export const keyConfigs: KeyConfig[] = [
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

export const playSound = (key: string) => {
  return new Promise<void>((resolve) => {
    const active_key = keyConfigs.find((k) => k.key === key);

    if (active_key) {
      const audio = new Audio(active_key.sound);
      audio.play();
      audio.onended = () => {
        resolve();
      };
    }
  });
};
