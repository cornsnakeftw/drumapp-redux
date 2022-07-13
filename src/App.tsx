import React from "react";
import "./App.css";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";

function App() {
  const [is_recording, setIsRecording] = React.useState<boolean>(false);
  const [is_playing_back, setIsPlayingBack] = React.useState<boolean>(false);
  const [has_game_started, setStarted] = React.useState<boolean>(false);

  return (
    <div className="App">
      <Header
        is_recording={is_recording}
        is_playing_back={is_playing_back}
        has_game_started={has_game_started}
        record={setIsRecording}
        playback={setIsPlayingBack}
        startGame={setStarted}
      />
      <MainContainer
        is_recording={is_recording}
        is_playing_back={is_playing_back}
        has_game_started={has_game_started}
        stopPlayback={() => setIsPlayingBack(false)}
      />
    </div>
  );
}

export default App;
